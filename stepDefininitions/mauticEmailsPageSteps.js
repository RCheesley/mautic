
import { When, Then } from "cypress-cucumber-preprocessor/steps";
import { mauticEmailsPage } from "../pageActions/mauticEmailsPage";
import { mauticAssetPage } from "cypress/pageActions/mauticAssetPage";
var input;
When(/^I add Sample "([^"]*)" email$/, (text) => {
    mauticEmailsPage.CreateEmails(text);
});

Then(/^I should see Tempalate is created$/, () => {
    return mauticEmailsPage.isEmailCreated();
});

When(/^I click on Add New Email Button$/, () => {
    return mauticEmailsPage.clickAddNewButton();
});

When(/^I select email type as "([^"]*)"$/, (text) => {
    input = text;
    mauticEmailsPage.selectEmailType(text);
});

When(/^I type email Suject as "([^"]*)"$/, (text) => {
    mauticEmailsPage.typeEmailSubject(text);
});

When(/^I type email Internal name as "([^"]*)"$/, (text) => {
    mauticEmailsPage.typeEmailInternalName(text);
});

When(/^I type email Segment Name as "([^"]*)"$/, (text) => {
    if (input == "Segment") {
        mauticEmailsPage.typeEmailSegment(text);
    }
});

When(/^I click Save and Close Button on emails Page$/, () => {
    mauticEmailsPage.clickSaveAndCloseButton()
});


When(/^I click Close Button on email page$/, () => {
    mauticEmailsPage.clickCloseButton()
});


Then(/^I should see "([^"]*)" email is created$/, (text) => {
    return mauticEmailsPage.isEmailCreated(text);
});


When(/^I search email as "([^"]*)"$/, (text) => {
    mauticEmailsPage.searchEmailAs(text);
});

When(/^I edit the "([^"]*)" email$/, (text) => {
    mauticEmailsPage.editEmail(text);
});


When(/^I delete the "([^"]*)" email$/, (text) => {
    mauticEmailsPage.deleteEmail(text);
});

Then(/^I should see email "([^"]*)" is deleted$/, (text) => {
    return mauticEmailsPage.isEmailDeleted(text);
});






