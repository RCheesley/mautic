@regression @mat @customobjects
Feature: Verify that user is able to create custom obejcts and link it to contact
    Background: Login to Application and Create contact/segment/email
        Given I am on Mautic Login Page
        When I type User Name on Login Page
        And I type Password on Login Page
        And I click Login Button
        Then I should be on "Dashboard" Page


    @add_custom_object
    Scenario: Create a new custom object
        When I visit "Custom Objects" page
        Then I should be on "Custom Objects" Page
        When I click Add New Button on Custom Objects Page
        And I type Custom Objects Name Singular as "Car"
        And I type Custom Objects Name Plural as "Cars"
        And I click "Fields" tab on Custom Objects Page
        And I select Add a new field as "Multiselect"
        And I type Label as "Model"
        And I click "Properties" tab on Custom Objects Page
        And I click Add a value Button
        And I type Option "1" Label as "BMW"
        And I type Option "1" Value as "BMW"
        And I click Add a value Button
        And I type Option "2" Label as "Audi"
        And I type Option "2" Value as "Audi"
        And I click Add a value Button
        And I type Option "3" Label as "Honda"
        And I type Option "3" Value as "Honda"
        And I click Save And Close Button on Custom Objects Pop up
        Then I should see "Model" is Created on Custom Objects Page
        When I select Add a new field as "Number"
        And I type Label as "Car Number"
        And I click Save And Close Button on Custom Objects Pop up
        Then I should see "Car Number" is Created on Custom Objects Page
        When I click Save And Close Button on Custom Objects Page
        Then I should see "Cars" Custom Objects is Created

    @edit_custom_object
    Scenario: Edit newly added custom object
        When I visit "Custom Objects" page
        Then I should be on "Custom Objects" Page
        When I edit Custom Object "Cars" On Custom Object Page
        And I click "Fields" tab on Custom Objects Page
        And I edit Field Option "Model"
        And I click "Properties" tab on Custom Objects Page
        And I click Add a value Button
        And I type Option "4" Label as "Porsche"
        And I type Option "4" Value as "Porsche"
        And I click Save And Close Button on Custom Objects Pop up
        When I click Save And Close Button on Custom Objects Page
        Then I should see "Cars" Custom Objects is Created

    @add_instance
    Scenario: Add instance to newly added custom object
        When I click "Custom Objects" option on Dashboard Page
        And I click "Cars" option on Dashboard Page
        Then I should be on "Cars" Page
        When I click Add New Button on Cars page
        And I type Car Name as "X1"
        And I "Car Number" as "1234"
        And I select "Model" as "BMW"
        And I click Save And Close Button on Cars Page
        Then I should see "X1" is created on Cars Page

    @link_custom_object
    Scenario: Link newly added custom object to contact
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
        When I search Contact as "ContactAddedCypress"
        And I edit the "ContactAddedCypress" Contact
        And I click on "Cars" tab on Contact Page
        And I click Link Existing Button
        When I Link "X1" as item
        Then I should see "X1" is linked to Contact

    @delete_custom_object
    Scenario: Search and delete newly added custom object
        When I visit "Custom Objects" page
        Then I should be on "Custom Objects" Page
        And I delete the "Cars" Custom Object
        Then I should see Custom Object "Cars" is deleted
