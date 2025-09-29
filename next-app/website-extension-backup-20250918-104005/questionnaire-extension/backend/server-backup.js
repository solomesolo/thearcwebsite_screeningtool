const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const OpenAI = require('openai');

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Initialize OpenAI
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Middleware
app.use(cors());
app.use(express.json());

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'OK', message: 'Right Screening Finder API is running' });
});

// Main endpoint for processing questionnaire responses
app.post('/api/analyze-health', async (req, res) => {
  try {
    const { responses } = req.body;
    
    if (!responses || !Array.isArray(responses)) {
      return res.status(400).json({ 
        error: 'Invalid request. Please provide questionnaire responses.' 
      });
    }

    // Create comprehensive prompt for ChatGPT
    const prompt = createHealthAssessmentPrompt(responses);
    
    // Call OpenAI API
    const completion = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        {
          role: "system",
          content: `You are a medical screening assistant. Based on the user's questionnaire data, age, risk profile, and previous lab history, generate a personalized preventive screening report.

⚠️ Requirements:
- All test recommendations must be aligned with the user's age and risk profile.
- Use only medical evidence and established clinical guidelines as the basis for recommendations.
- Always include recommendations for ALL categories: Cardiovascular Health, Metabolic Health, Hormonal Health, Nutritional Status, Longevity Biomarkers, Gut Health.
- Each test recommendation must include a short explanation of why it is needed for this specific user.
- Output ONLY valid JSON in the following schema (no commentary, no extra text):

{
  "assessment_summary": "string, short paragraph summarizing key risks, focus areas, and prevention priorities.",

  "urgent_tests": [
    {
      "name": "string, e.g. 'HbA1c (3-month average blood sugar)'",
      "explanation": "string, 1–2 sentences explaining why urgent",
      "timeframe": "string, e.g. 'Schedule within 1–2 weeks'",
      "status": "string, one of: 'NEVER DONE', 'MISSING', 'DUE SOON', 'RECOMMENDED'"
    }
  ],

  "categories": [
    {
      "category_name": "string, e.g. 'Cardiovascular Health'",
      "category_description": "string, 1 sentence why this category matters",
      "tests": [
        {
          "name": "string, e.g. 'Lipid Panel'",
          "description": "string, 1–2 sentences about test importance and why this person needs it",
          "status": "string, one of: 'MISSING', 'UP TO DATE', 'DUE SOON'"
        }
      ]
    }
  ],

  "next_steps": [
    {
      "timeframe": "string, e.g. 'URGENT (within 2 weeks)'",
      "actions": [
        "string, actionable recommendation (e.g., 'Schedule HbA1c test immediately')"
      ]
    }
  ]
}`
        },
        {
          role: "user",
          content: prompt
        }
      ],
      temperature: 0.3,
      max_tokens: 3000
    });

    const aiResponse = completion.choices[0].message.content;
    
    // Try to parse JSON response, fallback to structured response if needed
    let parsedResponse;
    try {
      parsedResponse = JSON.parse(aiResponse);
    } catch (parseError) {
      console.error('JSON parsing error:', parseError);
      // If JSON parsing fails, create a structured response
      parsedResponse = createFallbackResponse(responses);
    }

    res.json({
      success: true,
      data: parsedResponse,
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    console.error('Error processing health analysis:', error);
    
    // Return fallback response if OpenAI API fails
    const fallbackResponse = createFallbackResponse(req.body.responses);
    
    res.status(500).json({
      success: false,
      error: 'Failed to process health analysis',
      fallbackData: fallbackResponse,
      timestamp: new Date().toISOString()
    });
  }
});

