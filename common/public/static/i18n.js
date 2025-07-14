// i18n.js - Client-side internationalization support

let i18n = {
    // Current language
    currentLang: 'en',
    
    // Translations storage
    translations: {},
    
    // Initialize i18n system
    init: async function() {
        // Try to get language from localStorage
        const savedLang = localStorage.getItem('lang');
        if (savedLang) {
            this.currentLang = savedLang;
        } else {
            // Try to detect browser language
            const browserLang = navigator.language.split('-')[0];
            if (['en', 'vi', 'zh', 'ja'].includes(browserLang)) {
                this.currentLang = browserLang;
            }
        }
        
        // Load translations for current language
        await this.loadTranslations(this.currentLang);
        
        // Add language switcher if it exists
        this.setupLanguageSwitcher();
        
        // Translate the page
        this.translatePage();
    },
    
    // Load translations for a specific language
    loadTranslations: async function(lang) {
        try {
            const response = await fetch(`/i18n/${lang}`);
            if (response.ok) {
                this.translations = await response.json();
                this.currentLang = lang;
                localStorage.setItem('lang', lang);
                return true;
            }
            return false;
        } catch (error) {
            console.error('Failed to load translations:', error);
            return false;
        }
    },
    
    // Get translation for a key
    t: function(key, ...args) {
        // Split the key by dots to navigate through nested objects
        const parts = key.split('.');
        let value = this.translations;
        
        // Navigate through the translations object
        for (const part of parts) {
            if (value && typeof value === 'object' && part in value) {
                value = value[part];
            } else {
                // Key not found, return the key itself
                return key;
            }
        }
        
        // If the value is not a string, return the key
        if (typeof value !== 'string') {
            return key;
        }
        
        // Apply formatting if args are provided
        if (args.length > 0) {
            // Check if the first argument is an object (for {{param}} style)
            if (args.length === 1 && typeof args[0] === 'object' && args[0] !== null) {
                let result = value;
                const params = args[0];
                
                // Replace {{param}} style placeholders
                Object.keys(params).forEach(param => {
                    const regex = new RegExp(`\\{\\{${param}\\}\\}`, 'g');
                    result = result.replace(regex, params[param]);
                });
                
                return result;
            } else {
                // Traditional %s replacement
                return value.replace(/%s/g, (match, index) => {
                    const argIndex = index < args.length ? index : 0;
                    return args[argIndex] !== undefined ? args[argIndex] : match;
                });
            }
        }
        
        return value;
    },
    
    // Change language
    changeLanguage: async function(lang) {
        if (await this.loadTranslations(lang)) {
            this.translatePage();
            return true;
        }
        return false;
    },
    
    // Translate the entire page
    translatePage: function() {
        // Translate elements with data-i18n attribute
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            // Check if element has HTML content that should be preserved
            if (element.hasAttribute('data-i18n-html')) {
                element.innerHTML = this.t(key);
            } else {
                element.textContent = this.t(key);
            }
        });
        
        // Translate placeholders with data-i18n-placeholder attribute
        document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
            const key = element.getAttribute('data-i18n-placeholder');
            element.setAttribute('placeholder', this.t(key));
        });
        
        // Translate buttons with data-i18n-value attribute
        document.querySelectorAll('[data-i18n-value]').forEach(element => {
            const key = element.getAttribute('data-i18n-value');
            element.value = this.t(key);
        });
    },
    
    // Setup language switcher
    setupLanguageSwitcher: function() {
        const switcher = document.getElementById('language-selector');
        if (switcher) {
            // Clear existing options
            switcher.innerHTML = '';
            
            // Add options for available languages
            const languages = [
                { code: 'en', name: 'English' },
                { code: 'vi', name: 'Tiếng Việt' },
                { code: 'zh', name: '中文' },
                { code: 'ja', name: '日本語' }
            ];
            
            // Update current language display
            const currentLanguageElement = document.getElementById('current-language');
            if (currentLanguageElement) {
                const currentLang = languages.find(lang => lang.code === this.currentLang);
                if (currentLang) {
                    currentLanguageElement.textContent = currentLang.name;
                }
            }
            
            // Add language options to dropdown
            languages.forEach(lang => {
                const item = document.createElement('a');
                item.className = 'navbar-item';
                item.setAttribute('data-lang', lang.code);
                item.textContent = lang.name;
                
                // Highlight current language
                if (this.currentLang === lang.code) {
                    item.classList.add('is-active');
                }
                
                // Add click event listener
                item.addEventListener('click', () => {
                    this.changeLanguage(lang.code);
                    
                    // Update current language display
                    if (currentLanguageElement) {
                        currentLanguageElement.textContent = lang.name;
                    }
                    
                    // Update active class
                    document.querySelectorAll('#language-selector .navbar-item').forEach(el => {
                        el.classList.remove('is-active');
                    });
                    item.classList.add('is-active');
                });
                
                switcher.appendChild(item);
            });
        }
    }
};

// Initialize i18n when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    i18n.init();
});