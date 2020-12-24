// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
const leftNavigation = require("../Pages/LeftNavigation");
const search = require("../Pages/Search");
const contact = require("../Pages/Contacts");
const emails = require("../Pages/Emails");
const segments = require("../Pages/Segments");
const segment = require("../Pages/Segments");
import "./commands";

Cypress.Cookies.defaults({
  preserve: [Cypress.env("instanceId"),'_ga','_gid','_gat','mautic_referer_id','mtc_id','mtc_sid','mautic_device_id','device_id','sid','id','success','__Secure-3PAPISID','SAPISID','APISID','__Secure-3PSID','SID','SSID','HSID','NID','1P_JAR','ANID','SIDCC','OTZ'],
});


 before("Perform login", () => {
  cy.visit("/");
  cy.location().then((loc) => {
    console.log(loc)
    if(loc.pathname.includes('login')){
      cy.log("Logging in");
      cy.login(Cypress.env("userName"), Cypress.env("password"));
      cy.log('Login successful')
    }
  })
  
  //adding sample contacts to be used across test
  leftNavigation.contactsSection.click();
  contact.waitforPageLoad();
  contact.addNewButton.click({ force: true });
  contact.title.type("Mr");
  contact.firstName.type("TestContact");
  contact.lastName.type("Data");
  contact.leadEmail.type("TestContact@mailtest.mautic.com");
  contact.SaveButton.click();
  contact.closeButton.click({ force: true });
  contact.waitForContactCreation();

  //adding sample email to be used across test
  leftNavigation.ChannelsSection.click();
  leftNavigation.EmailsSubSection.click();
  emails.waitforPageLoad();
  emails.addNewButton.click({ force: true });
  emails.waitforEmailSelectorPageGetsLoaded();
  emails.templateEmailSelector.click();
  emails.emailSubject.type("Test Email");
  emails.emailInternalName.type("Test Email");
  emails.saveEmailButton.click();
  emails.closeButton.click();
  emails.waitforEmailCreation();

  //adding sample segment to be used across test
  leftNavigation.SegmentsSection.click();
  segments.waitForPageLoad();
  segments.addNewButton.click({ force: true });
  segments.segmentName.type("TestSegment");
  segments.filterTab.click();
  segments.filterDropDown.click();
  segments.filterSearchBox.type("First");
  segments.filterField.click();
  segments.filterValue.type("TestContact");
  segments.saveAndCloseButton.click();
  segments.waitforSegmentCreation();
});

after("Delete Test Data", () => {
  //deleting created contact
  cy.wait(2000);
  leftNavigation.contactsSection.click();
  leftNavigation.contactsSection.click();
  contact.waitforPageLoad();
  cy.visit('/s/contacts?search=TestContact');
  search.selectCheckBoxForFirstItem.click({ force: true });
  search.OptionsDropdownForFirstItem.click();
  search.deleteButtonForFirstItem.click();
  search.confirmDeleteButton.click();

  //deleting created Email
  leftNavigation.ChannelsSection.click();
  leftNavigation.EmailsSubSection.click();
  emails.waitforPageLoad();
  cy.visit('/s/emails?search=Test')
  search.selectCheckBoxForFirstItem.click({ force: true });
  search.OptionsDropdownForFirstItem.click();
  search.deleteButtonForFirstItem.click();
  search.confirmDeleteButton.click();

  //deleting created segment
  leftNavigation.SegmentsSection.click();

  segments.waitForPageLoad();
  cy.visit('/s/segments?search=TestSegment')
  segments.firstCheckbox.click();
  segments.firstDropDown.click();
  segments.deleteOption.click();
  segment.deleteConfirmation.click();
});

beforeEach("Visit HomePage", () => {
  cy.visit("");
});

Cypress.on("uncaught:exception", (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false;
});

// Alternatively you can use CommonJS syntax:
// require('./commands')
