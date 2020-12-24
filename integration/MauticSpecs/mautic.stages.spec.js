/*jslint es6 */
/// <reference types="Cypress" />
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const leftNavigation = require("../../Pages/LeftNavigation");
const stages = require("../../Pages/Stages");
const search = require("../../Pages/Search");

var testStage = "TestStage"

context("Add new a stage", () => {
   it("Add a Stage", () => {
    leftNavigation.StagesSection.click();
    stages.checkNoResultFoundMessage.should('contain','No Results Found');
    stages.addNewButton.click();
    stages.stageName.type(testStage);
    stages.stageWeight.type("40");
    stages.saveAndCloseButton.click();
    stages.waitforStageCreation();
  })

  it("Edit newly added Stage", () => {
    leftNavigation.StagesSection.click();
    cy.visit('/s/stages?search=' + testStage)
    stages.searchAndClickOnFirstElement.contains(testStage).click();
    stages.waitforPageLoad;
    stages.stageWeight.clear();
    stages.stageWeight.type("50");
    stages.saveAndCloseButton.click();
    stages.waitforStageCreation();
  })

  it("search and delete newly added stage", () => {
    leftNavigation.StagesSection.click();
    cy.visit('/s/stages?search=' + testStage)
    stages.searchAndClickOnFirstCheckbox.click();
    search.selectAndClickFirstItemsOption.click();
    search.deleteButtonForFirstItem.click();
    search.confirmDeleteButton.click();
    stages.checkNoResultFoundMessage.should('contain','No Results Found');
  })

  });


