# FormRepeater 🔄

A lightweight, flexible JavaScript component for dynamically adding and removing form field groups. Perfect for contact forms, product variants, address lists, and any scenario requiring repeatable form sections.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![jQuery](https://img.shields.io/badge/jQuery-3.0+-blue.svg)](https://jquery.com/)

## ✨ Features

- 🚀 **Easy to use** - Just add CSS classes and data attributes
- 🎯 **Flexible** - Highly customizable with callbacks and options
- 📱 **Responsive** - Works on all devices
- 🔧 **No dependencies** - Only requires jQuery
- 🎨 **Framework agnostic** - Works with Bootstrap, Tailwind, or any CSS framework
- 🐛 **Debug mode** - Built-in logging for development

## 🚀 Quick Start

### 1. Include the script
```html
<!-- Include jQuery first -->
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<!-- Include FormRepeater -->
<script src="https://cdn.jsdelivr.net/gh/viettuans/form-repeater@master/public/formix.js"></script>
```

### 2. Create your HTML structure
```html
<!-- Template (hidden) -->
<div id="contact-template" class="form-repeat-box-item" style="display: none;">
    <div class="form-group">
        <input type="text" class="form-repeat-field-ipt" data-field-name="name" placeholder="Name">
        <input type="email" class="form-repeat-field-ipt" data-field-name="email" placeholder="Email">
        <button type="button" class="btn btn-danger form-repeat-delete-btn">Remove</button>
    </div>
</div>

<!-- Container for repeated items -->
<div id="contacts-list"></div>

<!-- Add button -->
<button type="button" 
        class="btn btn-primary form-repeat-add-btn"
        data-group-name="contacts"
        data-box-default="#contact-template"
        data-box-list="#contacts-list">
    Add Contact
</button>
```

### 3. That's it! 🎉
FormRepeater automatically initializes when the DOM is ready. No additional JavaScript code needed!

## 📖 Documentation

- **[Complete Usage Guide](FORMREPEATER_USAGE.md)** - Detailed documentation with examples
- **[Live Demo](demo.html)** - Interactive examples you can try right now

## 🎮 Live Demo

Check out the [live demo](demo.html) to see FormRepeater in action with different use cases:
- Contact forms
- Product variants
- Address management
- Custom styling examples

## 📦 Installation Options

### Option 1: CDN (Recommended)
```html
<script src="https://cdn.jsdelivr.net/gh/viettuans/form-repeater@master/public/formix.js"></script>
```

### Option 2: Download
1. Download `formix.js` from this repository
2. Include it in your project:
```html
<script src="path/to/formix.js"></script>
```

### Option 3: NPM (Coming Soon)
```bash
npm install form-repeater-js
```

## 🔧 Basic Configuration

```javascript
// Auto-initialization with default settings (recommended)
// No code needed!

// Manual initialization with custom options
const repeater = new FormRepeater({
    debugMode: true,
    onAfterAdd: function($newElement) {
        console.log('New item added!');
    },
    onBeforeDelete: function($item) {
        return confirm('Are you sure?');
    }
});
```

## 🏗️ HTML Requirements

### Required CSS Classes
- `form-repeat-add-btn` - Add button
- `form-repeat-delete-btn` - Delete button  
- `form-repeat-field-ipt` - Form inputs
- `form-repeat-box-item` - Template/repeated items

### Required Data Attributes
- `data-group-name` - Group name for form fields
- `data-box-default` - Template selector
- `data-box-list` - Container selector
- `data-field-name` - Field name within group

## 🎯 Use Cases

- **Contact Forms** - Multiple contacts with name, email, phone
- **E-commerce** - Product variants (size, color, price)
- **Address Management** - Multiple shipping/billing addresses
- **Education** - Student information, course enrollment
- **Event Management** - Multiple attendees, sessions
- **Survey Forms** - Dynamic question sets

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with ❤️ for the web development community
- Inspired by the need for simple, reusable form components
- Thanks to all contributors and users

## 📞 Support

- 📚 [Documentation](FORMREPEATER_USAGE.md)
- 🐛 [Issue Tracker](https://github.com/viettuans/form-repeater/issues)
- 💬 [Discussions](https://github.com/viettuans/form-repeater/discussions)

---

**Made with ❤️ by Tuan Dang**

*If this project helped you, please consider giving it a ⭐ on GitHub!*