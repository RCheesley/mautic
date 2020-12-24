/*jslint es6 */
/// <reference types="Cypress" />
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const settings = require("../../Pages/Settings");
const roles = require("../../Pages/Roles");
const search=require("../../Pages/Search");

var readRole = "testConatctsReadRule"

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
    roles.contacts_Access_ViewOwn.click();
    roles.contacts_Access_ViewOthers.click();
    roles.saveAndCloseTab.click();
    roles.waitforRoleCreation();
  });

  it("Search and Delete newly added role", () => {
    settings.settingsMenuButton.click();
    settings.rolesSection.click({force: true});
    roles.waitForPageLoad();
    cy.visit('/s/roles?search='+ readRole);
    search.selectCheckBoxForFirstItem.click();
    search.OptionsDropdownForFirstItem.click();
    search.deleteButtonForFirstItem.click();
    search.confirmDeleteButton.click();
  });

  });


