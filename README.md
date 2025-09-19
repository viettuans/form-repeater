# FormRepeater 🔄

A lightweight, flexible JavaScript component for dynamically adding and removing form field groups. Perfect for contact forms, product variants, and any repeatable data structure.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![jQuery](https://img.shields.io/badge/jQuery-3.0+-blue.svg)](https://jquery.com/)

## ✨ Features

- 🚀 **Easy to use** - Just add CSS classes and data attributes
- 🎯 **Flexible** - Highly customizable with callbacks
- 📱 **Responsive** - Works on all devices
- 🔧 **Lightweight** - Only requires jQuery
- 🎨 **Framework agnostic** - Works with any CSS framework

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
    <input type="text" class="form-repeat-field-ipt" data-field-name="name" placeholder="Name">
    <input type="email" class="form-repeat-field-ipt" data-field-name="email" placeholder="Email">
    <button type="button" class="form-repeat-delete-btn">Remove</button>
</div>

<!-- Container for repeated items -->
<div id="contacts-list"></div>

<!-- Add button -->
<button type="button" 
        class="form-repeat-add-btn"
        data-group-name="contacts"
        data-box-default="#contact-template"
        data-box-list="#contacts-list">
    Add Contact
</button>
```

### 3. That's it! 🎉
FormRepeater automatically initializes when the DOM is ready. No additional JavaScript needed!

## 📖 Documentation

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

### Configuration Options
```javascript
const repeater = new FormRepeater({
    // Callbacks
    onBeforeAdd: function($button) {
        // Return false to cancel
        return confirm('Add new item?');
    },
    onAfterAdd: function($newElement, $button) {
        // Focus on first input
        $newElement.find('input:first').focus();
    },
    onBeforeDelete: function($item, $button) {
        return confirm('Remove this item?');
    },
    onAfterDelete: function($button) {
        console.log('Item removed');
    },
    
    // Options
    debugMode: true,
    generateTimestamp: true
});
```

### Methods
```javascript
// Update options
repeater.updateOptions({ debugMode: false });

// Destroy instance
repeater.destroy();
```

## 🎮 Examples

- **[Live Demo](demo.html)** - Interactive demo with multiple use cases
- **[Basic Example](examples/basic-example.html)** - Simple contact form
- **[Advanced Example](examples/advanced-example.html)** - With callbacks and validation

## 📦 Installation

### CDN (Recommended)
```html
<script src="https://cdn.jsdelivr.net/gh/viettuans/form-repeater@master/public/formix.js"></script>
```

### Download
1. Download `formix.js` from this repository
2. Include it in your project

### NPM (Coming Soon)
```bash
npm install form-repeater-js
```

## 🎯 Use Cases

- **Contact Forms** - Multiple contacts with name, email, phone
- **E-commerce** - Product variants (size, color, price)
- **Address Management** - Multiple shipping/billing addresses
- **Survey Forms** - Dynamic question sets

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

**Made with ❤️ by [Tuan Dang](https://github.com/viettuans)**

*If this project helped you, please consider giving it a ⭐ on GitHub!*