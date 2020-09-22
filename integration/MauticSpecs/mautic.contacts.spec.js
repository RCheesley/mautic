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
    search.searchBox.should('exist');
    company.addNewButton.click({ force: true });
    company.companyName.type("CompanyAddedByCypress");
    company.saveButton.click();
  });

  it("Add new Contact", () => {
    leftNavigation.contactsSection.click();
    contact.addNewButton.click({ force: true });
    contact.title.type("Mr");
    contact.firstName.type("Cypress");
    contact.lastName.type("Tester");
    contact.leadEmail.type("Cypress@test.com");
    contact.SaveButton.click();
    contact.closeButton.click({ force: true });
  });

  it("Search and Delete Company", () => {
    leftNavigation.companySection.click();
    search.searchBox.clear();
    search.searchBox.type("CompanyAddedByCypress");
    search.selectCheckBoxForFirstItem.click({ force: true });
    search.OptionsDropdownForFirstItem.click();
    search.deleteButtonForFirstItem.click({ force: true });
    search.confirmDeleteButton.click();
  });

  it("Search and Delete a Contact", () => {
    leftNavigation.contactsSection.click();
    cy.get('.quickadd').should('exist');
    search.searchBox.clear();
    search.searchBox.type("Cypress");
    search.selectCheckBoxForFirstItem.click({ force: true });
    search.OptionsDropdownForFirstItem.click();
    search.deleteButtonForFirstItem.click({ force: true });
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
