@regression @mat @points_triggers
Feature: Verify that user is able to create trigger and verify that user has received an email once trigger condition is matched
    Background: Login to Application
        Given I am on Mautic Login Page
        When I type User Name on Login Page
        And I type Password on Login Page
        And I click Login Button
        Then I should be on "Dashboard" Page

    @Add_action_trigger_email
    Scenario: Add new trigger Email
        When I visit "Contacts" page
        Then I should be on "Contacts" Page
        When I add Contact
        Then I should see Contact is Created
        When I visit "Segments" page
        Then I should be on "Contact Segments" Page
        When I add Sample Segment based on "First Name"
        Then I should be see Contact Segment "TestSegment" is created
        When I visit "Emails" page
        Then I should be on "Emails" Page
        When I click on Add New Email Button
        And I select email type as "Template"
        And I type email Suject as "TestTriggerEmail"
        And I type email Internal name as "TestTriggerEmail"
        And I type email Segment Name as "TestSegment"
        And I click Save and Close Button on emails Page
        And I click Close Button on email page
        Then I should see "TestTriggerEmail" email is created

    @Add_action_trigger
    Scenario: Add a Trigger
        When I visit "Point Triggers" page
        Then I should be on "Point Triggers" Page
        When I click Add New Button on Point Triggers Page
        And I type Point Triggers Name as "testTrigger"
        And I type Minimum number of points as "40"
        And I select Published option as "Yes" on Point Triggers Page
        And I click "Events" tab on Point Triggers Page
        And I click Add an event Button on Point Triggers Page
        And I select "Send an email" as an Event on Point Triggers Page
        And I select Send an email as "TestTriggerEmail" on Point Triggers Page
        And I click Add button on Point Triggers Page Pop up
        And I click Save And Close Button on Point Triggers Page
        Then I should see "testTrigger" Point Trigger is Created

    @edit_trigger
    Scenario: edit a Trigger
        When I visit "Point Triggers" page
        Then I should be on "Point Triggers" Page
        When I edit Trigget "testTrigger" on Point Triggers Page
        And I type Minimum number of points as "50"
        And I click Save And Close Button on Point Triggers Page
        Then I should see "testTrigger" Point Trigger is Created

    @Edit_contact_points
    Scenario: Edit newly added contact
        When I visit "Contacts" page
        Then I should be on "Contacts" Page
        When I search Contact as "testContact"
        And I edit the "testContact" Contact
        And I type Contact Points as "50" on Contacts page
        And I click Save Button on Contact Page
        And I click Close Button on Contact Page
        Then I should see Contact is Updated as "testContact Data"

    @verify_and_delete_email_triggered
    Scenario: Verify that user has received the trigger Email
        Then I should see Email "TestTriggerEmail" is triggered for contact "testContact"
        When I delete the read email for contact "testContact"

    @delete_trigger_email
    Scenario: Search and delete trigger email
        When I visit "Emails" page
        Then I should be on "Emails" Page
        When I search email as "TestTriggerEmail"
        And I delete the "TestTriggerEmail" email
        Then I should see email "TestTriggerEmail" is deleted

    @delete_action_trigger
    Scenario: Delete newly added Trigger
        When I visit "Point Triggers" page
        Then I should be on "Point Triggers" Page
        When I search Point Trigger as "testTrigger"
        And I delete the "testTrigger" Point Trigger
        Then I should see Point Trigger "testTrigger" is deleted

