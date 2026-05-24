const NOTION_VERSION = "2025-09-03";

export type NotionProperty = {
  type?: string;
  [key: string]: unknown;
};

export interface NotionPage {
  id: string;
  cover?: {
    type?: string;
    external?: {
      url?: string;
    };
    file?: {
      url?: string;
    };
  } | null;
  properties?: Record<string, NotionProperty>;
}

interface NotionQueryResponse {
  results?: NotionPage[];
  has_more?: boolean;
  next_cursor?: string | null;
}

export type NotionDataSourceProperty = {
  name?: string;
  type?: string;
  [key: string]: unknown;
};

interface NotionDataSourceResponse {
  properties?: Record<string, NotionDataSourceProperty>;
  message?: string;
}

interface QueryPagesOptions {
  filter?: Record<string, unknown>;
  pageSize?: number;
}

export class NotionLibrary {
  private getHeaders() {
    const notionApiKey = process.env.NOTION_API_KEY;

    if (!notionApiKey) {
      throw new Error("NOTION_API_KEY is required");
    }

    return {
      Authorization: `Bearer ${notionApiKey}`,
      "Content-Type": "application/json",
      "Notion-Version": NOTION_VERSION,
    };
  }

  private getDataSourceId(): string {
    const notionDbId = process.env.NOTION_DB_ID;
    if (!notionDbId) {
      throw new Error("NOTION_DB_ID is required");
    }

    return notionDbId;
  }

  async getDataSourceProperties(): Promise<
    Record<string, NotionDataSourceProperty>
  > {
    const dataSourceId = this.getDataSourceId();
    const response = await fetch(
      `https://api.notion.com/v1/data_sources/${dataSourceId}`,
      { headers: this.getHeaders() }
    );
    const data = (await response.json()) as NotionDataSourceResponse;

    if (!response.ok) {
      throw new Error(data.message || "Failed to retrieve Notion data source");
    }

    return data.properties || {};
  }

  async queryPages(options: QueryPagesOptions = {}): Promise<NotionPage[]> {
    const dataSourceId = this.getDataSourceId();
    const pages: NotionPage[] = [];
    let startCursor: string | null = null;

    do {
      const response = await fetch(
        `https://api.notion.com/v1/data_sources/${dataSourceId}/query`,
        {
          method: "POST",
          headers: this.getHeaders(),
          body: JSON.stringify({
            ...(options.filter ? { filter: options.filter } : {}),
            ...(options.pageSize ? { page_size: options.pageSize } : {}),
            ...(startCursor ? { start_cursor: startCursor } : {}),
          }),
        }
      );
      const data = (await response.json()) as NotionQueryResponse & {
        message?: string;
      };

      if (!response.ok) {
        throw new Error(data.message || "Failed to query Notion data source");
      }

      pages.push(...(data.results || []));
      startCursor = data.has_more ? data.next_cursor || null : null;
    } while (startCursor);

    return pages;
  }
}

export const notionLibrary = new NotionLibrary();
