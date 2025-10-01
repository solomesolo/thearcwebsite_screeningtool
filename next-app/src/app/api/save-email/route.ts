import { NextRequest, NextResponse } from 'next/server';
import { Client } from '@notionhq/client';

// Initialize Notion client
const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

export async function POST(request: NextRequest) {
  try {
    const { email, timestamp, consent, source } = await request.json();
    
    // Save to Notion database
    const response = await notion.pages.create({
      parent: {
        database_id: process.env.NOTION_DATABASE_ID!,
      },
      properties: {
        Email: {
          title: [
            {
              text: {
                content: email,
              },
            },
          ],
        },
        Timestamp: {
          date: {
            start: timestamp,
          },
        },
        Consent: {
          checkbox: consent,
        },
        Source: {
          select: {
            name: source,
          },
        },
        Status: {
          select: {
            name: 'active',
          },
        },
      },
    });
    
    console.log('Email saved to Notion:', response.id);
    
    return NextResponse.json({
      success: true,
      message: 'Email saved successfully',
      notionId: response.id
    });
  } catch (error) {
    console.error('Error saving email to Notion:', error);
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}
