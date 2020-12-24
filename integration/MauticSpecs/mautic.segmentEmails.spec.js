/*jslint es6 */
/// <reference types="Cypress" />
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const leftNavigation = require("../../Pages/LeftNavigation");
const emails = require("../../Pages/Emails");

var segmentEmail = "testSegmentEmailCypress";

context("Segment Emails", () => {

  it("Add new segment Email", () => {
    leftNavigation.ChannelsSection.click();
    leftNavigation.EmailsSubSection.click({ force: true });
    emails.waitforPageLoad();
    emails.addNewButton.click({ force: true });
    emails.segmentEmailSelector.click();
    emails.emailSubject.type(segmentEmail);
    emails.emailInternalName.type(segmentEmail)
    emails.contactSegmentSelector.click();
    emails.firstSegmentEmailSelector.click();
    emails.saveEmailButton.click();
    emails.closeButton.click();
    emails.waitforEmailCreation();
    cy.visit('/s/emails?search=' + segmentEmail)
    emails.searchAndSelectEmail.contains(segmentEmail).click();
    emails.waitTillCreatedSegmentEmailGetsOpen();
    emails.scheduleSegmentEmail.click();
    emails.scheduleButton.click();
    cy.wait(5000);
  });
  });


