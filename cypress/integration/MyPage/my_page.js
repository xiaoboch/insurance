import { Given } from "cypress-cucumber-preprocessor/steps";

const url = 'http://localhost:1234/my-page';
Given('I open my-page', () => {
    cy.visit(url)
})

Then('I can see full name on the page', ()=> {
    cy.get('[data-cy=fullName]').should('be.visible');
});
