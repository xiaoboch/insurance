/// <reference types="Cypress" />

context('Insurance plans', () => {

    beforeEach(() => {
        cy.visit('http://localhost:1234/insurance-plans');
    });

    it('should select car insurance', ()=> {
        // select plan-B for car insurance
        cy.get('[data-cy=CAR-detail-btn]').click();
        cy.url().should('include', 'insurance-plans/CAR');
        cy.get('[data-cy=plan-B-accordion-header]').click();
        cy.get('[data-cy=plan-B-select-btn]').should('be.visible').click();
        cy.get('.modal-header').should('be.visible');
        cy.get('[data-cy=select-insurance-plan-choose-btn]').click();
        cy.get('.plan-B-selected').should('be.visible');
        // navigate out and back make sure the plan is still selected
        cy.get('[data-cy=bc-insurance-plans]').click();
        cy.get('[data-cy=CAR-detail-btn]').should('be.visible').click();
        cy.get('.plan-B-selected').should('be.visible');
    });
});