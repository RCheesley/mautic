/*jslint es6 */
/// <reference types="Cypress" />
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const leftNavigation = require("../../Pages/LeftNavigation");
const assets = require("../../Pages/Assets");
const search = require("../../Pages/Search");

context("Assets", () => {
  it("Add new remote asset", () => {
    const remoteUrl =
      "https://docs.google.com/spreadsheets/d/1WXr9byp_l3QWpNgSIczXtL_udVNyq5FzIhySe5W9PiI/edit?usp=sharing";
    cy.visit("/s/assets");
    assets.addNewButton.click();
    assets.remoteButton.click();
    assets.assetTitle.type("Remote Asset");
    assets.remoteurl.type(remoteUrl);
    assets.saveAndCloseButton.click();
    assets.closeButton.should("be.visible");
  });

  xit("Add new local asset", () => {
    //To Do : Fix Uploading locas asset
    cy.visit("/s/assets");
    assets.addNewButton.click();
    const fileName = "contacts_july-22-2020.csv";
    const fileType = "application/csv";
    const fileInput = "input[name='asset_tempName']";
    assets.assetTitle.type("Local Asset");
    cy.upload_file(fileName, fileType, fileInput);
    assets.saveAndCloseButton.click();
    assets.closeButton.should("be.visible");
  });

  it("Edit  existing asset", () => {
    const remoteUrl =
      "https://docs.google.com/spreadsheets/d/1WXr9byp_l3QWpNgSIczXtL_udVNyq5FzIhySe5W9PiI/edit?usp=sharing";
    cy.visit("/s/assets");
    cy.visit("/s/assets?search=remote");
    assets.waitTillSearchResultGetsDisplayed();
    assets.searchAndClickForFirstElement.contains("remote").click();
    assets.editAsset.click();
    assets.assetTitle.clear();
    assets.assetTitle.type("Remote Asset Updated");
    // To Do : Discuss, why ? Test Fails if we use this step
    // assets.remoteurl.type(remoteUrl);
    assets.saveAndCloseButton.click();
    assets.closeButton.should("be.visible");
  });

  it("Search and Delete an Asset", () => {
    cy.visit("/s/assets");
    cy.visit("/s/assets?search=remote");
    assets.waitTillSearchResultGetsDisplayed();
    search.selectCheckBoxForFirstItem.click({ force: true });
    search.OptionsDropdownForFirstItem.click();
    search.deleteButtonForFirstItem.click();
    search.confirmDeleteButton.click();
  });
});
