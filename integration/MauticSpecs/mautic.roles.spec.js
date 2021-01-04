/*jslint es6 */
/// <reference types="Cypress" />
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const settings = require("../../Pages/Settings");
const roles = require("../../Pages/Roles");
const search=require("../../Pages/Search");

var readRole = "Standard"

context("Roles", () => {
  it("Add new role for reading contact", () => {
    settings.settingsMenuButton.click();
    settings.rolesSection.click();
    roles.waitForPageLoad();
    roles.addNewRoleButton.click();
    roles.roleNameTextBox.click();
    roles.roleNameTextBox.type(readRole);
    roles.permissionTab.click();
    roles.apiPermissionTab.click();
    roles.apiAccessGrantedCheckBox.click();
    cy.wait(1000);
    roles.contactPermissionTab.click();
    roles.contacts_Access_Full.click();
    roles.contacts_Segments_ViewOthers.click()
    roles.contacts_Segments_EditOthers.click()
    roles.contacts_import_View.click()
    roles.contacts_import_Edit.click()
    roles.saveAndCloseTab.click();
    roles.waitforRoleCreation();
  });

  });


