@regression @mat @dynamiccontent
Feature: Verify that user is able to create and edit Dynamic Content
    Background: Login to Application and Create contact / segment / email
        Given I am on Mautic Login Page
        When I type User Name on Login Page
        And I type Password on Login Page
        And I click Login Button
        Then I should be on "Dashboard" Page

    @add_new_dynamiccontent
    Scenario: Add new Dynamic content
        When I visit "Dynamic Content" page
        Then I should be on "Dynamic Content" Page
        When I click Add New Button on Dynamic Content Page
        And I type Dynamic Content Internal Name as "DynamicContent1"
        And I type Content as "Test content"
        And I click Save And Close Button on Dynamic Content Page
        And I click Close Button on Dynamic Content page
        Then I should see "DynamicContent1" Dynamic Content is created

    @edit_email
    Scenario: Edit newly added email
        When I visit "Dynamic Content" page
        Then I should be on "Dynamic Content" Page
        When I search Dynamic Content as "DynamicContent1"
        And I edit the Dynamic Content "DynamicContent1"
        And I type Content as "Test content updated"
        And I click Save And Close Button on Dynamic Content Page
        And I click Close Button on Dynamic Content page
        Then I should see "DynamicContent1" Dynamic Content is created
    @delete_dynamiccontent
    Scenario: Search and delete newly email catagory
        When I visit "Dynamic Content" page
        Then I should be on "Dynamic Content" Page
        When I delete Email Dynamic Content "DynamicContent1"
        Then I should see Email Dynamic Content "DynamicContent1" is deleted