
import { When, Then } from "cypress-cucumber-preprocessor/steps";
import { mauticPointTriggersPage } from "../pageActions/mauticPointTriggersPage";


When(/^I click Add New Button on Point Triggers Page$/, () => {
    mauticPointTriggersPage.clickAddNewButton();
});

When(/^I type Point Triggers Name as "([^"]*)"$/, (text) => {
    mauticPointTriggersPage.typePointTriggersNameAs(text);
});

When(/^I type Minimum number of points as "([^"]*)"$/, (text) => {
    mauticPointTriggersPage.typeMinimumNumberOfPointsAs(text);
});

When(/^I select Published option as "([^"]*)" on Point Triggers Page$/, (text) => {
    mauticPointTriggersPage.selectPublishedOptionAs(text);
});

When(/^I click "([^"]*)" tab on Point Triggers Page$/, (text) => {
    mauticPointTriggersPage.clickTab(text);
});

When(/^I click Add an event Button on Point Triggers Page$/, () => {
    mauticPointTriggersPage.clickAddAnEventButton();
});

When(/^I select "([^"]*)" as an Event on Point Triggers Page$/, (text) => {
    mauticPointTriggersPage.selectEvent(text);
});

When(/^I select Send an email as "([^"]*)" on Point Triggers Page$/, (text) => {
    mauticPointTriggersPage.selectSendEmail(text);
});

When(/^I click Add button on Point Triggers Page Pop up$/, () => {
    mauticPointTriggersPage.clickAddButtonOnPointTriggersPagePopUp();
});

When(/^I click Save And Close Button on Point Triggers Page$/, () => {
    mauticPointTriggersPage.clickSaveAndCloseButton();
});

Then(/^I should see "([^"]*)" Point Trigger is Created$/, (text) => {
    return mauticPointTriggersPage.isPointTirggerCreated(text);
});

When(/^I edit Trigget "([^"]*)" on Point Triggers Page$/, (text) => {
    mauticPointTriggersPage.editTrigger(text);
});


Then(/^I should see Email "([^"]*)" is triggered for contact "([^"]*)"$/, (text1, text2) => {
    return mauticPointTriggersPage.isEmailTriggered(text1, text2);
});


When(/^I delete the read email for contact "([^"]*)"$/, (text) => {
    mauticPointTriggersPage.deleteEmailFromMailBox(text);
});

When(/^I search Point Trigger as "([^"]*)"$/, (text) => {
    mauticPointTriggersPage.searchPointTrigger(text);
});

When(/^I delete the "([^"]*)" Point Trigger$/, (text) => {
    mauticPointTriggersPage.deletePointTrigger(text);
});

Then(/^I should see Point Trigger "([^"]*)" is deleted$/, (text) => {
    return mauticPointTriggersPage.isPointTriggerDeleted(text);
});





