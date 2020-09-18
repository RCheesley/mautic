"use strict";
class Emails{
    get addNewButton() {
        return cy.get('.std-toolbar > .btn');
    }

    get emailInternalName() {
        return  cy.get('#emailform_name');
    }

    get emailSubject(){
        return cy.get('#emailform_subject');
    }

    get templateEmailSelector() {
        return  cy.get(':nth-child(1) > .panel > .panel-footer > .btn');
    }

    get saveEmailButton() {
        return cy.get('#emailform_buttons_save_toolbar');
    }

    get closeButton(){
        return cy.get('[href="/s/emails"] > :nth-child(1) > .hidden-xs');
    }

}
const email = new Emails();
module.exports = email;
