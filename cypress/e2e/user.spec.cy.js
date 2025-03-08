import userData from '../fixtures/user-data.json'
import LoginPage from '../pages/loginPage'
import DashboardPage from '../pages/dashboardPage'
import MenuPage from '../pages/menuPage'
import MyInfoPage from '../pages/myInfoPage'



const loginPage = new LoginPage ()
const dashboardPage = new DashboardPage ()
const menuPage = new MenuPage
const myInfoPage = new MyInfoPage

describe('Orange HRM Tests', () => {


const selectorsList = {
  
}
  it.only('User Info Update - Sucess', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userSucess.username, userData.userSucess.password)
    

    dashboardPage.checkDashboardPage()
    menuPage.accessMyInfo()
    myInfoPage.fillMyInfo()

  })


  it('login - fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField). type (userData.userFail.username)
    cy.get(selectorsList.passwordField). type (userData.userFail.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredencialAlert)
    
  })
})