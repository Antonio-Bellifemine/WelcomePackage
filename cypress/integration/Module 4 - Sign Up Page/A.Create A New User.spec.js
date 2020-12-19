// const userName = Chance.last({ nationality: 'it'});
// const userEmail = Chance.email({ domain: 'example.com'});
// const passWord = Chance.string({ length: 10, casing: 'upper', alpha: true, 'numeric': true});

before(() => {
    cy.visit('')
});


describe('Successfully create new user', () => {
    it('',() => {
        cy.get('a').contains('Sign in').click()
        cy.get('a').contains('Need an account').click();
        cy.get('input').eq(0).type(`A.testing123`);
        cy.get('input').eq(1).type('testing123666@testing.com');
        cy.get('input').eq(2).type('passWord1234');
        cy.get('button').contains('Sign up').click();
        cy.get('a.nav-link').contains('Your Feed').should('be.visible')
    });

})
