@regression @mat @segments
Feature: Verify that user is able to create segment and test that contacts are getting added as per the selected filter
    Background: Login to Application and Create contact / segment / email
        Given I am on Mautic Login Page
        When I type User Name on Login Page
        And I type Password on Login Page
        And I click Login Button
        Then I should be on "Dashboard" Page

    @Add_new_Contacts
    Scenario Outline: Add new Contacts
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
            | Mr            | Contact3           | Test2             | Contact3@mailtest.mautic.com | Sangli       |



    @create_new_segement
    Scenario Outline: Add new Segments based on Last Name
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
            | Segment_Name | filter    | filter_condition | filter_value |
            | test1        | Last Name | equals           | Test1        |
            | test2        | Last Name | equals           | Test2        |

    @verify_segements
    Scenario Outline: Verify that contacts are added to segment
        When I visit "Segments" page
        Then I should be on "Contact Segments" Page
        Then I should see Segment "<Segment_Name>" has "<number_of_contacts>" contacts added to it
        Examples:
            | Segment_Name | number_of_contacts |
            | test1        | 2                  |
            | test2        | 1                  |

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
            | Segment_Name | filter_condition | number_of_contacts |
            | test1        | contains         | 2                  |
            | test2        | contains         | 1                  |

    @delete_segement
    Scenario Outline: delete segments
        When I visit "Segments" page
        Then I should be on "Contact Segments" Page
        When I search Contact Segment as "<Segment_Name>"
        And I delete Contact Segments "<Segment_Name>"
        Then I should see "<Segment_Name>" is deleted

        Examples:
            | Segment_Name |
            | test1        |
            | test2        |

    @delete_contacts
    Scenario Outline:Search and Delete Contact
        When I visit "Contacts" page
        Then I should be on "Contacts" Page
        When I search Company as "<Contact_First_Name>"
        And I delete the "<Contact_First_Name>" Contact
        Then I should see Contact "<Contact_First_Name>" is deleted
        Examples:
            | Contact_First_Name |
            | Contact1           |
            | Contact2           |
            | Contact3           |
