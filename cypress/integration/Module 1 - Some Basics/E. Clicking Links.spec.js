before('', () => {
    cy.visit('');
})
describe('Click Sign In link', () => {
    it('Make sure log in page displays', () => {
        cy.get('a').contains("Sign in").click()
    });
});