// Function to create comprehensive health assessment prompt
function createHealthAssessmentPrompt(responses) {
  const prompt = `
Please analyze the following health questionnaire responses and provide a comprehensive personalized screening report:

QUESTIONNAIRE RESPONSES:
${JSON.stringify(responses, null, 2)}

Based on these responses, please provide a comprehensive health screening assessment following the exact JSON schema provided. Focus on:

1. ASSESSMENT SUMMARY: Brief paragraph highlighting key risks, focus areas, and prevention priorities based on age, symptoms, family history, and lifestyle factors.

2. URGENT TESTS: Critical tests needed immediately with clear explanations of why each is urgent for this specific person.

3. CATEGORIES: ALL SIX categories must be included:
   - Cardiovascular Health
   - Metabolic Health  
   - Hormonal Health
   - Nutritional Status
   - Longevity Biomarkers
   - Gut Health
   
   Each category should include relevant tests with explanations of why this specific person needs each test based on their age, risk profile, and health status.

4. NEXT STEPS: Prioritized action plan with specific, actionable recommendations.

Consider the following factors when making recommendations:
- Age-specific screening guidelines
- Family history implications
- Current symptoms and their significance
- Lifestyle factors (exercise, diet, smoking, etc.)
- Previous test history and timing
- Evidence-based clinical guidelines

Return ONLY valid JSON following the exact schema - no additional text or explanations.`;

  return prompt;
}

