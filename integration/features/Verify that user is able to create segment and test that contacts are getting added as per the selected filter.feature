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
        And I type Contact Mobile number as "<Contact_Mobile>"
        And I type Contact Phone number as "<Contact_Phone>"
        And I type Contact Points as "<Contact_Points>" on Contacts page
        And I type Contact Fax number as "<Contact_Fax>"
        And I select Preferred Locale as "<Preferred_Locale>"
        And I select Preferred Timezone as "<Preferred_Timezone>"
        And I type Contact Website as "<Website>"
        And I select Contact Stage as "<Contact_Stage>"
        And I type Contact Tag as "<Tag>"
        And I click Save Button on Contact Page
        And I click Close Button on Contact Page
        Then I should see "<Contact_First_Name>" Contact is Created

        Examples:
            | Contact_Title | Contact_First_Name | Contact_Last_Name | Conatct_email                | Contact_City | Company_name          | Company_Position | Address_line_1 | Address_line_2 | Contact_Zip_Code | Contact_State | Contact_Country | Contact_Mobile | Contact_Phone | Contact_Points | Contact_Fax | Preferred_Locale | Preferred_Timezone | Website      | Contact_Stage | Tag        |
            | Mr            | Contact1           | Test1             | Contact1@mailtest.mautic.com | Pune         | CompanyAddedByCypress | Developer        | 123 Test       | test road      | 123456           | Maharashtra   | India           | 1234567890     | 0123456789    | 5              | 1023456789  | Marathi          | Kolkata            | www.test.com | TestStages    | Automation |
            | Mr            | Contact2           | Test1             | Contact2@mailtest.mautic.com | Pune         | CompanyAddedByCypress | Developer        | 123 Test       | test road      | 123456           | Maharashtra   | India           | 1234567890     | 0123456789    | 5              | 1023456789  | Marathi          | Kolkata            | www.test.com | TestStages    | Automation |
            | Mr            | Contact3           | Test2             | Contact3@mailtest.mautic.com | Sangli       | CompanyAddedByCypress | Developer        | 123 Test       | test road      | 123456           | Maharashtra   | India           | 1234567890     | 0123456789    | 5              | 1023456789  | Marathi          | Kolkata            | www.test.com | TestStages    | Automation |



    @create_new_segement
    Scenario Outline: Add new Segments based on FilterValue equals
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
            | Segment_Name                | filter             | filter_condition | filter_value          |
            | testaddressline1equals      | Address Line 1     | equals           | 123 Test              |
            | testaddressline2equals      | Address Line 2     | equals           | test road             |
            | testcityequals              | City               | equals           | Pune                  |
            | testcountryequals           | Country            | equals           | India                 |
            # | test email equals              | Email              | equals           | Contact1@mailtest.mautic.com | #todo
            | testfaxequals               | Fax                | equals           | 1023456789            |
            | testfirstnameequals         | First Name         | equals           | Contact1              |
            | testlastnameequals          | Last Name          | equals           | Test1                 |
            | testmobileequals            | Mobile             | equals           | 1234567890            |
            | testpointsequals            | Points (+/-)       | equals           | 5                     |
            | testpositionequals          | Position           | equals           | Developer             |
            | testpreferredlocaleequals   | Preferred Locale   | equals           | Marathi               |
            | testpreferredtimezoneequals | Preferred Timezone | equals           | Kolkata               |
            | testprimarycompanyequals    | Primary company    | equals           | CompanyAddedByCypress |
            | teststageequals             | Stage              | equals           | TestStages            |
            | teststateequals             | State              | equals           | Maharashtra           |
            # | test Tags equals     | Tags     | equals           | Automation   |#filter not present
            | testtitleequals             | Title              | equals           | Mr                    |
            | testwebsiteequals           | Website            | equals           | http://www.test.com   |
            | testzipcodeequals           | Zip Code           | equals           | 123456                |


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
            # | test email equals              | 1                  |
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
            # | test Tags equals               | 3                  |
            | testtitleequals             | 3                  |
            | testwebsiteequals           | 3                  |
            | testzipcodeequals           | 3                  |


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
            | testaddressline1equals      |
            | testaddressline2equals      |
            | testcityequals              |
            | testcountryequals           |
            # | test email equals           |
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
            # | test Tags equals            |
            | testtitleequals             |
            | testwebsiteequals           |
            | testzipcodeequals           |

# @delete_contacts
# Scenario Outline:Search and Delete Contact
#     When I visit "Contacts" page
#     Then I should be on "Contacts" Page
#     When I search Company as "<Contact_First_Name>"
#     And I delete the "<Contact_First_Name>" Contact
#     Then I should see Contact "<Contact_First_Name>" is deleted
#     Examples:
#         | Contact_First_Name |
#         | Contact1           |
#         | Contact2           |
#         | Contact3           |
