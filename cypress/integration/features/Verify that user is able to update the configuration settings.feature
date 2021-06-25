@regression @mat @configurations
Feature: Verify that user is able to update the configuration settings
    Background: Login to Application and Create contact/segment/email
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

    @update_email_settings
    Scenario: Update Email Settings
        When I select "Configuration" option in settings
        Then I should be on "Configuration" Page
        When I select "Email Settings" option on Configuration Page
        And I type Do not contact more than value as "5"
        And I select Email Frequency as "week"
        And I click Save And Close Button on Configuration Page
        Then I should see "Configuration" is saved Successfully
