@regression @mat @category
Feature: Verify that user is able to create and delete catagories
    Background: Login to Application and Create contact/segment/email
        Given I am on Mautic Login Page
        When I type User Name on Login Page
        And I type Password on Login Page
        And I click Login Button
        Then I should be on "Dashboard" Page
    # When I visit "Contacts" page
    # Then I should be on "Contacts" Page
    # When I add Contact
    # Then I should see Contact is Created
    # When I visit "Segments" page
    # Then I should be on "Contact Segments" Page
    # When I add Sample Segment based on "First Name"
    # Then I should see Segment is created
    # When I visit "Emails" page
    # Then I should be on "Emails" Page
    # When I add Sample "Template" email
    # Then I should see Tempalate is created

    @add_email_category
    Scenario: Add new email catagory
        When I select "Categories" option in settings
        Then I should be on "Categories" Page
        When I click Add New Button on Categories Page
        And I select Categories type as "Email"
        And I type Categories title as "EmailCategory1"
        And I click Save And Close Button on Category Page
        Then I should see "EmailCategory1" is created

    @delete_email_category
    Scenario: Search and delete newly email catagory
        When I select "Categories" option in settings
        Then I should be on "Categories" Page
        When I delete Email Category "EmailCategory1"
        Then I should see Email Category "EmailCategory1" is deleted


