/*jslint es6 */
/// <reference types="Cypress" />
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const leftNavigation = require("../../Pages/LeftNavigation");
const campaigns = require("../../Pages/Campaigns");
const search=require("../../Pages/Search");

context("Campaign", () => {
  it("Add new Campaign", () => {
    leftNavigation.CampaignsSection.click();
    cy.wait(3000);
    campaigns.addNewButton.click();
    campaigns.campaignName.type("Test Campaign");
    campaigns.launchCampaignBuilderButton.click({force: true});
    campaigns.sourceSelector.select("Contact segments",{force: true});
    campaigns.segmentSelectorButton.click();
    campaigns.segmentSelector.select("Test Users",{force: true});
    campaigns.addSourceCamapignButton.click({force: true});
    campaigns.addStepButtonBottom.click({force: true});
    cy.wait(1000);
    campaigns.actionSelector.click();
    campaigns.listOfActions.select("Send email",{force: true});
    campaigns.sendEmailActionName.type("Test Campaign Email");
    campaigns.emailTOBeSentSelector.click();
    campaigns.emailSearchBox.type("Test Email");
    campaigns.firstEmailinTheSearchList.click();
    campaigns.addEmailButton.click();
    campaigns.closeBuilderButton.click();
    cy.wait(2000);
    campaigns.publishToggleYes.click();
    campaigns.saveAndCloseButton.click();
    cy.wait(5000);
  });

  it("Add new Campaign for deletion", () => {
    leftNavigation.CampaignsSection.click();
    cy.wait(3000);
    campaigns.addNewButton.click();
    campaigns.campaignName.type("Delete");
    campaigns.launchCampaignBuilderButton.click({force: true});
    campaigns.sourceSelector.select("Contact segments",{force: true});
    campaigns.segmentSelectorButton.click();
    campaigns.segmentSelector.select("Test Users",{force: true});
    campaigns.addSourceCamapignButton.click({force: true});
    campaigns.addStepButtonBottom.click({force: true});
    cy.wait(1000);
    campaigns.actionSelector.click();
    campaigns.listOfActions.select("Send email",{force: true});
    campaigns.sendEmailActionName.type("Test Campaign Email");
    campaigns.emailTOBeSentSelector.click();
    campaigns.emailSearchBox.type("Test Email");
    campaigns.firstEmailinTheSearchList.click();
    campaigns.addEmailButton.click();
    campaigns.closeBuilderButton.click();
    cy.wait(2000);
    campaigns.saveAndCloseButton.click();
    cy.wait(5000);
  });

  it("Search and Delete Campaign", () => {
    leftNavigation.CampaignsSection.click();
    cy.wait(1000);
    search.searchBox.clear();
    search.searchBox.type("Delete");
    search.selectCheckBoxForFirstItem.click({force: true});
    cy.wait(2000);
    search.OptionsDropdownForFirstItem.click();
    search.deleteButtonForFirstItem.click({force: true});
    search.confirmDeleteButton.click();
    cy.wait(1000);
  });
});
