# Right Screening Finder - ChatGPT Integration

This backend API connects the Right Screening Finder questionnaire to ChatGPT for personalized health assessment and screening recommendations.

## Setup Instructions

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Environment Variables
1. Copy the example environment file:
```bash
cp .env.example .env
```

2. Edit `.env` and add your OpenAI API key:
```
OPENAI_API_KEY=your_actual_openai_api_key_here
```

### 3. Get OpenAI API Key
1. Go to [OpenAI Platform](https://platform.openai.com/)
2. Sign up or log in to your account
3. Navigate to API Keys section
4. Create a new API key
5. Copy the key and paste it in your `.env` file

### 4. Start the Server
```bash
# Development mode (with auto-restart)
npm run dev

# Production mode
npm start
```

The server will start on `http://localhost:3001`

## API Endpoints

### Health Check
- **GET** `/health`
- Returns server status

### Health Analysis
- **POST** `/api/analyze-health`
- Analyzes questionnaire responses using ChatGPT
- **Request Body:**
```json
{
  "responses": [
    {
      "question": "age",
      "answer": "26-35"
    },
    {
      "question": "diabetes_family",
      "answer": "yes"
    }
  ]
}
```

## Features

- **ChatGPT Integration**: Uses GPT-4 for intelligent health assessment
- **Fallback System**: Provides default recommendations if ChatGPT is unavailable
- **CORS Support**: Configured for frontend integration
- **Error Handling**: Comprehensive error handling and logging
- **Structured Responses**: Returns organized health recommendations

## Response Format

The API returns structured health recommendations including:

- **Urgent Tests**: Critical tests that need immediate attention
- **Recommended Categories**: Organized by health domains
- **Next Steps**: Prioritized action plan with timeframes
- **Summary**: Overall assessment and motivation

## Security Notes

- Keep your OpenAI API key secure and never commit it to version control
- The API includes rate limiting and error handling
- All responses include disclaimers about consulting healthcare providers

## Troubleshooting

1. **API Key Issues**: Ensure your OpenAI API key is valid and has sufficient credits
2. **CORS Errors**: Make sure the frontend is running on the correct port
3. **Server Won't Start**: Check if port 3001 is available
4. **ChatGPT Errors**: The system will fall back to default recommendations

## Development

To modify the ChatGPT prompts or add new features:

1. Edit the `createHealthAssessmentPrompt()` function in `server.js`
2. Update the system message for different AI behavior
3. Modify the fallback response structure as needed

## Support

For issues or questions, check the console logs for detailed error messages.
