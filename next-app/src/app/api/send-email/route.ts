import { NextRequest, NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';

// Set API key
sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

export async function POST(request: NextRequest) {
  try {
    const { to, subject, htmlContent, textContent } = await request.json();
    
    const msg = {
      to: to,
      from: process.env.SENDGRID_FROM_EMAIL || 'thearc@thearcme.com',
      subject: subject,
      text: textContent,
      html: htmlContent,
    };
    
    await sgMail.send(msg);
    console.log('Email sent successfully to:', to);
    
    return NextResponse.json({
      success: true,
      message: 'Email sent successfully'
    });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}
