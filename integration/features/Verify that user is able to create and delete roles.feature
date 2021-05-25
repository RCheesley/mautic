@regression @mat @roles
Feature: Verify that user is able to create and delete roles
    Background: Login to Application and Create contact / segment / email
        Given I am on Mautic Login Page
        When I type User Name on Login Page
        And I type Password on Login Page
        And I click Login Button
        Then I should be on "Dashboard" Page

    @Add_new_role
    Scenario: Add new role for reading contact
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

    @delete_role
    Scenario: Search and delete newly added role
        When I select "Roles" option in settings
        Then I should be on "Roles" Page
        When I search Role as "Standard"
        And I delete the "Standard" Role Page
        Then I should see Role "Standard" is deleted












