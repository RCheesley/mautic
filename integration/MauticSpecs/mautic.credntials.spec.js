/*jslint es6 */
/// <reference types="Cypress" />
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const leftNavigation = require("../../Pages/LeftNavigation");
const credentials = require("../../Pages/Credentials");
const search = require("../../Pages/Search");

context("Credentials", () => {
  it("Add new credential", () => {
    cy.visit("/s/credentials");
    credentials.addNewButton.click();
    credentials.oAuth2ClientApiModeSelector.then(() => {
      cy.wait(1000);
      credentials.clientName.type("Test");
      credentials.clientRedirectUI.type("https://on.cypress.io");
      credentials.saveAndCloseButton.click();
    });
    credentials.waitforPageLoad();
    var key1 = "";
    var secret1 = "";
    credentials.apiKey.invoke("val").then((key) => {
      key1 = key;
      credentials.apiSecret.invoke("val").then((secret) => {
        secret1 = secret;
        var token = "";
        cy.request("POST", "/oauth/v2/token", {
          grant_type: "client_credentials",
          client_id: key1,
          client_secret: secret1,
        }).then((response) => {
          token = response.body.access_token;
          cy.request("GET", "/api/contacts?access_token=" + token);
        });
      });
    });
  });

  it("Search and Delete Credentials", () => {
    cy.visit("/s/credentials");
    search.selectCheckBoxForFirstItem.click({ force: true });
    search.OptionsDropdownForFirstItem.click();
    search.deleteButtonForFirstItem.click();
    search.confirmDeleteButton.click();
  });
});
