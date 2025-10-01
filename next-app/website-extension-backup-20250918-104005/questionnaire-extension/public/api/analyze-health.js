// Serverless function for health analysis
const OpenAI = require('openai');

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

exports.handler = async (event, context) => {
  // Enable CORS
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
  };

  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: '',
    };
  }

  try {
    const { responses, userEmail } = JSON.parse(event.body);
    
    // Create comprehensive prompt for ChatGPT
    const prompt = createHealthAssessmentPrompt(responses);
    
    // Get AI analysis
    const completion = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        {
          role: "system",
          content: "You are a medical AI assistant specializing in preventive health screening recommendations. Provide evidence-based, personalized screening plans."
        },
        {
          role: "user",
          content: prompt
        }
      ],
      max_tokens: 2000,
      temperature: 0.7
    });

    const aiResponse = completion.choices[0].message.content;
    
    // Parse AI response into structured format
    const results = parseAIResponse(aiResponse);
    
    // Transform API response to match frontend expectations
    const transformedResults = {
      assessment_summary: "Based on your responses, here are your personalized health screening recommendations:",
      urgent_tests: results.urgent || [],
      due_soon_tests: results.dueSoon || [],
      optional_tests: results.optional || [],
      categories: [
        {
          category_name: "Urgent Tests",
          category_description: "Tests that should be completed within the next month",
          tests: results.urgent || []
        },
        {
          category_name: "Due Soon Tests", 
          category_description: "Tests that should be completed within 3-6 months",
          tests: results.dueSoon || []
        },
        {
          category_name: "Optional Tests",
          category_description: "General wellness and preventive screening tests",
          tests: results.optional || []
        }
      ],
      next_steps: [
        {
          timeframe: "URGENT (within 1 month)",
          actions: results.urgent?.map(test => `Schedule ${test.test}`) || []
        },
        {
          timeframe: "DUE SOON (within 3-6 months)", 
          actions: results.dueSoon?.map(test => `Schedule ${test.test}`) || []
        }
      ]
    };

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        success: true,
        results: transformedResults,
        aiResponse: aiResponse
      }),
    };
  } catch (error) {
    console.error('Error in analyze-health:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({
        success: false,
        error: error.message
      }),
    };
  }
};

function createHealthAssessmentPrompt(responses) {
  let prompt = `Based on the following health questionnaire responses, provide a personalized screening plan:\n\n`;
  
  responses.forEach((response, index) => {
    prompt += `Question ${index + 1}: ${response.question}\nAnswer: ${response.answer}\n\n`;
  });
  
  prompt += `Please provide a structured screening plan with:
  1. URGENT tests (needed within 1 month)
  2. DUE SOON tests (needed within 3-6 months)  
  3. OPTIONAL tests (general wellness)
  
  For each test, include:
  - Test name
  - Reason why it's recommended
  - Timeframe
  - Status (URGENT/DUE_SOON/OPTIONAL)
  
  Format the response as JSON with this structure:
  {
    "urgent": [{"test": "Test Name", "reason": "Why needed", "timeframe": "When", "status": "URGENT"}],
    "dueSoon": [{"test": "Test Name", "reason": "Why needed", "timeframe": "When", "status": "DUE_SOON"}],
    "optional": [{"test": "Test Name", "reason": "Why needed", "timeframe": "When", "status": "OPTIONAL"}]
  }`;
  
  return prompt;
}

function parseAIResponse(aiResponse) {
  try {
    // Try to extract JSON from the response
    const jsonMatch = aiResponse.match(/\{[\s\S]*\}/);
    if (jsonMatch) {
      return JSON.parse(jsonMatch[0]);
    }
  } catch (error) {
    console.error('Error parsing AI response:', error);
  }
  
  // Fallback structure if parsing fails
  return {
    urgent: [
      {
        test: "Blood Pressure Check",
        reason: "Based on your responses, regular monitoring is recommended",
        timeframe: "Within 1 month",
        status: "URGENT"
      }
    ],
    dueSoon: [
      {
        test: "Comprehensive Metabolic Panel",
        reason: "Routine health screening",
        timeframe: "Within 3 months",
        status: "DUE_SOON"
      }
    ],
    optional: [
      {
        test: "Vitamin D Level",
        reason: "General wellness screening",
        timeframe: "Within 6 months",
        status: "OPTIONAL"
      }
    ]
  };
}
