/// <reference types="Cypress" />

context('User page', () => {

    beforeEach(() => {
        cy.visit('http://localhost:1234/user');
    });

    it('should edit user name', () => {
        cy.get('[data-cy=edit-user-btn]').click();
        cy.get('[data-cy=fullName-input]')
            .clear()
            .type('superman')
            .should('have.value', 'superman');
        cy.get('[data-cy=save-user-btn]').click();
        cy.get('[data-cy=fullName]').should('have.text', 'superman')
    });


    it('should edit coutry', () => {

        cy.get('[data-cy=edit-user-btn]').click();
        cy.get('[data-cy=country-select]')
            .select('UK')
            .should('have.value', 'UK');

        cy.get('[data-cy=save-user-btn]').click();
        cy.get('[data-cy=country]').should('have.text', 'UK')
    });


    it('should edit gender', () => {
        cy.get('[data-cy=edit-user-btn]').click();
        cy.get('[data-cy=female-radio]').click({force: true});

        cy.get('[data-cy=save-user-btn]').click();
        cy.get('[data-cy=gender]').should('have.text', 'Female')
    });


})
