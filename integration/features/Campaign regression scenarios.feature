@regression @campaigns @customer_scenarios
Feature: Campaign regression scenarios

    Background: Login to Application
        Given I am on Mautic Login Page
        When I type User Name on Login Page
        And I type Password on Login Page
        And I click Login Button
        Then I should be on "Dashboard" Page

    Scenario Outline: Create contacts

    @Add_do_not_contact
    Scenario: Create a campaign with action do not contact from the selected segment
        When I visit "Campaigns" page
        Then I should be on "Campaigns" Page
        When I click Add New Button on Campaign page
        When I type Campaign title as "DNC_Campaign_With_Segment"
        And I click on Launch Campaign builder
        When I select "Contact segments" as campaign source
        When I Select "SegmentForDNC" as contact source and click on add
        When I click on campaign event list
        And I click on "Action" tab of campaign
        When I select action as "Add Do Not Contact" from actions list
        And I add event name "Add to do not contact" and channel as "Email"
        And I apply changes to builder and close the builder
        Then I publish the campaign and save it
        And I wait for 10 sec to apply campaign action on segments contacts
        When I click on "Actions" tab
        And verify that campaign is executed successfully
        When I click on "Contacts" tab
        When I click on first contact under campaign contacts
        Then I check that contact "have" do not contact label
        Then I check "Do not contact" event is triggered for the contact
        Then I check that events triggered successfully Event Name "Email" and Event Type "Do not contact" and Event Timestamp "Today"
        Then I delete the campaign "DNC_Campaign_With_Segment"

    @remove_do_not_contact
    Scenario: Create a campaign with action remove do not contact from the selected segment
        When I visit "Campaigns" page
        Then I should be on "Campaigns" Page
        When I click Add New Button on Campaign page
        When I type Campaign title as "Remove_DNC_Campaign_With_Segment"
        And I click on Launch Campaign builder
        When I select "Contact segments" as campaign source
        When I Select "SegmentForDNC" as contact source and click on add
        When I click on campaign event list
        And I click on "Action" tab of campaign
        When I select action as "Remove Do Not Contact" from actions list
        And I add event name "Remove contacts from DNC" and channel as "Email"
        And I apply changes to builder and close the builder
        Then I publish the campaign and save it
        And I wait for 10 sec to apply campaign action on segments contacts
        When I click on "Actions" tab
        And verify that campaign is executed successfully
        When I click on "Contacts" tab
        When I click on first contact under campaign contacts
        Then I check that contact "does not have" do not contact label

    @adjust_positive_points
    Scenario: Create a campaign with action adjust positive points from the selected segment
        When I visit "Campaigns" page
        Then I should be on "Campaigns" Page
        When I click Add New Button on Campaign page
        When I type Campaign title as "Remove_DNC_Campaign_With_Segment"
        And I click on Launch Campaign builder
        When I select "Contact segments" as campaign source
        When I Select "SegmentForDNC" as contact source and click on add
        When I click on campaign event list
        And I click on "Action" tab of campaign
        When I select action as "Adjust contact points" from actions list
        And I add event name "Remove contacts from DNC" and channel as "Email"
        And I apply changes to builder and close the builder
        Then I publish the campaign and save it
        And I wait for 10 sec to apply campaign action on segments contacts
        When I click on "Actions" tab
        And verify that campaign is executed successfully
        When I click on "Contacts" tab
        When I click on first contact under campaign contacts
        Then I check that contact "does not have" do not contact label


