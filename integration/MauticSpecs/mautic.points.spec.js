/*jslint es6 */
/// <reference types="Cypress" />
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const leftNavigation = require("../../Pages/LeftNavigation");
const points = require("../../Pages/Points");



context("Points", () => {
 
   it("Add a Action", () => {
    leftNavigation.PointsSection.click();
    points.manageActionSection.click();
    cy.contains('Manage Actions').click()
    cy.wait(1000);
    points.addNewActionButton.click();
    points.actionName.type("Action");
    points.pointsToBeChanged.type("40");
    points.actionDropDown.click();
    points.opensAnEmailOption.click();
    points.saveAndCloseButton.click();
    cy.wait(1000);
  })

  it("Add a Trigger", () => {
    leftNavigation.PointsSection.click();
    points.manageTriggerSection.click();
    cy.contains('Manage Triggers').click()
    cy.wait(1000);
    points.addNewPointsTriggerButton.click();
    points.triggerName.type("Action");
    points.triggerPoints.type("40");
    points.eventsTab.click();
    points.addEventButton.click();
    points.sendEmailEvent.click();
    cy.wait(1000);
    points.eventName.type("Test Trigger");
    points.emailSelector.click();
    points.firstEmail.click();
    points.addButton.click();
    cy.wait(1000);
    points.saveAndCloseTriggerButton.click();
  })

  });


