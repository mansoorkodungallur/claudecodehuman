# ChatGPT Mastery Course - Setup Guide

## Overview

Welcome to the ChatGPT Mastery Course! This is a complete, production-ready learning platform that teaches you how to master ChatGPT through hands-on practice. Everything runs locally in your browser - no server setup required!

## Quick Start (Easiest)

### Option 1: Simple HTTP Server (Recommended)

If you have Python installed:

```bash
# Navigate to the project directory
cd chatgpt-mastery-course

# Start a local server
python -m http.server 8000

# Open your browser to:
# http://localhost:8000
```

If you have Node.js installed:

```bash
# Navigate to the project directory
cd chatgpt-mastery-course

# Install http-server globally (one time only)
npm install -g http-server

# Start the server
http-server -p 8000

# Open your browser to:
# http://localhost:8000
```

### Option 2: PHP Built-in Server

If you have PHP installed:

```bash
# Navigate to the project directory
cd chatgpt-mastery-course

# Start PHP server
php -S localhost:8000

# Open your browser to:
# http://localhost:8000
```

### Option 3: Open Directly (May have limitations)

Some browsers allow opening HTML files directly:

```bash
# On macOS
open index.html

# On Linux
xdg-open index.html

# On Windows
start index.html
```

**Note:** Opening files directly may cause issues with JavaScript modules and localStorage. Using a local server is strongly recommended.

## Project Structure

```
chatgpt-mastery-course/
├── index.html              # Main dashboard with skill assessment
├── beginner.html          # Module 1: Beginner content
├── intermediate.html      # Module 2: Intermediate content
├── expert.html            # Module 3: Expert content
├── playground.html        # Interactive practice environment
├── css/
│   ├── style.css          # Main stylesheet
│   └── prism.css          # Syntax highlighting
├── js/
│   ├── main.js            # Core functionality
│   ├── prompts.js         # 100+ prompt examples
│   └── simulator.js       # Mock ChatGPT engine
├── assets/
│   └── icons/             # SVG icons (optional)
├── data/
│   └── exercises.json     # Exercise definitions
├── SETUP.md               # This file
└── README.md              # Project documentation
```

## Features

### ✅ Fully Functional Out of the Box

- **No dependencies to install** - Pure vanilla JavaScript
- **No build process** - Just open and start learning
- **Offline capable** - Works without internet (except API examples)
- **Progress tracking** - Uses localStorage to save your progress
- **Dark mode** - Toggle between light and dark themes
- **Responsive design** - Works on desktop, tablet, and mobile

### 🎓 Learning Modules

1. **Beginner: First Steps** (~2 hours)
   - ChatGPT fundamentals
   - Basic prompt writing
   - Safety and ethics
   - Interactive exercises

2. **Intermediate: Prompt Craftsmanship** (~4 hours)
   - RTFC framework
   - Advanced patterns (chain-of-thought, few-shot)
   - 12 use case deep dives
   - Prompt analyzer tool

3. **Expert: Advanced Automation** (~6 hours)
   - API integration (Python & Node.js)
   - Token management
   - Workflow automation
   - Custom GPT creation
   - Production content pipeline

### 🎮 Interactive Features

- **Skill Assessment Quiz** - Find your starting point
- **Mock ChatGPT Simulator** - Practice without API costs
- **Playground** - Test prompts with different settings
- **Progress Tracking** - See your completion status
- **Badge System** - Earn achievements as you learn
- **Code Examples** - Copy-paste ready code snippets
- **Exercise Validation** - Check your work

## Browser Compatibility

Works best in modern browsers:

- ✅ Chrome/Edge (v90+)
- ✅ Firefox (v88+)
- ✅ Safari (v14+)
- ⚠️ Internet Explorer (not supported)

### Required Browser Features

- ES6+ JavaScript support
- localStorage
- CSS Grid & Flexbox
- CSS Custom Properties (variables)

## Customization

### Changing Colors/Theme

Edit `css/style.css` and modify the CSS variables in `:root`:

```css
:root {
    --primary: #10a37f;      /* Main brand color */
    --accent: #8b5cf6;       /* Accent color */
    /* ... more variables ... */
}
```

### Adding Your Own Prompts

