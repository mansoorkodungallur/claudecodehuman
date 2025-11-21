/* ========================================
   UI Enhancements
   ChatGPT Mastery Course
   ======================================== */

// ==========================================
// TOAST NOTIFICATION SYSTEM
// ==========================================

const ToastManager = {
    container: null,
    toasts: [],

    init() {
        if (!this.container) {
            this.container = document.createElement('div');
            this.container.className = 'toast-container';
            document.body.appendChild(this.container);
        }
    },

    show(message, type = 'info', duration = 3000, dismissible = true) {
        this.init();

        const toast = this.create(message, type, dismissible);
        this.container.appendChild(toast);
        this.toasts.push(toast);

        // Trigger animation
        setTimeout(() => toast.classList.add('show'), 10);

        // Auto dismiss
        if (duration > 0) {
            setTimeout(() => this.dismiss(toast), duration);
        }

        return toast;
    },

    create(message, type, dismissible) {
        const toast = document.createElement('div');
        toast.className = `toast toast-${type}`;

        const icons = {
            success: '✓',
            error: '✕',
            warning: '⚠',
            info: 'ℹ'
        };

        const titles = {
            success: 'Success',
            error: 'Error',
            warning: 'Warning',
            info: 'Info'
        };

        toast.innerHTML = `
            <div class="toast-icon">${icons[type] || icons.info}</div>
            <div class="toast-content">
                <div class="toast-title">${titles[type] || titles.info}</div>
                <div class="toast-message">${message}</div>
            </div>
            ${dismissible ? '<button class="toast-close" aria-label="Close">×</button>' : ''}
        `;

        if (dismissible) {
            const closeBtn = toast.querySelector('.toast-close');
            closeBtn.addEventListener('click', () => this.dismiss(toast));
        }

        return toast;
    },

    dismiss(toast) {
        toast.classList.remove('show');
        setTimeout(() => {
            toast.remove();
            this.toasts = this.toasts.filter(t => t !== toast);
        }, 300);
    },

    success(message, duration) {
        return this.show(message, 'success', duration);
    },

    error(message, duration) {
        return this.show(message, 'error', duration);
    },

    warning(message, duration) {
        return this.show(message, 'warning', duration);
    },

    info(message, duration) {
        return this.show(message, 'info', duration);
    }
};

// ==========================================
// LOADING OVERLAY
// ==========================================

const LoadingOverlay = {
    overlay: null,

    init() {
        if (!this.overlay) {
            this.overlay = document.createElement('div');
            this.overlay.className = 'loading-overlay';
            this.overlay.innerHTML = `
                <div class="loading-content">
                    <div class="loading-spinner"></div>
                    <div class="loading-text">Loading...</div>
                </div>
            `;
            document.body.appendChild(this.overlay);
        }
    },

    show(text = 'Loading...') {
        this.init();
        const textEl = this.overlay.querySelector('.loading-text');
        if (textEl) textEl.textContent = text;
        setTimeout(() => this.overlay.classList.add('active'), 10);
    },

    hide() {
        if (this.overlay) {
            this.overlay.classList.remove('active');
        }
    }
};

// ==========================================
// KEYBOARD SHORTCUTS
// ==========================================

