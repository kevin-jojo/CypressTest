///<reference types = "cypress"/>

describe('User Story #1', () => {

  it('Visits website', function () {
    cy.visit('https://www.intellihr.com')
  })

  it('Logo Visibility', function () {
    cy.get('.header-logo-img-normal').should('be.visible')
  })

  it('Case study for Fujitsu ', function () {
    cy.scrollTo('bottom')
    cy.get('.menu-item-1615 > a').click()
    cy.get('[href="https://intellihr.com/case-studies/fujitsu-general"]').click()
  })

  it('Download now button visibility', function () {
    cy.get('#mktoForm_1136 > .mktoButtonRow > .mktoButtonWrap > .mktoButton').should('be.visible')
  })

})