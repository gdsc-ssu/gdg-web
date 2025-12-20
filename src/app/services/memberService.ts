import { Member } from "@/types/member";
import { SpreadsheetLibrary, spreadsheetLibrary } from "@/app/libraries/spreadsheetLibrary";
import { convertGoogleDriveUrl } from "@/app/utils/spreadsheet";

export class MemberService {
  constructor(private library: SpreadsheetLibrary) {}

  /**
   * Generation 목록 조회
   */
  async getGenerations(): Promise<{ id: string; title: string }[]> {
    const sheets = await this.library.getSheets();
    const sheetsAfterFirst = sheets.slice(1);

    return sheetsAfterFirst.map((sheet, index) => ({
      id: sheet.properties?.sheetId?.toString() || (index + 1).toString(),
      title: (index + 1).toString(),
    }));
  }

  /**
   * 특정 Generation의 멤버 목록 조회
   */
  async getMembersByGeneration(generation: string): Promise<Member[]> {
    // Generation 번호 검증
    const generationNumber = parseInt(generation, 10);
    if (isNaN(generationNumber) || generationNumber < 1) {
      throw new Error(`Invalid generation number: ${generation}`);
    }

    // 시트 정보 가져오기
    const sheets = await this.library.getSheets();
    const sheetsAfterFirst = sheets.slice(1);

    if (generationNumber > sheetsAfterFirst.length) {
      throw new Error(
        `Invalid generation number: ${generation}. Must be between 1 and ${sheetsAfterFirst.length}`
      );
    }

    const targetSheet = sheetsAfterFirst[generationNumber - 1];
    if (!targetSheet?.properties?.title) {
      throw new Error(`Sheet not found for generation: ${generation}`);
    }

    // 시트 데이터 가져오기
    const values = await this.library.getSheetValues(targetSheet.properties.title);
    if (!values || values.length === 0) {
      return [];
    }

    // 헤더 추출
    const headers = values[0].map((h: any) => String(h).toLowerCase().trim());

    // 데이터 변환
    const drive = this.library.getDriveClient();
    const memberPromises = values.slice(1).map(async (row: any[], index: number) => {
      const paddedRow = this.padRow(row, headers.length);
      return this.transformRowToMember(paddedRow, headers, drive, generation, index);
    });

    return Promise.all(memberPromises);
  }

  /**
   * 행을 헤더 길이에 맞게 패딩
   */
  private padRow(row: any[], targetLength: number): any[] {
    const paddedRow = [...row];
    while (paddedRow.length < targetLength) {
      paddedRow.push("");
    }
    return paddedRow;
  }

  /**
   * Google Sheets 행을 Member 도메인 모델로 변환
   */
  private async transformRowToMember(
    row: any[],
    headers: string[],
    drive: ReturnType<typeof this.library.getDriveClient>,
    generation: string,
    rowIndex: number
  ): Promise<Member> {
    const getValue = (headerName: string) => {
      const index = headers.indexOf(headerName.toLowerCase());
      return index >= 0 ? (row[index] || "") : "";
    };

    // Part 필드 처리 (슬래시로 구분된 값들을 정리)
    const partValue = getValue("part");
    const part = partValue
      .split("/")
      .map((p: string) => p.trim())
      .filter((p: string) => p)
      .join(" / ");

    // 이미지 URL 변환
    const pictureUrl = getValue("pictureUrl");
    const convertedPictureUrl = pictureUrl
      ? await convertGoogleDriveUrl(pictureUrl, drive)
      : undefined;

    const name = getValue("name") || "Unknown";
    const memberId  = `${generation}-${rowIndex}-${name.toLowerCase().replace(/\s+/g, "-")}`;

    return {
      id: memberId,
      pictureUrl: convertedPictureUrl,
      name,
      websites: {
        github: getValue("github") || "",
        linkedin: getValue("linkedin") || "",
        instagram: getValue("instagram") || "",
      },
      part,
      comment: getValue("comment") || "",
      role: getValue("role") || "",
    };
  }
}

export const memberService = new MemberService(spreadsheetLibrary);
