import { NextRequest, NextResponse } from "next/server";
import { Client } from "@notionhq/client";
import { QueryDatabaseResponse, PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";

const DB_ID = process.env.NOTION_DB_ID;
const notion = new Client({ auth: process.env.NOTION_PEOPLE_API_KEY });

interface CacheData {
    data: PageObjectResponse[];
    timestamp: number;
}

const cache = new Map<string, CacheData>();
const CACHE_DURATION = 1000 * 60 * 30; // 30 minutes

export async function GET(
  request: NextRequest,
  context: { params: Promise<{ generation: string }> }
) {
  const { generation } = await context.params;
  
  if (!DB_ID) {
    return NextResponse.json(
      { error: "Missing NOTION_DATABASE_ID in environment variables" },
      { status: 500 }
    );
  }

  const cachedData = cache.get(generation);
  if (cachedData && Date.now() - cachedData.timestamp < CACHE_DURATION) {
    return NextResponse.json(cachedData.data, {
      headers: {
        'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
      },
    });
  }

  try {
    const res: QueryDatabaseResponse = await notion.databases.query({
      database_id: DB_ID,
      filter: {
        property: "generation",
        multi_select: {
          contains: generation,
        },
      },
    });

    cache.set(generation, {
      data: res.results as PageObjectResponse[],
      timestamp: Date.now(),
    });

    return NextResponse.json(res.results, {
      headers: {
        'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
      },
    });
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
}
