class LoginPage {

      selectorsList () {
        const selectors = {
            usernameField: "[name='username']",
            passwordField: "[name='password']",
            loginButton: "[type='submit']",
            wrongCredencialAlert: "[role='alert']",
        }
        return selectors
      }


      accessLoginPage () {
        cy.visit('/auth/login')

      }     
      
      loginWithAnyUser(username, password) {
        cy.get(this.selectorsList().usernameField). type (username)
        cy.get(this.selectorsList().passwordField). type (password)
        cy.get(this.selectorsList().loginButton).click()
      }

      loginWrong (username, password) {
        cy.get(this.selectorsList().usernameField). type (username)
        cy.get(this.selectorsList().passwordField). type (password)
        cy.get(this.selectorsList().loginButton).click()
        cy.get(this.selectorsList().wrongCredencialAlert)
      }

      checkAcessInvalid () {
        cy.get(this.selectorsList().wrongCredencialAlert)
      }
}


export default LoginPage