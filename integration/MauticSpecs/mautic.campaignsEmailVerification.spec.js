/*jslint es6 */
/// <reference types="Cypress" />
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const contact = require("../../Pages/Contacts");
const search = require("../../Pages/Search");
const campaigns = require("../../Pages/Campaigns");

var TestContact = "testcontact";
var emailSubject = "Test Email";
var sourceLinks;
var getMailId;
var TestCampaign = "TestCampaign";
var mailtestUrl = 'https://mailtest.mautic.com/api/v1/mailbox/'

context("Create Campaign and verify that uer has received an email in the mailbox", () => {
  
  it("Add new Campaign", () => {
    cy.visit("s/campaigns");
    campaigns.waitforPageLoad();
    search.searchBox.should('exist');
    campaigns.addNewButton.click();
    campaigns.campaignName.type(TestCampaign);
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
    campaigns.firstEmailinTheSearchList.should("be.visible");
    campaigns.firstEmailinTheSearchList.click();
    campaigns.addEmailButton.click();
    campaigns.closeBuilderButton.click();
    campaigns.publishToggleYes.click();
    campaigns.saveAndCloseButton.click();
    campaigns.closeSummaryPageButton.click();
    search.searchBox.clear();
    search.searchBox.type(TestCampaign);
    search.selectCheckBoxForFirstItem.should('exist');
  });

  it("Edit the newly added Campaign", () => {
    cy.visit("s/campaigns");
    campaigns.waitforPageLoad();
    cy.visit('/s/campaigns?search='+ TestCampaign)
    campaigns.searchAndSelectCampaign.eq(0).click().contains(TestCampaign);
    campaigns.editCampaign.click();
    campaigns.launchCampaignBuilderButton.click();
    cy.wait(1000);
    campaigns.addCampaignEvent.should("be.visible");
    campaigns.addCampaignEvent.click();
    campaigns.selectDecisionButton.click();
    campaigns.decisionListOption.click();
    campaigns.decisionListOption_TextBox.type("opens email");
    campaigns.decisionListOption_SelectFirstOption.click();
    cy.wait(1000);
    campaigns.sendEmailActionName.should("be.visible");
    campaigns.sendEmailActionName.type("Opens Email");
    campaigns.addButton.click();
    cy.wait(2000);
    campaigns.decisionActionAddition.click();
    campaigns.selectActionButton.click();
    campaigns.actionsSearchBox.type("Adjust contact points");
    campaigns.selectSearchedAction.click();
    cy.wait(2000);
    campaigns.sendEmailActionName.should("be.visible");
    campaigns.sendEmailActionName.type("Add Points for opening email");
    campaigns.addPointsTextbox.clear().type("5");
    campaigns.addButton.click();
    campaigns.applyChangedBuilder.click();
    cy.wait(3000);
    campaigns.closeChangedBuilder.should("be.visible");
    campaigns.closeChangedBuilder.click();
    campaigns.saveAndCloseButton.click();
    campaigns.closeSummaryPageButton.click();
  });

  it("Verify that user has received the email from campaign", () => {
    cy.wait(5000);
    cy.request({ 
     method:'GET',
     url: mailtestUrl + TestContact,
    }).then(function(response){
      expect(response).to.have.property('status',200)
      expect(response.body).to.not.be.null
      expect(response.body[0]).to.have.property('mailbox',TestContact)
      expect(response.body[0]).to.have.property('subject',emailSubject)
      expect(response.body[0]).to.have.property('seen',false)
      const body = (response.body[0])
      getMailId = body['id']
    })
  });

  it("Fetch the email and read the gif link", () => {
    cy.request({
      method:'GET',
      url: mailtestUrl + TestContact + '/' + getMailId,
     }).then(function(response){
      var EmailText =JSON.stringify(response);
       var patternForEmailImages = new RegExp("<img[^>]+>");
       var imageElements = patternForEmailImages.exec(EmailText);
       var patternForImageSources = new RegExp('src=\\\\"(.*?)"');
       sourceLinks=patternForImageSources.exec(imageElements[0].toString())
       sourceLinks= sourceLinks[0].toString().substring(6).replace(/\"/,'').replace("\\",'');
      expect(response).to.have.property('status',200)
      expect(response.body).to.not.be.null
     });
   })

   it("Read the email", () => {
    cy.request({
      method:'GET',
      url: sourceLinks,
     }).then(function(response){
       expect(response).to.have.property('status',200)
       expect(response.body).to.not.be.null
     })
   })

   it("Delete the read email", () => {
    cy.request({
      method:'DELETE',
      url: mailtestUrl + TestContact + '/' + getMailId,
     }).then(function(response){
       expect(response).to.have.property('status',200)
     });
   })

   it("Verify that contact has received 5 points for email read", () => {
    cy.visit('s/contacts');
    contact.waitforPageLoad();
    cy.visit('/s/contacts?search='+ TestContact);
    contact.searchAndClickForFirstElement.contains(TestContact);
    contact.getContactPoints.should('contain','5');
  });

  it("Search and Delete Campaign", () => {
    cy.visit("s/campaigns");
    campaigns.waitforPageLoad();
    cy.visit('/s/campaigns?search='+ TestCampaign)
    search.selectCheckBoxForFirstItem.click({ force: true });
    search.OptionsDropdownForFirstItem.click();
    search.deleteButtonForFirstItem.click({ force: true });
    search.confirmDeleteButton.click();
  });

});

