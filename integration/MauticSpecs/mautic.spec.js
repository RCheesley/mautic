/*jslint es6 */
/// <reference types="Cypress" />
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const leftNavigation = require("../../Pages/LeftNavigation");
const contacts = require("../../Pages/Contacts");
const contact = require("../../Pages/Contacts");
const company = require("../../Pages/Company");

context("Login", () => {
  before(() => {
    cy.visit("https://cr.mautic.net/s/login");
  });

  it("Perform login", () => {
   cy.login(Cypress.env('userName'), Cypress.env('password');
  });

  it("Add new Company", () => {
    leftNavigation.companySection.click();
    cy.wait(1000);
    company.addNewButton.click({ force: true });
    company.companyName.type("CompanyAddedByCypress");
    company.saveButton.click();
  });

  it("Add new Contact", () => {
    leftNavigation.contactsSection.click();
    cy.wait(1000);
    contact.addNewButton.click({force: true});
    contact.title.type("Mr");
    contact.firstName.type("Cypress");
    contact.lastName.type("Tester");
    contact.leadEmail.type("Cypress@test.com");
    contact.SaveButton.click();
    contact.closeButton.click({force: true} );
  });

  it("Delete a new Company", () => {
    leftNavigation.companySection.click();
    cy.wait(1000);
    cy.get('#list-search').clear();
    cy.get('#list-search').type("C");
    cy.get('.list-checkbox').eq(0).click();
    cy.get('tbody > tr > :nth-child(1) > .input-group > .input-group-btn > .btn').eq(0).click();
    cy.get('td.active > .input-group > .input-group-btn > .pull-left > :nth-child(3) > a > :nth-child(1) > .fa').click();
    cy.get('.btn-danger').click();
    cy.wait(1000);
  });

  it("Search and Delete a Contact", () => {
    leftNavigation.contactsSection.click();
    cy.wait(1000);
    cy.get('#list-search').clear();
    cy.get('#list-search').type("Cypress");
    cy.get('.list-checkbox').eq(0).click();
    cy.get('tbody > tr > :nth-child(1) > .input-group > .input-group-btn > .btn').eq(0).click();
    cy.get('td.active > .input-group > .input-group-btn > .pull-left > :nth-child(3) > a > :nth-child(1) > .fa').click();
    cy.get('.btn-danger').click();
    cy.wait(1000);
  });

  xit("import new Contacts", () => {
     leftNavigation.contactsSection.click();
     cy.wait(1000);
     contact.importExportDropdownMenu.click({force: true});
     contact.importButton.click({force: true});
     const fileName = 'contacts_july-22-2020.csv';
     const fileType = 'application/csv';
     const fileInput = 'input[type=file]';
     cy.upload_file(fileName, fileType, fileInput);
     cy.get('[name="lead_import[start]"]').click()
     cy.get('#lead_field_import_company_chosen > .chosen-single > span > .group-name').click();
     cy.get('#lead_field_import_company_chosen > div > ul > li').eq(45).click({force:true});
     cy.get('#lead_field_import_buttons_save_toolbar').click();
   })

  });


