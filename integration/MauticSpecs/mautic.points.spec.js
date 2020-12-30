/*jslint es6 */
/// <reference types="Cypress" />
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const leftNavigation = require("../../Pages/LeftNavigation");
const points = require("../../Pages/Points");
const emails = require("../../Pages/Emails");
const contact = require("../../Pages/Contacts");
const search = require("../../Pages/Search");

var testAction = "testAction"
var testTrigger = "testTrigger"
var testTriggerEmail = "TestTriggerEmail"
var testContact = "testcontact";
var mailtestUrl = 'https://mailtest.mautic.com/api/v1/mailbox/'
var getMailId;

context("Points", () => {
   it("Add a Action", () => {
    leftNavigation.PointsSection.click();
    points.manageActionSection.click();
    cy.contains('Manage Actions').click()
    cy.wait(1000);
    points.waitforActionPageLoad();
    points.addNewActionButton.click();
    points.actionName.type(testAction);
    points.pointsToBeChanged.type("40");
    points.actionDropDown.click();
    points.opensAnEmailOption.click();
    points.waitTillSelectEmail();
    points.clickOnTextbox.click();
    points.typeEmailName.type("Test");
    points.selectSearchedEmail.click();
    points.saveAndCloseButton.click();
    points.waitforActionToBeCreated;
  })

  it("Edit a newly added action", () => {
    leftNavigation.PointsSection.click();
    points.manageActionSection.click();
    cy.visit('/s/points?search=' + testAction)
    points.searchAndGetFirstResult.click();
    points.pointsToBeChanged.clear().type("10");
    points.saveAndCloseButton.click();
    points.waitforActionToBeCreated;
  })

  it("Delete a newly added action", () => {
    leftNavigation.PointsSection.click();
    points.manageActionSection.click();
    cy.visit('/s/points?search=' + testAction)
    points.searchAndSelectFirstCheckBox.click();
    points.editOptionsForFirstSelection.click();
    points.deleteOption.click();
    points.confirmWindowDelete.click();
    points.checkNoResultFoundMessage.should('contain','No Results Found');
  })

  it("Add a Trigger", () => {
    leftNavigation.PointsSection.click();
    points.manageTriggerSection.click();
    cy.contains('Manage Triggers').click()
    points.waitforPointTriggerPageLoad();
    points.addNewPointsTriggerButton.click();
    points.triggerName.type(testTrigger);
    points.triggerPoints.type("40");
    points.publishTrigger.click();
    points.eventsTab.click();
    points.addEventButton.click();
    points.sendEmailEvent.click();
    cy.wait(1000);
    points.eventName.type(testTrigger);
    points.emailSelector.click();
    points.firstEmail.contains(testTriggerEmail).click();
    points.addButton.click();
    cy.wait(1000);
    points.saveAndCloseTriggerButton.click();
    points.waitforTriggerToBeCreated();
  })

  it("Edit newly added Trigger", () => {
    leftNavigation.PointsSection.click();
    points.manageTriggerSection.click();
    cy.contains('Manage Triggers').click();
    points.waitforPointTriggerPageLoad();
    cy.visit('/s/points/triggers?search=' + testTrigger)
    points.searchAndGetFirstResultTriggerTable.contains(testTrigger).click();
    points.triggerPoints.clear();
    points.triggerPoints.type("50");
    points.saveAndCloseTriggerButton.click();
    points.waitforTriggerToBeCreated();
  })

  it("Edit previously added contact to point 50 to test the trigger", () => {
    leftNavigation.contactsSection.click();
    contact.waitforPageLoad();
    cy.visit('/s/contacts?search=' + testContact);
    contact.searchAndClickForFirstElement.contains(testContact).click();
    contact.editContact.click();
    contact.waitForContactEditPageOpen();
    contact.updateContactPoints.type("50");
    contact.SaveButton.click();
    contact.closeButton.click({ force: true });
    contact.waitForContactCreation();
    cy.wait(5000)
  });

  it("Verify that user has received the trigger Email", () => {
    cy.wait(5000);
   cy.request({ 
     method:'GET',
     url: mailtestUrl + testContact,
    }).then(function(response){
      expect(response).to.have.property('status',200)
      expect(response.body).to.not.be.null
      expect(response.body[0]).to.have.property('mailbox',testContact)
      expect(response.body[0]).to.have.property('subject',testTriggerEmail)
      expect(response.body[0]).to.have.property('seen',false)
      const body = (response.body[0])
      getMailId = body['id']
    })
  });

   it("Delete the read email", () => {
    cy.request({
      method:'DELETE',
      url: mailtestUrl + testContact + '/' + getMailId,
     }).then(function(response){
       expect(response).to.have.property('status',200)
     });
   })

   it("Search and delete email created for trigger event", () => {
    leftNavigation.ChannelsSection.click();
    leftNavigation.EmailsSubSection.click();
    emails.waitforPageLoad();
    cy.visit('/s/emails?search=' + testTriggerEmail)
    search.selectCheckBoxForFirstItem.click();
    search.OptionsDropdownForFirstItem.click();
    search.deleteButtonForFirstItem.click();
    search.confirmDeleteButton.click();
    emails.checkNoResultFoundMessage.should('contain','No Results Found');
  });

  it("Delete newly added Trigger", () => {
    leftNavigation.PointsSection.click();
    points.manageTriggerSection.click();
    cy.contains('Manage Triggers').click();
    points.waitforPointTriggerPageLoad();
    cy.visit('/s/points/triggers?search=' + testTrigger)
    points.searchAndSelectFirstCheckBoxForTrigger.click();
    points.editOptionsForFirstSelectionForTrigger.click();
    points.deleteOption.click();
    points.confirmWindowDelete.click();
    points.checkNoResultFoundMessage.should('contain','No Results Found');
  })

  });


