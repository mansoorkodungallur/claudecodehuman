/* ========================================
   ChatGPT Mastery Course - Prompts Library
   100+ Prompt Examples Categorized by Use Case
   ======================================== */

const PROMPTS_LIBRARY = {
    beginner: {
        first_prompts: [
            {
                id: 'b1',
                title: "Explain Like I'm 5",
                prompt: "Explain how the internet works like I'm five years old.",
                category: "Learning",
                difficulty: "Beginner",
                explanation: "Simple explanation requests work great with clear age-appropriate specifications."
            },
            {
                id: 'b2',
                title: "Daily Schedule",
                prompt: "Create a productive daily schedule for someone working from home, including breaks and meal times. Start at 8 AM and end at 6 PM.",
                category: "Productivity",
                difficulty: "Beginner",
                explanation: "Specifying start/end times and requirements helps get actionable results."
            },
            {
                id: 'b3',
                title: "Recipe Ideas",
                prompt: "Suggest 3 quick dinner recipes using chicken, rice, and vegetables. Each should take less than 30 minutes.",
                category: "Personal",
                difficulty: "Beginner",
                explanation: "Listing ingredients and constraints (time) produces practical suggestions."
            },
            {
                id: 'b4',
                title: "Email Response",
                prompt: "Help me write a polite email declining a meeting invitation because I have a conflicting appointment.",
                category: "Writing",
                difficulty: "Beginner",
                explanation: "Providing context (why you're declining) helps craft appropriate responses."
            },
            {
                id: 'b5',
                title: "Word Definition",
                prompt: "Define 'algorithm' in simple terms and give me a real-world example.",
                category: "Learning",
                difficulty: "Beginner",
                explanation: "Asking for both definition and example ensures complete understanding."
            },
            {
                id: 'b6',
                title: "Gift Ideas",
                prompt: "Suggest 5 birthday gift ideas for a 30-year-old who loves hiking and photography, budget $50-100.",
                category: "Personal",
                difficulty: "Beginner",
                explanation: "Specific interests and budget constraints yield relevant recommendations."
            },
            {
                id: 'b7',
                title: "Grammar Check",
                prompt: "Check this sentence for grammar errors: 'Me and him went to the store yesterday for buying some groceries.'",
                category: "Writing",
                difficulty: "Beginner",
                explanation: "Clear request with specific text to check makes the task straightforward."
            },
            {
                id: 'b8',
                title: "Book Summary",
                prompt: "Summarize the main plot of '1984' by George Orwell in 5 sentences.",
                category: "Learning",
                difficulty: "Beginner",
                explanation: "Specifying length (5 sentences) helps control response size."
            },
            {
                id: 'b9',
                title: "Travel Tips",
                prompt: "Give me 5 essential tips for someone traveling to Japan for the first time.",
                category: "Personal",
                difficulty: "Beginner",
                explanation: "Numerical constraints (5 tips) and context (first time) guide the response."
            },
            {
                id: 'b10',
                title: "Study Plan",
                prompt: "Create a 2-week study plan for learning basic Python programming, assuming I can study 1 hour per day.",
                category: "Learning",
                difficulty: "Beginner",
                explanation: "Timeline and daily availability help create realistic, achievable plans."
            }
        ]
    },

    intermediate: {
        writing: [
            {
                id: 'i1',
                title: "Blog Post Structure",
                prompt: "Act as a content strategist. Create a detailed outline for a 1500-word blog post about 'Remote Work Best Practices'. Include: catchy title, introduction hook, 5 main sections with subpoints, and a conclusion with call-to-action. Target audience: managers of remote teams.",
                category: "Content Creation",
                difficulty: "Intermediate",
                useCase: "Content marketing, blogging"
            },
            {
                id: 'i2',
                title: "Email Campaign",
                prompt: "Write a 3-email welcome sequence for new subscribers to a productivity app. Email 1: Welcome and quick win. Email 2: Feature highlight. Email 3: Social proof and upgrade prompt. Keep each under 200 words, friendly but professional tone.",
                category: "Marketing",
                difficulty: "Intermediate",
                useCase: "Email marketing, customer onboarding"
            },
            {
                id: 'i3',
                title: "Product Description",
                prompt: "Write a compelling product description for eco-friendly bamboo toothbrushes. Format: headline (5-7 words), 3 benefit bullets, one paragraph describing the product, and a call-to-action. Emphasize sustainability and value.",
                category: "E-commerce",
                difficulty: "Intermediate",
                useCase: "Product marketing, copywriting"
            },
            {
                id: 'i4',
                title: "Social Media Content",
                prompt: "Create 5 LinkedIn post ideas for a cybersecurity company. Each should: start with a hook, provide value or insight, include relevant hashtags, and end with engagement question. Mix educational and thought-leadership content.",
                category: "Social Media",
                difficulty: "Intermediate",
                useCase: "Social media marketing, B2B content"
            },
            {
                id: 'i5',
                title: "Press Release",
                prompt: "Draft a press release announcing our company's Series A funding round ($10M led by TechVentures). Include: attention-grabbing headline, opening paragraph with key facts, CEO quote, company background, investor quote, and boilerplate. Keep it under 500 words.",
                category: "PR",
                difficulty: "Intermediate",
                useCase: "Public relations, corporate communications"
            }
        ],

        coding: [
            {
                id: 'i6',
                title: "Function Documentation",
                prompt: "Document this Python function with a comprehensive docstring including description, parameters (with types), return value, exceptions raised, and usage example:\n\n[paste function code]",
                category: "Development",
                difficulty: "Intermediate",
                useCase: "Code documentation"
            },
            {
                id: 'i7',
                title: "Code Review",
                prompt: "Review this JavaScript code for: 1) bugs or logical errors, 2) performance issues, 3) security vulnerabilities, 4) code style improvements. For each issue, explain the problem and show the corrected code:\n\n[paste code]",
                category: "Development",
                difficulty: "Intermediate",
                useCase: "Code quality, security"
            },
            {
                id: 'i8',
                title: "Unit Tests",
                prompt: "Generate unit tests for this function using pytest. Include: happy path test, edge cases (empty input, null, large numbers), and error cases. Add docstrings to each test:\n\n[paste function]",
                category: "Development",
                difficulty: "Intermediate",
                useCase: "Testing, TDD"
            },
            {
                id: 'i9',
                title: "SQL Query",
                prompt: "Write a SQL query that: retrieves orders from the last 30 days, joins with customers table, groups by customer, calculates total spending, and returns top 10 customers ordered by spend. Include column aliases and comments.",
                category: "Data",
                difficulty: "Intermediate",
                useCase: "Database queries, analytics"
            },
            {
                id: 'i10',
                title: "Regex Pattern",
                prompt: "Create a regex pattern that validates email addresses with these rules: local part can contain alphanumeric, dots, hyphens; domain must have at least one dot; TLD must be 2-6 letters. Explain each part of the pattern.",
                category: "Development",
                difficulty: "Intermediate",
                useCase: "Input validation, data parsing"
            }
        ],

        business: [
            {
                id: 'i11',
                title: "SWOT Analysis",
                prompt: "Conduct a SWOT analysis for a fictional meal kit delivery startup competing with HelloFresh and Blue Apron. Format as a 2x2 matrix. For each quadrant, provide 4-5 specific points with brief explanations.",
                category: "Strategy",
                difficulty: "Intermediate",
                useCase: "Business planning, competitive analysis"
            },
            {
                id: 'i12',
                title: "Meeting Agenda",
                prompt: "Create a structured agenda for a quarterly business review meeting. Include: pre-read requirements, time allocations, discussion topics (KPIs, challenges, initiatives), decision points, and action items section. Duration: 90 minutes, 8 attendees (exec team).",
                category: "Operations",
                difficulty: "Intermediate",
                useCase: "Meeting facilitation, project management"
            },
            {
                id: 'i13',
                title: "Customer Persona",
                prompt: "Develop a detailed customer persona for a B2B SaaS project management tool. Include: demographics, job role, goals, pain points, tech proficiency, buying behavior, and quote capturing their mindset. Base it on tech startup product managers.",
                category: "Marketing",
                difficulty: "Intermediate",
                useCase: "Marketing strategy, product development"
            },
            {
                id: 'i14',
                title: "Value Proposition",
                prompt: "Craft a compelling value proposition for an AI-powered resume builder. Use this format: For [target customer] who [need statement], our product is a [product category] that [key benefit]. Unlike [competition], we [unique differentiator].",
                category: "Marketing",
                difficulty: "Intermediate",
                useCase: "Positioning, product marketing"
            },
            {
                id: 'i15',
                title: "OKR Framework",
                prompt: "Design 3 OKRs (Objectives with 3 Key Results each) for a customer success team looking to improve retention. Make objectives inspirational but measurable. Key Results should be specific, time-bound metrics.",
                category: "Strategy",
                difficulty: "Intermediate",
                useCase: "Goal setting, performance management"
            }
        ],

        data: [
            {
                id: 'i16',
                title: "Data Analysis",
                prompt: "Analyze this sales data and provide insights: [paste data]. Format your response as: 1) Executive Summary (3-4 sentences), 2) Key Findings (5 bullet points with supporting numbers), 3) Anomalies/Concerns, 4) Recommendations (3 actionable items).",
                category: "Analytics",
                difficulty: "Intermediate",
                useCase: "Business intelligence, reporting"
            },
            {
                id: 'i17',
                title: "Chart Recommendation",
                prompt: "I have data showing: monthly website traffic, conversion rates, and revenue for the past year. Recommend the best visualization type for each metric and explain why. Also suggest one dashboard view combining all three.",
                category: "Visualization",
                difficulty: "Intermediate",
                useCase: "Data visualization, reporting"
            },
            {
                id: 'i18',
                title: "A/B Test Analysis",
                prompt: "We ran an A/B test: Control (1000 visitors, 50 conversions) vs Variant (1000 visitors, 65 conversions). Calculate conversion rates, determine if the difference is significant, and advise whether to implement the variant. Explain your reasoning.",
                category: "Analytics",
                difficulty: "Intermediate",
                useCase: "Experimentation, optimization"
            },
            {
                id: 'i19',
                title: "Survey Design",
                prompt: "Design a 10-question customer satisfaction survey for a SaaS product. Include: 2 NPS questions, 3 feature satisfaction ratings (scale 1-5), 2 multiple choice, 2 open-ended, and 1 demographic. Provide instructions for each section.",
                category: "Research",
                difficulty: "Intermediate",
                useCase: "User research, customer feedback"
            },
            {
                id: 'i20',
                title: "KPI Dashboard",
                prompt: "Design a KPI dashboard for an e-commerce business. Identify the 8 most important metrics to track, categorize them (acquisition, engagement, revenue, retention), and specify how to calculate each. Include target ranges.",
                category: "Analytics",
                difficulty: "Intermediate",
                useCase: "Performance tracking, business intelligence"
            }
        ]
    },

    expert: {
        automation: [
            {
                id: 'e1',
                title: "API Documentation",
                prompt: "Generate complete API documentation for this endpoint. Include: endpoint URL, HTTP method, authentication requirements, request parameters (path, query, body) with types and examples, response format with status codes, error handling, and rate limits:\n\n[paste endpoint details]",
                category: "Development",
                difficulty: "Expert",
                useCase: "API development, technical writing"
            },
            {
                id: 'e2',
                title: "Prompt Chain Design",
                prompt: "Design a multi-step prompt workflow for generating a complete research report. Break it into 5 stages: 1) Topic research & outline, 2) Section drafting, 3) Data incorporation, 4) Editing & fact-checking, 5) Formatting. Provide the exact prompt for each stage and explain how to pass output between stages.",
                category: "Automation",
                difficulty: "Expert",
                useCase: "Workflow automation, content production"
            },
            {
                id: 'e3',
                title: "Custom GPT Instructions",
                prompt: "Write system instructions for a custom GPT that acts as a code review assistant. It should: check for security vulnerabilities (SQL injection, XSS, etc.), identify performance bottlenecks, enforce style guide compliance, and suggest improvements. Include personality, constraints, and output format.",
                category: "AI Engineering",
                difficulty: "Expert",
                useCase: "Custom GPT development, DevOps"
            },
            {
                id: 'e4',
                title: "Data Pipeline Design",
                prompt: "Design a data processing pipeline for analyzing customer feedback. Input: raw text reviews. Output: sentiment scores, topic clusters, actionable insights. Describe each step, the prompts to use, error handling, and how to aggregate results across thousands of reviews.",
                category: "Data Engineering",
                difficulty: "Expert",
                useCase: "ETL, data processing, analytics"
            },
            {
                id: 'e5',
                title: "Testing Framework",
                prompt: "Create a comprehensive testing strategy for AI-generated content. Include: accuracy tests, consistency checks, tone validation, factual verification methods, edge case scenarios, and acceptance criteria. Provide specific test prompts for each category.",
                category: "QA",
                difficulty: "Expert",
                useCase: "Quality assurance, content validation"
            }
        ],

        optimization: [
            {
                id: 'e6',
                title: "Token Optimization",
                prompt: "Rewrite this verbose prompt to use 50% fewer tokens while maintaining clarity and effectiveness: [paste long prompt]. Explain which elements you removed and why they were redundant.",
                category: "Optimization",
                difficulty: "Expert",
                useCase: "Cost reduction, efficiency"
            },
            {
                id: 'e7',
                title: "Prompt A/B Test",
                prompt: "Create two versions of a prompt for the same task (generating product descriptions). Version A: emphasizes creativity (high temperature). Version B: emphasizes consistency (low temperature, few-shot examples). Explain when to use each and how to measure which performs better.",
                category: "Optimization",
                difficulty: "Expert",
                useCase: "Performance tuning, experimentation"
            },
            {
                id: 'e8',
                title: "Batch Processing",
                prompt: "Design a batch processing approach for classifying 10,000 customer support tickets into categories. Consider: token limits, rate limits, error handling, progress tracking, and result aggregation. Provide pseudocode for the main loop.",
                category: "Scale",
                difficulty: "Expert",
                useCase: "Large-scale processing, operations"
            },
            {
                id: 'e9',
                title: "Fallback Strategy",
                prompt: "Design a fallback strategy for an AI-powered chatbot. Define: when to escalate to human, how to handle API failures, what to do when confidence is low, and how to gracefully degrade functionality. Include decision tree and sample responses.",
                category: "Reliability",
                difficulty: "Expert",
                useCase: "Production systems, error handling"
            },
            {
                id: 'e10',
                title: "Performance Benchmarking",
                prompt: "Create a benchmarking framework for comparing prompt performance. Metrics to track: response time, token usage, accuracy score, consistency across runs, user satisfaction. Provide a table template and analysis methodology.",
                category: "Optimization",
                difficulty: "Expert",
                useCase: "Performance monitoring, analytics"
            }
        ],

        advanced_techniques: [
            {
                id: 'e11',
                title: "Chain-of-Thought Reasoning",
                prompt: "Solve this problem using chain-of-thought reasoning. Think through each step systematically before providing the final answer:\n\nA company's revenue grew 25% in Q1, declined 10% in Q2, grew 15% in Q3, and declined 5% in Q4. If they started at $1M, what's their final revenue? More importantly, what's their year-over-year growth rate, and should investors be concerned?",
                category: "Analysis",
                difficulty: "Expert",
                useCase: "Complex problem solving, financial analysis"
            },
            {
                id: 'e12',
                title: "Few-Shot Learning",
                prompt: "Convert these business descriptions into elevator pitches. Learn the pattern from these examples:\n\nExample 1:\nBusiness: Project management software for remote teams\nPitch: We help distributed teams stay aligned and ship faster with async-first project management tools.\n\nExample 2:\nBusiness: AI-powered resume builder\nPitch: We turn your work history into interview-winning resumes in minutes using AI that knows what recruiters want.\n\nNow create a pitch for: [your business description]",
                category: "Pattern Learning",
                difficulty: "Expert",
                useCase: "Copywriting, content generation"
            },
            {
                id: 'e13',
                title: "Constitutional AI",
                prompt: "Review this content according to these principles: 1) No harmful advice, 2) Factually accurate, 3) Respects privacy, 4) Non-discriminatory, 5) Age-appropriate. For each principle, rate the content (pass/fail) and explain. If failures exist, provide corrected version.\n\nContent: [paste content]",
                category: "Safety",
                difficulty: "Expert",
                useCase: "Content moderation, compliance"
            },
            {
                id: 'e14',
                title: "Recursive Prompting",
                prompt: "Break down this complex task into subtasks, solve each, then synthesize:\n\nTask: Design a go-to-market strategy for a new B2B SaaS product.\n\nFirst, identify 5-7 key components of a GTM strategy. Then, for each component, ask yourself what information is needed and provide it. Finally, combine all components into a cohesive strategy document.",
                category: "Problem Solving",
                difficulty: "Expert",
                useCase: "Strategic planning, complex tasks"
            },
            {
                id: 'e15',
                title: "Meta-Prompting",
                prompt: "Generate 5 different prompt variations for the task: 'Write a cold email to potential customers'. Each variation should use a different prompting technique (direct instruction, role-playing, few-shot, chain-of-thought, constrained generation). Explain when each would be most effective.",
                category: "Prompt Engineering",
                difficulty: "Expert",
                useCase: "Prompt optimization, A/B testing"
            }
        ]
    },

    templates: {
        rtfc: {
            template: `**Role:** [Specify who ChatGPT should be]
**Task:** [Clearly define what you want done]
**Format:** [Specify output structure]
**Constraints:** [Set boundaries, tone, length, etc.]`,
            example: `**Role:** You are an experienced technical writer who specializes in API documentation.
**Task:** Write comprehensive documentation for a REST API endpoint that creates a new user account.
**Format:** Use markdown with sections: Overview, Endpoint Details, Parameters, Request Example, Response Example, Error Codes.
**Constraints:** Keep it concise (under 500 words), use clear language for developers, include code examples in curl and JavaScript.`
        },

        chain_of_thought: {
            template: `Solve this problem step-by-step. For each step:
1. State what you're doing
2. Show your work
3. Verify the result

Problem: [Your problem]

Think through this systematically before providing the final answer.`,
            example: `Solve this problem step-by-step. For each step:
1. State what you're doing
2. Show your work
3. Verify the result

Problem: A store is offering 20% off all items, then an additional $10 off purchases over $50. I'm buying an item that costs $75. How much will I pay after both discounts?

Think through this systematically before providing the final answer.`
        },

        few_shot: {
            template: `Learn the pattern from these examples, then apply it to the new input:

Example 1:
Input: [Example input 1]
Output: [Example output 1]

Example 2:
Input: [Example input 2]
Output: [Example output 2]

Example 3:
Input: [Example input 3]
Output: [Example output 3]

Now apply the same pattern:
Input: [Your actual input]
Output:`,
            example: `Learn the pattern from these examples, then apply it to the new input:

Example 1:
Input: "The quick brown fox jumps over the lazy dog"
Output: "TQBFJOTLDog" (first letters of each word)

Example 2:
Input: "Hello world from artificial intelligence"
Output: "HWFAIntelligence"

Now apply the same pattern:
Input: "ChatGPT helps users write better prompts"
Output:`
        }
    },

    use_cases: {
        content_marketing: [
            "Blog post outlining",
            "SEO keyword optimization",
            "Meta descriptions",
            "Social media captions",
            "Email newsletters",
            "Content repurposing",
            "Headline brainstorming",
            "Editorial calendar planning"
        ],
        software_development: [
            "Code generation",
            "Bug debugging",
            "Code documentation",
            "Unit test writing",
            "Code review",
            "Algorithm explanation",
            "Regex patterns",
            "SQL queries"
        ],
        business_analysis: [
            "SWOT analysis",
            "Competitive research",
            "Market sizing",
            "Customer segmentation",
            "Value proposition design",
            "Business model canvas",
            "Financial projections",
            "Risk assessment"
        ],
        education: [
            "Concept explanation",
            "Study guide creation",
            "Practice problem generation",
            "Essay outlines",
            "Research assistance",
            "Learning path design",
            "Quiz generation",
            "Tutoring assistance"
        ]
    }
};

