/*jslint es6 */
/// <reference types="Cypress" />
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const leftNavigation = require("../../Pages/LeftNavigation");
const landingPages = require("../../Pages/LandingPages");

context("Create Landing Page", () => {
  it("Create a New Landing Page with embedded form", () => {
    leftNavigation.componentsSection.click();
    leftNavigation.landingPagesSubSection.click();
    cy.wait(2000);
    landingPages.addNewButton.click();
    cy.wait(1000);
    landingPages.pageTitle.type('Test Landing Page');
    cy.wait(1000);
    landingPages.applyButton.click();
    cy.wait(4000);
    landingPages.saveAndCloseButton.click();
  });
});
