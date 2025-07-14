package i18n

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"os"
	"path/filepath"
	"strings"
	"sync"
)

// Translator represents a translation manager
type Translator struct {
	locales     map[string]map[string]interface{}
	defaultLang string
	mutex       sync.RWMutex
}

// NewTranslator creates a new translator instance
func NewTranslator(defaultLang string) (*Translator, error) {
	t := &Translator{
		locales:     make(map[string]map[string]interface{}),
		defaultLang: defaultLang,
	}

	// Load all locale files
	err := t.loadLocales()
	if err != nil {
		return nil, err
	}

	return t, nil
}

// loadLocales loads all locale files from the locales directory
func (t *Translator) loadLocales() error {
	localesDir := filepath.Join("i18n", "locales")

	// Check if the directory exists
	if _, err := os.Stat(localesDir); os.IsNotExist(err) {
		return fmt.Errorf("locales directory not found: %s", localesDir)
	}

	// Read all JSON files in the locales directory
	files, err := ioutil.ReadDir(localesDir)
	if err != nil {
		return err
	}

	for _, file := range files {
		if file.IsDir() || !strings.HasSuffix(file.Name(), ".json") {
			continue
		}

		// Extract language code from filename (e.g., "en.json" -> "en")
		lang := strings.TrimSuffix(file.Name(), ".json")

		// Read and parse the locale file
		filePath := filepath.Join(localesDir, file.Name())
		data, err := ioutil.ReadFile(filePath)
		if err != nil {
			return err
		}

		// Parse JSON data
		var localeData map[string]interface{}
		if err := json.Unmarshal(data, &localeData); err != nil {
			return err
		}

		// Store the locale data
		t.mutex.Lock()
		t.locales[lang] = localeData
		t.mutex.Unlock()
	}

	return nil
}

// T translates a key to the specified language
func (t *Translator) T(lang, key string, args ...interface{}) string {
	// If language is not specified or not available, use default language
	t.mutex.RLock()
	if lang == "" || t.locales[lang] == nil {
		lang = t.defaultLang
	}

	// Split the key by dots to navigate through nested objects
	parts := strings.Split(key, ".")
	var current interface{} = t.locales[lang]
	t.mutex.RUnlock()

	for _, part := range parts {
		switch v := current.(type) {
		case map[string]interface{}:
			current = v[part]
			if current == nil {
				// If key not found in specified language, try default language
				if lang != t.defaultLang {
					return t.T(t.defaultLang, key, args...)
				}
				return key // Key not found in any language
			}
		default:
			return key // Invalid path
		}
	}

	// Convert the result to string
	switch v := current.(type) {
	case string:
		// Apply formatting if args are provided
		if len(args) > 0 {
			return fmt.Sprintf(v, args...)
		}
		return v
	default:
		return key // Not a string value
	}
}

// GetLanguages returns a list of available languages
func (t *Translator) GetLanguages() []string {
	t.mutex.RLock()
	defer t.mutex.RUnlock()

	languages := make([]string, 0, len(t.locales))
	for lang := range t.locales {
		languages = append(languages, lang)
	}

	return languages
}

// Default instance
var defaultTranslator *Translator
var once sync.Once

// InitTranslator initializes the default translator
func InitTranslator(defaultLang string) error {
	var err error
	once.Do(func() {
		defaultTranslator, err = NewTranslator(defaultLang)
	})
	return err
}

// T is a shorthand for the default translator's T method
func T(lang, key string, args ...interface{}) string {
	if defaultTranslator == nil {
		// If translator is not initialized, return the key
		return key
	}
	return defaultTranslator.T(lang, key, args...)
}

// GetLanguages is a shorthand for the default translator's GetLanguages method
func GetLanguages() []string {
	if defaultTranslator == nil {
		return []string{}
	}
	return defaultTranslator.GetLanguages()
}