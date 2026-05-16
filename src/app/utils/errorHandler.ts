// 에러 응답 생성
export function createErrorResponse(
  message: string,
  details?: string,
  status: number = 500
) {
  let hint = "";

  if (details?.includes("permission") || details?.includes("permission denied")) {
    hint = "Please check: 1) Google Sheets API is enabled, 2) Service account has access, 3) Credentials are correct";
  } else if (details?.includes("JWT") || details?.includes("credentials")) {
    hint = "Please check: 1) Environment variables are set correctly, 2) Private key format is correct, 3) Service account has proper permissions";
  }

  return {
    error: message,
    details: details || "Unknown error",
    hint: hint || "Please check your Google API configuration",
    status,
  };
}
