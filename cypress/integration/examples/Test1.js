// Cypress - Spec
describe('My First Test Suite', () => {
    it('My First Test Case', () => {
        // test step
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
        cy.get(".search-keyword").type('ca');
        cy.wait(1000);
        cy.get('.product:visible').should('have.length', 4)
    })
})