// Function to create fallback response when AI fails
function createFallbackResponse(responses) {
  // Analyze responses to create basic recommendations
  const hasDiabetesRisk = responses.some(r => 
    r.question.includes('diabetes') || r.question.includes('blood sugar') || 
    r.answer.includes('yes') && (r.question.includes('family history') || r.question.includes('symptoms'))
  );
  
  const hasHeartRisk = responses.some(r => 
    r.question.includes('heart') || r.question.includes('cholesterol') ||
    r.question.includes('blood pressure') || r.answer.includes('yes')
  );
  
  const hasThyroidSymptoms = responses.some(r => 
    r.question.includes('fatigue') || r.question.includes('weight') ||
    r.question.includes('thyroid') || r.answer.includes('yes')
  );

  return {
    assessment_summary: "Based on your health assessment, we have identified key areas for preventive screening. This personalized plan focuses on early detection and prevention to optimize your long-term health and longevity.",
    
    urgent_tests: [
      {
        name: "HbA1c (3-month average blood sugar)",
        explanation: "Essential for detecting early diabetes risk years before symptoms appear.",
        timeframe: "Schedule within 1–2 weeks",
        status: hasDiabetesRisk ? "NEVER DONE" : "RECOMMENDED"
      },
      {
        name: "Lipid Panel (cholesterol, LDL, HDL, triglycerides)",
        explanation: "Fundamental cardiovascular risk assessment for heart disease prevention.",
        timeframe: "Schedule within 2 weeks",
        status: hasHeartRisk ? "NEVER DONE" : "RECOMMENDED"
      },
      {
        name: "Thyroid Function (TSH, free T4, free T3)",
        explanation: "Important for metabolic health and energy regulation.",
        timeframe: "Schedule within 1 month",
        status: hasThyroidSymptoms ? "NEVER DONE" : "RECOMMENDED"
      }
    ],
    
    categories: [
      {
        category_name: "Cardiovascular Health",
        category_description: "Essential tests for heart disease prevention and cardiovascular risk assessment.",
        tests: [
          { 
            name: "Lipid Panel", 
            description: "Measures cholesterol levels and cardiovascular risk factors for heart disease prevention.",
            status: "MISSING" 
          },
          { 
            name: "ApoB", 
            description: "Advanced marker for cardiovascular disease risk assessment and heart attack prevention.",
            status: "MISSING" 
          },
          { 
            name: "hs-CRP", 
            description: "Inflammation marker linked to heart disease risk and cardiovascular health monitoring.",
            status: "MISSING" 
          },
          { 
            name: "Homocysteine", 
            description: "Cardiovascular risk factor and B-vitamin status indicator for heart health.",
            status: "MISSING" 
          }
        ]
      },
      {
        category_name: "Metabolic Health",
        category_description: "Key biomarkers for diabetes prevention and metabolic syndrome detection.",
        tests: [
          { 
            name: "HbA1c", 
            description: "3-month average blood sugar level for diabetes screening and metabolic health monitoring.",
            status: "MISSING" 
          },
          { 
            name: "Fasting Glucose", 
            description: "Current blood sugar level and diabetes risk indicator for metabolic assessment.",
            status: "MISSING" 
          },
          { 
            name: "Fasting Insulin", 
            description: "Insulin resistance marker and metabolic health indicator for diabetes prevention.",
            status: "MISSING" 
          },
          { 
            name: "Liver Enzymes", 
            description: "Liver function and metabolic health assessment for overall metabolic monitoring.",
            status: "MISSING" 
          }
        ]
      },
      {
        category_name: "Hormonal Health",
        category_description: "Comprehensive hormone assessment for optimal endocrine function.",
        tests: [
          { 
            name: "Thyroid Function", 
            description: "Essential for metabolism, energy, and overall health regulation and monitoring.",
            status: "MISSING" 
          },
          { 
            name: "Testosterone (men)", 
            description: "Male hormone levels affecting energy, muscle mass, and vitality for men's health.",
            status: "MISSING" 
          },
          { 
            name: "Cortisol", 
            description: "Stress hormone affecting energy, sleep, and immune function for stress management.",
            status: "MISSING" 
          },
          { 
            name: "DHEA-S", 
            description: "Anti-aging hormone and energy metabolism marker for longevity and vitality.",
            status: "MISSING" 
          }
        ]
      },
      {
        category_name: "Nutritional Status",
        category_description: "Essential vitamins and minerals for optimal health and energy.",
        tests: [
          { 
            name: "Vitamin D", 
            description: "Critical for immune function, bone health, and mood regulation for overall wellness.",
            status: "MISSING" 
          },
          { 
            name: "Vitamin B12 & Folate", 
            description: "Essential for energy production and neurological function for brain and energy health.",
            status: "MISSING" 
          },
          { 
            name: "Ferritin (Iron)", 
            description: "Iron storage levels affecting energy and oxygen transport for vitality and energy.",
            status: "MISSING" 
          },
          { 
            name: "Magnesium & Zinc", 
            description: "Essential minerals for muscle function and immune health for optimal body function.",
            status: "MISSING" 
          }
        ]
      },
      {
        category_name: "Longevity Biomarkers",
        category_description: "Advanced markers for biological aging and longevity optimization.",
        tests: [
          { 
            name: "Biological Aging Marker", 
            description: "Measures cellular aging and biological age vs chronological age for longevity tracking.",
            status: "MISSING" 
          },
          { 
            name: "Omega-3 Index", 
            description: "Essential fatty acid levels for heart and brain health for cognitive and cardiovascular wellness.",
            status: "MISSING" 
          },
          { 
            name: "Genetic Health Screen", 
            description: "Personalized genetic insights for disease prevention and personalized health optimization.",
            status: "MISSING" 
          }
        ]
      },
      {
        category_name: "Gut Health",
        category_description: "Microbiome analysis for digestive health and immune function.",
        tests: [
          { 
            name: "Microbiome Test", 
            description: "Comprehensive analysis of gut bacteria and digestive health for immune and digestive wellness.",
            status: "MISSING" 
          },
          { 
            name: "Stool Analysis", 
            description: "Digestive function and gut health assessment for digestive and immune system monitoring.",
            status: "MISSING" 
          }
        ]
      }
    ],
    
    next_steps: [
      {
        timeframe: "URGENT (within 2 weeks)",
        actions: [
          "Schedule HbA1c test immediately",
          "Book Lipid Panel appointment", 
          "Arrange Thyroid Function testing",
          "Consult with healthcare provider about results"
        ]
      },
      {
        timeframe: "MEDIUM-TERM (within 1 month)",
        actions: [
          "Complete metabolic panel (Insulin, Liver enzymes)",
          "Schedule hormonal assessment",
          "Address nutritional deficiencies",
          "Begin targeted supplementation if needed"
        ]
      },
      {
        timeframe: "OPTIONAL (within 3 months)",
        actions: [
          "Consider advanced longevity testing",
          "Explore genetic health screening",
          "Evaluate microbiome testing options",
          "Plan follow-up assessments"
        ]
      }
    ]
  };
}

// Start server
app.listen(PORT, () => {
  console.log(`Right Screening Finder API running on port ${PORT}`);
  console.log(`Health check: http://localhost:${PORT}/health`);
  console.log(`API endpoint: http://localhost:${PORT}/api/analyze-health`);
});

module.exports = app;
