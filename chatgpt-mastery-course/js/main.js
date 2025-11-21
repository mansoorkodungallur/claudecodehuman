/* ========================================
   ChatGPT Mastery Course - Main JavaScript
   Core Functionality and Utilities
   ======================================== */

// ==========================================
// STORAGE & STATE MANAGEMENT
// ==========================================

const Storage = {
    get(key, defaultValue = null) {
        try {
            const item = localStorage.getItem(key);
            return item ? JSON.parse(item) : defaultValue;
        } catch (e) {
            console.error('Error reading from storage:', e);
            return defaultValue;
        }
    },

    set(key, value) {
        try {
            localStorage.setItem(key, JSON.stringify(value));
            return true;
        } catch (e) {
            console.error('Error writing to storage:', e);
            return false;
        }
    },

    remove(key) {
        try {
            localStorage.removeItem(key);
            return true;
        } catch (e) {
            console.error('Error removing from storage:', e);
            return false;
        }
    },

    clear() {
        try {
            localStorage.clear();
            return true;
        } catch (e) {
            console.error('Error clearing storage:', e);
            return false;
        }
    }
};

// Progress tracking
const Progress = {
    getProgress(module) {
        return Storage.get(`progress_${module}`, {
            completed: false,
            sections: [],
            exercises: [],
            score: 0,
            timeSpent: 0,
            lastVisited: null
        });
    },

    setProgress(module, data) {
        const current = this.getProgress(module);
        const updated = { ...current, ...data, lastVisited: new Date().toISOString() };
        return Storage.set(`progress_${module}`, updated);
    },

    completeSection(module, sectionId) {
        const progress = this.getProgress(module);
        if (!progress.sections.includes(sectionId)) {
            progress.sections.push(sectionId);
            this.setProgress(module, progress);
        }
    },

    completeExercise(module, exerciseId) {
        const progress = this.getProgress(module);
        if (!progress.exercises.includes(exerciseId)) {
            progress.exercises.push(exerciseId);
            this.setProgress(module, progress);
        }
    },

    getOverallProgress() {
        const beginner = this.getProgress('beginner');
        const intermediate = this.getProgress('intermediate');
        const expert = this.getProgress('expert');

        const totalSections = 18; // 6 per module
        const completedSections = beginner.sections.length + intermediate.sections.length + expert.sections.length;

        return {
            percentage: Math.round((completedSections / totalSections) * 100),
            beginner: beginner,
            intermediate: intermediate,
            expert: expert,
            totalExercises: beginner.exercises.length + intermediate.exercises.length + expert.exercises.length
        };
    }
};

// Badges system
const Badges = {
    available: [
        { id: 'first_prompt', name: 'First Prompt', icon: '🎯', description: 'Sent your first prompt' },
        { id: 'beginner_complete', name: 'Beginner Graduate', icon: '🌱', description: 'Completed Beginner module' },
        { id: 'first_project', name: 'Project Builder', icon: '🏗️', description: 'Completed first project' },
        { id: 'prompt_fixer', name: 'Prompt Doctor', icon: '⚕️', description: 'Fixed 5 bad prompts' },
        { id: 'intermediate_complete', name: 'Prompt Engineer', icon: '🚀', description: 'Completed Intermediate module' },
        { id: 'content_master', name: 'Content Master', icon: '✍️', description: 'Built content generator' },
        { id: 'rtfc_master', name: 'RTFC Expert', icon: '🎭', description: 'Mastered RTFC framework' },
        { id: 'pattern_pro', name: 'Pattern Pro', icon: '🧩', description: 'Used all prompt patterns' },
        { id: 'expert_complete', name: 'AI Automation Expert', icon: '⚡', description: 'Completed Expert module' },
        { id: 'api_wizard', name: 'API Wizard', icon: '🧙', description: 'Built API tool' },
        { id: 'pipeline_builder', name: 'Pipeline Builder', icon: '🏭', description: 'Created content pipeline' },
        { id: 'course_complete', name: 'ChatGPT Master', icon: '🏆', description: 'Completed entire course' }
    ],

    getEarned() {
        return Storage.get('badges', []);
    },

    award(badgeId) {
        const earned = this.getEarned();
        if (!earned.includes(badgeId)) {
            earned.push(badgeId);
            Storage.set('badges', earned);
            this.showNotification(badgeId);
            return true;
        }
        return false;
    },

    showNotification(badgeId) {
        const badge = this.available.find(b => b.id === badgeId);
        if (!badge) return;

        const notification = document.createElement('div');
        notification.className = 'badge-notification';
        notification.innerHTML = `
            <div class="badge-icon">${badge.icon}</div>
            <div class="badge-info">
                <strong>Badge Earned!</strong>
                <p>${badge.name}</p>
            </div>
        `;
        document.body.appendChild(notification);

        setTimeout(() => notification.classList.add('show'), 100);
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }
};

