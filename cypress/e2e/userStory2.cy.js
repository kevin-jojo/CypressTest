///<reference types = "cypress"/>

describe('User Story #2 ', () => {

    it('Login Page', () => {
        cy.visit('https://qa-tech-test-demo.intellihr.net/spa/settings')
    })

    it('Username and Password visibility', () => {
        cy.get('#username').should('be.visible')
        cy.get('#password').should('be.visible')
    })

})