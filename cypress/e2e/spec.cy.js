import userData from '../fixtures/user-data.json'

describe('Orange HRM Tests', () => {


const selectorsList = {
  usernameField: "[name='username']",
  passwordField: "[name='password']",
  loginButton: "[type='submit']",
  sectionTittleTopBar: ".oxd-topbar-header-breadcrumb-module",
  dashboardGrid: ".orangehrm-dashboard-grid",
  wrongCredencialAlert: "[role='alert']"

}


  it('login - sucess', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField). type (userData.userSucess.username)
    cy.get(selectorsList.passwordField). type (userData.userSucess.password)
    cy.get(selectorsList.loginButton).click()
    cy.location('pathname').should('equal','/web/index.php/dashboard/index')
    cy.get(selectorsList.dashboardGrid)
  })
  it('login - fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField). type (userData.userFail.username)
    cy.get(selectorsList.passwordField). type (userData.userFail.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredencialAlert)
  
  })
})