Edit `js/prompts.js` and add to the `PROMPTS_LIBRARY` object:

```javascript
const PROMPTS_LIBRARY = {
    beginner: {
        // Add your prompts here
    }
};
```

### Customizing Exercises

Edit `data/exercises.json` to add, remove, or modify exercises.

## Troubleshooting

### Issue: "Nothing happens when I click buttons"

**Solution:** Make sure JavaScript is enabled and you're using a local server (not opening files directly).

### Issue: "Progress doesn't save"

**Solution:**
1. Check that localStorage is enabled in your browser
2. You're not in private/incognito mode (some browsers restrict storage)
3. Clear your browser cache and try again

### Issue: "Styles look broken"

**Solution:**
1. Hard refresh your browser (Ctrl+Shift+R or Cmd+Shift+R)
2. Check that `css/style.css` loaded correctly in DevTools
3. Make sure you're using a supported browser

### Issue: "Simulator doesn't respond"

**Solution:**
1. Open browser console (F12) and check for JavaScript errors
2. Verify `js/simulator.js` loaded correctly
3. Try refreshing the page

### Issue: "Code examples don't copy"

**Solution:**
1. Check clipboard permissions in your browser
2. Some browsers require HTTPS for clipboard API
3. Try manually selecting and copying the code

## Using the API Examples

The Expert module includes Python and Node.js code examples that interact with the OpenAI API.

### Prerequisites

- OpenAI API account (sign up at platform.openai.com)
- API key (keep it secret!)
- Python 3.7+ or Node.js 14+ installed

### Setting Up Python

```bash
# Install the OpenAI library
pip install openai

# Set your API key as environment variable
export OPENAI_API_KEY='your-key-here'

# Or on Windows
set OPENAI_API_KEY=your-key-here
```

### Setting Up Node.js

```bash
# Install the OpenAI library
npm install openai

# Create .env file
echo "OPENAI_API_KEY=your-key-here" > .env

# Install dotenv
npm install dotenv
```

### Important: API Keys

- **Never** hardcode your API key in code
- **Never** commit API keys to version control
- **Always** use environment variables
- **Set** usage limits in your OpenAI dashboard

## Tips for Best Learning Experience

1. **Go in order** - Start with Beginner even if you've used ChatGPT before
2. **Do the exercises** - Reading isn't enough; practice is key
3. **Use the playground** - Test variations of prompts
4. **Take notes** - Keep a personal prompt library
5. **Experiment** - Try modifying examples to see what happens
6. **Review regularly** - Come back to earlier modules as you progress

## Deployment

Want to share your course or deploy it online?

### GitHub Pages

```bash
# Initialize git (if not already)
git init
git add .
git commit -m "Initial commit"

# Create repo on GitHub, then:
git remote add origin https://github.com/yourusername/chatgpt-course.git
git push -u origin main

# Enable GitHub Pages in repo settings
# Choose "main" branch and "/" root
```

Your course will be live at: `https://yourusername.github.io/chatgpt-course/`

### Netlify

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Deploy
netlify deploy

# Follow prompts, then deploy to production
netlify deploy --prod
```

### Vercel

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel

# Follow prompts
```

## Advanced Configuration

### Adding Analytics

Add Google Analytics or Plausible to track usage:

```html
<!-- Add to <head> of index.html -->
<script async src="https://www.googletagmanager.com/gtag/js?id=YOUR-ID"></script>
```

### Adding Custom Personas

Edit `js/prompts.js` and add to `AI_PERSONAS`:

```javascript
const AI_PERSONAS = {
    // ... existing personas ...
    custom: {
        name: "Your Custom Persona",
        description: "Description here",
        systemPrompt: "You are...",
        temperature: 0.7
    }
};
```

## Support

- **Found a bug?** Open an issue on GitHub
- **Have a suggestion?** Submit a feature request
- **Want to contribute?** Pull requests welcome!

## License

This project is provided as-is for educational purposes. Feel free to modify and use for personal or educational use.

## Credits

Created with ❤️ for anyone who wants to master ChatGPT through hands-on learning.

---

**Ready to start?** Run `python -m http.server 8000` and open http://localhost:8000 to begin your journey!
