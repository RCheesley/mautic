@regression @mat @forms
Feature: Verify that user is able to create and edit forms
    Background: Login to Application and Create contact / segment / email
        Given I am on Mautic Login Page
        When I type User Name on Login Page
        And I type Password on Login Page
        And I click Login Button
        Then I should be on "Dashboard" Page


    @add_new_form
    Scenario: Create a new form
        When I visit "Forms" page
        Then I should be on "Forms" Page
        When I click Add New Button on Forms page
        And I select Form type as "standalone" form
        #possbile values "standalone", "campaign"
        And I type Form Name as "testForm" on Forms page
        And I click "Fields" tab on Forms page
        And I select Field "1" type as "Text"
        And I type Field "1" label as "Title"
        And I click "Mapped Field" tab on Forms page
        And I select Field "1" Matching object as "Contact"
        And I select Field "1" Matching field as "Title"
        And I click Add button on Form Page Pop up
        Then I should see Form Field "1" is Created as "Title"
        And I select Field "2" type as "Email"
        And I type Field "2" label as "Email"
        And I click "Mapped Field" tab on Forms page
        And I select Field "2" Matching object as "Contact"
        And I select Field "2" Matching field as "Email"
        And I click Add button on Form Page Pop up
        Then I should see Form Field "1" is Created as "Email"
        When I click Save And Close Button on Forms Page
        And I click Close Button on Forms page
        Then  I should see "testForm" is Created on Forms Page

    @edit_form
    Scenario: Edit newly added form
        When I visit "Forms" page
        Then I should be on "Forms" Page
        When I edit the "testForm" Form
        And I click "Fields" tab on Forms page
        And I select Field "3" type as "Text"
        And I type Field "3" label as "City"
        And I click "Mapped Field" tab on Forms page
        And I select Field "3" Matching object as "Contact"
        And I select Field "3" Matching field as "City"
        And I click Add button on Form Page Pop up
        Then I should see Form Field "3" is Created as "City"
        When I click Save And Close Button on Forms Page
        And I click Close Button on Forms page
        Then  I should see "testForm" is Created on Forms Page

    @delete_form
    Scenario: Search and delete newly added form
        When I visit "Forms" page
        Then I should be on "Forms" Page
        When I delete form "testForm" on Forms page
        Then I should see "testForm" is deleted on Forms page
