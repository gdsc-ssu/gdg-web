import { google } from "googleapis";
import { JWT } from "google-auth-library";

// 환경 변수 검증
export function validateGoogleEnvVars(): {
  serviceAccountEmail: string;
  privateKey: string;
  spreadsheetId: string;
} {
  const serviceAccountEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
  const privateKey = process.env.GOOGLE_PRIVATE_KEY;
  const spreadsheetId = process.env.GOOGLE_SPREADSHEET_ID;

  if (!serviceAccountEmail) {
    throw new Error("GOOGLE_SERVICE_ACCOUNT_EMAIL is required");
  }

  if (!privateKey) {
    throw new Error("GOOGLE_PRIVATE_KEY is required");
  }

  if (!spreadsheetId) {
    throw new Error("GOOGLE_SPREADSHEET_ID is required");
  }

  return { serviceAccountEmail, privateKey, spreadsheetId };
}

// Google 인증 객체 생성
export function getGoogleAuth(scopes: string[]): JWT {
  const { serviceAccountEmail, privateKey } = validateGoogleEnvVars();

  return new JWT({
    email: serviceAccountEmail,
    key: privateKey.replace(/\\n/g, '\n'),
    scopes,
  });
}

// Google Sheets 클라이언트 생성
export function getGoogleSheetsClient() {
  const auth = getGoogleAuth(['https://www.googleapis.com/auth/spreadsheets.readonly']);
  return google.sheets({ version: 'v4', auth });
}

// Google Drive 클라이언트 생성
export function getGoogleDriveClient() {
  const auth = getGoogleAuth(['https://www.googleapis.com/auth/drive.readonly']);
  return google.drive({ version: 'v3', auth });
}

// Google Sheets와 Drive 클라이언트 모두 생성 (이미지 변환용)
export function getGoogleClients() {
  const auth = getGoogleAuth([
    'https://www.googleapis.com/auth/spreadsheets.readonly',
    'https://www.googleapis.com/auth/drive.readonly',
  ]);

  return {
    sheets: google.sheets({ version: 'v4', auth }),
    drive: google.drive({ version: 'v3', auth }),
  };
}

// 스프레드시트 ID 가져오기
export function getSpreadsheetId(): string {
  const { spreadsheetId } = validateGoogleEnvVars();
  return spreadsheetId;
}

// Google Drive URL에서 파일 ID 추출
export function extractGoogleDriveFileId(url: string): string | null {
  if (!url) return null;

  const openMatch = url.match(/drive\.google\.com\/open\?id=([^&]+)/);
  if (openMatch) return openMatch[1];

  const fileMatch = url.match(/drive\.google\.com\/file\/d\/([^/]+)/);
  if (fileMatch) return fileMatch[1];

  if (/^[a-zA-Z0-9_-]+$/.test(url.trim())) {
    return url.trim();
  }

  return null;
}

// Google Drive URL을 Next.js Image에서 사용 가능한 형식으로 변환
export async function convertGoogleDriveUrl(
  url: string,
  drive: ReturnType<typeof getGoogleDriveClient>
): Promise<string> {
  if (!url) return url;

  if (url.includes('lh3.googleusercontent.com') || (url.includes('http') && !url.includes('drive.google.com'))) {
    return url;
  }

  const fileId = extractGoogleDriveFileId(url);
  if (!fileId) return url;

  try {
    const file = await drive.files.get({
      fileId,
      fields: 'thumbnailLink, webContentLink',
    });

    if (file.data.thumbnailLink) {
      return file.data.thumbnailLink.replace(/=s\d+/, '=s2048');
    }

    if (file.data.webContentLink) {
      return file.data.webContentLink;
    }
  } catch (err: any) {
    const isApiDisabledError = err?.message?.includes('has not been used') || 
                                err?.message?.includes('is disabled');
    
    if (!isApiDisabledError) {
      console.warn(`Failed to get Google Drive file info for ${fileId}:`, err);
    }
  }

  return `https://lh3.googleusercontent.com/d/${fileId}`;
}
