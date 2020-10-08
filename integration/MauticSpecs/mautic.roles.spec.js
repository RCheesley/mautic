/*jslint es6 */
/// <reference types="Cypress" />
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const settings = require("../../Pages/Settings");
const roles = require("../../Pages/Roles");
const search=require("../../Pages/Search");

context("Rules", () => {
  it("Add new rule for reading contact", () => {
    settings.settingsMenuButton.click();
    settings.rolesSection.click();
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
  });

  it("Search and Delete newly added role", () => {
    cy.wait(1000);
    search.searchBox.clear();
    search.searchBox.type("testConatctsReadRule");
    cy.wait(2000);
    search.selectCheckBoxForFirstItem.click();
    search.OptionsDropdownForFirstItem.click();
    search.deleteButtonForFirstItem.click();
    search.confirmDeleteButton.click();
  });

  });


