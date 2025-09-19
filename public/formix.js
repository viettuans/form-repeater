/**
 * FormRepeater - A reusable form repeater component
 * Allows dynamic adding and removing of form field groups
 */
(function(global) {
    'use strict';

    class FormRepeater {
        constructor(options = {}) {
            this.options = {
                // Default selectors
                addBtn: '.form-repeat-add-btn',
                deleteBtn: '.form-repeat-delete-btn',
                fieldInput: '.form-repeat-field-ipt',
                boxItem: '.form-repeat-box-item',
                
                // Default attributes
                groupNameAttr: 'data-group-name',
                boxDefaultAttr: 'data-box-default',
                boxListAttr: 'data-box-list',
                fieldNameAttr: 'data-field-name',
                
                // Callbacks
                onBeforeAdd: null,
                onAfterAdd: null,
                onBeforeDelete: null,
                onAfterDelete: null,
                
                // Other options
                generateTimestamp: true,
                debugMode: false,
                
                // Override with user options
                ...options
            };

            this.init();
        }

        init() {
            this.bindEvents();
            this.log('FormRepeater initialized');
        }

        bindEvents() {
            const self = this;
            
            // Add button event
            $(document).on('click', this.options.addBtn, function(e) {
                e.preventDefault();
                self.handleAdd($(this));
            });

            // Delete button event
            $(document).on('click', this.options.deleteBtn, function(e) {
                e.preventDefault();
                self.handleDelete($(this));
            });
        }

        handleAdd($button) {
            try {
                // Execute before add callback
                if (this.options.onBeforeAdd && typeof this.options.onBeforeAdd === 'function') {
                    if (this.options.onBeforeAdd($button) === false) {
                        return; // Cancel if callback returns false
                    }
                }

                const groupName = this.generateGroupName($button);
                const boxDefaultSelector = $button.attr(this.options.boxDefaultAttr);
                const boxListSelector = $button.attr(this.options.boxListAttr);

                if (!boxDefaultSelector || !boxListSelector) {
                    this.log('Missing required attributes: ' + this.options.boxDefaultAttr + ' or ' + this.options.boxListAttr, 'error');
                    return;
                }

                const $template = $(boxDefaultSelector);
                if ($template.length === 0) {
                    this.log('Template element not found: ' + boxDefaultSelector, 'error');
                    return;
                }

                const $newElement = $template.clone();
                this.updateFieldNames($newElement, groupName);

                // Show the cloned element and append to list
                $newElement.show();
                $(boxListSelector).append($newElement);

                // Execute after add callback
                if (this.options.onAfterAdd && typeof this.options.onAfterAdd === 'function') {
                    this.options.onAfterAdd($newElement, $button);
                }

                this.log('Form group added successfully');

            } catch (error) {
                this.log('Error adding form group: ' + error.message, 'error');
            }
        }

        handleDelete($button) {
            try {
                const $itemToDelete = $button.closest(this.options.boxItem);

                // Execute before delete callback
                if (this.options.onBeforeDelete && typeof this.options.onBeforeDelete === 'function') {
                    if (this.options.onBeforeDelete($itemToDelete, $button) === false) {
                        return; // Cancel if callback returns false
                    }
                }

                $itemToDelete.remove();

                // Execute after delete callback
                if (this.options.onAfterDelete && typeof this.options.onAfterDelete === 'function') {
                    this.options.onAfterDelete($button);
                }

                this.log('Form group deleted successfully');

            } catch (error) {
                this.log('Error deleting form group: ' + error.message, 'error');
            }
        }

        generateGroupName($button) {
            const baseGroupName = $button.attr(this.options.groupNameAttr);
            if (!baseGroupName) {
                this.log('Group name attribute not found: ' + this.options.groupNameAttr, 'error');
                return 'default_group';
            }

            const timestamp = this.options.generateTimestamp ? Date.now() : Math.random().toString(36).substr(2, 9);
            return `${baseGroupName}[${timestamp}]`;
        }

        updateFieldNames($element, groupName) {
            const self = this;
            
            $element.find(this.options.fieldInput).each(function() {
                const $field = $(this);
                const fieldName = $field.attr(self.options.fieldNameAttr);
                
                if (!fieldName) {
                    self.log('Field name attribute not found: ' + self.options.fieldNameAttr, 'warn');
                    return;
                }

                const newName = `${groupName}[${fieldName}]`;
                $field.attr('name', newName);
                
                // Also update id if exists to maintain uniqueness
                const currentId = $field.attr('id');
                if (currentId) {
                    $field.attr('id', currentId + '_' + Date.now());
                }
            });
        }

        log(message, type = 'info') {
            if (!this.options.debugMode) return;
            
            const prefix = 'FormRepeater: ';
            switch (type) {
                case 'error':
                    console.error(prefix + message);
                    break;
                case 'warn':
                    console.warn(prefix + message);
                    break;
                default:
                    console.log(prefix + message);
            }
        }

        // Public methods
        destroy() {
            $(document).off('click', this.options.addBtn);
            $(document).off('click', this.options.deleteBtn);
            this.log('FormRepeater destroyed');
        }

        updateOptions(newOptions) {
            this.options = { ...this.options, ...newOptions };
            this.log('Options updated');
        }
    }

    // Static method for easy initialization
    FormRepeater.init = function(options) {
        return new FormRepeater(options);
    };

    // Export to global scope
    if (typeof module !== 'undefined' && module.exports) {
        // Node.js
        module.exports = FormRepeater;
    } else if (typeof define === 'function' && define.amd) {
        // AMD
        define(function() { return FormRepeater; });
    } else {
        // Browser global
        global.FormRepeater = FormRepeater;
    }

    // Auto-initialize with default options when DOM is ready
    $(document).ready(function() {
        if (!global.FormRepeater.instance) {
            global.FormRepeater.instance = new FormRepeater();
        }
    });

})(typeof window !== 'undefined' ? window : this);

