/*jslint es6 */
/// <reference types="Cypress" />
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const leftNavigation = require("../../Pages/LeftNavigation");
const campaigns = require("../../Pages/Campaigns");
const search = require("../../Pages/Search");

context("Campaign", () => {
 
  it("Add new Campaign", () => {
    leftNavigation.CampaignsSection.click();
    campaigns.waitforPageLoad();
    search.searchBox.should('exist');
    campaigns.addNewButton.click();
    campaigns.campaignName.type("TestCampaign");
    campaigns.launchCampaignBuilderButton.click({ force: true });
    campaigns.sourceSelector.select("Contact segments", { force: true });
    campaigns.segmentSelectorButton.click();
    campaigns.segmentSelector.click();
    campaigns.addSourceCamapignButton.click({ force: true });
    campaigns.addStepButtonBottom.click({ force: true });
    campaigns.actionSelector.click();
    campaigns.listOfActions.select("Send email", { force: true });
    campaigns.sendEmailActionName.type("Test Campaign Email");
    campaigns.emailTOBeSentSelector.click();
    campaigns.emailSearchBox.type("Test Email");
    campaigns.firstEmailinTheSearchList.click();
    campaigns.addEmailButton.click();
    campaigns.closeBuilderButton.click();
    campaigns.publishToggleYes.click();
    campaigns.saveAndCloseButton.click();
    campaigns.closeSummaryPageButton.click();
    search.searchBox.clear();
    search.searchBox.type("Test Campaign Email");
    search.selectCheckBoxForFirstItem.should('exist');
  });

  it("Search and Delete Campaign", () => {
    leftNavigation.CampaignsSection.click();
    campaigns.waitforPageLoad();
    search.searchBox.clear();
    search.searchBox.type("TestCampaign");
    cy.wait(2000);
    search.selectCheckBoxForFirstItem.click({ force: true });
    search.OptionsDropdownForFirstItem.click();
    search.deleteButtonForFirstItem.click({ force: true });
    search.confirmDeleteButton.click();
  });
});