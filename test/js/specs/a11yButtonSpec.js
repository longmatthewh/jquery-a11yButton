describe('a11yButton plugin', function () {

    const MAIN_SELECTOR = '#main';
    const BUTTON_DIV_SELECTOR = '#div-button';

    beforeEach(function() {
        var htmlContent = '<div id="main"></div>';
        $('body').append(htmlContent);

        var divButtonHtml = '<div id="div-button">button</div>';
        $(MAIN_SELECTOR).append(divButtonHtml);
    });

    afterEach(function() {
        $(MAIN_SELECTOR).remove();
    });

    it('adds non button container to tab order', function() {
        expect($(BUTTON_DIV_SELECTOR).attr('tabindex')).toBe(undefined);
        $(BUTTON_DIV_SELECTOR).a11yButton();
        expect($(BUTTON_DIV_SELECTOR).attr('tabindex')).toBe('0');
    });

    it('adds ARIA role to non button container', function() {
        $(BUTTON_DIV_SELECTOR).a11yButton();
        expect($(BUTTON_DIV_SELECTOR).attr('role')).toBe('button');
    });

});