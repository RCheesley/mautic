@regression @mat @landingpage
Feature: Verify that user is able to create and delete landing pages
    Background: Login to Application and Create contact / segment / email
        Given I am on Mautic Login Page
        When I type User Name on Login Page
        And I type Password on Login Page
        And I click Login Button
        Then I should be on "Dashboard" Page

    @Add_new_landing_page
    Scenario: Create a New Landing Page with embedded form
        When I visit "Landing Pages" page
        Then I should be on "Landing Pages" Page
        When I click Add New Button on Landing Page
        And I type Landing Page Title as "TestLandingPage"
        And I click Save and Close Button on Landing page
        And I click Close Button on Landing page
        Then I should see "TestLandingPage" Landing Page is created

    @edit_landing_page
    Scenario: Edit newly added landing page
        When I visit "Landing Pages" page
        Then I should be on "Landing Pages" Page
        When I search Landing Page as "TestLandingPage"
        And I edit the "TestLandingPage" Landing Page
        And I select theme as "Fresh Out Of The Box"
        And I click Save and Close Button on Landing page
        And I click Close Button on Landing page
        Then I should see "TestLandingPage" Landing Page is created

    @delete_landing_page
    Scenario: Search and delete newly added Landing Page
        When I visit "Landing Pages" page
        Then I should be on "Landing Pages" Page
        When I search Landing Page as "TestLandingPage"
        And I delete the "TestLandingPage" Landing Page
        Then I should see Landing Page "TestLandingPage" is deleted