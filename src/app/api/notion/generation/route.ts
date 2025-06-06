import { NextResponse } from "next/server";
import { Client } from "@notionhq/client";
import { SearchResponse } from "@notionhq/client/build/src/api-endpoints";

const DB_ID = process.env.NOTION_DB_ID;
const notion = new Client({ auth: process.env.NOTION_PEOPLE_API_KEY });

interface CacheData {
    data: SearchResponse;
    timestamp: number;
}

let cache: CacheData | null = null;
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
        const response = await notion.databases.query({
            database_id: DB_ID,
        });

        cache = {
            data: response,
            timestamp: Date.now(),
        };

        return NextResponse.json(response, {
            headers: {
                'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
            },
        });
    } catch {
        return NextResponse.json(
            { error: "Failed to fetch data from Notion" },
            { status: 500 }
        );
    }
}
