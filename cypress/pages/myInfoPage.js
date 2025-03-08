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

    fillMyInfo() {
        cy.get(this.selectorsList().firstNameField).clear().type("FirstNameTest")
        cy.get(this.selectorsList().lastNameField).clear().type("LastNameTest")
        cy.get(this.selectorsList().genericField).eq(3).clear().type("EmployeeId")
        cy.get(this.selectorsList().genericField).eq(4).clear().type("OtherIdTest")
        cy.get(this.selectorsList().genericField).eq(5).clear().type("DriversLicenceTest")
        cy.get(this.selectorsList().dateField).eq(0).clear().type("2150-03-10")
        cy.get(this.selectorsList().dateCloseButton).click()
        cy.get(this.selectorsList().submitButton).eq(0).click()
        cy.get('.oxd-text--toast-message')
        cy.get(this.selectorsList().genericComboBox).eq(0).click()
        cy.get(this.selectorsList().vigesimoSetimoComboBox).click()
        cy.get(this.selectorsList().genericComboBox).eq(1).click()
        cy.get(this.selectorsList().secondComboBox).click()
    
}
}

export default MyInfoPage
