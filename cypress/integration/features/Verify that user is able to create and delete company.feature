@regression @mat @comapny
Feature: Verify that user is able to create and delete asset
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

    @add_new_company
    Scenario: Add new Company
        When I visit "Companies" page
        Then I should be on "Companies" Page
        When I click Add New Company Button
        And I type Company Name as "CompanyAddedByCypress"
        And I click Save and Close Button on Companies Page
        Then I should see Company is Created as "CompanyAddedByCypress"

    @edit_company
    Scenario: Edit newly added Company
        When I visit "Companies" page
        Then I should be on "Companies" Page
        When I search Company as "CompanyAddedByCypress"
        And I edit the "CompanyAddedByCypress" Company
        And  I type Company City as "Pune"
        And I Type Company Zip Code as "412308"
        And I click Save and Close Button on Companies Page
        Then I should see Company is Updated as "CompanyAddedByCypress"

    @delete_company
    Scenario: Search and Delete Company
        When I visit "Companies" page
        Then I should be on "Companies" Page
        When I search Company as "CompanyAddedByCypress"
        And I delete the "CompanyAddedByCypress" Company
        Then I should see Company "CompanyAddedByCypress" is deleted