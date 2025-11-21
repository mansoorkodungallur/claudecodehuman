/* ========================================
   ChatGPT Mastery Course - Mock Simulator
   Simulates ChatGPT responses for practice
   ======================================== */

class ChatGPTSimulator {
    constructor(persona = 'default', temperature = 0.7, maxTokens = 500) {
        this.persona = AI_PERSONAS[persona] || AI_PERSONAS.default;
        this.temperature = temperature;
        this.maxTokens = maxTokens;
        this.conversationHistory = [];
    }

    async generateResponse(userPrompt, options = {}) {
        const { showTyping = true, delay = 50 } = options;

        // Detect prompt category
        const category = this.detectCategory(userPrompt);

        // Generate contextually appropriate response
        const response = this.craftResponse(userPrompt, category);

        // Simulate typing delay if requested
        if (showTyping) {
            return this.simulateTyping(response, delay);
        }

        return response;
    }

    detectCategory(prompt) {
        const lower = prompt.toLowerCase();

        // Pattern matching for different types of requests
        if (lower.match(/explain|what is|how does|eli5|like i'm/)) {
            return 'explanation';
        }
        if (lower.match(/write|create|generate|draft|compose/)) {
            return 'generation';
        }
        if (lower.match(/code|function|program|debug|error|bug/)) {
            return 'coding';
        }
        if (lower.match(/analyze|review|evaluate|assess|critique/)) {
            return 'analysis';
        }
        if (lower.match(/summarize|tldr|brief|condense/)) {
            return 'summarization';
        }
        if (lower.match(/list|suggest|recommend|ideas|brainstorm/)) {
            return 'ideation';
        }
        if (lower.match(/compare|versus|vs|difference|similar/)) {
            return 'comparison';
        }
        if (lower.match(/step by step|how to|tutorial|guide/)) {
            return 'tutorial';
        }
        if (lower.match(/email|letter|message/)) {
            return 'correspondence';
        }
        if (lower.match(/translate|convert|transform/)) {
            return 'transformation';
        }

        return 'general';
    }

    craftResponse(prompt, category) {
        // Response templates by category
        const responses = {
            explanation: this.generateExplanation(prompt),
            generation: this.generateContent(prompt),
            coding: this.generateCode(prompt),
            analysis: this.generateAnalysis(prompt),
            summarization: this.generateSummary(prompt),
            ideation: this.generateIdeas(prompt),
            comparison: this.generateComparison(prompt),
            tutorial: this.generateTutorial(prompt),
            correspondence: this.generateEmail(prompt),
            transformation: this.generateTransformation(prompt),
            general: this.generateGeneral(prompt)
        };

        const baseResponse = responses[category] || responses.general;

        // Apply persona modifications
        return this.applyPersona(baseResponse);
    }

    generateExplanation(prompt) {
        const responses = [
            "Let me break this down for you.\n\nTo understand this concept, think of it like this: [concept analogy]. The key idea is [main principle].\n\nHere's how it works in practice:\n1. First, [step 1]\n2. Then, [step 2]\n3. Finally, [result]\n\nA real-world example would be: [example scenario].\n\nThe important thing to remember is [key takeaway]. Does this help clarify things?",

            "Great question! Let me explain this in a way that makes sense.\n\n**What it is:** [Definition in simple terms]\n\n**Why it matters:** [Importance and context]\n\n**How it works:**\n- [Mechanism 1]\n- [Mechanism 2]\n- [Mechanism 3]\n\n**Common misconception:** Many people think [wrong idea], but actually [correct understanding].\n\n**In practice:** [Practical application or example]\n\nWould you like me to dive deeper into any particular aspect?",

            "I'll explain this step by step.\n\nImagine you're [relatable scenario]. That's essentially what's happening here.\n\n**The basics:**\n[Core concept in 2-3 sentences]\n\n**Breaking it down:**\n• [Component 1]: [Explanation]\n• [Component 2]: [Explanation]\n• [Component 3]: [Explanation]\n\n**Why this is useful:**\n[Practical benefits and applications]\n\n**Example:**\nLet's say [specific example]. In this case, [how concept applies].\n\nMake sense? Feel free to ask for clarification on any part!"
        ];

        return this.randomChoice(responses);
    }

    generateContent(prompt) {
        const responses = [
            "Here's what I've created based on your request:\n\n---\n\n[Title: Engaging Title Here]\n\n[Opening paragraph that hooks the reader and sets context]\n\n**[Section 1 Heading]**\n\n[Content for section 1 - detailed, relevant, and valuable]\n\n**[Section 2 Heading]**\n\n[Content for section 2 - building on previous points]\n\n**[Section 3 Heading]**\n\n[Content for section 3 - bringing it all together]\n\n**Conclusion**\n\n[Wrap-up with key takeaways and call-to-action]\n\n---\n\nWould you like me to adjust the tone, expand any section, or refine this further?",

            "I've drafted this for you:\n\n# [Compelling Title]\n\n## Introduction\n\n[Hook sentence that grabs attention]\n\n[Context-setting paragraph]\n\n## Main Content\n\n### Point 1: [Subheading]\n[Detailed explanation with examples]\n\n### Point 2: [Subheading]\n[Detailed explanation with examples]\n\n### Point 3: [Subheading]\n[Detailed explanation with examples]\n\n## Takeaways\n\n- [Key point 1]\n- [Key point 2]\n- [Key point 3]\n\n## Next Steps\n\n[Actionable conclusion or call-to-action]\n\n---\n\nLet me know if you'd like me to revise any part of this!",

            "Here's my take on your request:\n\n[Opening line that establishes tone and purpose]\n\n[Body paragraph 1: First main idea with supporting details]\n\n[Body paragraph 2: Second main idea building on the first]\n\n[Body paragraph 3: Third main idea or practical application]\n\n[Conclusion: Bringing it all together with impact]\n\n**Key highlights:**\n• [Highlight 1]\n• [Highlight 2]\n• [Highlight 3]\n\nHow does this look? I can refine the tone, add more detail, or restructure if needed."
        ];

        return this.randomChoice(responses);
    }

    generateCode(prompt) {
        const responses = [
            "Here's a solution for your coding request:\n\n```python\ndef example_function(param1, param2):\n    \"\"\"\n    Description of what this function does.\n    \n    Args:\n        param1: Description of parameter\n        param2: Description of parameter\n    \n    Returns:\n        Description of return value\n    \"\"\"\n    # Step 1: Initialize result\n    result = None\n    \n    # Step 2: Process inputs\n    if param1 and param2:\n        result = param1 + param2\n    \n    # Step 3: Return result\n    return result\n\n# Usage example:\noutput = example_function('Hello', ' World')\nprint(output)  # Output: Hello World\n```\n\n**Explanation:**\n1. [What the code does]\n2. [Key logic or algorithm]\n3. [Edge cases handled]\n\n**To improve further:**\n- [Suggestion 1]\n- [Suggestion 2]\n\nLet me know if you need any modifications!",

            "I've identified the issue and here's the corrected code:\n\n**The Problem:**\n[Explanation of what was wrong]\n\n**The Fix:**\n\n```javascript\nfunction correctedFunction(input) {\n    // Error handling\n    if (!input) {\n        throw new Error('Input required');\n    }\n    \n    // Main logic\n    const result = input\n        .split('')\n        .map(char => char.toUpperCase())\n        .join('');\n    \n    return result;\n}\n\n// Test cases\nconsole.log(correctedFunction('hello')); // 'HELLO'\nconsole.log(correctedFunction('test'));  // 'TEST'\n```\n\n**What changed:**\n1. [Change 1 and why]\n2. [Change 2 and why]\n3. [Change 3 and why]\n\n**Best practices applied:**\n✓ [Practice 1]\n✓ [Practice 2]\n✓ [Practice 3]\n\nThis should work correctly now. Need any additional changes?",

            "Here's a code solution with documentation:\n\n```python\nclass ExampleClass:\n    \"\"\"A class that demonstrates the solution.\"\"\"\n    \n    def __init__(self, config):\n        \"\"\"Initialize with configuration.\"\"\"\n        self.config = config\n        self.cache = {}\n    \n    def process(self, data):\n        \"\"\"Main processing method.\"\"\"\n        # Check cache first\n        if data in self.cache:\n            return self.cache[data]\n        \n        # Process data\n        processed = self._transform(data)\n        \n        # Cache result\n        self.cache[data] = processed\n        \n        return processed\n    \n    def _transform(self, data):\n        \"\"\"Internal transformation logic.\"\"\"\n        return data.upper()\n\n# Example usage:\nprocessor = ExampleClass({'mode': 'fast'})\nresult = processor.process('test data')\nprint(result)\n```\n\n**Key features:**\n- [Feature 1]\n- [Feature 2]\n- [Feature 3]\n\n**Time complexity:** O(n)\n**Space complexity:** O(n)\n\nWant me to optimize or extend this?"
        ];

        return this.randomChoice(responses);
    }

    generateAnalysis(prompt) {
        return "**Analysis:**\n\n**Overview:**\n[High-level summary of what's being analyzed]\n\n**Strengths:**\n✓ [Positive aspect 1 with explanation]\n✓ [Positive aspect 2 with explanation]\n✓ [Positive aspect 3 with explanation]\n\n**Weaknesses:**\n✗ [Issue 1 with specific details]\n✗ [Issue 2 with specific details]\n✗ [Issue 3 with specific details]\n\n**Opportunities:**\n→ [Improvement suggestion 1]\n→ [Improvement suggestion 2]\n→ [Improvement suggestion 3]\n\n**Recommendations:**\n1. [Priority action 1]: [Why it matters]\n2. [Priority action 2]: [Why it matters]\n3. [Priority action 3]: [Why it matters]\n\n**Overall Assessment:**\n[Summary judgment with reasoning]\n\n**Next Steps:**\n[Specific, actionable items to implement]\n\nWould you like me to deep-dive into any particular area?";
    }

    generateSummary(prompt) {
        return "**Summary:**\n\n**Key Points:**\n• [Main point 1]\n• [Main point 2]\n• [Main point 3]\n• [Main point 4]\n• [Main point 5]\n\n**Core Message:**\n[1-2 sentence essence of the content]\n\n**Important Details:**\n- [Critical detail 1]\n- [Critical detail 2]\n- [Critical detail 3]\n\n**Takeaway:**\n[What the reader should remember or do]\n\nThis captures the essential information. Need a longer or shorter version?";
    }

    generateIdeas(prompt) {
        return "Great prompt! Here are some ideas:\n\n**1. [Idea 1 Title]**\n   → [Description and why it works]\n   → [Practical application]\n   \n**2. [Idea 2 Title]**\n   → [Description and why it works]\n   → [Practical application]\n   \n**3. [Idea 3 Title]**\n   → [Description and why it works]\n   → [Practical application]\n   \n**4. [Idea 4 Title]**\n   → [Description and why it works]\n   → [Practical application]\n   \n**5. [Idea 5 Title]**\n   → [Description and why it works]\n   → [Practical application]\n\n**Bonus Ideas:**\n• [Quick idea 1]\n• [Quick idea 2]\n• [Quick idea 3]\n\n**My recommendation:**\nI'd suggest starting with [specific idea] because [reasoning]. It offers [benefits] and is relatively [easy/impactful/etc.].\n\nWant me to expand on any of these?";
    }

    generateComparison(prompt) {
        return "Let me compare these for you:\n\n| Feature | Option A | Option B |\n|---------|----------|----------|\n| [Aspect 1] | [Details for A] | [Details for B] |\n| [Aspect 2] | [Details for A] | [Details for B] |\n| [Aspect 3] | [Details for A] | [Details for B] |\n| [Aspect 4] | [Details for A] | [Details for B] |\n\n**Option A Advantages:**\n✓ [Pro 1]\n✓ [Pro 2]\n✓ [Pro 3]\n\n**Option B Advantages:**\n✓ [Pro 1]\n✓ [Pro 2]\n✓ [Pro 3]\n\n**Key Differences:**\n1. [Major difference 1]\n2. [Major difference 2]\n3. [Major difference 3]\n\n**Recommendation:**\nChoose **Option A** if you need [scenario].\nChoose **Option B** if you need [scenario].\n\n**Bottom Line:**\n[Summary advice based on typical use cases]\n\nNeed help deciding which fits your situation better?";
    }

    generateTutorial(prompt) {
        return "**Step-by-Step Guide:**\n\n**Prerequisites:**\n- [Requirement 1]\n- [Requirement 2]\n- [Requirement 3]\n\n**Step 1: [First Action]**\n\n[Detailed instructions for step 1]\n\n```\n[Code or command example if applicable]\n```\n\n✓ **Checkpoint:** You should now see/have [expected result]\n\n**Step 2: [Second Action]**\n\n[Detailed instructions for step 2]\n\n```\n[Code or command example if applicable]\n```\n\n✓ **Checkpoint:** Verify that [validation]\n\n**Step 3: [Third Action]**\n\n[Detailed instructions for step 3]\n\n```\n[Code or command example if applicable]\n```\n\n**Step 4: [Fourth Action]**\n\n[Final steps and completion]\n\n**Verification:**\n\nTest your work by [testing method]. You should see [expected outcome].\n\n**Common Issues:**\n\n❌ **Problem:** [Issue description]\n✅ **Solution:** [How to fix]\n\n❌ **Problem:** [Issue description]\n✅ **Solution:** [How to fix]\n\n**Next Steps:**\n- [What to learn/do next 1]\n- [What to learn/do next 2]\n- [What to learn/do next 3]\n\nGot stuck anywhere? Let me know!";
    }

    generateEmail(prompt) {
        return "Here's a professional email draft:\n\n**Subject:** [Clear, specific subject line]\n\n---\n\nHi [Name],\n\n[Opening line - friendly but professional]\n\n[Context paragraph - why you're writing]\n\n[Main content paragraph - key information or request]\n\n[Supporting paragraph if needed - additional details]\n\n[Closing paragraph - clear next steps or call-to-action]\n\n[Sign-off line]\n\nBest regards,\n[Your name]\n\n---\n\n**Tone:** [Professional/Friendly/Formal]\n**Length:** [Concise/Detailed]\n**Key elements:** ✓ Clear purpose ✓ Specific ask ✓ Professional tone\n\nWould you like me to adjust the formality, add/remove details, or change anything?";
    }

    generateTransformation(prompt) {
        return "**Original:**\n[Input shown here]\n\n**Transformed:**\n[Output in requested format]\n\n**What changed:**\n1. [Change 1 and why]\n2. [Change 2 and why]\n3. [Change 3 and why]\n\n**Notes:**\n- [Important consideration 1]\n- [Important consideration 2]\n\nNeed any adjustments to the transformation?";
    }

    generateGeneral(prompt) {
        return "I understand you're asking about [topic/request].\n\n[Thoughtful response addressing the prompt]\n\n[Additional context or information]\n\n[Practical application or example]\n\n**Key points:**\n• [Point 1]\n• [Point 2]\n• [Point 3]\n\nIs there a specific aspect you'd like me to explore further?";
    }

    applyPersona(response) {
        // Modify response based on persona
        switch(this.persona.name) {
            case "Creative Writer":
                return "✨ " + response + "\n\n*[Adds creative flair and vivid language]*";
            case "Precise & Technical":
                return response + "\n\n**Technical Note:** This response prioritizes accuracy and precision over creativity.";
            case "Patient Teacher":
                return response + "\n\n📚 *Remember: Learning takes time. Feel free to ask questions if anything is unclear!*";
            case "Code Expert":
                return response.includes("```") ? response : response + "\n\n💻 *Let me know if you need the code explained differently or want to see alternative approaches.*";
            case "Data Analyst":
                return response + "\n\n📊 *This analysis is based on the information provided. Additional data could reveal more insights.*";
            case "Marketing Guru":
                return "🎯 " + response + "\n\n*Remember: Always think about your audience first!*";
            default:
                return response;
        }
    }

    async simulateTyping(text, delay = 50) {
        // Returns a promise that resolves with chunks of text
        // Caller can use this to display typing animation
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(text);
            }, Math.random() * 1000 + 1000); // 1-2 second delay
        });
    }

    randomChoice(array) {
        return array[Math.floor(Math.random() * array.length)];
    }

    estimateTokens(text) {
        return Math.ceil(text.length / 4);
    }

    addToHistory(role, content) {
        this.conversationHistory.push({ role, content, timestamp: new Date() });
    }

    clearHistory() {
        this.conversationHistory = [];
    }

    getHistory() {
        return this.conversationHistory;
    }

    updateSettings(settings) {
        if (settings.persona) {
            this.persona = AI_PERSONAS[settings.persona] || this.persona;
        }
        if (settings.temperature !== undefined) {
            this.temperature = settings.temperature;
        }
        if (settings.maxTokens !== undefined) {
            this.maxTokens = settings.maxTokens;
        }
    }
}

// Export for use
if (typeof window !== 'undefined') {
    window.ChatGPTSimulator = ChatGPTSimulator;
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = ChatGPTSimulator;
}
