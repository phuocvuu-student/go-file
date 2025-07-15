# English Translation Demo

This demo showcases the English translation of the Go File sharing application from the `feature/translate_to_english` branch.

## Demo Site Structure

The GitHub Pages deployment creates a comprehensive demo with the following sections:

### 🏠 Main Demo Page (`/`)
- **Hero Section**: Gradient background with feature highlights
- **Translation Features**: Interactive cards showing capabilities
- **Translation Examples**: Real examples from the English JSON
- **Navigation Links**: Access to templates and translation data

### 📝 HTML Templates (`/translated/assets/`)
- Interactive browser for all HTML templates
- Shows `data-i18n` attributes in context
- Includes navigation, forms, and UI components

### 🌐 Translation Data (`/translated/i18n/`)
- Complete English translation key-value pairs
- Organized by sections (nav, upload, file operations, etc.)
- Direct access to translation JSON structure

### 📁 Static Assets (`/translated/static/`)
- CSS stylesheets with application styling
- JavaScript files including i18n system
- Client-side translation loading logic

## What's Included

### Translation Features
- **Complete English Localization**: All user interface elements are translated to English
- **Dynamic Language Loading**: Client-side i18n system that loads translations without page reload
- **Comprehensive Coverage**: Navigation, forms, messages, and help text are all translated

### Translation Examples

#### Navigation Elements
- **Front Page** → Main dashboard
- **Documents** → Document files
- **Pictures** → Image gallery  
- **Videos** → Video collection
- **Help** → User guidance
- **Upload** → File upload functionality
- **Login** → User authentication
- **System Management** → Admin panel
- **Sign Out** → User logout

#### File Operations
- **Search files...** → File search placeholder
- **Upload files to "{path}"** → Upload destination indicator
- **Selected file: {name}** → File selection status
- **Selected {count} files** → Multiple file selection
- **Uploading {count} files** → Upload progress
- **File uploaded successfully** → Success message
- **File upload failed** → Error message
- **Processing {loaded} MB / {total} MB...** → Upload progress details

#### System Messages
- **No matching files** → Search result indicator
- **There are currently no files** → Empty state message
- **File deleted successfully** → Deletion confirmation
- **Please select a file first** → Validation message

## Technical Implementation

### Client-Side i18n System
The application uses a JavaScript-based internationalization system:

```javascript
// Load translations dynamically
i18n.loadTranslations('en').then(() => {
    i18n.translatePage();
});
```

### Template Integration
HTML templates use `data-i18n` attributes for translation:

```html
<span data-i18n="nav.upload">Upload</span>
<span data-i18n="common.no_files_message">No files message</span>
```

### JSON Translation Files
Translations are organized in nested JSON structures:

```json
{
  "nav": {
    "front_page": "Front Page",
    "upload": "Upload"
  },
  "upload": {
    "success": "File uploaded successfully"
  }
}
```

## Usage

### Running the Application
1. Download the Go File binary from the GitHub releases
2. Run: `./go-file --port 3000`
3. Access the web interface at `http://localhost:3000`
4. The application will automatically use English as the default language

### Language Switching
The application detects browser language and provides language switching functionality for supported languages (English, Vietnamese, Japanese, Chinese).

## Demo Limitations

This GitHub Pages demo shows static representations of the translated interface. The full application features:
- Real-time file uploads and downloads
- User authentication and management
- File sharing within local networks
- P2P file transfer capabilities
- Video streaming support

## Building from Source

```bash
git clone https://github.com/phuocvuu-student/go-file.git
cd go-file
git checkout feature/translate_to_english
go build -o go-file
./go-file
```

## Deployment

The demo is automatically deployed via GitHub Actions when changes are pushed to the `feature/translate_to_english` branch:

1. **Build Process**: Compiles Go application and extracts assets
2. **Demo Creation**: Generates interactive demo pages
3. **GitHub Pages**: Deploys to GitHub Pages with proper permissions

## Contributing

To contribute to the translation effort:
1. Fork the repository
2. Edit the translation files in `i18n/locales/en.json`
3. Update HTML templates with appropriate `data-i18n` attributes
4. Test the translations in the web interface
5. Submit a pull request

## License

This project is licensed under the same terms as the original Go File project.