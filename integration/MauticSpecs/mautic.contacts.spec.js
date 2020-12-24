/*jslint es6 */
/// <reference types="Cypress" />
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const leftNavigation = require("../../Pages/LeftNavigation");
const contact = require("../../Pages/Contacts");
const company = require("../../Pages/Company");
const search = require("../../Pages/Search");

var companyName = "CompanyAddedByCypress";
var contactName = "ContactAddedCypress";

context("Contacts", () => {
  it("Add new Company", () => {
    leftNavigation.companySection.click();
    company.waitforPageLoad()
    company.addNewButton.click({ force: true });
    company.companyName.type(companyName);
    company.saveButton.click();
    cy.get('.alert-growl').should('contain', 'CompanyAddedByCypress has been created!');
  });

  it("Edit newly added Company", () => {
    leftNavigation.companySection.click();
    company.waitforPageLoad();
    cy.visit('/s/companies?search=' + companyName);
    company.searchAndClickForFirstElement.contains(companyName).click();
    company.companyCity.type("Pune");
    company.companyZipCode.type("412308");
    company.saveButton.click();
    company.waitforCompanyCreation();
  });

  it("Search and Delete Company", () => {
    leftNavigation.companySection.click();
    company.waitforPageLoad();
    cy.visit('/s/companies?search=' + companyName);
    company.waitTillSearchResultGetsDisplayed();
    search.selectCheckBoxForFirstItem.click({ force: true });
    search.OptionsDropdownForFirstItem.click();
    search.deleteButtonForFirstItem.click();
    search.confirmDeleteButton.click();
  });

  it("Add new Contact", () => {
    leftNavigation.contactsSection.click();
    contact.waitforPageLoad();
    contact.addNewButton.click({ force: true });
    contact.title.type("Mr");
    contact.firstName.type(contactName);
    contact.lastName.type("Tester");
    contact.leadEmail.type("Cypress@test.com");
    contact.SaveButton.click();
    contact.closeButton.click({ force: true });
    contact.waitForContactCreation();
  });

  it("Edit newly added contact", () => {
    leftNavigation.contactsSection.click();
    contact.waitforPageLoad();
    cy.visit('/s/contacts?search=' + contactName);
    contact.searchAndClickForFirstElement.contains(contactName).click();
    contact.editContact.click();
    contact.leadCity.type("Pune");
    contact.lastName.clear().type("Contact");
    contact.SaveButton.click();
    contact.closeButton.click({ force: true });
    contact.waitForContactCreation();
  });

  it("Search and Delete a Contact", () => {
    leftNavigation.contactsSection.click();
    contact.waitforPageLoad();
    cy.visit('/s/contacts?search=' + contactName);
    contact.waitTillSearchResultGetsDisplayed();
    search.selectCheckBoxForFirstItem.click({ force: true });
    search.OptionsDropdownForFirstItem.click();
    search.deleteButtonForFirstItem.click();
    search.confirmDeleteButton.click();
  });
  
  it("import new Contacts", () => {
    leftNavigation.contactsSection.click();
    contact.waitforPageLoad();
    contact.importExportDropdownMenu.click({ force: true });
    contact.importButton.click({ force: true });
    const fileName = "contacts_july-22-2020.csv";
    const fileType = "application/csv";
    const fileInput = "input[type=file]";
    cy.upload_file(fileName, fileType, fileInput);
    cy.get('[name="lead_import[start]"]').click();
    cy.get(
      "#lead_field_import_company_chosen > .chosen-single > span > .group-name"
    ).click();
    cy.get("#lead_field_import_company").select("Company Name", {
      force: true,
    });
    cy.get("#lead_field_import_buttons_save_toolbar").click();
  });
});
