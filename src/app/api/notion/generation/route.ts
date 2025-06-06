import { NextResponse } from "next/server";
import { Client } from "@notionhq/client";
import { SearchResponse } from "@notionhq/client/build/src/api-endpoints";

const DB_ID = process.env.NOTION_DB_ID;
const notion = new Client({ auth: process.env.NOTION_PEOPLE_API_KEY });

let cache: { data: any; timestamp: number } | null = null;
const CACHE_DURATION = 1000 * 60 * 30; // 30 minutes

export async function GET() {
  if (!DB_ID) {
    return NextResponse.json(
      { error: "Missing NOTION_DATABASE_ID in environment variables" },
      { status: 500 }
    );
  }

  if (cache && Date.now() - cache.timestamp < CACHE_DURATION) {
    return NextResponse.json(cache.data, {
      headers: {
        'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
      },
    });
  }

  try {
    const res: SearchResponse = await notion.search({
      query: "people",
      filter: {
        value: "database",
        property: "object",
      },
    });

    cache = {
      data: res.results,
      timestamp: Date.now(),
    };

    return NextResponse.json(res.results, {
      headers: {
        'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
      },
    });
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
}
