package middleware

import (
	"go-file/i18n"

	"github.com/gin-contrib/sessions"
	"github.com/gin-gonic/gin"
)

// I18nMiddleware adds language support to the request context
func I18nMiddleware() gin.HandlerFunc {
	return func(c *gin.Context) {
		// Try to get language from query parameter
		lang := c.Query("lang")

		// If not in query, try to get from session
		if lang == "" {
			session := sessions.Default(c)
			if sessionLang := session.Get("lang"); sessionLang != nil {
				lang = sessionLang.(string)
			}
		}

		// If still not found, try to get from Accept-Language header
		if lang == "" {
			acceptLanguage := c.GetHeader("Accept-Language")
			if len(acceptLanguage) >= 2 {
				// Extract the first language code (e.g., "en-US,en;q=0.9" -> "en")
				lang = acceptLanguage[:2]
			}
		}

		// If language is set and valid, save it to session
		if lang != "" {
			// Check if it's a supported language
			validLang := false
			for _, supportedLang := range i18n.GetLanguages() {
				if lang == supportedLang {
					validLang = true
					break
				}
			}

			if validLang {
				session := sessions.Default(c)
				session.Set("lang", lang)
				session.Save()
			} else {
				// If not valid, reset to empty
				lang = ""
			}
		}

		// Set language in context for later use
		c.Set("lang", lang)

		c.Next()
	}
}

// GetContextLanguage gets the language from the context
func GetContextLanguage(c *gin.Context) string {
	lang, exists := c.Get("lang")
	if !exists || lang == "" {
		return "en" // Default to English if not set
	}
	return lang.(string)
}

// T is a helper function to translate a key using the context language
func T(c *gin.Context, key string, args ...interface{}) string {
	lang := GetContextLanguage(c)
	return i18n.T(lang, key, args...)
}

// GetSession returns the session from the context
func GetSession(c *gin.Context) sessions.Session {
	return sessions.Default(c)
}