/*jslint es6 */
/// <reference types="Cypress" />
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const leftNavigation = require("../../Pages/LeftNavigation");
const emails = require("../../Pages/Emails");
const search=require("../../Pages/Search");
const email = require("../../Pages/Emails");

context("Emails", () => {

  it("Add new segment Email", () => {
    leftNavigation.ChannelsSection.click();
    leftNavigation.EmailsSubSection.click();
    cy.wait(3000);
    emails.addNewButton.click({ force: true });
    cy.wait(2000);
    emails.segmentEmailSelector.click();
    cy.wait(2000);
    emails.emailSubject.type('Test Email by Cypress');
    emails.emailInternalName.type('Test Email by Cypress')
    emails.contactSegmentSelector.click({ force: true });
    emails.firstSegmentEmailSelector.click({ force: true });
    emails.saveEmailButton.click();
    emails.closeButton.click({force: true});
    emails.searchAndSelectEmail.contains('Test Email by Cypress').click();
    emails.scheduleSegmentEmail.click();
    emails.scheduleButton.click({force: true});
  });

  it("Search and Delete newly added segment Email", () => {
    leftNavigation.ChannelsSection.click();
    leftNavigation.EmailsSubSection.click();
    cy.wait(3000);
    cy.wait(1000);
    search.searchBox.clear();
    search.searchBox.type("Test Email by Cypress");
    search.selectCheckBoxForFirstItem.click({force: true});
    cy.wait(2000);
    search.OptionsDropdownForFirstItem.click();
    cy.wait(2000);
    search.deleteButtonForFirstItem.click();
    search.confirmDeleteButton.click();
    cy.wait(1000);
  });

  });


