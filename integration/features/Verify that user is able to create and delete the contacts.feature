@regression @mat @contacts
Feature: Verify that user is able to create and delete the contacts
    Background: Login to Application and Create contact / segment / email
        Given I am on Mautic Login Page
        When I type User Name on Login Page
        And I type Password on Login Page
        And I click Login Button
        Then I should be on "Dashboard" Page
    #  When I visit "Contacts" page
    #  Then I should be on "Contacts" Page
    #  When I add Contact
    #  Then I should see Contact is Created
    #  When I visit "Segments" page
    #  Then I should be on "Contact Segments" Page
    #  When I add Sample Segment based on "First Name"
    #  Then I should see Segment is created
    #  When I visit "Emails" page
    #  Then I should be on "Emails" Page
    #  When I add Sample "Template" email
    #  Then I should see Tempalate is created

    @Add_new_Contact
    Scenario: Add new Contact
        When I visit "Contacts" page
        Then I should be on "Contacts" Page
        When I click Add New Button on Contact Page
        And I type Contact Title as "Mr"
        And I type Contact First Name as "ContactAddedCypress"
        And I type Conact Last Name as "Tester"
        And I type Conatct email as "Cypress@test.com"
        And I click Save Button on Contact Page
        And I click Close Button on Contact Page
        Then I should see "ContactAddedCypress Tester" Contact is Created

    @Edit_new_Contact
    Scenario: Edit newly added contact
        When I visit "Contacts" page
        Then I should be on "Contacts" Page
        When I search Contact as "ContactAddedCypress"
        And I edit the "ContactAddedCypress" Contact
        And  I type Contact City as "Pune"
        And I Type Contact Zip Code as "412308"
        And I click Save Button on Contact Page
        And I click Close Button on Contact Page
        Then I should see Contact is Updated as "ContactAddedCypress Tester"

    @delete_contact
    Scenario: Search and Delete Contact
        When I visit "Contacts" page
        Then I should be on "Contacts" Page
        When I search Company as "ContactAddedCypress"
        And I delete the "ContactAddedCypress" Contact
        Then I should see Contact "ContactAddedCypress" is deleted

    @import_contact
    Scenario: import new Contacts
        When I visit "Contacts" page
        Then I should be on "Contacts" Page
        When I click On "Import" Contact option
        And I upload "contacts_july-22-2020.csv" contact file
        And I click Upload Button on Contact Page
        And I select mapping option for Company as "Company Name"
        And I click Import Button on Contact Page
        Then I should see "contacts_july-22-2020.csv" file upload status is "Queued"
        When I visit "Contacts" page
        Then I should be on "Contacts" Page
        When I click On "Import History" Contact option
        Then I should see "contacts_july-22-2020.csv" file upload status is "Imported"