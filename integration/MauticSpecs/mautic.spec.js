/*jslint es6 */
/// <reference types="Cypress" />
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const leftNavigation = require("../../Pages/LeftNavigation");
const env = require("dotenv");
env.config();

context("Login", () => {
 

  before(() => {
    cy.visit("https://cr.mautic.net/s/login");
  });

  it("Perform login", () => {
   // cy.login("muhammad.ahmed@acquia.com", "6wNQxWeZ1j18mb3");
   cy.login(Cypress.env('userName'), Cypress.env('password');
  });

  it("Add new Contact", () => {
    //cy.get("#mautic_contact_index > .nav-item-name").click();
    leftNavigation.contactsSection.click();
    cy.get('[href="/s/contacts/new"] > :nth-child(1) > .hidden-xs').click();
    cy.get("#lead_title").type("Mr");
    cy.get("#lead_firstname").type("Cypress");
    cy.get("#lead_lastname").type("Tester");
    cy.get("#lead_email").type("Cypress@test.com");
    cy.get("#lead_buttons_save_toolbar").click();

  });

  it("Add new Company", () => {
    cy.get("#mautic_company_index > .nav-item-name").click();
    cy.get("#toolbar > div.std-toolbar.btn-group > a > span > span")
      .first()
      .click({ force: true });
    cy.get("#company_companyname").type("CompanyAddedByCypress");
    cy.get("#company_buttons_save_toolbar").click();
  });

});
