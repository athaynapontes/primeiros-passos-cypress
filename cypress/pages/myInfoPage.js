class MyInfoPage {

    selectorsList() {

        const selectors = {
            firstNameField: "[name='firstName']",
            lastNameField: "[name='lastName']",
            genericField: ".oxd-input--active",
            dateField: "[placeholder='yyyy-dd-mm']",
            dateCloseButton: ".--close",
            submitButton: "[type='submit']",
            genericComboBox: "[clear='false']",
            vigesimoSetimoComboBox: ".oxd-select-dropdown > :nth-child(27)",
            secondComboBox: ".oxd-select-dropdown > :nth-child(2)"
          
        }
        return selectors
    }

    fillPersonalDetails(firstName,lastName) {
        cy.get(this.selectorsList().firstNameField).clear().type(firstName)
        cy.get(this.selectorsList().lastNameField).clear().type(lastName)

    }


    fillEmployeeDetails (employeeId,otherId, driversLicenseNumber, expiryDate) {
        cy.get(this.selectorsList().genericField).eq(3).clear().type(employeeId)
        cy.get(this.selectorsList().genericField).eq(4).clear().type(otherId)
        cy.get(this.selectorsList().genericField).eq(5).clear().type(driversLicenseNumber)
        cy.get(this.selectorsList().dateField).eq(0).clear().type(expiryDate)
        cy.get(this.selectorsList().dateCloseButton).click()
    }

    saveForm(){
        
        cy.get(this.selectorsList().submitButton).eq(0).click()
        cy.get('.oxd-text--toast-message')   

    }
 
    fillStatus(){
        cy.get(this.selectorsList().genericComboBox).eq(0).click()
        cy.get(this.selectorsList().vigesimoSetimoComboBox).click()
        cy.get(this.selectorsList().genericComboBox).eq(1).click()
        cy.get(this.selectorsList().secondComboBox).click()
    }
}

export default MyInfoPage