const KeyboardShortcuts = {
    shortcuts: {
        'ctrl+k,cmd+k': () => SearchModal.open(),
        '?': () => KeyboardShortcuts.showHelp(),
        'escape': () => {
            SearchModal.close();
            KeyboardShortcuts.closeHelp();
        },
        't': () => Theme.toggle(),
        'h': () => window.location.href = 'index.html',
        'n': () => KeyboardShortcuts.nextLesson(),
        'p': () => KeyboardShortcuts.prevLesson()
    },

    init() {
        document.addEventListener('keydown', (e) => this.handleKeyPress(e));
    },

    handleKeyPress(e) {
        // Don't trigger shortcuts when typing in inputs
        if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
            if (e.key !== 'Escape') return;
        }

        const key = e.key.toLowerCase();
        const ctrl = e.ctrlKey || e.metaKey;

        // Build shortcut string
        let shortcut = '';
        if (ctrl) shortcut += 'ctrl+';
        shortcut += key;

        // Also try cmd+
        const cmdShortcut = shortcut.replace('ctrl+', 'cmd+');

        // Check if shortcut exists
        if (this.shortcuts[shortcut] || this.shortcuts[cmdShortcut]) {
            e.preventDefault();
            (this.shortcuts[shortcut] || this.shortcuts[cmdShortcut])();
        } else if (this.shortcuts[key]) {
            e.preventDefault();
            this.shortcuts[key]();
        }
    },

    showHelp() {
        const modal = document.createElement('div');
        modal.className = 'modal shortcuts-modal';
        modal.id = 'shortcutsModal';
        modal.innerHTML = `
            <div class="modal-content">
                <div class="modal-header">
                    <h3>Keyboard Shortcuts</h3>
                    <button class="modal-close" onclick="KeyboardShortcuts.closeHelp()">×</button>
                </div>
                <div class="modal-body">
                    <div class="shortcuts-grid">
                        <div class="shortcut-item">
                            <span class="shortcut-description">Open Search</span>
                            <div class="shortcut-keys">
                                <kbd class="shortcut-key">Ctrl</kbd>
                                <kbd class="shortcut-key">K</kbd>
                            </div>
                        </div>
                        <div class="shortcut-item">
                            <span class="shortcut-description">Show Shortcuts</span>
                            <div class="shortcut-keys">
                                <kbd class="shortcut-key">?</kbd>
                            </div>
                        </div>
                        <div class="shortcut-item">
                            <span class="shortcut-description">Close Modal</span>
                            <div class="shortcut-keys">
                                <kbd class="shortcut-key">Esc</kbd>
                            </div>
                        </div>
                        <div class="shortcut-item">
                            <span class="shortcut-description">Toggle Theme</span>
                            <div class="shortcut-keys">
                                <kbd class="shortcut-key">T</kbd>
                            </div>
                        </div>
                        <div class="shortcut-item">
                            <span class="shortcut-description">Go to Dashboard</span>
                            <div class="shortcut-keys">
                                <kbd class="shortcut-key">H</kbd>
                            </div>
                        </div>
                        <div class="shortcut-item">
                            <span class="shortcut-description">Next Lesson</span>
                            <div class="shortcut-keys">
                                <kbd class="shortcut-key">N</kbd>
                            </div>
                        </div>
                        <div class="shortcut-item">
                            <span class="shortcut-description">Previous Lesson</span>
                            <div class="shortcut-keys">
                                <kbd class="shortcut-key">P</kbd>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
        document.body.appendChild(modal);
        setTimeout(() => modal.classList.remove('hidden'), 10);
    },

    closeHelp() {
        const modal = document.getElementById('shortcutsModal');
        if (modal) {
            modal.classList.add('hidden');
            setTimeout(() => modal.remove(), 300);
        }
    },

    nextLesson() {
        // Implementation depends on page structure
        const currentSection = document.querySelector('.content-section');
        if (currentSection && currentSection.nextElementSibling) {
            currentSection.nextElementSibling.scrollIntoView({ behavior: 'smooth' });
        }
    },

    prevLesson() {
        const currentSection = document.querySelector('.content-section');
        if (currentSection && currentSection.previousElementSibling) {
            currentSection.previousElementSibling.scrollIntoView({ behavior: 'smooth' });
        }
    }
};

// ==========================================
// SEARCH MODAL
// ==========================================

const SearchModal = {
    modal: null,
    searchData: [],

    init() {
        if (this.modal) return;

        this.modal = document.createElement('div');
        this.modal.className = 'search-modal';
        this.modal.innerHTML = `
            <div class="search-container">
                <div class="search-input-wrapper">
                    <input
                        type="text"
                        class="search-input"
                        placeholder="Search exercises, lessons, prompts..."
                        id="globalSearchInput"
                        autocomplete="off"
                    >
                </div>
                <div class="search-results" id="searchResults">
                    <div class="search-no-results">Type to search...</div>
                </div>
                <div class="search-footer">
                    <span>
                        <kbd class="shortcut-key">↑</kbd>
                        <kbd class="shortcut-key">↓</kbd>
                        to navigate
                    </span>
                    <span>
                        <kbd class="shortcut-key">Enter</kbd>
                        to select
                    </span>
                    <span>
                        <kbd class="shortcut-key">Esc</kbd>
                        to close
                    </span>
                </div>
            </div>
        `;
        document.body.appendChild(this.modal);

        // Setup event listeners
        const input = this.modal.querySelector('#globalSearchInput');
        input.addEventListener('input', (e) => this.search(e.target.value));

        this.modal.addEventListener('click', (e) => {
            if (e.target === this.modal) this.close();
        });

        this.loadSearchData();
    },

    loadSearchData() {
        // This would be populated from the actual content
        this.searchData = [
            { title: 'What is ChatGPT?', type: 'lesson', url: 'beginner.html#what-is-chatgpt', description: 'Learn the basics of ChatGPT' },
            { title: 'Your First 10 Prompts', type: 'exercise', url: 'beginner.html#first-prompts', description: 'Practice writing effective prompts' },
            { title: 'RTFC Framework', type: 'lesson', url: 'intermediate.html#rtfc', description: 'Master the Role-Task-Format-Context framework' },
            { title: 'API Integration', type: 'lesson', url: 'expert.html#api', description: 'Build tools with OpenAI API' },
            { title: 'Playground', type: 'tool', url: 'playground.html', description: 'Practice prompts in the simulator' }
        ];
    },

    open() {
        this.init();
        this.modal.classList.add('active');
        setTimeout(() => {
            this.modal.querySelector('#globalSearchInput').focus();
        }, 100);
    },

    close() {
        if (this.modal) {
            this.modal.classList.remove('active');
            this.modal.querySelector('#globalSearchInput').value = '';
            this.showNoResults('Type to search...');
        }
    },

    search(query) {
        const resultsContainer = this.modal.querySelector('#searchResults');

        if (!query.trim()) {
            this.showNoResults('Type to search...');
            return;
        }

        const results = this.searchData.filter(item =>
            item.title.toLowerCase().includes(query.toLowerCase()) ||
            item.description.toLowerCase().includes(query.toLowerCase())
        );

        if (results.length === 0) {
            this.showNoResults('No results found');
            return;
        }

        resultsContainer.innerHTML = results.map(result => `
            <a href="${result.url}" class="search-result-item">
                <div class="search-result-title">
                    <span class="search-result-type">${result.type}</span>
                    ${result.title}
                </div>
                <div class="search-result-description">${result.description}</div>
            </a>
        `).join('');
    },

    showNoResults(message) {
        const resultsContainer = this.modal.querySelector('#searchResults');
        resultsContainer.innerHTML = `<div class="search-no-results">${message}</div>`;
    }
};

// ==========================================
// SCROLL REVEAL ANIMATIONS
// ==========================================

const ScrollReveal = {
    init() {
        const elements = document.querySelectorAll('.scroll-reveal');

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, {
            threshold: 0.1
        });

        elements.forEach(el => observer.observe(el));
    }
};

// ==========================================
// MOBILE NAVIGATION
// ==========================================

const MobileNav = {
    init() {
        // Add mobile toggle button if not exists
        const nav = document.querySelector('.nav-container');
        if (!nav) return;

        const toggle = document.createElement('button');
        toggle.className = 'mobile-nav-toggle';
        toggle.innerHTML = '☰';
        toggle.setAttribute('aria-label', 'Toggle navigation');

        // Add overlay and menu
        const overlay = document.createElement('div');
        overlay.className = 'mobile-nav-overlay';

        const menu = document.createElement('div');
        menu.className = 'mobile-nav-menu';

        const navLinks = document.querySelector('.nav-links');
        if (navLinks) {
            menu.innerHTML = `
                <div class="mobile-nav-header">
                    <h2>Menu</h2>
                    <button class="mobile-nav-close">×</button>
                </div>
                <div class="mobile-nav-links">
                    ${navLinks.innerHTML}
                </div>
            `;
        }

        document.body.appendChild(overlay);
        document.body.appendChild(menu);
        nav.appendChild(toggle);

        // Event listeners
        toggle.addEventListener('click', () => this.open(overlay, menu));
        overlay.addEventListener('click', () => this.close(overlay, menu));
        menu.querySelector('.mobile-nav-close')?.addEventListener('click', () => this.close(overlay, menu));
    },

    open(overlay, menu) {
        overlay.classList.add('active');
        menu.classList.add('active');
        document.body.style.overflow = 'hidden';
    },

    close(overlay, menu) {
        overlay.classList.remove('active');
        menu.classList.remove('active');
        document.body.style.overflow = '';
    }
};

// ==========================================
// ENHANCED PROGRESS TRACKING
// ==========================================

const EnhancedProgress = {
    init() {
        this.updateAllProgress();
        this.initStreakTracking();
    },

    updateAllProgress() {
        // Animate progress bars
        const progressBars = document.querySelectorAll('.progress-fill');
        progressBars.forEach(bar => {
            const width = bar.style.width || '0%';
            bar.style.width = '0%';
            setTimeout(() => {
                bar.style.width = width;
            }, 100);
        });

        // Animate circular progress
        const circles = document.querySelectorAll('.progress-bar-circle');
        circles.forEach(circle => {
            const offset = circle.style.strokeDashoffset || '283';
            circle.style.strokeDashoffset = '283';
            setTimeout(() => {
                circle.style.strokeDashoffset = offset;
            }, 100);
        });
    },

    initStreakTracking() {
        const streak = this.getStreak();
        const today = new Date().toDateString();
        const lastVisit = Storage.get('lastVisit');

        if (lastVisit !== today) {
            // Check if streak continues
            const yesterday = new Date();
            yesterday.setDate(yesterday.getDate() - 1);

            if (lastVisit === yesterday.toDateString()) {
                // Continue streak
                Storage.set('streak', streak + 1);
                ToastManager.success(`🔥 ${streak + 1} day streak!`);
            } else if (!lastVisit || streak === 0) {
                // Start new streak
                Storage.set('streak', 1);
                ToastManager.info('Started a new learning streak!');
            } else {
                // Streak broken
                Storage.set('streak', 1);
                ToastManager.warning('Streak reset. Start a new one today!');
            }

            Storage.set('lastVisit', today);
        }

        this.displayStreak();
    },

    getStreak() {
        return Storage.get('streak', 0);
    },

    displayStreak() {
        const streak = this.getStreak();
        const container = document.querySelector('.hero-stats');

        if (container && streak > 0) {
            const streakStat = document.createElement('div');
            streakStat.className = 'stat fade-in';
            streakStat.innerHTML = `
                <span class="stat-number">🔥 ${streak}</span>
                <span class="stat-label">Day Streak</span>
            `;
            container.appendChild(streakStat);
        }
    }
};

// ==========================================
// BUTTON RIPPLE EFFECT
// ==========================================

function addRippleEffect() {
    const buttons = document.querySelectorAll('.btn:not(.btn-ripple)');
    buttons.forEach(btn => {
        btn.classList.add('btn-ripple');
    });
}

// ==========================================
// INITIALIZE ALL ENHANCEMENTS
// ==========================================

function initUIEnhancements() {
    // Initialize all systems
    ToastManager.init();
    KeyboardShortcuts.init();
    SearchModal.init();
    ScrollReveal.init();
    MobileNav.init();
    EnhancedProgress.init();
    addRippleEffect();

    // Add animations to cards
    const cards = document.querySelectorAll('.card, .path-card, .practice-card');
    cards.forEach(card => {
        card.classList.add('card-lift');
    });

    // Add scroll reveal to sections
    const sections = document.querySelectorAll('.content-section, .path-card, .assessment-card');
    sections.forEach(section => {
        section.classList.add('scroll-reveal');
    });

    // Stagger animations for stats
    const statsContainer = document.querySelector('.hero-stats');
    if (statsContainer) {
        statsContainer.classList.add('stagger-fade-in');
    }

    // Show welcome toast on first visit
    if (!Storage.get('hasVisited')) {
        setTimeout(() => {
            ToastManager.success('Welcome to ChatGPT Mastery Course!', 5000);
            Storage.set('hasVisited', true);
        }, 1000);
    }
}

// Auto-initialize on DOM ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initUIEnhancements);
} else {
    initUIEnhancements();
}

// Make globally available
window.ToastManager = ToastManager;
window.LoadingOverlay = LoadingOverlay;
window.KeyboardShortcuts = KeyboardShortcuts;
window.SearchModal = SearchModal;
window.EnhancedProgress = EnhancedProgress;
