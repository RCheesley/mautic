/*jslint es6 */
/// <reference types="Cypress" />
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const leftNavigation = require("../../Pages/LeftNavigation");
const emails = require("../../Pages/Emails");
const search=require("../../Pages/Search");

var testEmailCypress = "TestEmailCypress";

context("Emails", () => {

  it("Add new Email", () => {
    leftNavigation.ChannelsSection.click();
    leftNavigation.EmailsSubSection.click();
    emails.waitforPageLoad();
    emails.addNewButton.click({ force: true });
    emails.waitforEmailSelectorPageGetsLoaded();
    emails.templateEmailSelector.click();
    emails.emailSubject.type(testEmailCypress);
    emails.emailInternalName.type(testEmailCypress)
    emails.saveEmailButton.click();
    emails.closeButton.click({force: true});
    emails.waitforEmailCreation();
  });

  it("Edit newly added email", () => {
    leftNavigation.ChannelsSection.click();
    leftNavigation.EmailsSubSection.click();
    emails.waitforPageLoad();
    cy.visit('/s/emails?search=' + testEmailCypress)
    emails.searchAndSelectEmail.contains(testEmailCypress).click();
    emails.waitTillEditMailPageGetsVisible();
    emails.emailEditButton.click();
    emails.waitforSelectedEmailGetsOpen();
    emails.emailSubject.clear();
    emails.emailSubject.type('TestEmail');
    emails.saveEmailButton.click();
    emails.closeButton.click({force: true});
    emails.waitforEmailCreation();
  });

  it("Search and delete newly added email", () => {
    leftNavigation.ChannelsSection.click();
    leftNavigation.EmailsSubSection.click();
    emails.waitforPageLoad();
    cy.visit('/s/emails?search=' + testEmailCypress)
    search.selectCheckBoxForFirstItem.click();
    search.OptionsDropdownForFirstItem.click();
    search.deleteButtonForFirstItem.click();
    search.confirmDeleteButton.click();
    emails.checkNoResultFoundMessage.should('contain','No Results Found');
  });

  });


