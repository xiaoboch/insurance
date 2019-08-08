import { Given } from "cypress-cucumber-preprocessor/steps";

const url = 'http://localhost:1234'
Given('I open home page', () => {
    cy.visit(url)
})

When('I click on the try-out button', () => {
    cy.get('[data-cy=try-out]').click();
})

Then('I see user page', () => {
    cy.get('[data-cy=user]').should('exist');
})