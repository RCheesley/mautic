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
        return  cy.get('button[class="btn btn-lg btn-default btn-nospin text-success"]');
    }

    get contactSegmentSelector() {
        return  cy.get('input[class="chosen-search-input default"]').eq(1);
    }

    get segmentEmailSelector() {
        return  cy.get('button[class="btn btn-lg btn-default btn-nospin text-primary"]');
    }

    get firstSegmentEmailSelector() {
        return  cy.get('div[id="emailform_lists_chosen"]>div>ul>li').eq(1);
    }

    get saveEmailButton() {
        return cy.get('#emailform_buttons_save_toolbar');
    }

    get closeButton(){
        return cy.get('[href="/s/emails"] > :nth-child(1) > .hidden-xs');
    }

    get searchAndSelectEmail(){
        return cy.get('table[class="table table-hover table-striped table-bordered email-list"]>tbody>tr>td>div>a');
    }

    get scheduleSegmentEmail(){
        return cy.get('[data-header="Schedule Test Email by Cypress"] > :nth-child(1) > .hidden-xs');
    }

    get scheduleSegmentCalender(){
        return cy.get('.div[class="input-group"]>input').eq(3);
    }

    get scheduleButton(){
        return cy.get('.modal-form-buttons > .btn-save');
    }

}
const email = new Emails();
module.exports = email;
