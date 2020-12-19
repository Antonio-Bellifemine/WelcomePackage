before('visit registration page', () => {
    cy.visit('');
});

  it('confirm conduit logo visible', () => {
        cy.get('a').contains('conduit').should('be.visible');
    });

    it('confirm Home Button is visible',() => {
       cy.get('a.nav-link').eq(0).should('have.text', 'Home');
    });
