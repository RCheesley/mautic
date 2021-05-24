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
#When I click Add New Button on Roles page








