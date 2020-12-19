before('visit registration page', () => {

    cy.visit('');

});

// using cy.within to scope an element and it's decendants to be more accurate, less flakey, and more controlled.

describe('public landing page displays properly', () => {

    it('',() => {
        cy.get('div.container').eq(1).within(() => {
            cy.get('h1').should('be.visible').and('have.text', 'conduit');
            cy.get('p').should('be.visible').and('have.text', 'A place to share your knowledge.');
        });
    });

});