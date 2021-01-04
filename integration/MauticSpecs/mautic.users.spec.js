/*jslint es6 */
/// <reference types="Cypress" />
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const settings = require("../../Pages/Settings");
const user = require("../../Pages/Users");
const search=require("../../Pages/Search");
const roles = require("../../Pages/Roles");

var username = "StandardAccount"
var userEmail = "user@mailtest.mautic.com"
var password = "Standard@12345"
var readRole = "Standard"
var firstName = "Test"
var lastName = "User"

context("Roles", () => {
  it("Add new role for reading contact", () => {
    settings.settingsMenuButton.click();
    user.clickOnUsersTab.click()
    user.waitForPageLoad()
    user.clickOnCreateNewUserTab.click()
    user.waitTillNewUserCreationPageGetsLoaded()
    user.User_firstName.type(firstName)
    user.User_lastName.type(lastName)
    user.User_Role.click()
    user.searchForRole.type(readRole)
    user.selectSearchedRole.click()
    user.userName.type(username)
    user.userEmail.type(userEmail)
    user.userPassword.type(password)
    user.userConfirmPassword.type(password)
    user.saveUser.click()
    user.waitTillUserGetsCreated()
  });
  
  it("logout and login with created user", () => {
    user.clickOnUserName.click()
    user.clickOnLogoutButton.click()
    user.waitTillLoginPageDisplayed()
    cy.login(userEmail, password);
    user.waitTillDashboardGetsLoaded()
    user.verifyThatOtherSectionAreNotVisible()
  });

  it("Login with Admin credentials", () => {
    user.clickOnUserName.click()
    user.clickOnLogoutButton.click()
    user.waitTillLoginPageDisplayed()
    cy.login(Cypress.env("userName"), Cypress.env("password"));
    user.waitTillDashboardGetsLoaded()
  });

  it("Delete the created User", () => {
    settings.settingsMenuButton.click();
    user.clickOnUsersTab.click()
    user.waitForPageLoad()
    cy.visit('/s/users?search=' + lastName)
    user.selectParentCheckBox.click()
    user.selectParentDropdown.click()
    user.deleteUsersBatch.click()
    user.confirmDeleteButton.click()
    cy.get('.alert-growl').should('contain', '1 users have been deleted!');
  });

  it("Search and delete newly added role", () => {
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


