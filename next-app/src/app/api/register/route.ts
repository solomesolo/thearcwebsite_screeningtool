import { NextRequest, NextResponse } from "next/server";
import { Client } from "@notionhq/client";

const notion = new Client({ auth: process.env.NOTION_TOKEN });
const databaseId = process.env.NOTION_DATABASE_ID;

export async function POST(req: NextRequest) {
  const data = await req.json();
  try {
    if (!databaseId) throw new Error("Notion database ID not set");
    await notion.pages.create({
      parent: { database_id: databaseId },
      properties: {
        "First Name": { title: [{ text: { content: data.firstName || "" } }] },
        "Last Name": { rich_text: [{ text: { content: data.lastName || "" } }] },
        "Email": { email: data.email || "" },
        "Message": { rich_text: [{ text: { content: data.message || "" } }] }
      }
    });
    return NextResponse.json({ message: "Registration successful!" });
  } catch (err) {
    console.error("Notion error:", err);
    return NextResponse.json({ message: "Registration failed." }, { status: 500 });
  }
} 