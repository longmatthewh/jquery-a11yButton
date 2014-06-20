describe('a11yButton plugin', function () {

    const MAIN_SELECTOR = '#main';
    const BUTTON_DIV_SELECTOR = '#div-button';

    var $buttonDiv;

    beforeEach(function() {
        var htmlContent = '<div id="main"></div>';
        $('body').append(htmlContent);

        var divButtonHtml = '<div id="div-button">button</div>';
        $(MAIN_SELECTOR).append(divButtonHtml);
        $buttonDiv = $(BUTTON_DIV_SELECTOR);
    });

    afterEach(function() {
        $(MAIN_SELECTOR).remove();
    });

    it('adds non button container to tab order', function() {
        expect($buttonDiv.attr('tabindex')).toBeUndefined();
        $buttonDiv.a11yButton();
        expect($buttonDiv).toHaveAttr('tabindex', '0');
    });

    it('adds ARIA role to non button container', function() {
        $buttonDiv.a11yButton();
        expect($buttonDiv).toHaveAttr('role', 'button');
    });

    it('triggers click on ENTER keypress', function() {
        var spyEvent = spyOnEvent($buttonDiv, 'click');
        $buttonDiv.a11yButton();
        enterKey($buttonDiv);
        expect(spyEvent).toHaveBeenTriggered();
    });

    function enterKey($obj) {
        triggerKeydown(13, $obj);
    }

    function triggerKeydown(key, $obj) {
        var event = $.Event('keydown');
        event.which = key;
        $obj.trigger(event);
    }

});