// ==========================================
// THEME MANAGEMENT
// ==========================================

const Theme = {
    current: Storage.get('theme', 'light'),

    init() {
        this.apply(this.current);
        this.setupToggle();
    },

    apply(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        this.current = theme;
        Storage.set('theme', theme);
        this.updateToggleIcon();
    },

    toggle() {
        const newTheme = this.current === 'light' ? 'dark' : 'light';
        this.apply(newTheme);
    },

    setupToggle() {
        const toggleBtn = document.getElementById('themeToggle');
        if (toggleBtn) {
            toggleBtn.addEventListener('click', () => this.toggle());
        }
    },

    updateToggleIcon() {
        const icon = document.querySelector('.theme-icon');
        if (icon) {
            icon.textContent = this.current === 'light' ? '🌙' : '☀️';
        }
    }
};

// ==========================================
// NAVIGATION & PAGE PROGRESS
// ==========================================

const Navigation = {
    init() {
        this.updateNavLocks();
        this.setupScrollProgress();
    },

    updateNavLocks() {
        const progress = Progress.getOverallProgress();
        const intermediateLink = document.getElementById('nav-intermediate');
        const expertLink = document.getElementById('nav-expert');

        // Unlock intermediate if beginner complete
        if (intermediateLink) {
            if (progress.beginner.completed) {
                intermediateLink.classList.remove('nav-locked');
                intermediateLink.removeAttribute('disabled');
                intermediateLink.href = 'intermediate.html';
            }
        }

        // Unlock expert if intermediate complete
        if (expertLink) {
            if (progress.intermediate.completed) {
                expertLink.classList.remove('nav-locked');
                expertLink.removeAttribute('disabled');
                expertLink.href = 'expert.html';
            }
        }
    },

    setupScrollProgress() {
        const progressBar = document.getElementById('pageProgressFill');
        if (!progressBar) return;

        window.addEventListener('scroll', () => {
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight - windowHeight;
            const scrolled = window.scrollY;
            const progress = (scrolled / documentHeight) * 100;

            progressBar.style.width = `${Math.min(progress, 100)}%`;
        });
    }
};

// ==========================================
// UTILITY FUNCTIONS
// ==========================================

function copyToClipboard(elementId) {
    const element = document.getElementById(elementId);
    if (!element) return false;

    const text = element.textContent || element.value;
    navigator.clipboard.writeText(text).then(() => {
        showToast('Copied to clipboard!', 'success');
        return true;
    }).catch(err => {
        console.error('Copy failed:', err);
        showToast('Failed to copy', 'error');
        return false;
    });
}

function showToast(message, type = 'info') {
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.textContent = message;
    document.body.appendChild(toast);

    setTimeout(() => toast.classList.add('show'), 100);
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
    }, 2000);
}

function estimateTokens(text) {
    // Rough estimation: 1 token ≈ 4 characters
    return Math.ceil(text.length / 4);
}

function formatTime(minutes) {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return hours > 0 ? `${hours}h ${mins}m` : `${mins}m`;
}

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// ==========================================
// DASHBOARD FUNCTIONALITY
// ==========================================

function initDashboard() {
    Theme.init();
    Navigation.init();
    loadDashboardData();
    setupAssessment();
    loadQuickPractice();
    loadBadges();
}

function loadDashboardData() {
    const progress = Progress.getOverallProgress();

    // Update overall progress circle
    const circle = document.getElementById('progressCircle');
    if (circle) {
        const circumference = 283;
        const offset = circumference - (progress.percentage / 100) * circumference;
        circle.style.strokeDashoffset = offset;
    }

    const percentageEl = document.getElementById('overallPercentage');
    if (percentageEl) {
        percentageEl.textContent = `${progress.percentage}%`;
    }

    // Update stats
    const exercisesCompleted = document.getElementById('exercisesCompleted');
    if (exercisesCompleted) {
        exercisesCompleted.textContent = `${progress.totalExercises}/50+`;
    }

    const badgesEarned = document.getElementById('badgesEarned');
    if (badgesEarned) {
        badgesEarned.textContent = `${Badges.getEarned().length}/12`;
    }

    // Update path cards
    updatePathCard('beginner', progress.beginner);
    updatePathCard('intermediate', progress.intermediate);
    updatePathCard('expert', progress.expert);
}

