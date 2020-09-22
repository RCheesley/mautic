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
    search.searchBox.should('exist');
    campaigns.addNewButton.click();
    campaigns.campaignName.type("Test Campaign");
    campaigns.launchCampaignBuilderButton.click({ force: true });
    campaigns.sourceSelector.select("Contact segments", { force: true });
    campaigns.segmentSelectorButton.click();
    campaigns.segmentSelector.select("Test Users", { force: true });
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

  it("Add new Campaign for deletion", () => {
    leftNavigation.CampaignsSection.click();
    search.searchBox.should('exist');
    campaigns.addNewButton.click();
    campaigns.campaignName.type("Delete");
    campaigns.launchCampaignBuilderButton.click({ force: true });
    campaigns.sourceSelector.select("Contact segments", { force: true });
    campaigns.segmentSelectorButton.click();
    campaigns.segmentSelector.select("Test Users", { force: true });
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
    campaigns.saveAndCloseButton.click();
    campaigns.closeSummaryPageButton.click();
  });

  it("Search and Delete Campaign", () => {
    leftNavigation.CampaignsSection.click();
    search.searchBox.clear();
    search.searchBox.type("Delete");
    search.selectCheckBoxForFirstItem.click({ force: true });
    search.OptionsDropdownForFirstItem.click();
    search.deleteButtonForFirstItem.click({ force: true });
    search.confirmDeleteButton.click();
  });
});
