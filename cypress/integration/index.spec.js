describe('Home page', function() {
    it('loads properly', function() {
        cy.visit('/');
        cy.get('body').happoScreenshot();
        cy.contains('AC').happoScreenshot();
    });
});