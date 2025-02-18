import { NextResponse } from "next/server";
import { Client } from "@notionhq/client";

const DB_ID = process.env.NOTION_DB_ID;

const notion = new Client({ auth: process.env.NOTION_PEOPLE_API_KEY });

export async function GET(
  req: Request,
  { params }: { params: { generation: string } }
) {
  const { generation } = await params;
  if (!DB_ID) {
    console.error("NOTION_DB_ID is missing");
    return NextResponse.json(
      { error: "Missing NOTION_DATABASE_ID in environment variables" },
      { status: 500 }
    );
  }
  try {
    console.log("calling Notion API with DB_ID", DB_ID);
    const res = await notion.databases.query({
      database_id: DB_ID,
      filter: {
        property: "generation",
        multi_select: {
          contains: generation,
        },
      },
    });

    return NextResponse.json(res.results);
  } catch (err) {
    console.error("err in people route", err);
  }
}
