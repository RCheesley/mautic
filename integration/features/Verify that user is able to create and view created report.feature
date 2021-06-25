@regression @mat @report
Feature: Verify that user is able to create and view created report
    Background: Login to Application and Create contact / segment / email
        Given I am on Mautic Login Page
        When I type User Name on Login Page
        And I type Password on Login Page
        And I click Login Button
        Then I should be on "Dashboard" Page

    @Add_new_report
    Scenario: Create a new report
        When I visit "Reports" page
        Then I should be on "Reports" Page
        When I click Add New Button on Reports Page
        And I type Report name as "testReport" on Report page
        And I select Data Source as "Contacts" on Report Page
        And I click on "Data" tab on Report page
        And I select Column value as "First Name"
        And I select Column value as "City"
        And I select Column value as "Contact ID"
        And I click Save and Close Button on Reports Page
        And I click Close Button on Reports Page
        Then I should see "testReport" Reports is created

    @edit_report
    Scenario: Edit newly added report
        When I visit "Reports" page
        Then I should be on "Reports" Page
        When I edit Report "testReport" on Reports Page
        And I click on "Data" tab on Report page
        And I select Column value as "Date Last Active"
        And I click Save and Close Button on Reports Page
        And I click Close Button on Reports Page
        Then I should see "testReport" Reports is created

    @delete_report
    Scenario: Search and delete newly report
        When I visit "Reports" page
        Then I should be on "Reports" Page
        When I delete Report "testReport" on Reports Page
        Then I should see "testReport" is deleted on Reports Page



