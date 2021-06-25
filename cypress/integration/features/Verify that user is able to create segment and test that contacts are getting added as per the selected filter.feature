@regression @mat @segments
Feature: Verify that user is able to create segment and test that contacts are getting added as per the selected filter
    Background: Login to Application and Create contact / segment / email
        Given I am on Mautic Login Page
        When I type User Name on Login Page
        And I type Password on Login Page
        And I click Login Button
        Then I should be on "Dashboard" Page

    @add_new_company
    Scenario: Add new Company
        When I visit "Companies" page
        Then I should be on "Companies" Page
        When I click Add New Company Button
        And I type Company Name as "CompanyAddedByCypress"
        And I type Company Email as "CompanyEmail@test.com"
        And I type Address Line 1 as "123 test" on Company Page
        And I type Address Line 2 as "test road" on Company Page
        And I type Company City as "Pune"
        And I Type Company Zip Code as "123456"
        And I select Company State as "Maharashtra" on Company Page
        And I select Company Country as "India" on Company Page
        And I type Company Phone number as "1234567890"
        And I type Company Website as "http://www.test.com"
        And I type Company Points as "5"
        And I click Professional section on Company page
        And I type Number of Employees as "5"
        And I type Company Fax as "0987654321"
        And I type Comapny Annual Revenue as "123456"
        And I select Company Industry as "Engineering"
        And I type Company Description as "test company"
        And I click Save and Close Button on Companies Page
        Then I should see Company is Created as "CompanyAddedByCypress"

    @Add_new_stages
    Scenario: Create a New Stages with embedded form
        When I visit "Stages" page
        Then I should be on "Stages" Page
        When I click Add New Button on Stages Page
        And I type Stages Title as "TestStages"
        And I type Weight as "40" on Stages Page
        And I click Save and Close Button on Stages Page
        Then I should see "TestStages" Stages is created

    @Add_new_Contacts
    Scenario Outline: Add new Contacts
        When I visit "Contacts" page
        Then I should be on "Contacts" Page
        When I click Add New Button on Contact Page
        And I type Contact Title as "<Contact_Title>"
        And I type Contact First Name as "<Contact_First_Name>"
        And I type Conact Last Name as "<Contact_Last_Name>"
        And I type Conatct email as "<Conatct_email>"
        And I select Company as "<Company_name>"
        And I type Position as "<Company_Position>"
        And I type Address Line 1 as "<Address_line_1>"
        And I type Address Line 2 as "<Address_line_2>"
        And I type Contact City as "<Contact_City>"
        And I Type Contact Zip Code as "<Contact_Zip_Code>"
        And I select Contact State as "<Contact_State>"
        And I select Contact Country as "<Contact_Country>"
        And I type Attribution as "<Attribution>"
        And I type Attribution as Today
        And I type Contact Mobile number as "<Contact_Mobile>"
        And I type Contact Phone number as "<Contact_Phone>"
        And I type Contact Points as "<Contact_Points>" on Contacts page
        And I type Contact Fax number as "<Contact_Fax>"
        And I select Preferred Locale as "<Preferred_Locale>"
        And I select Preferred Timezone as "<Preferred_Timezone>"
        And I type Date Last Active as Today
        And I type Contact Website as "<Website>"
        And I select Contact Stage as "<Contact_Stage>"
        And I type Contact Tag as "<Tag>"
        And I click Save Button on Contact Page
        And I click Close Button on Contact Page
        Then I should see "<Contact_First_Name>" Contact is Created

        Examples:
            | Contact_Title | Contact_First_Name | Contact_Last_Name | Conatct_email                | Contact_City | Company_name          | Company_Position | Address_line_1 | Address_line_2 | Contact_Zip_Code | Contact_State | Contact_Country | Contact_Mobile | Contact_Phone | Contact_Points | Contact_Fax | Preferred_Locale | Preferred_Timezone | Website      | Contact_Stage | Tag        | Attribution |
            | Mr            | Contact1           | Test1             | Contact1@mailtest.mautic.org | Pune         | CompanyAddedByCypress | Developer        | 123 Test       | test road      | 123456           | Maharashtra   | India           | 1234567890     | 0123456789    | 5              | 1023456789  | Marathi          | Kolkata            | www.test.com | TestStages    | Automation | 123         |
            | Mr            | Contact2           | Test1             | Contact2@mailtest.mautic.org | Pune         | CompanyAddedByCypress | Developer        | 123 Test       | test road      | 123456           | Maharashtra   | India           | 1234567890     | 0123456789    | 5              | 1023456789  | Marathi          | Kolkata            | www.test.com | TestStages    | Automation | 123         |
            | Mr            | Contact3           | Test2             | Contact3@mailtest.mautic.org | Sangli       | CompanyAddedByCypress | Developer        | 123 Test       | test road      | 123456           | Maharashtra   | India           | 1234567890     | 0123456789    | 5              | 1023456789  | Marathi          | Kolkata            | www.test.com | TestStages    | Automation | 123         |



    @create_new_segement_contact
    Scenario Outline: Add new Segments based on contact FilterValue equals
        When I visit "Segments" page
        Then I should be on "Contact Segments" Page
        When I click Add New Button on Contact Segments page
        And I type Segment Name as "<Segment_Name>"
        And I Click on "Filters" tab on Contact Segments page
        And I choose Filter as "<filter>" on Contact Segments page
        And I choose Filter Condition as "<filter_condition>" on Contact Segments page
        And I choose Filter Value as "<filter_value>" on Contact Segments page
        And I click Save and Close Button on Contact Segments page
        When I search Contact Segment as "<Segment_Name>"
        Then I should be see Contact Segment "<Segment_Name>" is created
        Examples:
            | Segment_Name                | filter             | filter_condition      | filter_value           |
            | testaddressline1equals      | Address Line 1     | equals                | 123 Test               |
            | testaddressline2equals      | Address Line 2     | equals                | test road              |
            | testcityequals              | City               | equals                | Pune                   |
            | testcountryequals           | Country            | equals                | India                  |
            | testfaxequals               | Fax                | equals                | 1023456789             |
            | testfirstnameequals         | First Name         | equals                | Contact1               |
            | testlastnameequals          | Last Name          | equals                | Test1                  |
            | testmobileequals            | Mobile             | equals                | 1234567890             |
            | testpointsequals            | Points (+/-)       | equals                | 5                      |
            | testpositionequals          | Position           | equals                | Developer              |
            | testpreferredlocaleequals   | Preferred Locale   | equals                | Marathi                |
            | testpreferredtimezoneequals | Preferred Timezone | equals                | Kolkata                |
            | testprimarycompanyequals    | Primary company    | equals                | CompanyAddedByCypress  |
            | teststageequals             | Stage              | equals                | TestStages             |
            | teststateequals             | State              | equals                | Maharashtra            |
            | testtagsincluding           | Tags               | including             | Automation             |
            | testtitleequals             | Title              | equals                | Mr                     |
            | testwebsiteequals           | Website            | equals                | http://www.test.com    |
            | testzipcodeequals           | Zip Code           | equals                | 123456                 |
            | testattributionquals        | Attribution        | equals                | 123                    |
            | testattributiondatequals    | Attribution Date   | equals                | Today                  |
            | testemaildomainequals       | Email Domain       | equals                | mailtest.mautic.org    |
            | testdateaddedequals         | Date Added         | greater than or equal | Today                  |
            | testdateidentifiedequals    | Date Identified    | greater than or equal | Today                  |
            | testdatelastactiveequals    | Date Last Active   | equals                | Today                  |
            | testsegmentmembershipequals | Segment Membership | including             | testaddressline1equals |



    @create_new_segement_company
    Scenario Outline: Add new Segments based on company FilterValue equals
        When I visit "Segments" page
        Then I should be on "Contact Segments" Page
        When I click Add New Button on Contact Segments page
        And I type Segment Name as "<Segment_Name>"
        And I Click on "Filters" tab on Contact Segments page
        And I choose Filter as "<type>" "<filter>" at "<position>" on Contact Segments page
        And I choose Filter Condition as "<filter_condition>" on Contact Segments page
        And I choose Filter Value as "<filter_value>" on Contact Segments page
        And I click Save and Close Button on Contact Segments page
        When I search Contact Segment as "<Segment_Name>"
        Then I should be see Contact Segment "<Segment_Name>" is created
        Examples:
            | Segment_Name               | filter              | filter_condition | filter_value                 | type            | position |
            | testcompanyaddress1equals  | Address 1           | equals           | 123 test                     | Primary company | 1        |
            | testcompanyaddress2equals  | Address 2           | equals           | test road                    | Primary company | 1        |
            | testannualrevenuequals     | Annual Revenue      | equals           | 123456                       | Primary company | 1        |
            | testcompanycityequal       | City                | equals           | Pune                         | Primary company | 1        |
            | testcompanyemailequals     | Company Email       | equals           | CompanyEmail@test.com        | Primary company | 1        |
            | testcompanynameequal       | Company Name        | equals           | CompanyAddedByCypress        | Primary company | 1        |
            | testcountryequal           | Country             | equals           | India                        | Primary company | 1        |
            | testdescriptionequal       | Description         | equals           | test company                 | Primary company | 1        |
            | testcompanyfaxequal        | Fax                 | equals           | 0987654321                   | Primary company | 1        |
            | testindustryequal          | Industry            | equals           | Engineering                  | Primary company | 1        |
            | testnumberofemployeesequal | Number of Employees | equals           | 5                            | Primary company | 1        |
            | testcompanyphoneequal      | Phone               | equals           | 1234567890                   | Primary company | 1        |
            | testcompanystateequal      | State               | equals           | Maharashtra                  | Primary company | 1        |
            | testwebsiteequal           | Website             | equals           | http://www.test.com          | Primary company | 1        |
            | testcompanyzipcodeeequal   | Zip Code            | equals           | 123456                       | Primary company | 1        |
            | testcontactemaileequal     | Email               | equals           | Contact1@mailtest.mautic.org | Contact         | 2        |




    @verify_segements
    Scenario Outline: Verify that contacts are added to segment
        When I visit "Segments" page
        Then I should be on "Contact Segments" Page
        When I search Contact Segment as "<Segment_Name>"
        Then I should see Segment "<Segment_Name>" has "<number_of_contacts>" contacts added to it
        Examples:
            | Segment_Name                | number_of_contacts |
            | testaddressline1equals      | 3                  |
            | testaddressline2equals      | 3                  |
            | testcityequals              | 2                  |
            | testcountryequals           | 3                  |
            | testcontactemaileequal      | 1                  |
            | testfaxequals               | 3                  |
            | testfirstnameequals         | 1                  |
            | testlastnameequals          | 2                  |
            | testmobileequals            | 3                  |
            | testpointsequals            | 3                  |
            | testpositionequals          | 3                  |
            | testpreferredlocaleequals   | 3                  |
            | testpreferredtimezoneequals | 3                  |
            | testprimarycompanyequals    | 3                  |
            | teststageequals             | 3                  |
            | teststateequals             | 3                  |
            | testtagsincluding           | 3                  |
            | testtitleequals             | 3                  |
            | testwebsiteequals           | 3                  |
            | testzipcodeequals           | 3                  |
            | testattributionquals        | 3                  |
            | testattributiondatequals    | 3                  |
            | testemaildomainequals       | 3                  |
            | testdateaddedequals         | 3                  |
            | testdateidentifiedequals    | 3                  |
            | testdatelastactiveequals    | 3                  |
            | testcompanyaddress1equals   | 3                  |
            | testcompanyaddress2equals   | 3                  |
            | testannualrevenuequals      | 3                  |
            | testcompanycityequal        | 3                  |
            | testcompanyemailequals      | 3                  |
            | testcompanynameequal        | 3                  |
            | testcountryequal            | 3                  |
            | testdescriptionequal        | 3                  |
            | testcompanyfaxequal         | 3                  |
            | testindustryequal           | 3                  |
            | testnumberofemployeesequal  | 3                  |
            | testcompanyphoneequal       | 3                  |
            | testcompanystateequal       | 3                  |
            | testwebsiteequal            | 3                  |
            | testcompanyzipcodeeequal    | 3                  |
            | testsegmentmembershipequals | 3                  |

    @edit_segement
    Scenario Outline: Edit segment and Verify contacts
        When I visit "Segments" page
        Then I should be on "Contact Segments" Page
        When I edit Contact Segment "<Segment_Name>"
        And I Click on "Filters" tab on Contact Segments page
        And I choose Filter Condition as "<filter_condition>" on Contact Segments page
        And I click Save and Close Button on Contact Segments page
        And I click Close Button on Contact Segment Page
        Then I should be see Contact Segment "<Segment_Name>" is created

        Examples:
            | Segment_Name           | filter_condition | number_of_contacts |
            | testaddressline1equals | contains         | 3                  |

    @delete_segement
    Scenario Outline: delete segments
        When I visit "Segments" page
        Then I should be on "Contact Segments" Page
        When I search Contact Segment as "<Segment_Name>"
        And I delete Contact Segments "<Segment_Name>"
        Then I should see "<Segment_Name>" is deleted

        Examples:
            | Segment_Name                |
            | testsegmentmembershipequals |
            | testaddressline1equals      |
            | testaddressline2equals      |
            | testcityequals              |
            | testcountryequals           |
            | testcontactemaileequal      |
            | testfaxequals               |
            | testfirstnameequals         |
            | testlastnameequals          |
            | testmobileequals            |
            | testpointsequals            |
            | testpositionequals          |
            | testpreferredlocaleequals   |
            | testpreferredtimezoneequals |
            | testprimarycompanyequals    |
            | teststageequals             |
            | teststateequals             |
            | testtagsincluding           |
            | testtitleequals             |
            | testwebsiteequals           |
            | testzipcodeequals           |
            | testattributionquals        |
            | testattributiondatequals    |
            | testemaildomainequals       |
            | testdateaddedequals         |
            | testdateidentifiedequals    |
            | testdatelastactiveequals    |
            | testcompanyaddress1equals   |
            | testcompanyaddress2equals   |
            | testannualrevenuequals      |
            | testcompanycityequal        |
            | testcompanyemailequals      |
            | testcompanynameequal        |
            | testcountryequal            |
            | testdescriptionequal        |
            | testcompanyfaxequal         |
            | testindustryequal           |
            | testnumberofemployeesequal  |
            | testcompanyphoneequal       |
            | testcompanystateequal       |
            | testwebsiteequal            |
            | testcompanyzipcodeeequal    |



    @bounced_email_yes_segement
    Scenario: Add new Segments based on bounced email value yes
        When I visit "Contacts" page
        Then I should be on "Contacts" Page
        When I search Contact as "Contact1"
        And I edit the "Contact1" Contact
        And I type Conatct email as "Contact1@@mailtest.mautic.org"
        And I click Save Button on Contact Page
        And I click Close Button on Contact Page
        Then I should see Contact is Updated as "Contact1"

        When I visit "Segments" page
        Then I should be on "Contact Segments" Page
        When I click Add New Button on Contact Segments page
        And I type Segment Name as "Contact1"
        And I Click on "Filters" tab on Contact Segments page
        And I choose Filter as "First Name" on Contact Segments page
        And I choose Filter Condition as "equals" on Contact Segments page
        And I choose Filter Value as "Contact1" on Contact Segments page
        And I click Save and Close Button on Contact Segments page
        When I search Contact Segment as "Contact1"
        Then I should be see Contact Segment "Contact1" is created

        When I visit "Emails" page
        Then I should be on "Emails" Page
        When I click on Add New Email Button
        And I select email type as "Segment"
        And I type email Suject as "TestBounceEmail"
        And I type email Internal name as "TestBounceEmail"
        And I type email Segment Name as "Contact1"
        And I click Save and Close Button on emails Page
        And I click Close Button on email page
        Then I should see "TestBounceEmail" email is created
        When I send the "TestBounceEmail" email
        And I click Schedule button email Page
        Then I should see "1" email is Scheduled
        Then I should see No Pending Email is displayed

        When I visit "Contacts" page
        Then I should be on "Contacts" Page
        When I search Contact as "Contact1"
        And I open the "Contact1" Contact
        Then I should see "Email Bounced" label is displayed

        When I visit "Segments" page
        Then I should be on "Contact Segments" Page
        When I click Add New Button on Contact Segments page
        And I type Segment Name as "BounceEmail"
        And I Click on "Filters" tab on Contact Segments page
        And I choose Filter as "Bounced - Email" on Contact Segments page
        And I choose Filter Condition as "equals" on Contact Segments page
        And I choose Filter Value as "Yes" on Contact Segments page
        And I click Save and Close Button on Contact Segments page
        When I search Contact Segment as "BounceEmail"
        Then I should be see Contact Segment "BounceEmail" is created
        When I visit "Segments" page
        Then I should be on "Contact Segments" Page
        When I search Contact Segment as "BounceEmail"
        Then I should see Segment "BounceEmail" has "1" contacts added to it


        When I search Contact Segment as "BounceEmail"
        And I delete Contact Segments "BounceEmail"
        Then I should see "BounceEmail" is deleted
        When I search Contact Segment as "Contact1"
        And I delete Contact Segments "Contact1"
        Then I should see "Contact1" is deleted

        When I visit "Emails" page
        Then I should be on "Emails" Page
        When I search email as "TestBounceEmail"
        And I delete the "TestBounceEmail" email
        Then I should see email "TestBounceEmail" is deleted

        When I visit "Contacts" page
        Then I should be on "Contacts" Page
        When I search Contact as "Contact1"
        And I edit the "Contact1" Contact
        And I type Conatct email as "Contact1@mailtest.mautic.org"
        And I click Save Button on Contact Page
        And I click Close Button on Contact Page
        Then I should see Contact is Updated as "Contact1"

        When I visit "Contacts" page
        Then I should be on "Contacts" Page
        When I search Contact as "Contact1"
        And I open the "Contact1" Contact
        And I click Email Bounced
        Then I should see Contact is removed from Do not contact

    @contact_modified_date_greater_than_or_equal
    Scenario: Add new Segments based on modified_date_greater_than_or_equal
        When I visit "Contacts" page
        Then I should be on "Contacts" Page
        When I search Contact as "Contact1"
        And I edit the "Contact1" Contact
        And I type Conatct email as "Contact12@mailtest.mautic.org"
        And I click Save Button on Contact Page
        And I click Close Button on Contact Page
        Then I should see Contact is Updated as "Contact1"

        When I visit "Segments" page
        Then I should be on "Contact Segments" Page
        When I click Add New Button on Contact Segments page
        And I type Segment Name as "testmodifieddategreaterthanorequal"
        And I Click on "Filters" tab on Contact Segments page
        And I choose Filter as "Modified Date" on Contact Segments page
        And I choose Filter Condition as "greater than or equal" on Contact Segments page
        And I choose Filter Value as "Today" on Contact Segments page
        And I click Save and Close Button on Contact Segments page
        When I search Contact Segment as "testmodifieddategreaterthanorequal"
        Then I should be see Contact Segment "testmodifieddategreaterthanorequal" is created

        When I visit "Segments" page
        Then I should be on "Contact Segments" Page
        When I search Contact Segment as "testmodifieddategreaterthanorequal"
        Then I should see Segment "testmodifieddategreaterthanorequal" has "3" contacts added to it


    @change_contact_stage
    Scenario: Create a campaign with action change contact's stage from the selected segment
        When I visit "Campaigns" page
        Then I should be on "Campaigns" Page
        When I click Add New Button on Campaign page
        When I type Campaign title as "changeContactStage_Campaign_With_Segment"
        And I click on Launch Campaign builder
        When I select "Contact segments" as campaign source
        When I Select "test" as contact source and click on add
        When I click on campaign event list
        And I click on "Action" tab of campaign
        When I select action as "stage" from actions list
        And I add event name "Change Contact's stage to Stage 1" and add stage "Stage 1"
        And I apply changes to builder and close the builder
        Then I publish the campaign and save it

        When I visit "Segments" page
        Then I should be on "Contact Segments" Page
        When I click Add New Button on Contact Segments page
        And I type Segment Name as "PartofCampaign"
        And I Click on "Filters" tab on Contact Segments page
        And I choose Filter as "Campaign Membership" on Contact Segments page
        And I choose Filter Condition as "including" on Contact Segments page
        And I choose Filter Value as "changeContactStage_Campaign_With_Segment" on Contact Segments page
        And I click Save and Close Button on Contact Segments page
        When I search Contact Segment as "PartofCampaign"
        Then I should be see Contact Segment "PartofCampaign" is created
        When I visit "Segments" page
        Then I should be on "Contact Segments" Page
        When I search Contact Segment as "PartofCampaign"
        Then I should see Segment "PartofCampaign" has "1" contacts added to it

        When I visit "Campaigns" page
        Then I should be on "Campaigns" Page
        When I search for campaign "changeContactStage_Campaign_With_Segment"
        When I delete campaign "changeContactStage_Campaign_With_Segment"
        Then I should see campaign "changeContactStage_Campaign_With_Segment" is deleted



    @delete_stages
    Scenario: search and delete newly added stage
        When I visit "Stages" page
        Then I should be on "Stages" Page
        When I search Stages as "TestStages"
        And I delete the "TestStages" Stages
        Then I should see Stages "TestStages" is deleted

    @delete_company
    Scenario: Search and Delete Company
        When I visit "Companies" page
        Then I should be on "Companies" Page
        When I search Company as "CompanyAddedByCypress"
        And I delete the "CompanyAddedByCypress" Company
        Then I should see Company "CompanyAddedByCypress" is deleted

    @delete_contacts
    Scenario Outline:Search and Delete Contact
        When I visit "Contacts" page
        Then I should be on "Contacts" Page
        When I search Contact as "<Contact_First_Name>"
        And I delete the "<Contact_First_Name>" Contact
        Then I should see Contact "<Contact_First_Name>" is deleted
        Examples:
            | Contact_First_Name |
            | Contact1           |
            | Contact2           |
            | Contact3           |