// Personas for Playground
const AI_PERSONAS = {
    default: {
        name: "Default Assistant",
        description: "Helpful, balanced, and versatile assistant.",
        systemPrompt: "You are a helpful, creative, and friendly assistant.",
        temperature: 0.7
    },
    creative: {
        name: "Creative Writer",
        description: "Imaginative storyteller and creative content creator.",
        systemPrompt: "You are a creative writer with a vivid imagination. You excel at storytelling, creative descriptions, and thinking outside the box. Use evocative language and unique perspectives.",
        temperature: 0.9
    },
    precise: {
        name: "Precise & Technical",
        description: "Accurate, factual, and technically detailed.",
        systemPrompt: "You are a precise, technical expert who values accuracy above all. You provide detailed, fact-based responses with proper terminology. You're careful not to speculate and admit when you're uncertain.",
        temperature: 0.3
    },
    teacher: {
        name: "Patient Teacher",
        description: "Explains concepts clearly with examples.",
        systemPrompt: "You are a patient, encouraging teacher who breaks down complex concepts into simple terms. You use analogies, examples, and step-by-step explanations. You check for understanding and adjust your teaching style.",
        temperature: 0.6
    },
    developer: {
        name: "Code Expert",
        description: "Software development specialist.",
        systemPrompt: "You are an experienced software engineer with deep knowledge of multiple programming languages, best practices, and design patterns. You write clean, well-documented code and explain technical concepts clearly.",
        temperature: 0.4
    },
    analyst: {
        name: "Data Analyst",
        description: "Numbers-focused analytical thinker.",
        systemPrompt: "You are a data analyst who excels at finding patterns, generating insights from data, and presenting findings clearly. You think critically about numbers and provide actionable recommendations.",
        temperature: 0.5
    },
    marketer: {
        name: "Marketing Guru",
        description: "Persuasive and audience-focused.",
        systemPrompt: "You are a marketing expert who understands psychology, persuasion, and audience targeting. You create compelling copy, understand positioning, and think strategically about growth.",
        temperature: 0.8
    }
};

