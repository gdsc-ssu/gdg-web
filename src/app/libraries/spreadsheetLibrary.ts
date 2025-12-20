import {
  getGoogleClients,
  getGoogleSheetsClient,
  getSpreadsheetId,
} from "@/app/utils/spreadsheet";

export class SpreadsheetLibrary {
  /**
   * 스프레드시트의 모든 시트 정보 가져오기
   */
  async getSheets() {
    const sheets = getGoogleSheetsClient();
    const spreadsheetId = getSpreadsheetId();
    const response = await sheets.spreadsheets.get({ spreadsheetId });

    if (!response.data.sheets) {
      throw new Error("No sheets found");
    }

    return response.data.sheets;
  }

  /**
   * 특정 시트의 데이터 가져오기 (헤더 포함)
   */
  async getSheetValues(sheetName: string) {
    const sheets = getGoogleSheetsClient();
    const spreadsheetId = getSpreadsheetId();
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range: `${sheetName}!A:Z`,
    });

    return response.data.values || [];
  }

  /**
   * Google Drive 클라이언트 가져오기 (이미지 변환용)
   */
  getDriveClient() {
    const { drive } = getGoogleClients();
    return drive;
  }
}

export const spreadsheetLibrary = new SpreadsheetLibrary();
