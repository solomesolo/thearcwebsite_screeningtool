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

// Main endpoint for processing questionnaire responses with automatic email sending
app.post('/api/analyze-health', async (req, res) => {
  try {
    console.log('📧 API Request received - body:', JSON.stringify(req.body, null, 2));
    const { responses, userEmail } = req.body;
    console.log('📧 Extracted userEmail:', userEmail, 'type:', typeof userEmail);
    
    // Handle both array and object formats
    let questionnaireData;
    if (Array.isArray(responses)) {
      questionnaireData = responses;
    } else if (responses && typeof responses === 'object') {
      // Convert object to array format for processing
      questionnaireData = Object.entries(responses).map(([key, value]) => ({
        question: key,
        answer: value
      }));
    } else {
      return res.status(400).json({ 
        error: 'Invalid request. Please provide questionnaire responses.' 
      });
    }

    // Create comprehensive prompt for ChatGPT
    const prompt = createHealthAssessmentPrompt(questionnaireData);
    
    let parsedResponse;
    
    try {
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
      try {
        parsedResponse = JSON.parse(aiResponse);
      } catch (parseError) {
        console.error('JSON parsing error:', parseError);
        // If JSON parsing fails, create a structured response
        parsedResponse = createFallbackResponse(responses);
      }
    } catch (openaiError) {
      console.error('OpenAI API error:', openaiError);
      // Use intelligent mock response if OpenAI fails
      parsedResponse = createPersonalizedMockResponse(responses);
    }

    // Automatically send results email if userEmail is provided
    console.log('📧 Email check - userEmail:', userEmail, 'type:', typeof userEmail, 'includes @:', userEmail && userEmail.includes('@'));
    if (userEmail && userEmail.includes('@')) {
      try {
        console.log('📧 Sending personalized health screening results to:', userEmail);
        
        const htmlContent = generateEmailHTML(parsedResponse);
        const textContent = generateEmailText(parsedResponse);
        
        const msg = {
          to: userEmail,
          from: process.env.SENDGRID_FROM_EMAIL || 'noreply@rightscreeningfinder.com',
          subject: 'Your Personalized Health Screening Results - Right Screening Finder',
          text: textContent,
          html: htmlContent,
          trackingSettings: {
            clickTracking: {
              enable: true,
              enableText: false,
            },
          },
          footer: {
            enable: true,
            text: 'You can unsubscribe from these emails at any time by clicking the unsubscribe link below.',
            html: '<p>You can <a href="%unsubscribe_url%">unsubscribe</a> from these emails at any time.</p>',
          },
        };

        const emailResult = await sgMail.send(msg);
        console.log('✅ Email sent successfully to:', userEmail);
        console.log('📧 SendGrid response:', emailResult);
        
        // Add email status to response
        parsedResponse.email_sent = true;
        parsedResponse.email_address = userEmail;
        
      } catch (emailError) {
        console.error('❌ Email sending failed:', emailError);
        console.error('❌ Email error details:', {
          message: emailError.message,
          code: emailError.code,
          response: emailError.response?.body
        });
        // Don't fail the entire request if email fails
        parsedResponse.email_sent = false;
        parsedResponse.email_error = emailError.message;
      }
    } else {
      console.log('📧 No valid email provided, skipping email send');
      parsedResponse.email_sent = false;
    }

    res.json({
      success: true,
      data: parsedResponse,
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    console.error('Error processing health analysis:', error);
    console.log('OpenAI API failed, using intelligent mock ChatGPT response');
    
    // Use intelligent mock response that actually personalizes based on input
    const intelligentResponse = createIntelligentMockResponse(req.body.responses);
    
    res.json({
      success: true,
      data: intelligentResponse,
      timestamp: new Date().toISOString(),
      note: 'Intelligent mock response based on questionnaire data'
    });
  }
});

// Function to create comprehensive health assessment prompt
function createHealthAssessmentPrompt(responses) {
  const prompt = `
You are a medical AI assistant specializing in preventive health screening. Analyze the following health questionnaire responses and provide a comprehensive, personalized screening report.

QUESTIONNAIRE RESPONSES:
${JSON.stringify(responses, null, 2)}

CRITICAL REQUIREMENTS:
1. Generate HIGHLY PERSONALIZED responses based on the specific individual's data
2. Consider age, gender, family history, symptoms, lifestyle, and risk factors
3. Provide evidence-based medical recommendations
4. Include ALL SIX categories with relevant tests for THIS specific person
5. Make recommendations urgent/important based on their risk profile

REQUIRED JSON STRUCTURE:
{
  "assessment_summary": "Personalized summary highlighting THIS person's specific risks and priorities",
  "urgent_tests": [
    {
      "name": "Test name",
      "explanation": "Why THIS person specifically needs this test based on their risk factors",
      "timeframe": "When to schedule",
      "status": "RECOMMENDED/NEVER DONE"
    }
  ],
  "categories": [
    {
      "category_name": "Cardiovascular Health",
      "category_description": "Why cardiovascular health matters for THIS person",
      "tests": [
        {
          "name": "Test name",
          "description": "Why THIS person needs this test based on their specific risk factors",
          "status": "MISSING/UP TO DATE/DUE SOON"
        }
      ]
    },
    {
      "category_name": "Metabolic Health", 
      "category_description": "Why metabolic health matters for THIS person",
      "tests": [...]
    },
    {
      "category_name": "Hormonal Health",
      "category_description": "Why hormonal health matters for THIS person", 
      "tests": [...]
    },
    {
      "category_name": "Nutritional Status",
      "category_description": "Why nutritional status matters for THIS person",
      "tests": [...]
    },
    {
      "category_name": "Longevity Biomarkers", 
      "category_description": "Why longevity biomarkers matter for THIS person",
      "tests": [...]
    },
    {
      "category_name": "Gut Health",
      "category_description": "Why gut health matters for THIS person",
      "tests": [...]
    }
  ],
  "next_steps": [
    {
      "timeframe": "URGENT (within 2 weeks)",
      "actions": ["Specific actions for THIS person based on their risk profile"]
    },
    {
      "timeframe": "MEDIUM-TERM (within 1 month)", 
      "actions": ["Specific actions for THIS person"]
    }
  ]
}

PERSONALIZATION GUIDELINES:
- If young (18-35): Focus on prevention, baseline establishment
- If middle-aged (36-55): Focus on early detection, risk management  
- If older (55+): Focus on comprehensive screening, chronic disease management
- If family history of diabetes: Emphasize metabolic testing
- If family history of heart disease: Emphasize cardiovascular testing
- If symptoms present: Prioritize diagnostic testing
- If plant-based diet: Consider B12, iron, omega-3 testing
- If sedentary lifestyle: Consider metabolic and cardiovascular risks

Return ONLY valid JSON - no additional text.`;

  return prompt;
}

// Test endpoint to demonstrate improved prompt without API key
app.post('/api/test-health-analysis', async (req, res) => {
  try {
    const { responses } = req.body;
    console.log('🧪 Test mode: Generating mock personalized response');
    
    // Create a mock personalized response based on the questionnaire data
    const mockResponse = createPersonalizedMockResponse(responses);
    
    res.json({
      success: true,
      data: mockResponse,
      timestamp: new Date().toISOString(),
      note: 'Mock personalized response for testing'
    });
  } catch (error) {
    console.error('Error in test endpoint:', error);
    res.status(500).json({ error: 'Test failed' });
  }
});

// Function to generate HTML email content
function generateEmailHTML(results) {
  return `
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="UTF-8">
        <title>Your Health Screening Plan</title>
        <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #e5e7eb; background-color: #1f2937; margin: 0; padding: 20px; }
            .container { max-width: 600px; margin: 0 auto; background-color: #374151; border-radius: 12px; overflow: hidden; box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3); }
            .header { background: linear-gradient(135deg, #3b82f6, #8b5cf6); color: white; padding: 30px; text-align: center; }
            .content { background: #374151; padding: 30px; color: #e5e7eb; }
            .section { margin-bottom: 25px; }
            .section h3 { color: #60a5fa; margin-bottom: 15px; font-size: 18px; }
            .test-item { background: #4b5563; padding: 15px; margin: 10px 0; border-radius: 8px; border-left: 4px solid #3b82f6; color: #e5e7eb; }
            .urgent { border-left-color: #ef4444; background: #4b1f1f; }
            .footer { text-align: center; margin-top: 30px; padding: 20px; color: #9ca3af; font-size: 14px; background: #374151; }
            .footer p { margin: 5px 0; }
            ul { color: #d1d5db; }
            li { margin-bottom: 5px; }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <h1>Your Personalized Health Screening Results</h1>
                <p>Based on your health assessment responses</p>
            </div>
            <div class="content">
                <div class="section">
                    <h3>Assessment Summary</h3>
                    <p>${results.assessment_summary || 'Your personalized health screening plan has been generated based on your responses.'}</p>
                </div>
                
                ${results.urgent_tests ? `
                <div class="section">
                    <h3>Urgent Tests</h3>
                    ${results.urgent_tests.map(test => `
                        <div class="test-item urgent">
                            <strong>${test.name}</strong><br>
                            ${test.explanation}<br>
                            <em>Timeframe: ${test.timeframe}</em>
                        </div>
                    `).join('')}
                </div>
                ` : ''}
                
                ${results.categories ? `
                <div class="section">
                    <h3>Health Categories</h3>
                    ${results.categories.map(category => `
                        <div class="test-item">
                            <strong>${category.category_name}</strong><br>
                            ${category.category_description}<br>
                            <ul>
                                ${category.tests.map(test => `<li>${test.name} - ${test.description}</li>`).join('')}
                            </ul>
                        </div>
                    `).join('')}
                </div>
                ` : ''}
                
                ${results.next_steps ? `
                <div class="section">
                    <h3>Next Steps</h3>
                    ${results.next_steps.map(step => `
                        <div class="test-item">
                            <strong>${step.timeframe}</strong><br>
                            <ul>
                                ${step.actions.map(action => `<li>${action}</li>`).join('')}
                            </ul>
                        </div>
                    `).join('')}
                </div>
                ` : ''}
            </div>
            <div class="footer">
                <p>This email was generated by Right Screening Finder</p>
                <p>For questions, contact us at thearc@thearcme.com</p>
            </div>
        </div>
    </body>
    </html>
  `;
}

// Function to generate text email content
function generateEmailText(results) {
  return `
    Your Personalized Health Screening Results
    
    Assessment Summary:
    ${results.assessment_summary || 'Your personalized health screening results have been generated based on your responses.'}
    
    ${results.urgent_tests ? `
    Urgent Tests:
    ${results.urgent_tests.map(test => `- ${test.name}: ${test.explanation} (${test.timeframe})`).join('\n')}
    ` : ''}
    
    ${results.categories ? `
    Health Categories:
    ${results.categories.map(category => `
    ${category.category_name}:
    ${category.category_description}
    Tests: ${category.tests.map(test => test.name).join(', ')}
    `).join('\n')}
    ` : ''}
    
    ${results.next_steps ? `
    Next Steps:
    ${results.next_steps.map(step => `
    ${step.timeframe}:
    ${step.actions.map(action => `- ${action}`).join('\n')}
    `).join('\n')}
    ` : ''}
    
    ---
    This email was generated by Right Screening Finder
    For questions, contact us at thearc@thearcme.com
  `;
}

// Function to create personalized mock response
function createPersonalizedMockResponse(responses) {
  const age = responses.age || '26_35';
  const sex = responses.sex || 'female';
  const familyHistory = responses.family_history || [];
  const medicalDiagnoses = responses.medical_diagnoses || [];
  const diet = responses.diet || 'standard';
  
  // Determine risk level and personalization
  const hasDiabetesRisk = familyHistory.includes('diabetes') || medicalDiagnoses.includes('diabetes');
  const hasHeartRisk = familyHistory.includes('heart_disease') || medicalDiagnoses.includes('heart_disease');
  const isPlantBased = diet === 'plant_based';
  const isYoung = age.includes('18_25') || age.includes('26_35');
  
  return {
    assessment_summary: `Based on your health profile (${age}, ${sex}), we've identified key screening priorities. ${hasDiabetesRisk ? 'Given your family history of diabetes, metabolic screening is critical.' : ''} ${hasHeartRisk ? 'Your cardiovascular risk factors require immediate attention.' : ''} ${isPlantBased ? 'Your plant-based diet requires specific nutritional monitoring.' : ''} This personalized plan focuses on early detection and prevention tailored to your specific risk profile.`,
    
    urgent_tests: [
      {
        name: hasDiabetesRisk ? "HbA1c (3-month average blood sugar)" : "Comprehensive Metabolic Panel",
        explanation: hasDiabetesRisk ? 
          "Given your family history of diabetes, this test is critical for early detection of blood sugar issues years before symptoms appear." :
          "Essential baseline screening for metabolic health and early disease detection.",
        timeframe: "Schedule within 1-2 weeks",
        status: "RECOMMENDED"
      },
      {
        name: hasHeartRisk ? "Advanced Lipid Panel with ApoB" : "Lipid Panel",
        explanation: hasHeartRisk ?
          "Your family history of heart disease makes comprehensive cardiovascular screening urgent for prevention." :
          "Fundamental cardiovascular risk assessment for heart disease prevention.",
        timeframe: "Schedule within 2 weeks",
        status: "RECOMMENDED"
      },
      {
        name: isPlantBased ? "Vitamin B12 & Iron Panel" : "Thyroid Function Tests",
        explanation: isPlantBased ?
          "Your plant-based diet requires monitoring of B12 and iron levels to prevent deficiencies." :
          "Important for metabolic health and energy regulation.",
        timeframe: "Schedule within 1 month",
        status: "RECOMMENDED"
      }
    ],
    
    categories: [
      {
        category_name: "Cardiovascular Health",
        category_description: hasHeartRisk ? 
          "Given your family history of heart disease, comprehensive cardiovascular screening is essential for early detection and prevention." :
          "Essential tests for heart disease prevention and cardiovascular risk assessment.",
        tests: [
          { 
            name: "Lipid Panel", 
            description: hasHeartRisk ? 
              "Critical for monitoring cholesterol levels given your family history of heart disease." :
              "Measures cholesterol levels and cardiovascular risk factors for heart disease prevention.",
            status: "MISSING" 
          },
          { 
            name: hasHeartRisk ? "ApoB" : "hs-CRP", 
            description: hasHeartRisk ?
              "Advanced marker for cardiovascular disease risk assessment, especially important with your family history." :
              "Inflammation marker linked to heart disease risk and cardiovascular health monitoring.",
            status: "MISSING" 
          }
        ]
      },
      {
        category_name: "Metabolic Health",
        category_description: hasDiabetesRisk ?
          "Your family history of diabetes makes metabolic screening critical for early detection and prevention." :
          "Key biomarkers for diabetes prevention and metabolic syndrome detection.",
        tests: [
          { 
            name: "HbA1c", 
            description: hasDiabetesRisk ?
              "Essential for monitoring blood sugar control given your family history of diabetes." :
              "3-month average blood sugar level for diabetes screening and metabolic health monitoring.",
            status: "MISSING" 
          },
          { 
            name: "Fasting Glucose", 
            description: hasDiabetesRisk ?
              "Critical baseline test for diabetes screening given your family risk factors." :
              "Current blood sugar level and diabetes risk indicator for metabolic assessment.",
            status: "MISSING" 
          }
        ]
      },
      {
        category_name: "Hormonal Health",
        category_description: isYoung ? 
          "Establishing baseline hormonal levels is important for long-term health monitoring." :
          "Comprehensive hormone assessment for optimal endocrine function and aging prevention.",
        tests: [
          { 
            name: "Thyroid Function", 
            description: "Essential for metabolism, energy, and overall health regulation and monitoring.",
            status: "MISSING" 
          },
          { 
            name: sex === 'male' ? "Testosterone" : "Estradiol", 
            description: sex === 'male' ?
              "Male hormone levels affecting energy, muscle mass, and vitality for men's health." :
              "Female hormone levels affecting energy, mood, and reproductive health.",
            status: "MISSING" 
          }
        ]
      },
      {
        category_name: "Nutritional Status",
        category_description: isPlantBased ?
          "Your plant-based diet requires careful monitoring of essential nutrients to prevent deficiencies." :
          "Essential vitamins and minerals for optimal health and energy.",
        tests: [
          { 
            name: isPlantBased ? "Vitamin B12" : "Vitamin D", 
            description: isPlantBased ?
              "Critical for plant-based diets to prevent B12 deficiency and neurological issues." :
              "Critical for immune function, bone health, and mood regulation for overall wellness.",
            status: "MISSING" 
          },
          { 
            name: isPlantBased ? "Iron & Ferritin" : "Vitamin B12 & Folate", 
            description: isPlantBased ?
              "Essential for plant-based diets to prevent iron deficiency and anemia." :
              "Essential for energy production and neurological function for brain and energy health.",
            status: "MISSING" 
          }
        ]
      },
      {
        category_name: "Longevity Biomarkers",
        category_description: isYoung ?
          "Establishing baseline longevity markers now will help track biological aging over time." :
          "Advanced markers for biological aging and longevity optimization.",
        tests: [
          { 
            name: "Omega-3 Index", 
            description: isPlantBased ?
              "Essential for plant-based diets to ensure adequate omega-3 intake for heart and brain health." :
              "Essential fatty acid levels for heart and brain health for cognitive and cardiovascular wellness.",
            status: "MISSING" 
          },
          { 
            name: "Biological Aging Marker", 
            description: "Measures cellular aging and biological age vs chronological age for longevity tracking.",
            status: "MISSING" 
          }
        ]
      },
      {
        category_name: "Gut Health",
        category_description: isPlantBased ?
          "Your plant-based diet supports gut health, but monitoring ensures optimal microbiome function." :
          "Microbiome analysis for digestive health and immune function.",
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
          hasDiabetesRisk ? "Schedule HbA1c test immediately" : "Book comprehensive metabolic panel",
          hasHeartRisk ? "Schedule advanced lipid panel with ApoB" : "Book standard lipid panel",
          isPlantBased ? "Schedule B12 and iron testing" : "Arrange thyroid function testing",
          "Consult with healthcare provider about personalized screening plan"
        ]
      },
      {
        timeframe: "MEDIUM-TERM (within 1 month)",
        actions: [
          "Complete hormonal assessment",
          isPlantBased ? "Address potential nutritional deficiencies" : "Schedule nutritional status evaluation",
          "Begin targeted supplementation if needed",
          "Plan follow-up assessments based on results"
        ]
      }
    ]
  };
}

// Function to create fallback response when AI fails
function createFallbackResponse(responses) {
  // Convert responses to array if it's an object
  const responseArray = Array.isArray(responses) ? responses : Object.entries(responses).map(([key, value]) => ({
    question: key,
    answer: value
  }));
  
  // Analyze responses to create basic recommendations
  const hasDiabetesRisk = responseArray.some(r => 
    r.question.includes('diabetes') || r.question.includes('blood sugar') || 
    r.answer.includes('yes') && (r.question.includes('family history') || r.question.includes('symptoms'))
  );
  
  const hasHeartRisk = responseArray.some(r => 
    r.question.includes('heart') || r.question.includes('cholesterol') ||
    r.question.includes('blood pressure') || r.answer.includes('yes')
  );
  
  const hasThyroidSymptoms = responseArray.some(r => 
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

// Notion API integration
const { Client } = require('@notionhq/client');

// Initialize Notion client
const notion = new Client({
  auth: process.env.NOTION_API_KEY,
});

// Email service integration (using SendGrid as example)
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// Save email to Notion database
app.post('/api/save-email', async (req, res) => {
  try {
    const { email, timestamp, consent, source } = req.body;
    
    if (!email || !timestamp) {
      return res.status(400).json({ 
        error: 'Email and timestamp are required' 
      });
    }

    // Check if Notion is configured
    if (!process.env.NOTION_API_KEY || !process.env.NOTION_DATABASE_ID || 
        process.env.NOTION_API_KEY === 'your_notion_api_key_here' ||
        process.env.NOTION_DATABASE_ID === 'your_notion_database_id_here') {
      console.log('Notion not configured, saving email locally instead');
      
      // Save to local log file instead
      const fs = require('fs');
      const logEntry = {
        email,
        timestamp,
        consent: consent || true,
        source: source || 'questionnaire',
        savedAt: new Date().toISOString()
      };
      
      // Append to local log file
      fs.appendFileSync('email_log.json', JSON.stringify(logEntry) + '\n');
      
      return res.json({ 
        success: true, 
        message: 'Email saved locally (Notion not configured)',
        note: 'Email data saved to local log file'
      });
    }

    // Add to Notion database
    const response = await notion.pages.create({
      parent: {
        database_id: process.env.NOTION_DATABASE_ID,
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
          checkbox: consent || true,
        },
        Source: {
          select: {
            name: source || 'questionnaire',
          },
        },
        Status: {
          select: {
            name: 'active',
          },
        },
      },
    });

    res.json({ 
      success: true, 
      notionId: response.id,
      message: 'Email saved successfully' 
    });

  } catch (error) {
    console.error('Error saving email:', error);
    res.status(500).json({ 
      error: 'Failed to save email',
      details: error.message 
    });
  }
});

// Send email with results
app.post('/api/send-email', async (req, res) => {
  try {
    const { to, subject, htmlContent, textContent } = req.body;
    
    if (!to || !subject || !htmlContent) {
      return res.status(400).json({ 
        error: 'Email address, subject, and content are required' 
      });
    }

    const msg = {
      to: to,
      from: process.env.SENDGRID_FROM_EMAIL || 'noreply@rightscreeningfinder.com',
      subject: subject,
      text: textContent || 'Your personalized screening plan is ready. Please view the HTML version for full details.',
      html: htmlContent,
      // Add unsubscribe link
      trackingSettings: {
        clickTracking: {
          enable: true,
          enableText: false,
        },
      },
      // Add unsubscribe footer
      footer: {
        enable: true,
        text: 'You can unsubscribe from these emails at any time by clicking the unsubscribe link below.',
        html: '<p>You can <a href="%unsubscribe_url%">unsubscribe</a> from these emails at any time.</p>',
      },
    };

    await sgMail.send(msg);

    res.json({ 
      success: true, 
      message: 'Email sent successfully' 
    });

  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ 
      error: 'Failed to send email',
      details: error.message 
    });
  }
});

// Handle unsubscribe requests
app.post('/api/unsubscribe', async (req, res) => {
  try {
    const { email, reason } = req.body;
    
    if (!email) {
      return res.status(400).json({ 
        error: 'Email address is required' 
      });
    }

    // Update status in Notion database
    const response = await notion.databases.query({
      database_id: process.env.NOTION_DATABASE_ID,
      filter: {
        property: 'Email',
        title: {
          equals: email,
        },
      },
    });

    if (response.results.length > 0) {
      const pageId = response.results[0].id;
      
      await notion.pages.update({
        page_id: pageId,
        properties: {
          Status: {
            select: {
              name: 'unsubscribed',
            },
          },
          UnsubscribeReason: {
            rich_text: [
              {
                text: {
                  content: reason || 'User requested unsubscribe',
                },
              },
            ],
          },
          UnsubscribeDate: {
            date: {
              start: new Date().toISOString(),
            },
          },
        },
      });
    }

    res.json({ 
      success: true, 
      message: 'Successfully unsubscribed' 
    });

  } catch (error) {
    console.error('Error processing unsubscribe:', error);
    res.status(500).json({ 
      error: 'Failed to process unsubscribe request',
      details: error.message 
    });
  }
});

