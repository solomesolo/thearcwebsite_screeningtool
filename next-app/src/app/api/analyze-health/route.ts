import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request: NextRequest) {
  try {
    const { responses } = await request.json();
    
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
      temperature: 0.7,
    });
    
    const aiResponse = completion.choices[0].message.content;
    
    // Parse AI response into structured format
    const results = parseAIResponse(aiResponse || '');
    
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
        },
        {
          category_name: "Cardiovascular Health",
          category_description: "Essential tests for heart disease prevention and cardiovascular risk assessment.",
          tests: [
            { test: "Lipid Panel", reason: "Measures cholesterol levels and cardiovascular risk factors for heart disease prevention.", status: "MISSING" },
            { test: "ApoB", reason: "Advanced marker for cardiovascular disease risk assessment and heart attack prevention.", status: "MISSING" },
            { test: "hs-CRP", reason: "Inflammation marker linked to heart disease risk and cardiovascular health monitoring.", status: "MISSING" },
            { test: "Homocysteine", reason: "Cardiovascular risk factor and B-vitamin status indicator for heart health.", status: "MISSING" }
          ]
        },
        {
          category_name: "Metabolic Health",
          category_description: "Key biomarkers for diabetes prevention and metabolic syndrome detection.",
          tests: [
            { test: "HbA1c", reason: "3-month average blood sugar level for diabetes screening and metabolic health monitoring.", status: "MISSING" },
            { test: "Fasting Glucose", reason: "Current blood sugar level and diabetes risk indicator for metabolic assessment.", status: "MISSING" },
            { test: "Fasting Insulin", reason: "Insulin resistance marker and metabolic health indicator for diabetes prevention.", status: "MISSING" },
            { test: "Liver Enzymes", reason: "Liver function and metabolic health assessment for overall metabolic monitoring.", status: "MISSING" }
          ]
        },
        {
          category_name: "Hormonal Health",
          category_description: "Comprehensive hormone assessment for optimal endocrine function.",
          tests: [
            { test: "Thyroid Function", reason: "Essential for metabolism, energy, and overall health regulation and monitoring.", status: "MISSING" },
            { test: "Testosterone (men)", reason: "Male hormone levels affecting energy, muscle mass, and vitality for men's health.", status: "MISSING" },
            { test: "Cortisol", reason: "Stress hormone affecting energy, sleep, and immune function for stress management.", status: "MISSING" },
            { test: "DHEA-S", reason: "Anti-aging hormone and energy metabolism marker for longevity and vitality.", status: "MISSING" }
          ]
        },
        {
          category_name: "Nutritional Status",
          category_description: "Essential vitamins and minerals for optimal health and energy.",
          tests: [
            { test: "Vitamin D", reason: "Critical for immune function, bone health, and mood regulation for overall wellness.", status: "MISSING" },
            { test: "Vitamin B12 & Folate", reason: "Essential for energy production and neurological function for brain and energy health.", status: "MISSING" },
            { test: "Ferritin (Iron)", reason: "Iron storage levels affecting energy and oxygen transport for vitality and energy.", status: "MISSING" },
            { test: "Magnesium & Zinc", reason: "Essential minerals for muscle function and immune health for optimal body function.", status: "MISSING" }
          ]
        },
        {
          category_name: "Longevity Biomarkers",
          category_description: "Advanced markers for biological aging and longevity optimization.",
          tests: [
            { test: "Biological Aging Marker", reason: "Measures cellular aging and biological age vs chronological age for longevity tracking.", status: "MISSING" },
            { test: "Omega-3 Index", reason: "Essential fatty acid levels for heart and brain health for cognitive and cardiovascular wellness.", status: "MISSING" },
            { test: "Genetic Health Screen", reason: "Personalized genetic insights for disease prevention and personalized health optimization.", status: "MISSING" }
          ]
        },
        {
          category_name: "Gut Health",
          category_description: "Microbiome analysis for digestive health and immune function.",
          tests: [
            { test: "Microbiome Test", reason: "Comprehensive analysis of gut bacteria and digestive health for immune and digestive wellness.", status: "MISSING" },
            { test: "Stool Analysis", reason: "Digestive function and gut health assessment for digestive and immune system monitoring.", status: "MISSING" }
          ]
        }
      ],
      next_steps: [
        {
          timeframe: "URGENT (within 1 month)",
          actions: results.urgent?.map((test: any) => `Schedule ${test.test}`) || []
        },
        {
          timeframe: "DUE SOON (within 3-6 months)", 
          actions: results.dueSoon?.map((test: any) => `Schedule ${test.test}`) || []
        }
      ]
    };

    return NextResponse.json({
      success: true,
      results: transformedResults,
      aiResponse: aiResponse
    });
  } catch (error) {
    console.error('Error in analyze-health:', error);
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}

function createHealthAssessmentPrompt(responses: Array<{question: string, answer: string}>) {
  let prompt = `Based on the following health questionnaire responses, provide a personalized screening plan:\n\n`;
  
  responses.forEach((response, index) => {
    prompt += `Question ${index + 1}: ${response.question}\nAnswer: ${response.answer}\n\n`;
  });
  
  prompt += `Please provide a structured screening plan with:
  1. URGENT tests (needed within 1 month)
  2. DUE SOON tests (needed within 3-6 months)  
  3. OPTIONAL tests (general wellness)
  
  For each test, provide:
  - test: Test name
  - reason: Why this test is recommended
  - timeframe: When to get it done
  - status: URGENT, DUE_SOON, or OPTIONAL
  
  Return the response as a JSON object with "urgent", "dueSoon", and "optional" arrays.`;
  
  return prompt;
}

function parseAIResponse(aiResponse: string) {
  try {
    // Try to extract JSON from the response
    const jsonMatch = aiResponse.match(/\{[\s\S]*\}/);
    if (jsonMatch) {
      return JSON.parse(jsonMatch[0]);
    }
    
    // Fallback parsing if JSON extraction fails
    return {
      urgent: [],
      dueSoon: [
        {
          test: "Blood Pressure Check",
          reason: "Regular blood pressure monitoring is important for cardiovascular health.",
          timeframe: "Within 3-6 months",
          status: "DUE_SOON"
        }
      ],
      optional: [
        {
          test: "General Health Checkup",
          reason: "Comprehensive health assessment for overall wellness.",
          timeframe: "Anytime",
          status: "OPTIONAL"
        }
      ]
    };
  } catch (error) {
    console.error('Error parsing AI response:', error);
    return {
      urgent: [],
      dueSoon: [],
      optional: []
    };
  }
}
