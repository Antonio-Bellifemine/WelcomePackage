before('visit registration page', () => {

    cy.visit('');

})

describe('', () => {
    it('confirm conduit logo is visible and has correct sub headline', () => {
        cy.get('div.container').eq(1).children().eq(0).should('be.visible').and('have.text', 'conduit')
        cy.get('div.container').eq(1).children().eq(1).should('be.visible').and('have.text', 'A place to share your knowledge.')
    });
})