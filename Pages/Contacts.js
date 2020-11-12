"use strict";
class Contacts {
    waitforPageLoad (){
        cy.get('h3.pull-left').should('contain', 'Contacts');
    }
    get addNewButton() {
        return cy.get('[href="/s/contacts/new"]');
    }

    get searchAndClickForFirstElement() {
        return cy.get('#leadTable>tbody>tr>td>a>div');
    }

    get quickAddButton() {
        return cy.get('.quickadd');
    }

    waitForContactOpen(){
        return  cy.get('div[class="std-toolbar btn-group"]>a[href*="edit"]').should('be.visible');
    }

    get editContact(){
        return cy.get('div[class="std-toolbar btn-group"]>a[href*="edit"]');
    }
    get title() {
        return cy.get("#lead_title");
    }
    get firstName() {
        return   cy.get("#lead_firstname");
    }
    get lastName() {
        return cy.get("#lead_lastname");
    }
    get leadEmail() {
        return cy.get("#lead_email");
    }
    get leadCity() {
        return cy.get("#lead_city");
    }

    waitForContactEditPageOpen(){
        return  cy.get('#lead_city').should('be.visible');
    }

    get SaveButton() {
        return   cy.get("#lead_buttons_save_toolbar");
    }
    get logout() {
        return $('[data-cy="logoutMenu"]');
    }
    get closeButton() {
       return  cy.get('[href="/s/contacts"] > :nth-child(1) > .hidden-xs');
    }

    get importExportDropdownMenu() {
        return  cy.get('.std-toolbar > .dropdown-toggle > .fa');
    }

    get importButton(){
        return  cy.get('.std-toolbar > .dropdown-menu > :nth-child(2) > a > :nth-child(1) > span');
    }

    get clickOnCustomObject(){
        return  cy.get('a[href*="custom-object"]');
    }

    get clickOnLinkExisting(){
        return  cy.get('a[href*="filterEntity"]');
    }

    get clickOnDropdwonForLinkObject(){
        return  cy.get('table[id*="custom-items-"]>tbody>tr>td>div>div>button');
    }

    get clickOnLinkObject(){
        return  cy.get('table[id*="custom-items-"]>tbody>tr>td>div>div>ul>li');
    }

    get checkNoResultFoundMessage() {
        return cy.get('div[id*="custom-item-"]>div>h4');
    }

    get closeThePopUpWindow() {
        return cy.get('#customItemLookupModal>div>div>div>button');
    }

    get customObjectTable() {
        return cy.get('table[id*="custom-items-"]>tbody>tr>td>div>a');
    }

    waitTillLinkPopupOpen(){
        cy.get('#customItemLookupModal-label').should('be.visible');
    }

    waitForContactCreation(){
        return  cy.get('div[class="mt-sm points-panel text-center"]>h1').should('be.visible');
    }

    waitTillSearchResultGetsDisplayed(){
        cy.get('#leadTable>tbody>tr>td>a').should('not.be.empty');
    }
}
const contact = new Contacts();
module.exports = contact;
