/*jslint es6 */
/// <reference types="Cypress" />
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const leftNavigation = require("../../Pages/LeftNavigation");
const emails = require("../../Pages/Emails");
const search=require("../../Pages/Search");

context("Emails", () => {

  it("Add new Email", () => {
    leftNavigation.ChannelsSection.click();
    leftNavigation.EmailsSubSection.click();
    cy.wait(3000);
    emails.addNewButton.click({ force: true });
    cy.wait(2000);
    emails.templateEmailSelector.click();
    cy.wait(2000);
    emails.emailSubject.type('Test Email by Cypress');
    emails.emailInternalName.type('Test Email by Cypress')
    emails.saveEmailButton.click();
    emails.closeButton.click({force: true});
  });

  it("Add new Email for deletion", () => {
    cy.wait(3000);
    emails.addNewButton.click({ force: true });
    cy.wait(2000);
    emails.templateEmailSelector.click();
    cy.wait(2000);
    emails.emailSubject.type('Delete');
    emails.emailInternalName.type('Delete')
    emails.saveEmailButton.click();
    emails.closeButton.click({force: true});
  });

  it("Search and Delete Email", () => {
    leftNavigation.ChannelsSection.click();
    leftNavigation.EmailsSubSection.click();
    search.searchBox.clear();
    search.searchBox.type("Delete");
    cy.wait(2000);
    search.selectCheckBoxForFirstItem.click({force: true});
    cy.wait(2000);
    search.OptionsDropdownForFirstItem.click();
    search.deleteButtonForFirstItem.click();
    search.confirmDeleteButton.click();
    cy.wait(1000);
  });

  });