// Quick prompt templates
const PROMPT_TEMPLATES = {
    summarize: {
        title: "Text Summarizer",
        fields: [
            { name: "text", label: "Text to Summarize", type: "textarea", placeholder: "Paste long text here..." },
            { name: "length", label: "Summary Length", type: "select", options: ["Brief (3 sentences)", "Medium (1 paragraph)", "Detailed (3 paragraphs)"] }
        ],
        generate: (data) => `Summarize the following text in ${data.length.toLowerCase()}:\n\n${data.text}`
    },
    explain: {
        title: "Concept Explainer",
        fields: [
            { name: "concept", label: "Concept to Explain", type: "text", placeholder: "e.g., Blockchain" },
            { name: "level", label: "Explanation Level", type: "select", options: ["Like I'm 5", "High School", "College", "Expert"] }
        ],
        generate: (data) => `Explain ${data.concept} at a ${data.level.toLowerCase()} level. Use clear examples and analogies.`
    },
    code: {
        title: "Code Debugger",
        fields: [
            { name: "code", label: "Code with Issues", type: "textarea", placeholder: "Paste your code here..." },
            { name: "language", label: "Programming Language", type: "text", placeholder: "e.g., Python, JavaScript" },
            { name: "problem", label: "What's Wrong?", type: "text", placeholder: "Describe the issue..." }
        ],
        generate: (data) => `This ${data.language} code has an issue: ${data.problem}\n\nCode:\n${data.code}\n\nPlease identify the problem and provide the corrected code with explanation.`
    },
    brainstorm: {
        title: "Idea Generator",
        fields: [
            { name: "topic", label: "Topic", type: "text", placeholder: "What do you need ideas for?" },
            { name: "count", label: "Number of Ideas", type: "number", value: "10" },
            { name: "context", label: "Context/Constraints", type: "textarea", placeholder: "Any specific requirements?" }
        ],
        generate: (data) => `Generate ${data.count} creative ideas for: ${data.topic}\n\nContext: ${data.context}\n\nFor each idea, provide a brief description and why it could work.`
    },
    email: {
        title: "Email Writer",
        fields: [
            { name: "purpose", label: "Email Purpose", type: "text", placeholder: "e.g., Request meeting, Follow up" },
            { name: "recipient", label: "Recipient", type: "text", placeholder: "e.g., Manager, Client, Colleague" },
            { name: "tone", label: "Tone", type: "select", options: ["Formal", "Professional", "Friendly", "Casual"] },
            { name: "points", label: "Key Points", type: "textarea", placeholder: "Main points to cover..." }
        ],
        generate: (data) => `Write a ${data.tone.toLowerCase()} email to a ${data.recipient} with the purpose: ${data.purpose}\n\nKey points to include:\n${data.points}\n\nKeep it concise and professional.`
    }
};

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { PROMPTS_LIBRARY, AI_PERSONAS, PROMPT_TEMPLATES };
}
