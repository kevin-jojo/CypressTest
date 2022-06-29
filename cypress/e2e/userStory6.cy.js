///<reference types = "cypress"/>

describe('User Story #6', () => {

    //Normal User Logs In
    it('Logs In, Page Not Found', function () {
        cy.visit('https://qa-tech-test-demo.intellihr.net/configuration/edit')

        //Fetches user details from fixture folder and logs in
        cy.fixture('loginDetails.env.json').then((user) => {
            cy.get('#username').type(user.userName)
            cy.get('#password').type(user.userPass)
            cy.contains('Sign In').click()
        })
    })

    //Checks if sad intelliman image is visible
    it('Sad intelliman image', () => {
        cy.get('.sc-ghsgMZ > img').should('be.visible')
    })

})