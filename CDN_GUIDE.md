# CDN Usage Guide

FormRepeater can be easily integrated into your project using CDN links. This is the fastest way to get started!

## 🚀 Quick CDN Setup

### Option 1: GitHub CDN (Recommended)
```html
<!-- Include jQuery first -->
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>

<!-- Include FormRepeater from GitHub CDN -->
<script src="https://cdn.jsdelivr.net/gh/viettuans/form-repeater@main/public/formix.js"></script>
```

### Option 2: Specific Version
```html
<!-- Include specific version (recommended for production) -->
<script src="https://cdn.jsdelivr.net/gh/viettuans/form-repeater@v1.0.0/public/formix.js"></script>
```

### Option 3: Latest Release
```html
<!-- Always get the latest release -->
<script src="https://cdn.jsdelivr.net/gh/viettuans/form-repeater@latest/public/formix.js"></script>
```

## 📋 Complete HTML Template

Copy and paste this template to get started immediately:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My FormRepeater App</title>
    <!-- Optional: Include Bootstrap for styling -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
    <div class="container mt-5">
        <h1>Dynamic Form Example</h1>
        
        <form>
            <!-- Template (hidden) -->
            <div id="item-template" class="form-repeat-box-item" style="display: none; border: 1px solid #ccc; padding: 15px; margin: 10px 0;">
                <div class="row">
                    <div class="col-md-4">
                        <label>Name:</label>
                        <input type="text" class="form-control form-repeat-field-ipt" data-field-name="name" required>
                    </div>
                    <div class="col-md-4">
                        <label>Email:</label>
                        <input type="email" class="form-control form-repeat-field-ipt" data-field-name="email" required>
                    </div>
                    <div class="col-md-4">
                        <button type="button" class="btn btn-danger form-repeat-delete-btn">Remove</button>
                    </div>
                </div>
            </div>

            <!-- Container -->
            <div id="items-list"></div>

            <!-- Add Button -->
            <button type="button" 
                    class="btn btn-primary form-repeat-add-btn"
                    data-group-name="items"
                    data-box-default="#item-template"
                    data-box-list="#items-list">
                Add Item
            </button>
            
            <hr>
            <button type="submit" class="btn btn-success">Submit</button>
        </form>
    </div>

    <!-- Scripts -->
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="https://cdn.jsdelivr.net/gh/viettuans/form-repeater@main/public/formix.js"></script>
    
    <!-- Optional: Bootstrap JS -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
```

## 🔧 CDN with Custom Configuration

```html
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script src="https://cdn.jsdelivr.net/gh/viettuans/form-repeater@main/public/formix.js"></script>

<script>
// Custom configuration
$(document).ready(function() {
    const myRepeater = new FormRepeater({
        debugMode: true,
        onAfterAdd: function($newElement) {
            console.log('New item added!');
            $newElement.find('input:first').focus();
        },
        onBeforeDelete: function($item) {
            return confirm('Remove this item?');
        }
    });
});
</script>
```

## 🌐 CDN Providers

### jsDelivr (Recommended)
- **URL Format**: `https://cdn.jsdelivr.net/gh/viettuans/form-repeater@version/public/formix.js`
- **Features**: Fast global CDN, automatic minification, version control
- **Uptime**: 99.9%
- **Cache**: Long-term caching

### Alternative CDN Options

#### GitHub Raw (Not recommended for production)
```html
<script src="https://raw.githubusercontent.com/viettuans/form-repeater/main/public/formix.js"></script>
```

#### GitHack (For development)
```html
<script src="https://raw.githack.com/viettuans/form-repeater/main/public/formix.js"></script>
```

## 📦 Version Management

### Use Specific Versions in Production
```html
<!-- Good: Specific version -->
<script src="https://cdn.jsdelivr.net/gh/viettuans/form-repeater@v1.0.0/public/formix.js"></script>

<!-- Avoid: Latest version (can break unexpectedly) -->
<script src="https://cdn.jsdelivr.net/gh/viettuans/form-repeater@main/public/formix.js"></script>
```

