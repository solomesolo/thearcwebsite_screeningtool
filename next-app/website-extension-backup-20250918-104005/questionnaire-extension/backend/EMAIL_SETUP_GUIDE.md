# Email Service Setup Guide

## Overview
This guide will help you set up the complete email flow for the Right Screening Finder application, including Notion database integration and transactional email service.

## Step 1: Notion Database Setup

### 1.1 Create a Notion Database
1. Go to [Notion](https://notion.so) and create a new page
2. Add a database with the following properties:
   - **Email** (Title) - Single line text
   - **Timestamp** (Date) - Date
   - **Consent** (Checkbox) - Checkbox
   - **Source** (Select) - Select with options: "questionnaire", "landing", "other"
   - **Status** (Select) - Select with options: "active", "unsubscribed", "bounced"
   - **UnsubscribeReason** (Text) - Rich text
   - **UnsubscribeDate** (Date) - Date

### 1.2 Get Notion API Credentials
1. Go to [Notion Developers](https://developers.notion.com/)
2. Create a new integration
3. Copy the "Internal Integration Token" (starts with `secret_`)
4. Share your database with the integration:
   - Open your database
   - Click "Share" → "Add people" → Add your integration

### 1.3 Get Database ID
1. Open your database in Notion
2. Copy the URL - it looks like: `https://notion.so/your-workspace/DATABASE_ID?v=...`
3. The DATABASE_ID is the 32-character string before the `?v=`

## Step 2: SendGrid Email Service Setup

### 2.1 Create SendGrid Account
1. Go to [SendGrid](https://sendgrid.com/)
2. Sign up for a free account (100 emails/day free)
3. Verify your account via email

### 2.2 Create API Key
1. Go to Settings → API Keys
2. Click "Create API Key"
3. Choose "Restricted Access"
4. Give it a name like "Right Screening Finder"
5. Grant permissions:
   - Mail Send: Full Access
   - Mail Settings: Read Access
6. Copy the API key (starts with `SG.`)

### 2.3 Verify Sender Identity
1. Go to Settings → Sender Authentication
2. Choose "Single Sender Verification"
3. Add your email address (e.g., noreply@yourdomain.com)
4. Verify via email

## Step 3: Environment Configuration

### 3.1 Update .env file
```bash
# OpenAI API Key (already configured)
OPENAI_API_KEY=your_openai_api_key_here

# Notion API Configuration
NOTION_API_KEY=secret_your_notion_token_here
NOTION_DATABASE_ID=your_32_character_database_id_here

# SendGrid Email Configuration
SENDGRID_API_KEY=SG.your_sendgrid_api_key_here
SENDGRID_FROM_EMAIL=noreply@yourdomain.com

# Server Configuration
PORT=3001
```

## Step 4: Test the Integration

### 4.1 Start the Backend Server
```bash
cd backend
npm start
```

### 4.2 Test Email Collection
1. Go to the questionnaire
2. Complete the questionnaire
3. Enter a valid email address
4. Check the console for any errors
5. Check your email inbox for the results

### 4.3 Verify Notion Database
1. Open your Notion database
2. Check if the email entry was created
3. Verify all fields are populated correctly

## Step 5: Email Template Customization

### 5.1 Customize Email Content
Edit the `generateResultsSnapshot()` function in `email-collection.html` to customize:
- Email subject line
- Email header text
- Results formatting
- Footer content

### 5.2 Add Branding
- Add your logo to the email template
- Customize colors and fonts
- Add social media links

## Step 6: Unsubscribe System

### 6.1 Create Unsubscribe Page
Create an `unsubscribe.html` page that:
1. Collects the user's email
2. Calls the `/api/unsubscribe` endpoint
3. Confirms the unsubscribe action

### 6.2 Add Unsubscribe Links
The system automatically adds unsubscribe links to emails. Users can:
1. Click the unsubscribe link
2. Enter their email
3. Be removed from future emails
4. Have their status updated in Notion

## Troubleshooting

### Common Issues

1. **Notion API Errors**
   - Check if the integration has access to the database
   - Verify the database ID is correct
   - Ensure the API key is valid

2. **SendGrid Errors**
   - Verify the API key is correct
   - Check if the sender email is verified
   - Ensure you haven't exceeded the free tier limits

3. **Email Not Received**
   - Check spam folder
   - Verify the email address is correct
   - Check SendGrid activity logs

### Testing Commands

```bash
# Test Notion connection
curl -X POST http://localhost:3001/api/save-email \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","timestamp":"2024-01-01T00:00:00Z","consent":true}'

# Test email sending
curl -X POST http://localhost:3001/api/send-email \
  -H "Content-Type: application/json" \
  -d '{"to":"test@example.com","subject":"Test","htmlContent":"<h1>Test Email</h1>"}'
```

## Security Considerations

1. **API Keys**: Never commit API keys to version control
2. **Rate Limiting**: Consider adding rate limiting to prevent abuse
3. **Input Validation**: The system validates email addresses and sanitizes input
4. **GDPR Compliance**: The system tracks consent and provides unsubscribe options

## Cost Considerations

- **SendGrid Free Tier**: 100 emails/day, 40,000 emails/month
- **Notion API**: Free for personal use, paid for team use
- **OpenAI API**: Pay per token usage

## Next Steps

1. Set up monitoring and logging
2. Add email analytics and tracking
3. Implement A/B testing for email templates
4. Add support for multiple languages
5. Set up automated backups of the Notion database
