// Cypress - Spec
/// <reference types="Cypress" />

describe('My First Test Suite', () => {
    it('My First Test Case', () => {
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
        cy.get(".search-keyword").type("ca")
        cy.wait(2000) 
        // Selenium get hit url in browser, cypress get acts like findElement of selenium
        // 只选中可见的元素
        cy.get('.product:visible').should('have.length', 4)
    })
})