### Available Version Formats
- `@main` - Latest commit on main branch
- `@v1.0.0` - Specific version tag
- `@latest` - Latest release
- `@1.0` - Latest patch in 1.0.x series

## 🚀 Performance Tips

### 1. Use Integrity Checks
```html
<script src="https://cdn.jsdelivr.net/gh/viettuans/form-repeater@v1.0.0/public/formix.js" 
        integrity="sha384-HASH_HERE" 
        crossorigin="anonymous"></script>
```

### 2. Preload for Better Performance
```html
<link rel="preload" href="https://cdn.jsdelivr.net/gh/viettuans/form-repeater@v1.0.0/public/formix.js" as="script">
```

### 3. Use Async Loading
```html
<script async src="https://cdn.jsdelivr.net/gh/viettuans/form-repeater@v1.0.0/public/formix.js"></script>
```

## 🔍 CDN Status and Monitoring

### Check CDN Status
- jsDelivr Status: https://www.jsdelivr.com/network
- Check if file is available: https://cdn.jsdelivr.net/gh/viettuans/form-repeater@main/public/formix.js

### Fallback Strategy
```html
<script src="https://cdn.jsdelivr.net/gh/viettuans/form-repeater@v1.0.0/public/formix.js"></script>
<script>
// Fallback to local file if CDN fails
if (typeof FormRepeater === 'undefined') {
    document.write('<script src="local/path/to/formix.js"><\/script>');
}
</script>
```

## 🌍 Regional CDN Options

### For China
```html
<!-- Use Chinese CDN mirror -->
<script src="https://cdn.jsdelivr.net/gh/viettuans/form-repeater@v1.0.0/public/formix.js"></script>
```

### For Europe
```html
<!-- European edge servers automatically used -->
<script src="https://cdn.jsdelivr.net/gh/viettuans/form-repeater@v1.0.0/public/formix.js"></script>
```

## 🛠️ Development vs Production

### Development
```html
<!-- Use latest version with debug mode -->
<script src="https://cdn.jsdelivr.net/gh/viettuans/form-repeater@main/public/formix.js"></script>
<script>
const repeater = new FormRepeater({ debugMode: true });
</script>
```

### Production
```html
<!-- Use specific version, no debug -->
<script src="https://cdn.jsdelivr.net/gh/viettuans/form-repeater@v1.0.0/public/formix.js"></script>
<script>
const repeater = new FormRepeater({ debugMode: false });
</script>
```

## 📱 Mobile Considerations

```html
<!-- Ensure responsive viewport -->
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<!-- Use touch-friendly buttons -->
<style>
.form-repeat-add-btn, .form-repeat-delete-btn {
    min-height: 44px; /* iOS touch target minimum */
    padding: 12px 20px;
}
</style>
```

## 🔧 Troubleshooting CDN Issues

### Common Issues

1. **Script not loading**
   - Check network tab in browser dev tools
   - Verify URL is correct
   - Check if CDN is down

2. **jQuery not found**
   - Ensure jQuery is loaded before FormRepeater
   - Check jQuery version compatibility (3.0+)

3. **CORS errors**
   - Use proper CDN URLs (not raw GitHub)
   - Add crossorigin attribute if needed

### Debug CDN Loading
```html
<script>
// Check if FormRepeater loaded successfully
window.addEventListener('load', function() {
    if (typeof FormRepeater !== 'undefined') {
        console.log('✅ FormRepeater loaded successfully from CDN');
    } else {
        console.error('❌ FormRepeater failed to load from CDN');
    }
});
</script>
```

## 📞 Support

If you encounter issues with CDN usage:
- Check the [troubleshooting guide](FORMREPEATER_USAGE.md#troubleshooting)
- Open an issue on GitHub
- Check CDN status pages

---

**Ready to use FormRepeater via CDN? Just copy the Quick CDN Setup code above and you're good to go! 🚀**
