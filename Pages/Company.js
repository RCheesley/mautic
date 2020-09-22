"use strict";
class Company {
    waitforPageLoad (){
        cy.get('h3.pull-left').should('contain', 'Companies');
    }
    get addNewButton() {
        return cy.get("#toolbar > div.std-toolbar.btn-group > a > span > span")
        .first();
    }

    get companyName() {
        return  cy.get("#company_companyname");
    }

    get saveButton() {
        return   cy.get("#company_buttons_save_toolbar");
    }
  
}
const company = new Company();
module.exports = company;
