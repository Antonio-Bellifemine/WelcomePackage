describe('using cy.get', () => {

    it('check for conduit logo',() => {

        cy.viewport(1920, 1080);
        cy.visit('');
        cy.get('a[class="navbar-brand"]');

    });

    it('get a button', () => {
        cy.get('button')
    });


});