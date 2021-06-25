@regression @mat @stages
Feature: Verify that user is able to create and delete stages
    Background: Login to Application and Create contact / segment / email
        Given I am on Mautic Login Page
        When I type User Name on Login Page
        And I type Password on Login Page
        And I click Login Button
        Then I should be on "Dashboard" Page

    @Add_new_stages
    Scenario: Create a New Stages with embedded form
        When I visit "Stages" page
        Then I should be on "Stages" Page
        When I click Add New Button on Stages Page
        And I type Stages Title as "TestStages"
        And I type Weight as "40" on Stages Page
        And I click Save and Close Button on Stages Page
        Then I should see "TestStages" Stages is created

    @edit_stages
    Scenario: Edit newly added Stage
        When I visit "Stages" page
        Then I should be on "Stages" Page
        When I search Stages as "TestStages"
        And I edit the "TestStages" Stages
        And I type Weight as "50" on Stages Page
        And I click Save and Close Button on Stages Page
        Then I should see "TestStages" Stages is created

    @delete_stages
    Scenario: search and delete newly added stage
        When I visit "Stages" page
        Then I should be on "Stages" Page
        When I search Stages as "TestStages"
        And I delete the "TestStages" Stages
        Then I should see Stages "TestStages" is deleted