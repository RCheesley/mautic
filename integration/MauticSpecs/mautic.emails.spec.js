/*jslint es6 */
/// <reference types="Cypress" />
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const leftNavigation = require("../../Pages/LeftNavigation");
const emails = require("../../Pages/Emails");

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
  });

  });


