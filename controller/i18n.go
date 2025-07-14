package controller

import (
	"github.com/gin-gonic/gin"
	"go-file/i18n"
	"go-file/middleware"
	"net/http"
	"path/filepath"
)

// GetLanguages returns a list of available languages
func GetLanguages(c *gin.Context) {
	languages := i18n.GetLanguages()
	c.JSON(http.StatusOK, gin.H{
		"success": true,
		"data":    languages,
	})
}

// GetTranslations returns translations for a specific language
func GetTranslations(c *gin.Context) {
	lang := c.Param("lang")
	if lang == "" {
		lang = middleware.GetContextLanguage(c)
	}

	// Validate language code to prevent directory traversal
	validLanguages := i18n.GetLanguages()
	validLang := false
	for _, validLanguage := range validLanguages {
		if lang == validLanguage {
			validLang = true
			break
		}
	}

	if !validLang {
		c.JSON(http.StatusBadRequest, gin.H{
			"success": false,
			"message": middleware.T(c, "common.invalid_parameters"),
		})
		return
	}

	// Serve the JSON file directly
	filePath := filepath.Join("i18n", "locales", lang+".json")
	c.File(filePath)
}

// SetLanguage sets the user's preferred language
func SetLanguage(c *gin.Context) {
	type LanguageRequest struct {
		Lang string `json:"lang"`
	}

	var req LanguageRequest
	if err := c.ShouldBindJSON(&req); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"success": false,
			"message": middleware.T(c, "common.invalid_parameters"),
		})
		return
	}

	// Validate language code
	validLanguages := i18n.GetLanguages()
	validLang := false
	for _, validLanguage := range validLanguages {
		if req.Lang == validLanguage {
			validLang = true
			break
		}
	}

	if !validLang {
		c.JSON(http.StatusBadRequest, gin.H{
			"success": false,
			"message": middleware.T(c, "common.invalid_parameters"),
		})
		return
	}

	// Store language preference in session
	session := middleware.GetSession(c)
	session.Set("lang", req.Lang)
	session.Save()

	c.JSON(http.StatusOK, gin.H{
		"success": true,
		"message": "",
	})
}