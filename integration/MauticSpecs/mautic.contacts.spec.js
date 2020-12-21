/*jslint es6 */
/// <reference types="Cypress" />
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const leftNavigation = require("../../Pages/LeftNavigation");
const contact = require("../../Pages/Contacts");
const company = require("../../Pages/Company");
const search = require("../../Pages/Search");

context("Contacts", () => {
  it("Add new Company", () => {
    leftNavigation.companySection.click();
    company.waitforPageLoad()
    company.addNewButton.click({ force: true });
    company.companyName.type("CompanyAddedByCypress");
    company.saveButton.click();
    cy.get('.alert-growl').should('contain', 'CompanyAddedByCypress has been created!');
  });

  it("Edit newly added Company", () => {
    cy.visit('/s/companies?search=CompanyAddedByCypress');
    company.waitforPageLoad()
removing unnecesaary    company.searchAndClickForFirstElement.contains("CompanyAddedByCypress").click();
    company.companyCity.type("Pune");
    company.companyZipCode.type("412308");
    company.saveButton.click();
    company.waitforCompanyCreation();
  });

  it("Search and Delete Company", () => {
    leftNavigation.companySection.click();
    company.waitforPageLoad();
    cy.visit('/s/companies?search=CompanyAddedByCypress');
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
    contact.firstName.type("ContactAddedCypress");
    contact.lastName.type("Tester");
    contact.leadEmail.type("Cypress@test.com");
    contact.SaveButton.click();
    contact.closeButton.click({ force: true });
    contact.waitForContactCreation();
  });

  it("Edit newly added contact", () => {
    cy.visit('/s/contacts?search=ContactAddedCypress');
    contact.waitforPageLoad();
    contact.searchAndClickForFirstElement.contains("ContactAddedCypress").click();
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
    // search.searchBox.clear({ force: true });
    // search.searchBox.type("ContactAddedCypress");
    cy.visit('/s/contacts?search=ContactAddedCypress');
    contact.waitTillSearchResultGetsDisplayed();
    search.selectCheckBoxForFirstItem.click({ force: true });
    search.OptionsDropdownForFirstItem.click();
    search.deleteButtonForFirstItem.click();
    search.confirmDeleteButton.click();
  });
  
  it("import new Contacts", () => {
    leftNavigation.contactsSection.click();
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
