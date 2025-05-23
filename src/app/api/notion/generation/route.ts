import { NextResponse } from "next/server";
import { Client } from "@notionhq/client";
import { SearchResponse } from "@notionhq/client/build/src/api-endpoints";

const DB_ID = process.env.NOTION_DB_ID;
const notion = new Client({ auth: process.env.NOTION_PEOPLE_API_KEY });

export async function GET() {
  if (!DB_ID) {
    return NextResponse.json(
      { error: "Missing NOTION_DATABASE_ID in environment variables" },
      { status: 500 }
    );
  }
  try {
    const res: SearchResponse = await notion.search({
      query: "people",
      filter: {
        value: "database",
        property: "object",
      },
    });

    return NextResponse.json(res.results);
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
}
