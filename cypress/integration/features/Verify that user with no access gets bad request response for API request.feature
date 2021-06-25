@regression @mat @credentials_standard
Feature: Verify that user is able to attach role to the user and logged in successfully as per role privilege
    Background: Login to Application and Create contact / segment / email
        Given I am on Mautic Login Page
        When I type User Name on Login Page
        And I type Password on Login Page
        And I click Login Button
        Then I should be on "Dashboard" Page

    @Add_new_role_user
    Scenario: Add new role with read contacts access
        When I select "Roles" option in settings
        Then I should be on "Roles" Page
        When I click Add New Button on Roles page
        And I type Roles Name as "Standard"
        And I click on "Permissions" tab on Roles Page
        And I Give Permission as "Granted" for "API Access" on "API Permissions" section
        And I Give Permission as "Full" for "Clients (Applications) - User has access to" on "API Permissions" section
        And I Give Permission as "Full" for "Contacts - User has access to" on "Contact Permissions" section
        And I Give Permission as "Full" for "Segments - User has access to" on "Contact Permissions" section
        And I Give Permission as "Manage" for "Custom Fields - User has access to" on "Contact Permissions" section
        And I Give Permission as "Full" for "Import - User has access to" on "Contact Permissions" section
        And I click Save and Close Button on Roles Page
        Then I should see "Standard" Role is Created on Roles Page

    @Add_new_user
    Scenario: Create new user with role attached above
        When I select "Users" option in settings
        Then I should be on "Users" Page
        When I click Add New Button on Users Page
        And I type User First Name as "Test" on Users Page
        And I type User Last Name as "User" on Users Page
        And I select User Role as "Standard" on Users Page
        And I type User Name as "StandardAccount" on Users Page
        And I type User email as "user@mailtest.mautic.com" on Users Page
        And I type User Password as "Standard@12345" on Users Page
        And I confirm User Password as "Standard@12345" on Users Page
        And I click Save And Close Button on Users Page
        Then I shoudl see User "Test User" is created on Users Page

    @verify_credentials
    Scenario: Verify that user is not authorised for this API action
        When I Log out of the Application
        Then I should be on "Mautic" Page
        When I type User Name as "StandardAccount" on Login Page
        And I type Password as "Standard@12345" on Login Page
        And I click Login Button
        Then I should be on "Dashboard" Page
        When I select "API Credentials" option in settings
        Then I should be on "API Credentials" Page
        When I click Add New Button on API Credentials Page
        And I select Authorization Protocol As "OAuth 2" on API Credentials Page
        And I type Credentials Name as "testCredentials" on API Credentials Page
        And I type Callback URI as "https://on.cypress.io" on API Credentials Page
        And I click Save And Close Button on API Credentials Page
        Then I should see "testCredentials" are created on API Credentials Page
        And I should get HTTP status code "400" with response message as "The grant type is unauthorized for this client_id"

    @delete_user
    Scenario: Search and Delete Credentials
        When I select "API Credentials" option in settings
        Then I should be on "API Credentials" Page
        When I select Authentication Type as "OAuth 2" on API Credentials Page
        And I search Credentials "testCredentials" on API Credentials Page
        And I delete Credentials "testCredentials" on API Credentials Page
        Then I should see "testCredentials" on API Credentials Page

    @delete_user
    Scenario: Search And Delete User
        When I select "Users" option in settings
        Then I should be on "Users" Page
        When I search user "Test" on Users Page
        And I delete user "User, Test" on Users Page
        Then I should see "Test User" is deleted on Users Page


    @delete_role
    Scenario: Search and delete newly added role
        When I select "Roles" option in settings
        Then I should be on "Roles" Page
        When I search Role as "Standard"
        And I delete the "Standard" Role Page
        Then I should see Role "Standard" is deleted

