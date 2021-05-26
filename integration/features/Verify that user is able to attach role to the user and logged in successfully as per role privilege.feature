@regression @mat @uses
Feature: Verify that user is able to create and delete roles
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

    @login_new_user
    Scenario: logout and login with created user
        When I Log out of the Application
        Then I should be on "Mautic" Page
        When I type User Name as "StandardAccount" on Login Page
        And I type Password as "Standard@12345" on Login Page
        And I click Login Button
        Then I should be on "Dashboard" Page
        Then I should see "Dashboard" option is present on DashBoard Page
        Then I should see "Calendar" option is present on DashBoard Page
        Then I should see "Contacts" option is present on DashBoard Page
        Then I should see "Companies" option is present on DashBoard Page
        Then I should see "Segments" option is present on DashBoard Page
        Then I should see "Components" option is present on DashBoard Page
        Then I should see "Channels" option is present on DashBoard Page
        Then I should see "Collapse Menu" option is present on DashBoard Page


    @delete_user
    Scenario: Search And Delete User
        When I select "Users" option in settings
        Then I should be on "Users" Page
        When I search user "User, Test" on Users Page
        And I delete user "User, Test" on Users Page
        Then I should see "Test User" is deleted on Users Page


    @delete_role
    Scenario: Search and delete newly added role
        When I select "Roles" option in settings
        Then I should be on "Roles" Page
        When I search Role as "Standard"
        And I delete the "Standard" Role Page
        Then I should see Role "Standard" is deleted

