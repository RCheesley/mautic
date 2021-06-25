@regression @mat @credentials_standard
Feature: Verify that user is able to create credentials and update the contact fields using them
    Background: Login to Application and Create contact / segment / email
        Given I am on Mautic Login Page
        When I type User Name on Login Page
        And I type Password on Login Page
        And I click Login Button
        Then I should be on "Dashboard" Page

    @create_credentials
    Scenario: Verify that user is not authorised for this API action
        When I select "API Credentials" option in settings
        Then I should be on "API Credentials" Page
        When I click Add New Button on API Credentials Page
        And I select Authorization Protocol As "OAuth 2" on API Credentials Page
        And I type Credentials Name as "testCredentials" on API Credentials Page
        And I type Callback URI as "https://on.cypress.io" on API Credentials Page
        And I click Save And Close Button on API Credentials Page
        Then I should see "testCredentials" are created on API Credentials Page

    @create_bearer_token
    Scenario: Verify that bearer token gets generated when User makes Auth Request
        When I select "API Credentials" option in settings
        Then I should be on "API Credentials" Page
        When I select Authentication Type as "OAuth 2" on API Credentials Page
        And I search Credentials "testCredentials" on API Credentials Page
        And I get Credentials
        When I make Auth API Call
        Then I should see bearer token is generated


    @auth_error
    Scenario: Verify that Auth Error is received when user uses invalid credentials
        When I select "API Credentials" option in settings
        Then I should be on "API Credentials" Page
        When I make Auth API Call with Invalid Credentials
        Then should error response


    @create_delete_contact_api
    Scenario: Verify Create and Delete Contact using API
        When I select "API Credentials" option in settings
        Then I should be on "API Credentials" Page
        When I make API call to create contact
        Then I should see Country field is empty
        When I update contact Country field with value "India"
        Then I should see Country field value is updated with value "India"
        When I make API call to create contact with First Name as "Test2" Last name as "Contact2" emailID as "test2contact2@mailtest.mautic.org"
        Then I should see Contact is Created using API
        When I delete Last Created contact using API
        Then I should see Contact is deleted using API


    @delete_user
    Scenario: Search and Delete Credentials
        When I select "API Credentials" option in settings
        Then I should be on "API Credentials" Page
        When I select Authentication Type as "OAuth 2" on API Credentials Page
        And I search Credentials "testCredentials" on API Credentials Page
        And I delete Credentials "testCredentials" on API Credentials Page
        Then I should see "testCredentials" on API Credentials Page

