@regression @mat @points_action
Feature: Verify that user is able to create and edit points action
    Background: Login to Application and Create contact / segment / email
        Given I am on Mautic Login Page
        When I type User Name on Login Page
        And I type Password on Login Page
        And I click Login Button
        Then I should be on "Dashboard" Page

    @Add_Action
    Scenario: Add a Action
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
        When I click on Add New Email Button
        And I select email type as "Template"
        And I type email Suject as "TestEmailCypress"
        And I type email Internal name as "TestEmailCypress"
        And I type email Segment Name as "TestSegment"
        And I click Save and Close Button on emails Page
        And I click Close Button on email page
        Then I should see "TestEmailCypress" email is created
        When I visit "Points" page
        Then I should be on "Points" Page
        When I click Add New Button on Points Page
        And I type Action Name as "testAction"
        And I type Change points as "-50"
        And I select When a contact option as "Opens an email"
        And I type Limit to these selected emails as "TestEmailCypress"
        And I click Save and Close Button on Points Page
        Then I should see "testAction" Action is created

    @edit_stages
    Scenario: Edit a newly added action
        When I visit "Points" page
        Then I should be on "Points" Page
        When I search Actions as "testAction"
        And I edit the "testAction" Actions
        And I type Change points as "5"
        And I click Save and Close Button on Points Page
        Then I should see "testAction" Action is created

    @delete_stages
    Scenario: Delete a newly added action
        When I visit "Points" page
        Then I should be on "Points" Page
        When I search Actions as "testAction"
        And I delete the "testAction" Actions
        Then I should see Actions "testAction" is deleted