function updatePathCard(level, data) {
    const progressBar = document.getElementById(`${level}Progress`);
    const label = document.getElementById(`${level}ProgressLabel`);
    const btn = document.getElementById(`${level}Btn`);
    const lock = document.getElementById(`${level}Lock`);

    if (!progressBar) return;

    const percentage = data.sections.length > 0 ? (data.sections.length / 6) * 100 : 0;
    progressBar.style.width = `${percentage}%`;

    if (label) {
        if (data.completed) {
            label.textContent = 'Completed ✓';
        } else if (percentage > 0) {
            label.textContent = `${Math.round(percentage)}% Complete`;
        } else {
            label.textContent = 'Not Started';
        }
    }

    // Handle locks
    if (level === 'intermediate' && btn && lock) {
        const beginnerComplete = Progress.getProgress('beginner').completed;
        if (beginnerComplete) {
            lock.style.display = 'none';
            btn.disabled = false;
            btn.textContent = 'Start Intermediate Path';
            btn.onclick = () => window.location.href = 'intermediate.html';
        }
    }

    if (level === 'expert' && btn && lock) {
        const intermediateComplete = Progress.getProgress('intermediate').completed;
        if (intermediateComplete) {
            lock.style.display = 'none';
            btn.disabled = false;
            btn.textContent = 'Start Expert Path';
            btn.onclick = () => window.location.href = 'expert.html';
        }
    }
}

// ==========================================
// ASSESSMENT QUIZ
// ==========================================

const assessmentQuestions = [
    {
        question: "Have you used ChatGPT before?",
        options: [
            { text: "Never used it", score: 0 },
            { text: "Tried it once or twice", score: 1 },
            { text: "Use it occasionally", score: 2 },
            { text: "Use it regularly", score: 3 }
        ]
    },
    {
        question: "Which best describes a good prompt?",
        options: [
            { text: "Short and vague", score: 0 },
            { text: "Long and detailed", score: 2 },
            { text: "Clear and specific", score: 3 },
            { text: "Doesn't matter", score: 0 }
        ]
    },
    {
        question: "What does 'temperature' control in ChatGPT?",
        options: [
            { text: "Response speed", score: 0 },
            { text: "Creativity/randomness", score: 3 },
            { text: "Response length", score: 0 },
            { text: "I don't know", score: 0 }
        ]
    },
    {
        question: "Have you written prompts with specific roles?",
        options: [
            { text: "What's a role?", score: 0 },
            { text: "Heard of it but never tried", score: 1 },
            { text: "Tried it a few times", score: 2 },
            { text: "Use roles regularly", score: 3 }
        ]
    },
    {
        question: "Do you know what tokens are?",
        options: [
            { text: "No idea", score: 0 },
            { text: "Vaguely heard of them", score: 1 },
            { text: "Yes, they measure text", score: 2 },
            { text: "Yes, and I optimize for them", score: 3 }
        ]
    },
    {
        question: "Have you used the OpenAI API?",
        options: [
            { text: "What's an API?", score: 0 },
            { text: "Know what it is, never used", score: 1 },
            { text: "Tried it once", score: 2 },
            { text: "Built tools with it", score: 3 }
        ]
    },
    {
        question: "How do you handle poor ChatGPT responses?",
        options: [
            { text: "Give up and try something else", score: 0 },
            { text: "Try rewording the same prompt", score: 1 },
            { text: "Provide more context and iterate", score: 2 },
            { text: "Use advanced techniques like chain-of-thought", score: 3 }
        ]
    },
    {
        question: "Can you explain what 'few-shot learning' is?",
        options: [
            { text: "Never heard of it", score: 0 },
            { text: "Sounds familiar", score: 1 },
            { text: "Giving examples in prompts", score: 3 },
            { text: "Not sure", score: 0 }
        ]
    },
    {
        question: "What's your main goal with ChatGPT?",
        options: [
            { text: "Just curious to learn", score: 0 },
            { text: "Personal productivity", score: 1 },
            { text: "Professional work tasks", score: 2 },
            { text: "Building AI-powered tools", score: 3 }
        ]
    },
    {
        question: "How comfortable are you with programming?",
        options: [
            { text: "No coding experience", score: 0 },
            { text: "Basic understanding", score: 1 },
            { text: "Can write simple scripts", score: 2 },
            { text: "Professional developer", score: 3 }
        ]
    }
];

