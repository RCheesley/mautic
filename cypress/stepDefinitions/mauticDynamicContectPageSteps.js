
import { When, Then } from "cypress-cucumber-preprocessor/steps";
import { mauticDynamicContectPage } from "../pageActions/mauticDynamicContectPage";

When(/^I click Add New Button on Dynamic Content Page$/, () => {
    mauticDynamicContectPage.clickAddNewButton();
});

When(/^I type Dynamic Content Internal Name as "([^"]*)"$/, (text) => {
    mauticDynamicContectPage.typeDynamicContentInternalName(text);
});

When(/^I type Content as "([^"]*)"$/, (text) => {
    mauticDynamicContectPage.typeContentAs(text);
});

When(/^I click Save And Close Button on Dynamic Content Page$/, () => {
    mauticDynamicContectPage.clickSaveAndCloseButton();
});

When(/^I click Close Button on Dynamic Content page$/, () => {
    mauticDynamicContectPage.clickCloseButton();
});

Then(/^I should see "([^"]*)" Dynamic Content is created$/, (text) => {
    return mauticDynamicContectPage.isDynamicContentCreated(text);
});

When(/^I search Dynamic Content as "([^"]*)"$/, (text) => {
    mauticDynamicContectPage.searchDynamicContect(text);
});

When(/^I edit the Dynamic Content "([^"]*)"$/, (text) => {
    mauticDynamicContectPage.editDynamicContect(text);
});


When(/^I delete Email Dynamic Content "([^"]*)"$/, (text) => {
    mauticDynamicContectPage.deleteDynamicContent(text);
});

Then(/^I should see Email Dynamic Content "([^"]*)" is deleted$/, (text) => {
    mauticDynamicContectPage.isDynamicContentDeleted(text);
});


