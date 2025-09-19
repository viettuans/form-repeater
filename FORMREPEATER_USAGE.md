# FormRepeater Usage Documentation

FormRepeater is a reusable JavaScript component that allows dynamic adding and removing of form field groups. It's perfect for scenarios where users need to add multiple sets of related form fields, such as contact information, product variants, or any repeating data structure.

## Table of Contents
- [Quick Start](#quick-start)
- [HTML Structure](#html-structure)
- [Configuration Options](#configuration-options)
- [Callbacks](#callbacks)
- [Methods](#methods)
- [Complete Examples](#complete-examples)
- [Advanced Usage](#advanced-usage)

## Quick Start

### 1. Include Dependencies
Make sure you have jQuery loaded before including FormRepeater:

```html
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script src="https://cdn.jsdelivr.net/gh/viettuans/form-repeater@master/public/formix.js"></script>
```

### 2. Basic HTML Structure
```html
<!-- Template (hidden by default) -->
<div id="contact-template" class="form-repeat-box-item" style="display: none;">
    <div class="form-group">
        <label>Name:</label>
        <input type="text" class="form-repeat-field-ipt" data-field-name="name">
    </div>
    <div class="form-group">
        <label>Email:</label>
        <input type="email" class="form-repeat-field-ipt" data-field-name="email">
    </div>
    <button type="button" class="btn btn-danger form-repeat-delete-btn">Remove</button>
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

### 3. Initialize
The component auto-initializes when the DOM is ready, but you can also manually initialize:

```javascript
// Auto-initialization (default)
// No code needed - works automatically

// Manual initialization with custom options
const repeater = new FormRepeater({
    debugMode: true,
    onAfterAdd: function($newElement) {
        console.log('New contact added!');
    }
});
```

## HTML Structure

### Required Elements

#### 1. Template Element
The template defines the structure of each repeatable group:
```html
<div id="template-id" class="form-repeat-box-item" style="display: none;">
    <!-- Your form fields here -->
    <input type="text" class="form-repeat-field-ipt" data-field-name="field1">
    <button class="form-repeat-delete-btn">Remove</button>
</div>
```

#### 2. Container Element
Where the repeated items will be appended:
```html
<div id="container-id"></div>
```

#### 3. Add Button
Triggers the addition of new groups:
```html
<button class="form-repeat-add-btn"
        data-group-name="group_name"
        data-box-default="#template-id"
        data-box-list="#container-id">
    Add Item
</button>
```

### Required Attributes

| Attribute | Element | Purpose |
|-----------|---------|---------|
| `data-group-name` | Add button | Base name for the form group |
| `data-box-default` | Add button | Selector for the template element |
| `data-box-list` | Add button | Selector for the container element |
| `data-field-name` | Form inputs | Field name within the group |

### Required CSS Classes

| Class | Element | Purpose |
|-------|---------|---------|
| `form-repeat-add-btn` | Add button | Identifies add buttons |
| `form-repeat-delete-btn` | Delete button | Identifies delete buttons |
| `form-repeat-field-ipt` | Form inputs | Identifies form fields to be renamed |
| `form-repeat-box-item` | Template/Items | Identifies repeatable items |

## Configuration Options

```javascript
const repeater = new FormRepeater({
    // Selectors (can be customized)
    addBtn: '.form-repeat-add-btn',
    deleteBtn: '.form-repeat-delete-btn',
    fieldInput: '.form-repeat-field-ipt',
    boxItem: '.form-repeat-box-item',
    
    // Attributes (can be customized)
    groupNameAttr: 'data-group-name',
    boxDefaultAttr: 'data-box-default',
    boxListAttr: 'data-box-list',
    fieldNameAttr: 'data-field-name',
    
    // Behavior options
    generateTimestamp: true,  // Use timestamp for unique names
    debugMode: false,         // Enable console logging
    
    // Callbacks
    onBeforeAdd: null,
    onAfterAdd: null,
    onBeforeDelete: null,
    onAfterDelete: null
});
```

## Callbacks

### onBeforeAdd
Called before adding a new group. Return `false` to cancel the addition.

```javascript
onBeforeAdd: function($button) {
    // Validate or check conditions
    if (someCondition) {
        alert('Cannot add more items');
        return false; // Cancels the addition
    }
    return true; // Proceed with addition
}
```

### onAfterAdd
Called after a new group has been added.

```javascript
onAfterAdd: function($newElement, $button) {
    // Initialize plugins on new element
    $newElement.find('.datepicker').datepicker();
    
    // Focus on first input
    $newElement.find('input:first').focus();
}
```

### onBeforeDelete
Called before deleting a group. Return `false` to cancel the deletion.

```javascript
onBeforeDelete: function($itemToDelete, $button) {
    // Confirm deletion
    return confirm('Are you sure you want to remove this item?');
}
```

### onAfterDelete
Called after a group has been deleted.

```javascript
onAfterDelete: function($button) {
    // Update totals, reindex items, etc.
    updateTotals();
}
```

## Methods

### destroy()
Removes event listeners and cleans up the component:
```javascript
repeater.destroy();
```

### updateOptions(newOptions)
Updates configuration options:
```javascript
repeater.updateOptions({
    debugMode: true,
    onAfterAdd: function($newElement) {
        console.log('Item added');
    }
});
```

### Static init()
Alternative initialization method:
```javascript
const repeater = FormRepeater.init({
    debugMode: true
});
```

## Complete Examples

### Example 1: Contact Form
```html
<!DOCTYPE html>
<html>
<head>
    <title>Contact Repeater</title>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="https://cdn.jsdelivr.net/gh/viettuans/form-repeater@master/public/formix.js"></script>
</head>
<body>
    <form>
        <!-- Template -->
        <div id="contact-template" class="form-repeat-box-item" style="display: none;">
            <div class="contact-group" style="border: 1px solid #ccc; padding: 15px; margin: 10px 0;">
                <h4>Contact Information</h4>
                <div>
                    <label>Full Name:</label>
                    <input type="text" class="form-repeat-field-ipt" data-field-name="full_name" required>
                </div>
                <div>
                    <label>Email:</label>
                    <input type="email" class="form-repeat-field-ipt" data-field-name="email" required>
                </div>
                <div>
                    <label>Phone:</label>
                    <input type="tel" class="form-repeat-field-ipt" data-field-name="phone">
                </div>
                <button type="button" class="form-repeat-delete-btn" style="background: red; color: white;">
                    Remove Contact
                </button>
            </div>
        </div>

        <!-- Container -->
        <div id="contacts-container"></div>

        <!-- Add Button -->
        <button type="button" 
                class="form-repeat-add-btn"
                data-group-name="contacts"
                data-box-default="#contact-template"
                data-box-list="#contacts-container"
                style="background: green; color: white; padding: 10px;">
            Add New Contact
        </button>

        <br><br>
        <button type="submit">Submit Form</button>
    </form>

    <script>
        // Initialize with callbacks
        const contactRepeater = new FormRepeater({
            debugMode: true,
            onAfterAdd: function($newElement) {
                // Focus on the name field of the new contact
                $newElement.find('input[data-field-name="full_name"]').focus();
            },
            onBeforeDelete: function($item) {
                return confirm('Remove this contact?');
            }
        });
    </script>
</body>
</html>
```

### Example 2: Product Variants
```html
<!-- Template for product variants -->
<div id="variant-template" class="form-repeat-box-item" style="display: none;">
    <div class="variant-item">
        <h5>Product Variant</h5>
        <div class="row">
            <div class="col-md-3">
                <label>Size:</label>
                <select class="form-repeat-field-ipt" data-field-name="size">
                    <option value="S">Small</option>
                    <option value="M">Medium</option>
                    <option value="L">Large</option>
                </select>
            </div>
            <div class="col-md-3">
                <label>Color:</label>
                <input type="text" class="form-repeat-field-ipt" data-field-name="color">
            </div>
            <div class="col-md-3">
                <label>Price:</label>
                <input type="number" class="form-repeat-field-ipt" data-field-name="price" step="0.01">
            </div>
            <div class="col-md-3">
                <label>Stock:</label>
                <input type="number" class="form-repeat-field-ipt" data-field-name="stock">
            </div>
        </div>
        <button type="button" class="btn btn-danger form-repeat-delete-btn">Remove Variant</button>
    </div>
</div>

<div id="variants-list"></div>

<button type="button" 
        class="btn btn-success form-repeat-add-btn"
        data-group-name="variants"
        data-box-default="#variant-template"
        data-box-list="#variants-list">
    Add Product Variant
</button>
```

## Advanced Usage

### Custom Field Naming
By default, fields are named as `groupname[timestamp][fieldname]`. You can customize this:

```javascript
const repeater = new FormRepeater({
    generateTimestamp: false, // Use random string instead
    onAfterAdd: function($newElement, $button) {
        // Custom naming logic
        const index = $('#variants-list .form-repeat-box-item').length;
        $newElement.find('.form-repeat-field-ipt').each(function() {
            const fieldName = $(this).attr('data-field-name');
            $(this).attr('name', `product_variants[${index}][${fieldName}]`);
        });
    }
});
```

### Integration with Other Libraries
```javascript
const repeater = new FormRepeater({
    onAfterAdd: function($newElement) {
        // Initialize Select2 on new select elements
        $newElement.find('select').select2();
        
        // Initialize datepickers
        $newElement.find('.datepicker').datepicker({
            format: 'yyyy-mm-dd'
        });
        
        // Initialize validation
        $newElement.find('input, select').each(function() {
            $(this).rules('add', {
                required: true
            });
        });
    }
});
```

### Multiple Repeaters on Same Page
```javascript
// Different repeaters with different configurations
const contactRepeater = new FormRepeater({
    addBtn: '.contact-add-btn',
    deleteBtn: '.contact-delete-btn',
    // ... other contact-specific options
});

const addressRepeater = new FormRepeater({
    addBtn: '.address-add-btn',
    deleteBtn: '.address-delete-btn',
    // ... other address-specific options
});
```

## Form Submission

When the form is submitted, the generated field names will follow this pattern:
```
contacts[1642086420123][full_name] = "John Doe"
contacts[1642086420123][email] = "john@example.com"
contacts[1642086435456][full_name] = "Jane Smith"
contacts[1642086435456][email] = "jane@example.com"
```

In PHP, you can access this data like:
```php
foreach ($_POST['contacts'] as $timestamp => $contact) {
    $name = $contact['full_name'];
    $email = $contact['email'];
    // Process each contact
}
```

## Troubleshooting

### Common Issues

1. **Template not cloning**: Ensure the template has `display: none` and the correct selector.

2. **Fields not renaming**: Check that form inputs have the `form-repeat-field-ipt` class and `data-field-name` attribute.

3. **Buttons not working**: Verify the correct CSS classes are applied to buttons.

4. **jQuery not loaded**: Make sure jQuery is loaded before FormRepeater.

### Debug Mode
Enable debug mode to see console logs:
```javascript
const repeater = new FormRepeater({
    debugMode: true
});
```

This will log all operations including errors, warnings, and successful operations.
