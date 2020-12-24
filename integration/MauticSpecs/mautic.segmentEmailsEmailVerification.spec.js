/*jslint es6 */
/// <reference types="Cypress" />
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const leftNavigation = require("../../Pages/LeftNavigation");
const emails = require("../../Pages/Emails");
const search=require("../../Pages/Search");

var TestContact = "testcontact";
var getMailId;
var sourceLinks;
var mailtestUrl = 'https://mailtest.mautic.com/api/v1/mailbox/'
var segmentEmail = "testSegmentEmailCypress";

context("Segment email verification", () => {

  it("Verify that user has received the email from segment email", () => {
    cy.wait(10000);
    cy.request({
      method:'GET',
      url: mailtestUrl + TestContact,
     }).then(function(response){
       expect(response).to.have.property('status',200)
       expect(response.body).to.not.be.null
       expect(response.body[0]).to.have.property('mailbox',TestContact)
       expect(response.body[0]).to.have.property('subject',segmentEmail)
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

     it("Search and Delete newly added segment Email", () => {
      leftNavigation.ChannelsSection.click();
      leftNavigation.EmailsSubSection.click();
      emails.waitforPageLoad();
      cy.visit('/s/emails?search=' + segmentEmail)
      search.selectCheckBoxForFirstItem.should('be.visible');
      search.selectCheckBoxForFirstItem.click();
      search.OptionsDropdownForFirstItem.click();
      search.deleteButtonForFirstItem.click();
      search.confirmDeleteButton.click();
    });
    
  });