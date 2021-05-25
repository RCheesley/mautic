
import { When, Then } from "cypress-cucumber-preprocessor/steps";
import { mauticStagesPage } from "../pageActions/mauticStagesPage";

When(/^I click Add New Button on Stages Page$/, () => {
    mauticStagesPage.clickAddNewButton();
});

When(/^I type Stages Title as "([^"]*)"$/, (text) => {
    mauticStagesPage.typeStagesTitleAs(text);
});

When(/^I type Weight as "([^"]*)" on Stages Page$/, (text) => {
    mauticStagesPage.typeStagesWeightAs(text);
});

When(/^I click Save and Close Button on Stages Page$/, () => {
    mauticStagesPage.clickSaveAndCloseButton();
});

Then(/^I should see "([^"]*)" Stages is created$/, (text) => {
    return mauticStagesPage.isStagesCreated(text);
});

When(/^I search Stages as "([^"]*)"$/, (text) => {
    mauticStagesPage.searchStages(text);
});

When(/^I edit the "([^"]*)" Stages$/, (text) => {
    mauticStagesPage.editStages(text);
});

When(/^I delete the "([^"]*)" Stages$/, (text) => {
    mauticStagesPage.deleteStages(text);
});

Then(/^I should see Stages "([^"]*)" is deleted$/, (text) => {
    return mauticStagesPage.isStagesDeleted(text);
});


