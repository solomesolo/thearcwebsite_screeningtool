import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  return NextResponse.json({
    success: true,
    environment: {
      OPENAI_API_KEY: !!process.env.OPENAI_API_KEY,
      NOTION_TOKEN: !!process.env.NOTION_TOKEN,
      NOTION_DATABASE_ID: !!process.env.NOTION_DATABASE_ID,
      SENDGRID_API_KEY: !!process.env.SENDGRID_API_KEY,
      SENDGRID_FROM_EMAIL: !!process.env.SENDGRID_FROM_EMAIL,
    },
    values: {
      OPENAI_API_KEY_LENGTH: process.env.OPENAI_API_KEY?.length || 0,
      NOTION_TOKEN_LENGTH: process.env.NOTION_TOKEN?.length || 0,
      NOTION_DATABASE_ID: process.env.NOTION_DATABASE_ID,
      SENDGRID_API_KEY_LENGTH: process.env.SENDGRID_API_KEY?.length || 0,
      SENDGRID_FROM_EMAIL: process.env.SENDGRID_FROM_EMAIL,
    }
  });
}
