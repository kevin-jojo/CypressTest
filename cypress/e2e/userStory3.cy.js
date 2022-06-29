///<reference types = "cypress"/>

describe('User Story #3 ', () => {

    it('Logs In', function () {
        cy.visit('https://qa-tech-test-demo.intellihr.net')
        cy.fixture('loginDetails.env.json').then((user) => {
            cy.get('#username').type(user.userName)
            cy.get('#password').type(user.userPass)
            cy.contains('Sign In').click()
        })

    })

    it('Dashboard Greeting visiblility', () => {
        cy.wait(10000)
        cy.get('.iLWyyy').should('be.visible').invoke('text').then((text) => {
            cy.log('Greeting:', text)
        })

    })

})