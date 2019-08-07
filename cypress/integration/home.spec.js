/// <reference types="Cypress" />

context('hjemme siden', () => {

    beforeEach(() => {
        cy.visit('http://localhost:1234/');
    });

    it('should navigate to user page after clicking try out button', () => {
        cy.get('[data-cy=try-out]').click();
        c 
    })

});