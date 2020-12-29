/*jslint es6 */
/// <reference types="Cypress" />
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const leftNavigation = require("../../Pages/LeftNavigation");
const segments = require("../../Pages/Segments");
const contact = require("../../Pages/Contacts");
const search =require("../../Pages/Search");

var cypressSegment = "CypressSegment"
var bidarCity = "bidarCitySegment"
var hydrabadCity = "hydrabadCitySegment"
var contactOneForBidar = "User1 Tester"
var contactTwoForBidar = "User2 Tester"
var contactOneForHydrbad = "User3 Tester"

context("Segments", () => {
  it("Add new Segment", () => {
    leftNavigation.SegmentsSection.click();
    segments.waitForPageLoad();
    segments.addNewButton.click({ force: true });
    segments.segmentName.type(cypressSegment);
    segments.waitTillNewSegmentGetsOpen()
    segments.filterTab.click();
    segments.filterDropDown.click();
    segments.filterSearchBox.type("First");
    segments.filterField.click();
    segments.waitTillFilterOptionGetsLoaded()
    segments.filterValue.type("Cypress");
    segments.saveAndCloseButton.click();
    segments.waitforSegmentCreation();
  });

  it("Add new Segment for Bidar City", () => {
    leftNavigation.SegmentsSection.click();
    segments.waitForPageLoad();
    segments.addNewButton.click({ force: true });
    segments.waitTillNewSegmentGetsOpen()
    segments.segmentName.type(bidarCity);
    segments.filterTab.click();
    segments.filterDropDown.click();
    segments.filterSearchBox.type("City");
    segments.filterField.click();
    segments.waitTillFilterOptionGetsLoaded()
    segments.filterValue.type("Bidar");
    segments.saveAndCloseButton.click();
    segments.waitforSegmentCreation();
  });

  it("Add new Segment for Hydrabad City", () => {
    leftNavigation.SegmentsSection.click();
    segments.waitForPageLoad();
    segments.addNewButton.click({ force: true });
    segments.waitTillNewSegmentGetsOpen()
    segments.segmentName.type(hydrabadCity);
    segments.filterTab.click();
    segments.filterDropDown.click();
    segments.filterSearchBox.type("City");
    segments.filterField.click();
    segments.waitTillFilterOptionGetsLoaded()
    segments.filterValue.type("Hydrabad");
    segments.saveAndCloseButton.click();
    segments.waitforSegmentCreation();
    cy.wait(3000);
  });

  it("Verify that Bidar city segment has two conatcts only", () => {
    leftNavigation.SegmentsSection.click();
    segments.waitForPageLoad();
    cy.visit('/s/segments?search=' + bidarCity)
    segments.checkConactsUnderSegment.should('contain','View 2 Contacts')
    segments.checkConactsUnderSegment.click()
    segments.checkDetailContactsUnderSgemnt.should('contain',contactOneForBidar).should('contain',contactTwoForBidar);
  });

  it("Verify that hydrabad city segment has one conatct only", () => {
    leftNavigation.SegmentsSection.click();
    segments.waitForPageLoad();
    cy.visit('/s/segments?search=' + hydrabadCity)
    segments.checkConactsUnderSegment.should('contain','View 1 Contact')
    segments.checkConactsUnderSegment.click()
    segments.checkDetailContactsUnderSgemnt.should('contain',contactOneForHydrbad);
  });

  it("Edit newly added segment", () => {
    leftNavigation.SegmentsSection.click();
    segments.waitForPageLoad();
    cy.visit('/s/segments?search=' + cypressSegment)
    segments.searchAndSelectSegment.contains(cypressSegment).click();
    segments.waitTillClickedSegmentGetsOpen();
    segments.editSegment.click();
    segments.filterTab.click();
    segments.filterDropDown.click();
    segments.filterSearchBox.type("Last name");
    segments.filterField.click();
    segments.leadListFilter.select("or");
    segments.secondFilterTextBox.type("Test");
    segments.saveAndCloseButton.click();
    segments.waitforSegmentUpdate();
  });

  it("Search and delete a contacts created for Bidar and Hydrabad City", () => {
    leftNavigation.contactsSection.click();
    contact.waitforPageLoad();
    cy.visit('/s/contacts?search=User');
    search.selectTheParentCheckBox.click();
    search.selectTheParentDropdown.click();
    search.deleteAllSelected.click();
    search.confirmDeleteButton.click();
    search.checkNoResultFoundMessage.should('contain','No Results Found');
  });

  it("Search and Delete Segment", () => {
    leftNavigation.SegmentsSection.click();
    segments.waitForPageLoad();
    cy.visit('/s/segments?search=' + cypressSegment)
    segments.firstCheckbox.click();
    segments.firstDropDown.click();
    segments.deleteOption.click();
    segments.deleteConfirmation.click();
  });

  it("Search and Delete Segment", () => {
    leftNavigation.SegmentsSection.click();
    segments.waitForPageLoad();
    cy.visit('/s/segments?search=' + bidarCity)
    segments.firstCheckbox.click();
    segments.firstDropDown.click();
    segments.deleteOption.click();
    segments.deleteConfirmation.click();
  });

  it("Search and Delete Segment", () => {
    leftNavigation.SegmentsSection.click();
    segments.waitForPageLoad();
    cy.visit('/s/segments?search=' + hydrabadCity)
    segments.firstCheckbox.click();
    segments.firstDropDown.click();
    segments.deleteOption.click();
    segments.deleteConfirmation.click();
  });

});
