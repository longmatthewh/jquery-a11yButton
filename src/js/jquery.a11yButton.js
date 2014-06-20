;(function ( $, window, document, undefined ) {
    var PLUGIN_NAME = 'a11yButton';
    var PLUGIN_PREFIX = 'plugin_';
    var TABINDEX_ATTR_NAME = 'tabindex';
    var ROLE_ATTR_NAME = 'role', ARIA_BUTTON_ROLE = 'button';
    var ENTER_KEY=13;
    var KEYDOWN_EVENT = 'keydown';

    var defaults = {

    };

    function Plugin( element, options ) {
        this.element = element;
        this.options = $.extend( {}, defaults, options);
        this.init();
    }

    Plugin.prototype = {
        init : function () {
            var $button = $(this.element);
            this.addButtonToTabOrder($button);
            this.addARIARole($button);
            this.addKeypress($button);
        },
        addButtonToTabOrder : function($button) {
            $button.attr(TABINDEX_ATTR_NAME,'0');
        },
        addARIARole : function($button) {
            $button.attr(ROLE_ATTR_NAME,ARIA_BUTTON_ROLE);
        },
        addKeypress : function($button) {
            var self = this;
            $button.on(KEYDOWN_EVENT, function(event) {
                if (_isKey(event, ENTER_KEY)) {
                    self.handleEnterKey($button);
                }
            });
        },
        handleEnterKey : function($button) {
            $button.click();
        }
    };

    $.fn[PLUGIN_NAME] = function ( options ) {
        return this.each(function () {
            if (!$.data(this, PLUGIN_PREFIX + PLUGIN_NAME)) {
                $.data(this, PLUGIN_PREFIX + PLUGIN_NAME,
                    new Plugin( this, options ));
            }
        });
    };

    function _isKey(event, key) {
        return event.which === key;
    }

})( jQuery, window, document );