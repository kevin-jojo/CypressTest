///<reference types = "cypress"/>

describe('User Story #4 ', () => {

    //Logs in as Admin
    it('Admin Logs In', function () {

        cy.visit('https://qa-tech-test-demo.intellihr.net/spa/settings/skills')
        cy.fixture('loginDetails.env.json').then((user) => {
            cy.get('#username').type(user.admin)
            cy.get('#password').type(user.adminPass)
            cy.contains('Sign In').click()
        })

    })

    //Creates new skill
    it('Create skill 1', function () {

        cy.get('.sc-ksYbfQ').click()
        cy.get('#name').type('abc')
        cy.get('.Select-placeholder').click().type('Soft Skills {enter}')
        cy.get('#description').type('abc is key')
        cy.get(':nth-child(2) > .sc-hmzhuo').click()
        cy.wait(10000)
    })

})

//Error: Logged out due to inactivity