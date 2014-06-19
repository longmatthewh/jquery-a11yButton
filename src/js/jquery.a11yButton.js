;(function ( $, window, document, undefined ) {
    var PLUGIN_NAME = 'a11yButton';
    var PLUGIN_PREFIX = 'plugin_';

    var defaults = {

    };

    function Plugin( element, options ) {
        this.options = $.extend( {}, defaults, options);
        this.init();
    }

    Plugin.prototype = {
        init : function () {

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