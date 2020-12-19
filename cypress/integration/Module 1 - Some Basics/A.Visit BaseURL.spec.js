const { describe } = require("mocha");

describe('Testing module 1 Basics', () => {

    it('Displays the landing page', () => {
        cy.viewport(1920, 1080);
        cy.visit('');
    });

    it('visit login', () => {
        cy.viewport(1920, 1080);
        cy.visit('login');
    });

    it('visit register', () => {
        cy.viewport(1920, 1080);
        cy.visit('register');
    });
});