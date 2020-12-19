before(() => {
    cy.visit('')
});

describe('',() => {
    it('verify nav bar on public landing page contains logo and expected buttons',() => {
        cy.get('a').eq(0).contains('conduit').should('be.visible');
    });

    it('Confirm home button is visible in nav bar', () => {
        cy.get('a.nav-link').eq(0).should('have.text', 'Home')
    })

    it('Confirm sign up button is visible in nav bar', () => {
        cy.get('a.nav-link').eq(1).should('have.text', 'Sign in')
    })

    it('Confirm sign in button is visible in nav bar', () => {
        cy.get('a.nav-link').eq(2).should('have.text', 'Sign up')
    })
});