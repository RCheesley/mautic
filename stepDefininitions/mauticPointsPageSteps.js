
import { When, Then } from "cypress-cucumber-preprocessor/steps";
import { mauticPointsPage } from "../pageActions/mauticPointsPage";


When(/^I click Add New Button on Points Page$/, () => {
    mauticPointsPage.clickAddNewButton();
});

When(/^I type Action Name as "([^"]*)"$/, (text) => {
    mauticPointsPage.typeActionNameAs(text);
});

When(/^I type Change points as "([^"]*)"$/, (text) => {
    mauticPointsPage.typeChangePointsAs(text);
});

When(/^I select When a contact option as "([^"]*)"$/, (text) => {
    mauticPointsPage.selectWhenAContactOptionAs(text);
});

When(/^I type Limit to these selected emails as "([^"]*)"$/, (text) => {
    mauticPointsPage.selectLimitToTheseSelectedEmailsAs(text);
});

When(/^I click Save and Close Button on Points Page$/, () => {
    mauticPointsPage.clickSaveandCloseButton();
});

Then(/^I should see "([^"]*)" Action is created$/, (text) => {
    return mauticPointsPage.isActionCreated(text);
});

When(/^I search Actions as "([^"]*)"$/, (text) => {
    mauticPointsPage.searchActions(text);
});

When(/^I edit the "([^"]*)" Actions$/, (text) => {
    mauticPointsPage.editActions(text);
});

When(/^I delete the "([^"]*)" Actions$/, (text) => {
    mauticPointsPage.deleteActions(text)
});

Then(/^I should see Actions "([^"]*)" is deleted$/, (text) => {
    return mauticPointsPage.isActionDeleted(text)
});


