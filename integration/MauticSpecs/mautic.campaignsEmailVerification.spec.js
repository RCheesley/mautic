/*jslint es6 */
/// <reference types="Cypress" />
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

const leftNavigation = require("../../Pages/LeftNavigation");
const contact = require("../../Pages/Contacts");
const search = require("../../Pages/Search");
const campaigns = require("../../Pages/Campaigns");

var TestContact = "testcontact";
var emailSubject = "Test Email";
var sourceLinks;
var getMailId;
var TestCampaign = "TestCampaign";
var mailtestUrl = 'https://mailtest.mautic.com/api/v1/mailbox/'

context("Campaign Email Verification", () => {
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
    leftNavigation.contactsSection.click();
    contact.waitforPageLoad();
    cy.visit('/s/contacts?search='+ TestContact);
    contact.searchAndClickForFirstElement.contains(TestContact);
    contact.getContactPoints.should('contain','5');
  });

  it("Search and Delete Campaign", () => {
    leftNavigation.CampaignsSection.click();
    campaigns.waitforPageLoad();
    cy.visit('/s/campaigns?search='+ TestCampaign)
    search.selectCheckBoxForFirstItem.click({ force: true });
    search.OptionsDropdownForFirstItem.click();
    search.deleteButtonForFirstItem.click({ force: true });
    search.confirmDeleteButton.click();
  });

});

