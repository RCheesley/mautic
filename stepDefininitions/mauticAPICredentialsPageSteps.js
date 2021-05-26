
import { When, Then } from "cypress-cucumber-preprocessor/steps";
import { mauticAPICredentialsPage } from "../pageActions/mauticAPICredentialsPage";


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