let assessmentState = {
    currentQuestion: 0,
    answers: [],
    totalScore: 0
};

function setupAssessment() {
    const startBtn = document.getElementById('startAssessment');
    if (!startBtn) return;

    startBtn.addEventListener('click', startAssessment);
}

function startAssessment() {
    assessmentState = { currentQuestion: 0, answers: [], totalScore: 0 };

    const intro = document.getElementById('assessmentIntro');
    const quiz = document.getElementById('assessmentQuiz');

    if (intro) intro.classList.add('hidden');
    if (quiz) quiz.classList.remove('hidden');

    showQuestion(0);
}

function showQuestion(index) {
    const question = assessmentQuestions[index];
    const questionText = document.getElementById('questionText');
    const optionsContainer = document.getElementById('quizOptions');
    const progress = document.getElementById('quizProgress');
    const progressText = document.getElementById('quizProgressText');

    if (questionText) questionText.textContent = question.question;
    if (progressText) progressText.textContent = `Question ${index + 1} of ${assessmentQuestions.length}`;
    if (progress) progress.style.width = `${((index + 1) / assessmentQuestions.length) * 100}%`;

    if (optionsContainer) {
        optionsContainer.innerHTML = question.options.map((opt, i) => `
            <label class="radio-option">
                <input type="radio" name="q${index}" value="${i}" data-score="${opt.score}">
                <span>${opt.text}</span>
            </label>
        `).join('');

        // Enable next button when option selected
        const radios = optionsContainer.querySelectorAll('input[type="radio"]');
        radios.forEach(radio => {
            radio.addEventListener('change', () => {
                document.getElementById('nextQuestion').disabled = false;
            });
        });
    }

    // Setup navigation
    const nextBtn = document.getElementById('nextQuestion');
    const prevBtn = document.getElementById('prevQuestion');

    if (nextBtn) {
        nextBtn.disabled = true;
        nextBtn.onclick = () => nextQuestion();
    }

    if (prevBtn) {
        prevBtn.disabled = index === 0;
        prevBtn.onclick = () => prevQuestion();
    }
}

function nextQuestion() {
    // Save answer
    const selected = document.querySelector(`input[name="q${assessmentState.currentQuestion}"]:checked`);
    if (selected) {
        assessmentState.answers[assessmentState.currentQuestion] = parseInt(selected.value);
        assessmentState.totalScore += parseInt(selected.dataset.score);
    }

    assessmentState.currentQuestion++;

    if (assessmentState.currentQuestion < assessmentQuestions.length) {
        showQuestion(assessmentState.currentQuestion);
    } else {
        showAssessmentResults();
    }
}

function prevQuestion() {
    if (assessmentState.currentQuestion > 0) {
        assessmentState.currentQuestion--;
        showQuestion(assessmentState.currentQuestion);
    }
}

function showAssessmentResults() {
    const quiz = document.getElementById('assessmentQuiz');
    const results = document.getElementById('assessmentResults');

    if (quiz) quiz.classList.add('hidden');
    if (results) results.classList.remove('hidden');

    const score = assessmentState.totalScore;
    const maxScore = 30;
    const percentage = Math.round((score / maxScore) * 100);

    let level, description, icon, recommendedPath;

    if (score <= 10) {
        level = 'Beginner';
        icon = '🌱';
        recommendedPath = 'beginner.html';
        description = "You're just starting your ChatGPT journey! No worries - everyone starts somewhere. The Beginner module will teach you everything from scratch.";
    } else if (score <= 20) {
        level = 'Intermediate';
        icon = '🚀';
        recommendedPath = 'intermediate.html';
        description = "You have a solid foundation! You've used ChatGPT before and understand the basics. The Intermediate module will teach you advanced prompt engineering techniques.";
    } else {
        level = 'Advanced';
        icon = '⚡';
        recommendedPath = 'expert.html';
        description = "Impressive! You're already comfortable with ChatGPT and maybe even API usage. The Expert module will teach you automation, workflow building, and production deployment.";
    }

    const resultsTitle = document.getElementById('resultsTitle');
    const resultsDesc = document.getElementById('resultsDescription');
    const resultsIcon = document.getElementById('resultsIcon');
    const scoreValue = document.getElementById('scoreValue');
    const startLearningBtn = document.getElementById('startLearning');

    if (resultsTitle) resultsTitle.textContent = `Your Skill Level: ${level}`;
    if (resultsDesc) resultsDesc.textContent = description;
    if (resultsIcon) resultsIcon.textContent = icon;
    if (scoreValue) scoreValue.textContent = `${score}/${maxScore}`;

    if (startLearningBtn) {
        startLearningBtn.onclick = () => window.location.href = recommendedPath;
    }

    const retakeBtn = document.getElementById('retakeAssessment');
    if (retakeBtn) {
        retakeBtn.onclick = () => {
            results.classList.add('hidden');
            document.getElementById('assessmentIntro').classList.remove('hidden');
        };
    }

    const actionsDiv = document.getElementById('completionActions');
    if (actionsDiv) actionsDiv.classList.remove('hidden');

    // Save assessment result
    Storage.set('assessmentCompleted', { score, level, date: new Date().toISOString() });
}

