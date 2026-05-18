// Google API utilities using native fetch + Web Crypto API (Cloudflare Workers compatible)

export function validateGoogleEnvVars() {
  const serviceAccountEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
  const privateKey = process.env.GOOGLE_PRIVATE_KEY;
  const spreadsheetId = process.env.GOOGLE_SPREADSHEET_ID;

  if (!serviceAccountEmail) throw new Error("GOOGLE_SERVICE_ACCOUNT_EMAIL is required");
  if (!privateKey) throw new Error("GOOGLE_PRIVATE_KEY is required");
  if (!spreadsheetId) throw new Error("GOOGLE_SPREADSHEET_ID is required");

  return { serviceAccountEmail, privateKey, spreadsheetId };
}

function toBase64Url(obj: object): string {
  return btoa(JSON.stringify(obj))
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=/g, "");
}

async function createJWT(email: string, privateKeyPEM: string, scopes: string[]): Promise<string> {
  const now = Math.floor(Date.now() / 1000);

  const header = toBase64Url({ alg: "RS256", typ: "JWT" });
  const payload = toBase64Url({
    iss: email,
    scope: scopes.join(" "),
    aud: "https://oauth2.googleapis.com/token",
    exp: now + 3600,
    iat: now,
  });

  const signingInput = `${header}.${payload}`;

  const pem = privateKeyPEM
    .replace(/-----BEGIN PRIVATE KEY-----/g, "")
    .replace(/-----END PRIVATE KEY-----/g, "")
    .replace(/\s/g, "");
  const keyBuffer = Uint8Array.from(atob(pem), (c) => c.charCodeAt(0));

  const cryptoKey = await crypto.subtle.importKey(
    "pkcs8",
    keyBuffer.buffer,
    { name: "RSASSA-PKCS1-v1_5", hash: "SHA-256" },
    false,
    ["sign"]
  );

  const rawSig = await crypto.subtle.sign(
    "RSASSA-PKCS1-v1_5",
    cryptoKey,
    new TextEncoder().encode(signingInput)
  );

  const bytes = new Uint8Array(rawSig);
  let binary = "";
  for (let i = 0; i < bytes.length; i++) binary += String.fromCharCode(bytes[i]);
  const sig = btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "");

  return `${signingInput}.${sig}`;
}

async function getAccessToken(scopes: string[]): Promise<string> {
  const { serviceAccountEmail, privateKey } = validateGoogleEnvVars();
  const cleanKey = privateKey.replace(/\\n/g, "\n");

  const jwt = await createJWT(serviceAccountEmail, cleanKey, scopes);

  const res = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: `grant_type=urn%3Aietf%3Aparams%3Aoauth%3Agrant-type%3Ajwt-bearer&assertion=${jwt}`,
  });

  if (!res.ok) throw new Error(`Failed to get access token: ${await res.text()}`);
  const { access_token } = (await res.json()) as { access_token: string };
  return access_token;
}

const SHEETS_SCOPES = ["https://www.googleapis.com/auth/spreadsheets.readonly"];
const DRIVE_SCOPES = ["https://www.googleapis.com/auth/drive.readonly"];

interface SheetResource {
  properties?: { sheetId?: number; title?: string };
}

export function getGoogleSheetsClient() {
  return {
    spreadsheets: {
      get: async ({ spreadsheetId }: { spreadsheetId: string }) => {
        const token = await getAccessToken(SHEETS_SCOPES);
        const res = await fetch(
          `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}`,
          { headers: { Authorization: `Bearer ${token}` } }
        );
        if (!res.ok) throw new Error(`Sheets API error: ${await res.text()}`);
        return { data: (await res.json()) as { sheets: SheetResource[] } };
      },
      values: {
        get: async ({ spreadsheetId, range }: { spreadsheetId: string; range: string }) => {
          const token = await getAccessToken(SHEETS_SCOPES);
          const res = await fetch(
            `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${encodeURIComponent(range)}`,
            { headers: { Authorization: `Bearer ${token}` } }
          );
          if (!res.ok) throw new Error(`Sheets values API error: ${await res.text()}`);
          return { data: (await res.json()) as { values: unknown[][] } };
        },
      },
    },
  };
}

export function getGoogleDriveClient() {
  return {
    files: {
      get: async ({ fileId, fields }: { fileId: string; fields: string }) => {
        const token = await getAccessToken(DRIVE_SCOPES);
        const res = await fetch(
          `https://www.googleapis.com/drive/v3/files/${fileId}?fields=${encodeURIComponent(fields)}`,
          { headers: { Authorization: `Bearer ${token}` } }
        );
        if (!res.ok) throw new Error(`Drive API error: ${await res.text()}`);
        return {
          data: (await res.json()) as { thumbnailLink?: string; webContentLink?: string },
        };
      },
    },
  };
}

export function getGoogleClients() {
  return {
    sheets: getGoogleSheetsClient(),
    drive: getGoogleDriveClient(),
  };
}

export function getSpreadsheetId(): string {
  return validateGoogleEnvVars().spreadsheetId;
}

export function extractGoogleDriveFileId(url: string): string | null {
  if (!url) return null;

  const openMatch = url.match(/drive\.google\.com\/open\?id=([^&]+)/);
  if (openMatch) return openMatch[1];

  const fileMatch = url.match(/drive\.google\.com\/file\/d\/([^/]+)/);
  if (fileMatch) return fileMatch[1];

  if (/^[a-zA-Z0-9_-]+$/.test(url.trim())) return url.trim();

  return null;
}

export async function convertGoogleDriveUrl(
  url: string,
  drive: ReturnType<typeof getGoogleDriveClient>
): Promise<string> {
  if (!url) return url;

  if (
    url.includes("lh3.googleusercontent.com") ||
    (url.includes("http") && !url.includes("drive.google.com"))
  ) {
    return url;
  }

  const fileId = extractGoogleDriveFileId(url);
  if (!fileId) return url;

  try {
    const file = await drive.files.get({ fileId, fields: "thumbnailLink, webContentLink" });
    if (file.data.thumbnailLink) return file.data.thumbnailLink.replace(/=s\d+/, "=s2048");
    if (file.data.webContentLink) return file.data.webContentLink;
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "";
    const isApiDisabledError =
      message.includes("has not been used") || message.includes("is disabled");
    if (!isApiDisabledError) {
      console.warn(`Failed to get Google Drive file info for ${fileId}:`, err);
    }
  }

  return `https://lh3.googleusercontent.com/d/${fileId}`;
}
