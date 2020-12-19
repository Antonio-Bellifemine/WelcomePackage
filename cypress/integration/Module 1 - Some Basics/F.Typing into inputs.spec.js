before('', () => {

    cy.visit('');

});

describe('Checking Registration Page Displays Properly', () => {

    it('click sign in link',() => {

        cy.get('a:contains("Sign in")').click();
        cy.get('input').eq(0).type('UDIDACT');
        cy.get('input').eq(1).type('Password');

    });

    it('check that the username, email, and password inputs are available', () => {
        cy.visit('register');
        cy.get('input').eq(0).should('be.visible').type('test Tester')
        cy.get('input').eq(1).should('be.visible').type('Tester@templateSettings.com')
        cy.get('input').eq(2).should('be.visible').type('password12345', { delay: 300 })
    });

});

