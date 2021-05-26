@regression @campaigns @customer_scenarios
Feature: Campaign regression scenarios

    Background: Login to Application
        Given I am on Mautic Login Page
        When I type User Name on Login Page
        And I type Password on Login Page
        And I click Login Button
        Then I should be on "Dashboard" Page

    @Add_new_Contacts
    Scenario Outline: Add new Contacts to test the campaign scenarios
        When I visit "Contacts" page
        Then I should be on "Contacts" Page
        When I click Add New Button on Contact Page
        And I type Contact Title as "<Contact_Title>"
        And I type Contact First Name as "<Contact_First_Name>"
        And I type Conact Last Name as "<Contact_Last_Name>"
        And I type Conatct email as "<Conatct_email>"
        And I type Contact City as "<Contact_City>"
        And I click Save Button on Contact Page
        And I click Close Button on Contact Page
        Then I should see "<Contact_First_Name>" Contact is Created

        Examples:
            | Contact_Title | Contact_First_Name | Contact_Last_Name | Conatct_email                | Contact_City |
            | Mr            | Contact1           | Test1             | Contact1@mailtest.mautic.com | Pune         |
            | Mr            | Contact2           | Test1             | Contact2@mailtest.mautic.com | Pune         |
            | Mr            | Contact3           | Test1             | Contact3@mailtest.mautic.com | Sangli       |

    @create_new_segement
    Scenario Outline: Add new Segments based on Last Name to test campaign scenario
        When I visit "Segments" page
        Then I should be on "Contact Segments" Page
        When I click Add New Button on Contact Segments page
        And I type Segment Name as "<Segment_Name>"
        And I Click on "Filters" tab on Contact Segments page
        And I choose Filter as "<filter>" on Contact Segments page
        And I choose Filter Condition as "<filter_condition>" on Contact Segments page
        And I choose Filter Value as "<filter_value>" on Contact Segments page
        And I click Save and Close Button on Contact Segments page
        Then I should be see Contact Segment "<Segment_Name>" is created
        Examples:
            | Segment_Name                 | filter    | filter_condition | filter_value |
            | segmentForCampaignRegression | Last Name | equals           | Test1        |

    @Add_do_not_contact
    Scenario: Create a campaign with action do not contact from the selected segment
        When I visit "Campaigns" page
        Then I should be on "Campaigns" Page
        When I click Add New Button on Campaign page
        When I type Campaign title as "DNC_Campaign_With_Segment"
        And I click on Launch Campaign builder
        When I select "Contact segments" as campaign source
        When I Select "segmentForCampaignRegression" as contact source and click on add
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
        Then I visit "Campaigns" page
        Then I should be on "Campaigns" Page
        When I search campaign "DNC_Campaign_With_Segment"
        When I delete campaign "DNC_Campaign_With_Segment"
        Then I should see campaign "DNC_Campaign_With_Segment" is deleted

    @remove_do_not_contact
    Scenario: Create a campaign with action remove do not contact from the selected segment
        When I visit "Campaigns" page
        Then I should be on "Campaigns" Page
        When I click Add New Button on Campaign page
        When I type Campaign title as "Remove_DNC_Campaign_With_Segment"
        And I click on Launch Campaign builder
        When I select "Contact segments" as campaign source
        When I Select "segmentForCampaignRegression" as contact source and click on add
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
        Then I visit "Campaigns" page
        Then I should be on "Campaigns" Page
        When I search campaign "Remove_DNC_Campaign_With_Segment"
        When I delete campaign "Remove_DNC_Campaign_With_Segment"
        Then I should see campaign "Remove_DNC_Campaign_With_Segment" is deleted

    @adjust_positive_points
    Scenario: Create a campaign with action adjust positive points from the selected segment
        When I visit "Campaigns" page
        Then I should be on "Campaigns" Page
        When I click Add New Button on Campaign page
        When I type Campaign title as "adjust_PositivePoints_Campaign_With_Segment"
        And I click on Launch Campaign builder
        When I select "Contact segments" as campaign source
        When I Select "segmentForCampaignRegression" as contact source and click on add
        When I click on campaign event list
        And I click on "Action" tab of campaign
        When I select action as "Adjust contact points" from actions list
        And I add event name "Adjust contact points by 5" and add "5" points
        And I apply changes to builder and close the builder
        Then I publish the campaign and save it
        And I wait for 10 sec to apply campaign action on segments contacts
        When I click on "Actions" tab
        And verify that campaign is executed successfully
        When I click on "Contacts" tab
        When I click on first contact under campaign contacts
        Then I check that contact has gained "5 points"
        Then I check "Point gained" event is triggered for the contact
        Then I check that events triggered successfully Event Name "adjust_PositivePoints_Campaign_With_Segment / 5" and Event Type "Point gained" and Event Timestamp "Today"
        Then I visit "Campaigns" page
        Then I should be on "Campaigns" Page
        When I search campaign "adjust_PositivePoints_Campaign_With_Segment"
        When I delete campaign "adjust_PositivePoints_Campaign_With_Segment"
        Then I should see campaign "adjust_PositivePoints_Campaign_With_Segment" is deleted

    @adjust_negative_points
    Scenario: Create a campaign with action adjust negative points from the selected segment
        When I visit "Campaigns" page
        Then I should be on "Campaigns" Page
        When I click Add New Button on Campaign page
        When I type Campaign title as "adjust_NegativePoints_Campaign_With_Segment"
        And I click on Launch Campaign builder
        When I select "Contact segments" as campaign source
        When I Select "segmentForCampaignRegression" as contact source and click on add
        When I click on campaign event list
        And I click on "Action" tab of campaign
        When I select action as "Adjust contact points" from actions list
        And I add event name "Adjust contact points by -3" and add "-3" points
        And I apply changes to builder and close the builder
        Then I publish the campaign and save it
        And I wait for 10 sec to apply campaign action on segments contacts
        When I click on "Actions" tab
        And verify that campaign is executed successfully
        When I click on "Contacts" tab
        When I click on first contact under campaign contacts
        Then I check that contact has gained "2 points"
        Then I check "Point gained" event is triggered for the contact
        Then I check that events triggered successfully Event Name "adjust_NegativePoints_Campaign_With_Segment / -3" and Event Type "Point gained" and Event Timestamp "Today"
        Then I visit "Campaigns" page
        Then I should be on "Campaigns" Page
        When I search campaign "adjust_NegativePoints_Campaign_With_Segment"
        When I delete campaign "adjust_NegativePoints_Campaign_With_Segment"
        Then I should see campaign "adjust_NegativePoints_Campaign_With_Segment" is deleted
