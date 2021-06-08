@regression @campaigns @customer_scenarios
Feature: Campaign regression scenarios

    Background: Login to Application
        Given I am on Mautic Login Page
        When I type User Name on Login Page
        And I type Password on Login Page
        And I click Login Button
        Then I should be on "Dashboard" Page

    Scenario: Add new email to test campaign scenario
        When I visit "Emails" page
        Then I should be on "Emails" Page
        When I click on Add New Email Button
        And I select email type as "Template"
        And I type email Suject as "TestEmailForCampaignScenario"
        And I type email Internal name as "TestEmailForCampaignScenario"
        And I click Save and Close Button on emails Page
        And I click Close Button on email page
        Then I should see "TestEmailForCampaignScenario" email is created

    @add_new_company
    Scenario Outline: Add new company to test the campaign scenarios
        When I visit "Companies" page
        Then I should be on "Companies" Page
        When I click Add New Company Button
        And I type Company Name as "<CompanyName>"
        And I click Save and Close Button on Companies Page
        Then I should see Company is Created as "<CompanyName>"

        Examples:
            | CompanyName |
            | Acquia      |

    @Add_new_stage
    Scenario: Create a new stage to test the campaign scenarios
        When I visit "Stages" page
        Then I should be on "Stages" Page
        When I click Add New Button on Stages Page
        And I type Stages Title as "Stage 1"
        And I type Weight as "10" on Stages Page
        And I click Save and Close Button on Stages Page
        Then I should see "Stage 1" Stages is created

    @add_custom_field_contact
    Scenario Outline: Add new custom field for contact to test campaign scenario
        When I visit "Custom Fields" page
        Then I should be on "Custom Fields" Page
        When I click Add New Button on Custom Fields Page
        And I type Custom Field Label as "<Custom Field>"
        And I select Custom Field Object as "Contact"
        And I select Custom Field Data type as "Date"
        And I click Save And Close Button on Custom Field Page
        Then I should see "<Custom Field>" is Created on Custom Field Page

        Examples:
            | Custom Field |
            | Date Field 1 |
            | Date Field 2 |
            | Date Field 3 |
            | Date Field 4 |

    @Add_new_Contacts
    Scenario Outline: Add new contacts to test the campaign scenarios
        When I visit "Contacts" page
        Then I should be on "Contacts" Page
        When I click Add New Button on Contact Page
        And I type Contact Title as "<Contact_Title>"
        And I type Contact First Name as "<Contact_First_Name>"
        And I type Conact Last Name as "<Contact_Last_Name>"
        And I type Conatct email as "<Conatct_email>"
        And I type Contact City as "<Contact_City>"
        And I type "<Date Field 1>" and "<Date Field 2>" and "<Date Field 3>" values
        And I click Save Button on Contact Page
        And I click Close Button on Contact Page
        Then I should see "<Contact_First_Name>" Contact is Created

        Examples:
            | Contact_Title | Contact_First_Name | Contact_Last_Name | Conatct_email                | Contact_City | Date Field 1 | Date Field 2 | Date Field 3 |
            | Mr            | Contact1           | Test1             | Contact1@mailtest.mautic.com | Pune         | 2021-05-04   | 2021-05-04   | 2021-05-04   |
            | Mr            | Contact2           | Test1             | Contact2@mailtest.mautic.com | Pune         | 2021-05-04   | 2021-05-04   | 2021-05-04   |
            | Mr            | Contact3           | Test1             | Contact3@mailtest.mautic.com | Sangli       | 2021-05-04   | 2021-05-04   | 2021-05-04   |

    @create_new_segement
    Scenario Outline: Add new segment based on Last Name to test campaign scenario
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
            | Segment_Name                   | filter     | filter_condition | filter_value |
            | segmentForCampaignRegression   | Last Name  | equals           | Test1        |
            | segmentForModifyContactSegment | First Name | equals           | Test1        |

    @send_email
    Scenario: Create a campaign with action send Email from the selected segment
        When I visit "Campaigns" page
        Then I should be on "Campaigns" Page
        When I click Add New Button on Campaign page
        When I type Campaign title as "sendEmail_Campaign_With_Segment"
        And I click on Launch Campaign builder
        When I select "Contact segments" as campaign source
        When I Select "segmentForCampaignRegression" as contact source and click on add
        When I click on campaign event list
        And I click on "Action" tab of campaign
        When I select action as "Send email" from actions list
        And I add event name "Send email to segment" and E-mail "TestEmailForCampaignScenario"
        When I click on new campaign event after action
        And I click on "Decision" tab of campaign
        When I select decision as "Opens email" from decision list
        And I add event name "If user open's an Email"
        And I click on "yes" for condition
        And I click on "Action" tab of campaign
        When I select action as "Adjust contact points" from actions list
        And I add event name "Adjust contact points by 5" and add "5" points
        And I apply changes to builder and close the builder
        Then I publish the campaign and save it
        When I wait for 12 sec to apply campaign action on segments contacts
        When I click on "Actions" tab
        Then I check the first action tab that campaign is triggered successfully with "Send email to segment" and event "Send or schedule email" and success percentage "100%"
        Then I check the second action tab that campaign is triggered successfully with "Adjust contact points by 5" and event "Adjust contact points" and success percentage "0%"
        When I click on "Contacts" tab
        When I click on first contact under campaign contacts
        Then I check "Email sent" event is triggered for the contact
        Then I check that events triggered successfully Event Name "TestEmailForCampaignScenario" and Event Type "Email sent" and Event Timestamp "Today"
        Then I check the mailbox of "contact1" and verify that contact has received "TestEmailForCampaignScenario" email
        And  I read the the email of "contact1" and delete it
        When I visit "Contacts" page
        Then I should be on "Contacts" Page
        When I search for contact"Contact1 Test1"
        Then I check that contact "Contact1 Test1" has received "5" points of reading an email
        When I visit "Campaigns" page
        Then I should be on "Campaigns" Page
        When I search for campaign "sendEmail_Campaign_With_Segment"
        When I delete campaign "sendEmail_Campaign_With_Segment"
        Then I should see campaign "sendEmail_Campaign_With_Segment" is deleted

    @update_contact
    Scenario: Create a campaign with action update contact field from the selected segment
        When I visit "Campaigns" page
        Then I should be on "Campaigns" Page
        When I click Add New Button on Campaign page
        When I type Campaign title as "updateContact_Campaign_With_Segment"
        And I click on Launch Campaign builder
        When I select "Contact segments" as campaign source
        When I Select "segmentForCampaignRegression" as contact source and click on add
        When I click on campaign event list
        And I click on "Action" tab of campaign
        When I select action as "Update contact" from actions list
        And I add event name "Update contact's date fields" with values of dateField1 "2021-06-01" and dateField2 "+3 days" and dateField3 "-2 days"
        And I apply changes to builder and close the builder
        Then I publish the campaign and save it
        When I wait for 12 sec to apply campaign action on segments contacts
        When I click on "Actions" tab
        Then verify that campaign is executed successfully with "100%" action completion
        Then I check that campaign triggered successfully with "Update contact's date fields" and event "Update contact"
        When I click on "Contacts" tab
        When I click on first contact under campaign contacts
        Then I check that events triggered successfully Event Name "Update contact's date fields / updateContact_Campaign_With_Segment" and Event Type "Campaign action triggered" and Event Timestamp "Today"
        Then I click on contact details link and verify that dateField1 is updated "2021-06-01" and dateField2 with "3" and dateField3 with "2" updated accordingly as per today's date
        When I visit "Campaigns" page
        Then I should be on "Campaigns" Page
        When I search for campaign "updateContact_Campaign_With_Segment"
        When I delete campaign "updateContact_Campaign_With_Segment"
        Then I should see campaign "updateContact_Campaign_With_Segment" is deleted

    @change_contact_stage
    Scenario: Create a campaign with action change contact's stage from the selected segment
        When I visit "Campaigns" page
        Then I should be on "Campaigns" Page
        When I click Add New Button on Campaign page
        When I type Campaign title as "changeContactStage_Campaign_With_Segment"
        And I click on Launch Campaign builder
        When I select "Contact segments" as campaign source
        When I Select "segmentForCampaignRegression" as contact source and click on add
        When I click on campaign event list
        And I click on "Action" tab of campaign
        When I select action as "stage" from actions list
        And I add event name "Change Contact's stage to Stage 1" and add stage "Stage 1"
        And I apply changes to builder and close the builder
        Then I publish the campaign and save it
        When I wait for 12 sec to apply campaign action on segments contacts
        When I click on "Actions" tab
        Then verify that campaign is executed successfully with "100%" action completion
        Then I check that campaign triggered successfully with "Change Contact's stage to Stage 1" and event "Change contact's stage"
        When I click on "Contacts" tab
        When I click on first contact under campaign contacts
        Then I check "Stage changed" event is triggered for the contact
        Then I check that events triggered successfully Event Name "Stage 1" and Event Type "Stage changed" and Event Timestamp "Today"
        Then I check that "Stage 1" present in contact details Page
        When I visit "Campaigns" page
        Then I should be on "Campaigns" Page
        When I search for campaign "changeContactStage_Campaign_With_Segment"
        When I delete campaign "changeContactStage_Campaign_With_Segment"
        Then I should see campaign "changeContactStage_Campaign_With_Segment" is deleted

    @Add_to_company
    Scenario: Create a campaign with action add to company from the selected segment
        When I visit "Campaigns" page
        Then I should be on "Campaigns" Page
        When I click Add New Button on Campaign page
        When I type Campaign title as "addToCompany_Campaign_With_Segment"
        And I click on Launch Campaign builder
        When I select "Contact segments" as campaign source
        When I Select "segmentForCampaignRegression" as contact source and click on add
        When I click on campaign event list
        And I click on "Action" tab of campaign
        When I select action as "Add to company action" from actions list
        And I add event name "Add company in the selected segment's contact" and add company "Acquia"
        And I apply changes to builder and close the builder
        Then I publish the campaign and save it
        When I wait for 12 sec to apply campaign action on segments contacts
        When I click on "Actions" tab
        Then verify that campaign is executed successfully with "100%" action completion
        Then I check that campaign triggered successfully with "Add company in the selected segment's contact" and event "Add contact to company"
        When I click on "Contacts" tab
        And I check that company "Acquia" is displayed in grid contact
        When I click on first contact under campaign contacts
        Then I check that events triggered successfully Event Name "Add company in the selected segment's contact / addToCompany_Campaign_With_Segment" and Event Type "Campaign action triggered" and Event Timestamp "Today"
        And I check that "Acquia" is present in contact details page as primary company
        When I visit "Campaigns" page
        Then I should be on "Campaigns" Page
        When I search for campaign "addToCompany_Campaign_With_Segment"
        When I delete campaign "addToCompany_Campaign_With_Segment"
        Then I should see campaign "addToCompany_Campaign_With_Segment" is deleted

    @update_contact_primary_company
    Scenario: Create a campaign with action update contact primary company from the selected segment
        When I visit "Campaigns" page
        Then I should be on "Campaigns" Page
        When I click Add New Button on Campaign page
        When I type Campaign title as "updateContactPrimaryCompany_Campaign_With_Segment"
        And I click on Launch Campaign builder
        When I select "Contact segments" as campaign source
        When I Select "segmentForCampaignRegression" as contact source and click on add
        When I click on campaign event list
        And I click on "Action" tab of campaign
        When I select action as "primary company" from actions list
        And I add event name "Update the company fields with values" with city as "Pune" and country as "India" with number of employee "1000"
        And I apply changes to builder and close the builder
        Then I publish the campaign and save it
        When I wait for 12 sec to apply campaign action on segments contacts
        When I click on "Actions" tab
        Then verify that campaign is executed successfully with "100%" action completion
        Then I check that campaign triggered successfully with "Update the company fields with values" and event "Update contact's primary company"
        When I click on "Contacts" tab
        When I click on first contact under campaign contacts
        Then I check that events triggered successfully Event Name "Update the company fields with values / updateContactPrimaryCompany_Campaign_With_Segment" and Event Type "Campaign action triggered" and Event Timestamp "Today"
        And I check that "Acquia" is present in contact details page as primary company
        When I visit "Companies" page
        Then I should be on "Companies" Page
        When I search Company as "Acquia"
        And I click on company named "Acquia"
        Then I check that company city is "Pune" and country is "India" and no of employee is "1000"
        When I visit "Campaigns" page
        Then I should be on "Campaigns" Page
        When I search for campaign "updateContactPrimaryCompany_Campaign_With_Segment"
        When I delete campaign "updateContactPrimaryCompany_Campaign_With_Segment"
        Then I should see campaign "updateContactPrimaryCompany_Campaign_With_Segment" is deleted

    @Add_to_company_score
    Scenario: Create a campaign with action add to company score from the selected segment
        When I visit "Campaigns" page
        Then I should be on "Campaigns" Page
        When I click Add New Button on Campaign page
        When I type Campaign title as "addToCompanyScore_Campaign_With_Segment"
        And I click on Launch Campaign builder
        When I select "Contact segments" as campaign source
        When I Select "segmentForCampaignRegression" as contact source and click on add
        When I click on campaign event list
        And I click on "Action" tab of campaign
        When I select action as "score" from actions list
        And I add event name "Add to company score in the selected segment's contact company" and add to the company score "10"
        And I apply changes to builder and close the builder
        Then I publish the campaign and save it
        When I wait for 12 sec to apply campaign action on segments contacts
        When I click on "Actions" tab
        Then verify that campaign is executed successfully with "100%" action completion
        Then I check that campaign triggered successfully with "Add to company score in the selected segment's contact company" and event "Score company"
        When I click on "Contacts" tab
        And I check that company "Acquia" is displayed in grid contact
        When I click on first contact under campaign contacts
        Then I check that events triggered successfully Event Name "Add to company score in the selected segment's contact company / addToCompanyScore_Campaign_With_Segment" and Event Type "Campaign action triggered" and Event Timestamp "Today"
        And I check that "Acquia" is present in contact details page as primary company
        When I visit "Companies" page
        Then I should be on "Companies" Page
        When I search Company as "Acquia"
        Then I check company "Acquia" score is "30"
        When I visit "Campaigns" page
        Then I should be on "Campaigns" Page
        When I search for campaign "addToCompanyScore_Campaign_With_Segment"
        When I delete campaign "addToCompanyScore_Campaign_With_Segment"
        Then I should see campaign "addToCompanyScore_Campaign_With_Segment" is deleted

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
        And I add event name "Add contact's in do not contact" and channel as "Email"
        And I apply changes to builder and close the builder
        Then I publish the campaign and save it
        When I wait for 12 sec to apply campaign action on segments contacts
        When I click on "Actions" tab
        Then verify that campaign is executed successfully with "100%" action completion
        Then I check that campaign triggered successfully with "Add contact's in do not contact" and event "mautic.campaign.lead.adddnc"
        When I click on "Contacts" tab
        When I click on first contact under campaign contacts
        Then I check that contact "have" do not contact label
        Then I check "Do not contact" event is triggered for the contact
        Then I check that events triggered successfully Event Name "Email" and Event Type "Do not contact" and Event Timestamp "Today"
        When I visit "Campaigns" page
        Then I should be on "Campaigns" Page
        When I search for campaign "DNC_Campaign_With_Segment"
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
        When I wait for 12 sec to apply campaign action on segments contacts
        When I click on "Actions" tab
        Then verify that campaign is executed successfully with "100%" action completion
        Then I check that campaign triggered successfully with "Remove contacts from DNC" and event "mautic.campaign.lead.removednc"
        When I click on "Contacts" tab
        When I click on first contact under campaign contacts
        Then I check that contact "does not have" do not contact label
        Then I check that events triggered successfully Event Name "Remove contacts from DNC / Remove_DNC_Campaign_With_Segment" and Event Type "Campaign action triggered" and Event Timestamp "Today"
        When I visit "Campaigns" page
        Then I should be on "Campaigns" Page
        When I search for campaign "Remove_DNC_Campaign_With_Segment"
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
        When I wait for 12 sec to apply campaign action on segments contacts
        When I click on "Actions" tab
        Then verify that campaign is executed successfully with "100%" action completion
        Then I check that campaign triggered successfully with "Adjust contact points by 5" and event "Adjust contact points"
        When I click on "Contacts" tab
        When I click on first contact under campaign contacts
        Then I check that contact has gained "5 points"
        Then I check "Point gained" event is triggered for the contact
        Then I check that events triggered successfully Event Name "adjust_PositivePoints_Campaign_With_Segment / 5" and Event Type "Point gained" and Event Timestamp "Today"
        When I visit "Campaigns" page
        Then I should be on "Campaigns" Page
        When I search for campaign "adjust_PositivePoints_Campaign_With_Segment"
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
        When I wait for 12 sec to apply campaign action on segments contacts
        When I click on "Actions" tab
        Then verify that campaign is executed successfully with "100%" action completion
        Then I check that campaign triggered successfully with "Adjust contact points by -3" and event "Adjust contact points"
        When I click on "Contacts" tab
        When I click on first contact under campaign contacts
        Then I check that contact has gained "2 points"
        Then I check "Point gained" event is triggered for the contact
        Then I check that events triggered successfully Event Name "adjust_NegativePoints_Campaign_With_Segment / -3" and Event Type "Point gained" and Event Timestamp "Today"
        When I visit "Campaigns" page
        Then I should be on "Campaigns" Page
        When I search for campaign "adjust_NegativePoints_Campaign_With_Segment"
        When I delete campaign "adjust_NegativePoints_Campaign_With_Segment"
        Then I should see campaign "adjust_NegativePoints_Campaign_With_Segment" is deleted

    @modify_contact_segment
    Scenario: Create a campaign with action modify contact's segments from the selected segment
        When I visit "Campaigns" page
        Then I should be on "Campaigns" Page
        When I click Add New Button on Campaign page
        When I type Campaign title as "modify_ContactSegment_Campaign_With_Segment"
        And I click on Launch Campaign builder
        When I select "Contact segments" as campaign source
        When I Select "segmentForCampaignRegression" as contact source and click on add
        When I click on campaign event list
        And I click on "Action" tab of campaign
        When I select action as "segments" from actions list
        When I add event name "Modify contact's segment" and choose segment in which i want to add contact "segmentForModifyContactSegment" and remove contact's from segment "segmentForCampaignRegression"
        And I apply changes to builder and close the builder
        Then I publish the campaign and save it
        When I wait for 12 sec to apply campaign action on segments contacts
        When I click on "Actions" tab
        Then verify that campaign is executed successfully with "0%" action completion
        Then I check that campaign triggered successfully with "Modify contact's segment" and event "Modify contact's segments"
        When I click on "Contacts" tab
        Then I check that "No Contacts Found" is present under contacts tab
        When I visit "Segments" page
        Then I should be on "Contact Segments" Page
        When I search Contact Segment as "segmentForModifyContactSegment"
        Then I check that "segmentForModifyContactSegment" segment contain "View 3 Contacts" and I click on it
        When I click on first contact from that segment
        Then I check "Segment membership change" event is triggered for the contact
        Then I check that events triggered successfully Event Name "Contact added to segment, segmentForModifyContactSegment" and Event Type "Segment membership change" and Event Timestamp "Today"
        Then I check that second event triggered successfully Event Name "Contact removed from segment, segmentForCampaignRegression" and Event Type "Segment membership change" and Event Timestamp "Today"
        When I visit "Segments" page
        Then I should be on "Contact Segments" Page
        When I search Contact Segment as "segmentForCampaignRegression"
        Then I check that "segmentForCampaignRegression" segment contain "No Contacts" and I click on it
        Then I check that it has no contacts "No Results Found"
        When I visit "Campaigns" page
        Then I should be on "Campaigns" Page
        When I search for campaign "modify_ContactSegment_Campaign_With_Segment"
        When I delete campaign "modify_ContactSegment_Campaign_With_Segment"
        Then I should see campaign "modify_ContactSegment_Campaign_With_Segment" is deleted