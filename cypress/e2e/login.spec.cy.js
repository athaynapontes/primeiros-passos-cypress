import userData from '../fixtures/user-data.json'
import LoginPage from '../pages/loginPage'
import DashboardPage from '../pages/dashboardPage'



const loginPage = new LoginPage ()
const dashboardPage= new DashboardPage()


describe('Login Orange HRM Tests', () => {


  it('Login - fail', () => {
    loginPage.accessLoginPage()
    
    loginPage.loginWithAnyUser(userData.userFail.username, userData.userFail.password)
    loginPage.checkAcessInvalid()
    
  })

  it('Login - Sucess', () => {
    loginPage.accessLoginPage()
    
    loginPage.loginWithAnyUser(userData.userSucess.username, userData.userSucess.password)
    dashboardPage.checkDashboardPage()
  
    
  })

})