/*jslint es6 */
/// <reference types="Cypress" />
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const credentials = require("../../Pages/Credentials");
const user = require("../../Pages/Users");
const search=require("../../Pages/Search");
const roles = require("../../Pages/Roles");
var username = "StandardAccount"
var userEmail = "user@mailtest.mautic.com"
var password = "Standard@12345"
var readRole = "Standard"
var firstName = "Test"
var lastName = "User"
var getHostUrl = Cypress.config().baseUrl
var appendUrl = "oauth/v2/token"
var bearerToken;
var apiKey = "";
var apiSecretValue = "";
var contactsEndPoint = "api/contacts"
var createContactEndPoint = "api/contacts/new"
var count = 0
var getContactId = ""
var getCreatedContactId = ""


it("Add new role with client Applications access", () => {
    cy.visit("s/roles");
    roles.waitForPageLoad();
    roles.addNewRoleButton.click();
    roles.roleNameTextBox.click();
    roles.roleNameTextBox.type(readRole);
    roles.permissionTab.click();
    roles.apiPermissionTab.click();
    roles.apiAccessGrantedCheckBox.click();
    roles.clientApplicationsAccess.click();
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

  it("Create new user with role attached above", () => {
    cy.visit("s/users");
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

  it("Response shoube be 400 using these credential", function() {
    cy.visit("s/credentials");
    credentials.addNewButton.click();
    credentials.oAuth2ClientApiModeSelector.then(() => {
      cy.wait(1000);
      credentials.clientName.type("Test");
      credentials.clientRedirectUI.type("https://on.cypress.io");
      credentials.saveAndCloseButton.click();
    });
    credentials.waitforPageLoad();
    var key1 = "";
    var secret1 = "";
    credentials.apiKey.invoke("val").then((key) => {
      key1 = key;
      credentials.apiSecret.invoke("val").then((secret) => {
        secret1 = secret;
        var token = "";
        cy.request({ 
          method:'POST',
          url: getHostUrl + appendUrl,
          failOnStatusCode: false,
          body:
          {
           'grant_type': 'client_credentials',
           'client_id':key1,
           'client_secret':secret1
          },
          headers:{
            'Content-Type':'application/json',
          }
         }).then(function(response){
           expect(response).to.have.property('status',400)
           expect(response.body.errors[0].message).to.contain("The grant type is unauthorized for this client_id");
        });
      });
    });
  });

  it("Search and Delete Credentials",function(){
    cy.visit("/s/credentials");
    search.selectCheckBoxForFirstItem.click({ force: true });
    search.OptionsDropdownForFirstItem.click();
    search.deleteButtonForFirstItem.click();
    search.confirmDeleteButton.click();
  })

  it("Login with Admin credentials", () => {
    user.clickOnUserName.click()
    user.clickOnLogoutButton.click()
    user.waitTillLoginPageDisplayed()
    cy.login(Cypress.env("userName"), Cypress.env("password"));
    user.waitTillDashboardGetsLoaded()
  });

  it("Delete the created User", () => {
    cy.visit("s/users");
    user.waitForPageLoad();
    cy.visit('/s/users?search=' + lastName)
    user.selectParentCheckBox.click()
    user.selectParentDropdown.click()
    user.deleteUsersBatch.click()
    user.confirmDeleteButton.click()
    cy.get('.alert-growl').should('contain', '1 users have been deleted!');
  });

  it("Search and delete newly added role", () => {
    cy.visit("s/roles");
    roles.waitForPageLoad();
    cy.visit('/s/roles?search='+ readRole);
    search.selectCheckBoxForFirstItem.click();
    search.OptionsDropdownForFirstItem.click();
    search.deleteButtonForFirstItem.click();
    search.confirmDeleteButton.click();
  });

