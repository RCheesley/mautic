
import { When, Then } from "cypress-cucumber-preprocessor/steps";
import { mauticAPICredentialsPage } from "../pageActions/mauticAPICredentialsPage";
import { when } from "cypress/types/jquery";


When(/^I click Add New Button on API Credentials Page$/, () => {
    mauticAPICredentialsPage.clickAddNewButton();
});

When(/^I select Authorization Protocol As "([^"]*)" on API Credentials Page$/, (text) => {
    mauticAPICredentialsPage.selectAuthorizationProtocolAs(text);
});

When(/^I type Credentials Name as "([^"]*)" on API Credentials Page$/, (text) => {
    mauticAPICredentialsPage.typeCredentialsNameAs(text);
});

When(/^I type Callback URI as "([^"]*)" on API Credentials Page$/, (text) => {
    mauticAPICredentialsPage.typeCallbackURIAs(text);
});

When(/^I click Save And Close Button on API Credentials Page$/, () => {
    mauticAPICredentialsPage.clickSaveAndCloseButton();
});

Then(/^I should see "([^"]*)" are created on API Credentials Page$/, (text) => {
    return mauticAPICredentialsPage.isCredentailsCreated(text);
});

Then(/^I should get HTTP status code "([^"]*)" with response message as "([^"]*)"$/, (text1, text2) => {
    return mauticAPICredentialsPage.isResponse(text1, text2);
});

When(/^I search Credentials "([^"]*)" on API Credentials Page$/, (text) => {
    mauticAPICredentialsPage.searchCredentials(text);
});

When(/^I delete Credentials "([^"]*)" on API Credentials Page$/, (text) => {
    mauticAPICredentialsPage.deleteCredentials(text);
});

Then(/^I should see "([^"]*)" on API Credentials Page$/, (text) => {
    return mauticAPICredentialsPage.areCredentialsDeleted(text);
});

When(/^I select Authentication Type as "([^"]*)" on API Credentials Page$/, (text) => {
    mauticAPICredentialsPage.selectAuthenticationTypeAs(text);
});

When(/^I get Credentials$/, () => {
    mauticAPICredentialsPage.getCredentials();
});


When(/^I make Auth API Call$/, () => {
    mauticAPICredentialsPage.makeAuthAPICall();
});

Then(/^I should see bearer token is generated$/, () => {
    return mauticAPICredentialsPage.isBearerTokenGenerated();
});

When(/^I make Auth API Call with Invalid Credentials$/, () => {
    mauticAPICredentialsPage.makeAuthAPICallWithInvalidCredentials();
});

Then(/^should error response$/, () => {
    return mauticAPICredentialsPage.isError();
});

When(/^I make API call to create contact$/, () => {
    mauticAPICredentialsPage.makeAPIcallToCreateContact();
});

Then(/^I should see Country field is empty$/, () => {
    return mauticAPICredentialsPage.isCountryFieldEmpty();
});

When(/^I update contact Country field with value "([^"]*)"$/, (text) => {
    mauticAPICredentialsPage.updateContactCountryFieldWithValue(text);
});

Then(/^I should see Country field value is updated with value "([^"]*)"$/, (text) => {
    return mauticAPICredentialsPage.isUpdatedWithValue(text);
});

When(/^I make API call to create contact with First Name as "([^"]*)" Last name as "([^"]*)" emailID as "([^"]*)"$/, (text1, text2, text3) => {
    mauticAPICredentialsPage.makeAPIcallToCreateContactWithDetails(text1, text2, text3);
});

Then(/^I should see Contact is Created using API$/, () => {
    return mauticAPICredentialsPage.isContactCreatedusingAPI();
});

When(/^I delete Last Created contact using API$/, () => {
    mauticAPICredentialsPage.deleteContact();
});

Then(/^I should see Contact is deleted using API$/, () => {
    return mauticAPICredentialsPage.isContactDeleted();
});





