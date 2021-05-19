@regression @mat
Feature: Verify that user is able to create and delete asset
    Background: Login to Application and Create contact/segment/email
        Given I am on Mautic Login Page
        When I type User Name on Login Page
        And I type Password on Login Page
        And I click Login Button
        Then I should be on "Dashboard" Page
        When I visit "Contacts" page
        Then I should be on "Contacts" Page
        When I add Contact
        Then I should see Contact is Created
        When I visit "Segments" page
        Then I should be on "Contact Segments" Page
        When I add Sample Segment based on "First Name"
        Then I should see Segment is created
        When I visit "Emails" page
        Then I should be on "Emails" Page
        When I add Sample "Template" email
        Then I should see Tempalate is created
    @asset
    Scenario: Add new role for reading contact




