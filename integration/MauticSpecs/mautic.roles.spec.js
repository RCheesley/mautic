/*jslint es6 */
/// <reference types="Cypress" />
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const settings = require("../../Pages/Settings");
const roles = require("../../Pages/Roles");
const search=require("../../Pages/Search");

context("Roles", () => {
  it("Add new role for reading contact", () => {
    cy.wait(3000);
    settings.settingsMenuButton.click();
    settings.rolesSection.click();
    roles.waitForPageLoad();
    roles.addNewRoleButton.click();
    roles.roleNameTextBox.click();
    roles.roleNameTextBox.type("testConatctsReadRule");
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
    cy.wait(1000);
    roles.waitForPageLoad();
    search.searchBox.clear();
    search.searchBox.type("testConatctsReadRule");
    cy.wait(2000);
    search.selectCheckBoxForFirstItem.click();
    search.OptionsDropdownForFirstItem.click();
    search.deleteButtonForFirstItem.click();
    search.confirmDeleteButton.click();
  });

  });


