# Changelog

All notable changes to FormRepeater will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2025-09-19

### Added
- Initial release of FormRepeater component
- Dynamic form field group addition and removal
- Configurable selectors and attributes
- Callback system (onBeforeAdd, onAfterAdd, onBeforeDelete, onAfterDelete)
- Debug mode with console logging
- Auto-initialization on DOM ready
- Multiple export formats (CommonJS, AMD, Browser global)
- Comprehensive documentation and examples
- Live demo with interactive examples
- Bootstrap-compatible styling
- Field name auto-generation with timestamps
- Unique ID generation for form fields

### Features
- **Easy Integration**: Just add CSS classes and data attributes
- **Framework Agnostic**: Works with any CSS framework
- **Responsive Design**: Mobile-friendly by default
- **Customizable**: Highly configurable options
- **Lightweight**: No external dependencies except jQuery
- **Browser Support**: Works in all modern browsers

### Documentation
- Complete usage guide with examples
- API documentation
- Live interactive demo
- Multiple use case examples (contacts, products, tasks)
- Installation instructions for CDN, download, and NPM

### Technical Details
- Requires jQuery 3.0+
- ES5 compatible for broad browser support
- Event delegation for dynamic elements
- Memory leak prevention with proper cleanup
- Error handling and validation
