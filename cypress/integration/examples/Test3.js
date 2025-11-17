/// <reference types="Cypress" />

describe('UI Components Automation', function () {

    it('Checkbox Automation', function () {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value', 'option1')
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
        // cy.get('#checkBoxOption1').uncheck().should('be.checked')
        // Find all checkboxes and select certain ones
        cy.get('input[type="checkbox"]').check(['option1', 'option3'])
    })

    it('Static dropdown', () => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        // static dropdown
        // assertion
        cy.get('select').select('option2').should('have.value', 'option2')
    })

    it('Dynamic dropdown', () => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get('#autocomplete').type('ind')
        cy.get('.ui-menu-item div').each(($el, index, $list) => {
            if ($el.text() === "India") {
                $el.click();
            }
        })
        cy.get('#autocomplete').should('have.value', 'India');
    })

    it('Visibility', () => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get('#displayed-text').should('be.visible')
        cy.get('#hide-textbox').click()
        cy.get('#displayed-text').should('not.be.visible')
        cy.get('#show-textbox').click()
        cy.get('#displayed-text').should('be.visible')
    })

    it.only('Radio buttons', () => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get('[value="radio2"]').check().should('be.checked')
    })
})