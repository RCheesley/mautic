/*jslint es6 */
/// <reference types="Cypress" />
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const leftNavigation = require("../../Pages/LeftNavigation");
const contacts = require("../../Pages/Stages");
const stages = require("../../Pages/Stages");


context("Stages", () => {
 
   it("Add a Stage", () => {
    leftNavigation.StagesSection.click();
    cy.wait(1000);
    stages.addNewButton.click();
    stages.stageName.type("Stage2");
    stages.stageWeight.type("40");
    stages.saveAndCloseButton.click();
    cy.wait(1000);
  })

  it("Search and Delete a Stage", () => {
    leftNavigation.StagesSection.click();
    cy.wait(1000);
    cy.get('#list-search').type("Stage");
    //cy.get('.col-actions > .input-group > .input-group-btn > .btn > .fa').click();
    cy.wait(2000);
    cy.get('.list-checkbox').eq(0).click( {force: true});
    cy.get('tbody > tr > :nth-child(1) > .input-group > .input-group-btn > .btn').eq(0).click();
    cy.get('td.active > .input-group > .input-group-btn > .pull-left > :nth-child(3) > a > :nth-child(1) > span').click();
    cy.get('.btn-danger').click();
    cy.wait(1000);
  })

  });


