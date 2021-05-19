@regression @mat
Feature: Verify that user is able to create and delete roles

    @role
    Scenario: Add new role for reading contact
        Given I am on Mautic Login Page
        When I type User Name on Login Page
        And I type Password on Login Page
        And I click Login Button
        Then I should be on "Dashboard" Page
        When I click on Roles option
        Then I should be on "Roles" Page
        When I click New Button On Roles Page
        Then I should be on "New Role" Page






