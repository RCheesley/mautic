@regression @mat @customfields
Feature: Verify that user is able to create and verify the created custom fields
    Background: Login to Application and Create contact/segment/email
        Given I am on Mautic Login Page
        When I type User Name on Login Page
        And I type Password on Login Page
        And I click Login Button
        Then I should be on "Dashboard" Page


    @add_custom_field_company
    Scenario: add new custom field for Company
        When I visit "Custom Fields" page
        Then I should be on "Custom Fields" Page
        When I click Add New Button on Custom Fields Page
        And I type Custom Field Label as "Custom field for Company"
        And I select Custom Field Object as "Company"
        And I select Custom Field Data type as "Boolean"
        And I click Save And Close Button on Custom Field Page
        Then I should see "Custom field for Company" is Created on Custom Field Page

    @add_custom_field_contact
    Scenario: add new custom field for Contact
        When I visit "Custom Fields" page
        Then I should be on "Custom Fields" Page
        When I click Add New Button on Custom Fields Page
        And I type Custom Field Label as "Custom field for Contact"
        And I select Custom Field Object as "Contact"
        And I select Custom Field Data type as "Boolean"
        And I click Save And Close Button on Custom Field Page
        Then I should see "Custom field for Contact" is Created on Custom Field Page

    @create_company_custome_field
    Scenario: Verify that company is getting created with custom field
        When I visit "Companies" page
        Then I should be on "Companies" Page
        When I click Add New Company Button
        And I type Company Name as "CompanyAddedByCypress"
        Then I should see CustomeField "Custom field for Company" is displayed
        When I select "Custom field for Company" value as "Yes"
        And I click Save and Close Button on Companies Page
        Then I should see Company is Created as "CompanyAddedByCypress"

    @Delete_company_custome_field
    Scenario: Search and Delete campany with custom field
        When I visit "Companies" page
        Then I should be on "Companies" Page
        When I search Company as "CompanyAddedByCypress"
        And I delete the "CompanyAddedByCypress" Company
        Then I should see Company "CompanyAddedByCypress" is deleted
        When I visit "Custom Fields" page
        Then I should be on "Custom Fields" Page
        And I delete the "Custom field for Company" Custom Field
        Then I should see Custom Field "Custom field for Company" is deleted

    @create_contact_custome_field
    Scenario: Verify that created custom field is available in contact creation
        When I visit "Contacts" page
        Then I should be on "Contacts" Page
        When I click Add New Button on Contact Page
        Then I should see CustomeField "Custom field for Contact" is displayed on Contact Page


    @Delete_contact_custome_field
    Scenario: Delete the created custom field for Contact
        When I visit "Custom Fields" page
        Then I should be on "Custom Fields" Page
        And I delete the "Custom field for Contact" Custom Field
        Then I should see Custom Field "Custom field for Contact" is deleted