// ==========================================
// QUICK PRACTICE PROMPTS
// ==========================================

function loadQuickPractice() {
    const container = document.getElementById('quickPracticeGrid');
    if (!container) return;

    const practicePrompts = [
        { title: "Summarize Text", prompt: "Summarize this article in 3 bullet points: [paste text]", difficulty: "Beginner" },
        { title: "Email Draft", prompt: "Write a professional email requesting a meeting about [topic]", difficulty: "Beginner" },
        { title: "Code Debug", prompt: "Explain why this code isn't working: [paste code]", difficulty: "Intermediate" },
        { title: "Creative Writing", prompt: "Write a short story about [theme] in the style of [author]", difficulty: "Intermediate" },
        { title: "Data Analysis", prompt: "Analyze these numbers and identify trends: [paste data]", difficulty: "Advanced" }
    ];

    container.innerHTML = practicePrompts.map(p => `
        <div class="practice-card">
            <div class="practice-header">
                <h4>${p.title}</h4>
                <span class="difficulty-badge ${p.difficulty.toLowerCase()}">${p.difficulty}</span>
            </div>
            <p class="practice-prompt">${p.prompt}</p>
            <button class="btn btn-sm btn-primary" onclick="tryPrompt('${p.prompt}')">Try in Playground</button>
        </div>
    `).join('');
}

function tryPrompt(prompt) {
    Storage.set('pendingPrompt', prompt);
    window.location.href = 'playground.html';
}

// ==========================================
// BADGES DISPLAY
// ==========================================

function loadBadges() {
    const container = document.getElementById('badgesGrid');
    if (!container) return;

    const earned = Badges.getEarned();

    container.innerHTML = Badges.available.map(badge => `
        <div class="badge-item ${earned.includes(badge.id) ? 'earned' : 'locked'}">
            <div class="badge-icon-large">${badge.icon}</div>
            <h4>${badge.name}</h4>
            <p>${badge.description}</p>
            ${earned.includes(badge.id) ? '<span class="badge-status">✓ Earned</span>' : '<span class="badge-status">🔒 Locked</span>'}
        </div>
    `).join('');
}

// ==========================================
// MODAL MANAGEMENT
// ==========================================

function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('hidden');
        document.body.style.overflow = 'auto';
    }
}

// Click outside to close
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal')) {
        e.target.classList.add('hidden');
        document.body.style.overflow = 'auto';
    }
});

// ==========================================
// COPY CODE FUNCTIONALITY
// ==========================================

function copyCode(button) {
    const codeBlock = button.closest('.code-example').querySelector('code');
    if (!codeBlock) return;

    const text = codeBlock.textContent;
    navigator.clipboard.writeText(text).then(() => {
        const original = button.textContent;
        button.textContent = '✓ Copied!';
        button.style.backgroundColor = 'var(--success)';
        setTimeout(() => {
            button.textContent = original;
            button.style.backgroundColor = '';
        }, 2000);
    });
}

// ==========================================
// INITIALIZE ON PAGE LOAD
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
    Theme.init();
    Navigation.init();
});

// Make functions globally available
window.copyToClipboard = copyToClipboard;
window.showToast = showToast;
window.copyCode = copyCode;
window.openModal = openModal;
window.closeModal = closeModal;
window.tryPrompt = tryPrompt;
window.Storage = Storage;
window.Progress = Progress;
window.Badges = Badges;
