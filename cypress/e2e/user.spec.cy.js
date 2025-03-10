import userData from '../fixtures/user-data.json'
import LoginPage from '../pages/loginPage'
import DashboardPage from '../pages/dashboardPage'
import MenuPage from '../pages/menuPage'
import MyInfoPage from '../pages/myInfoPage'

const Chance = require ('chance');

const Chance = new Chance()

const loginPage = new LoginPage ()
const dashboardPage = new DashboardPage ()
const menuPage = new MenuPage()
const myInfoPage = new MyInfoPage()

describe('Orange HRM Tests', () => {



  it('User Info Update - Sucess', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userSucess.username, userData.userSucess.password)
    

    dashboardPage.checkDashboardPage()

    menuPage.accessMyInfo()


    myInfoPage.fillPersonalDetails(Chance.first(), Chance.last())
    myInfoPage.fillEmployeeDetails("EmployeeId", "Other Id", "Drivers License Test", "2025-03-17")
    myInfoPage.fillStatus()
    myInfoPage.saveForm()

  })


})