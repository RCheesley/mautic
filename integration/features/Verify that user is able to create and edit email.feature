@regression @mat @emails
Feature: Verify that user is able to create and edit email
    Background: Login to Application and Create contact / segment / email
        Given I am on Mautic Login Page
        When I type User Name on Login Page
        And I type Password on Login Page
        And I click Login Button
        Then I should be on "Dashboard" Page
    #  When I visit "Emails" page
    #  Then I should be on "Emails" Page
    #  When I add Sample "Template" email
    #  Then I should see Tempalate is created

    @add_new_email
    Scenario: Add new Email
        When I visit "Contacts" page
        Then I should be on "Contacts" Page
        When I add Contact
        Then I should see Contact is Created
        When I visit "Segments" page
        Then I should be on "Contact Segments" Page
        When I add Sample Segment based on "First Name"
        Then I should be see Contact Segment "testsegment" is created
        When I visit "Emails" page
        Then I should be on "Emails" Page
        When I click on Add New Email Button
        And I select email type as "Template"
        And I type email Suject as "TestEmailCypress"
        And I type email Internal name as "TestEmailCypress"
        And I type email Segment Name as "testSegment"
        And I click Save and Close Button on emails Page
        And I click Close Button on email page
        Then I should see "TestEmailCypress" email is created

    @edit_email
    Scenario: Edit newly added email
        When I visit "Emails" page
        Then I should be on "Emails" Page
        When I search email as "TestEmailCypress"
        And I edit the "TestEmailCypress" email
        And I type email Suject as "TestEmail"
        And I click Save and Close Button on emails Page
        And I click Close Button on email page
        Then I should see "TestEmailCypress" email is created

    @delete_email
    Scenario: Search and delete newly added email
        When I visit "Emails" page
        Then I should be on "Emails" Page
        When I search email as "TestEmailCypress"
        And I delete the "TestEmailCypress" email
        Then I should see email "TestEmailCypress" is deleted
