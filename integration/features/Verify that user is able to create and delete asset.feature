@regression @mat @assets
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

    @local_Asset_Add
    Scenario: Add new local asset
        When I visit "Asset" page
        Then I should be on "Assets" Page
        When I click Add New Button on Asset page
        When I type Asset title as "Local Asset"
        And I Upload File "Test.png"
        And I click Save and Close Button on Asset page
        Then I should see Asset file is uploaded
        When I click Close Button on Asset page
        Then I should be on "Assets" Page

    @local_Asset_Edit
    Scenario: Edit existing local asset
        When I visit "Local Asset" page
        Then I should be on "Assets" Page
        When I click Edit button for "Local Asset"
        When I update Asset title as "Local Asset updated"
        And I Upload File "Test.png"
        And I click Save and Close Button on Asset page
        Then I should see Asset file is uploaded
        When I click Close Button on Asset page
        Then I should be on "Assets" Page

    @local_Asset_Delete
    Scenario: Delete existing local asset
        When I visit "Local Asset" page
        Then I should be on "Assets" Page
        When I Delete Asset "Local Asset updated"
        Then I should see Asset "Local Asset updated" is deleted

    @remote_Asset_Add
    Scenario: Add new remote asset
        When I visit "Asset" page
        Then I should be on "Assets" Page
        When I click Add New Button on Asset page
        And I select Storage Location as "Remote"
        When I type Asset title as "Remote Asset"
        And I type Remote Asset Location
        And I click Save and Close Button on Asset page
        Then I should see Asset file is uploaded
        When I click Close Button on Asset page
        Then I should be on "Assets" Page

    @remote_Asset_Edit
    Scenario: Edit existing remote asset
        When I visit "Remote Asset" page
        Then I should be on "Assets" Page
        When I click Edit button for "Remote Asset"
        And I select Storage Location as "Remote"
        When I update Asset title as "Remote Asset updated"
        And I type Remote Asset Location
        And I click Save and Close Button on Asset page
        Then I should see Asset file is uploaded
        When I click Close Button on Asset page
        Then I should be on "Assets" Page

    @remote_Asset_Delete
    Scenario: Delete existing remote asset
        When I visit "Remote Asset" page
        Then I should be on "Assets" Page
        When I Delete Asset "Remote Asset updated"
        Then I should see Asset "Remote Asset updated" is deleted

