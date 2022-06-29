///<reference types = "cypress"/>

describe('User Story #7', () => {

    //Logs in as Admin
    it('Admin Logs In', function () {
        cy.viewport(1980, 1080)
        cy.visit('https://qa-tech-test-demo.intellihr.net')

        //Fetches user details from fixture folder and logs in
        cy.fixture('loginDetails.env.json').then((user) => {
            cy.get('#username').type(user.admin)
            cy.get('#password').type(user.adminPass)
            cy.contains('Sign In').click()
        })

    })
    
    it('My Profile', function () {
        cy.get('.sc-gtfDJT > :nth-child(2) > .sc-bGbJRg').click()   // Navigates to 'My Profile' page
        cy.get(':nth-child(2) > .sc-kNBZmU').click()    //Clicks Jobs tab
        cy.get('[data-component-context="remuneration-schedule-annotated-section"] > .sc-jqCOkK > .cZFFbe > .sc-jwKygS > .sc-cNnxps > .sc-dPPMrM > .sc-bbmXgH > .sc-gGBfsJ > :nth-child(1) > .sc-hmzhuo').click()
    })  
})