describe('How to click the right button when there is more than one', () => {

    it('click a link', () => {
        cy.visit('');
        cy.get('button').eq(0).click();
    });

});