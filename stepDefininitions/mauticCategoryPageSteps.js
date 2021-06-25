
import { When, Then } from "cypress-cucumber-preprocessor/steps";
import { mauticCategoryPage } from "../pageActions/mauticCategoryPage";

When(/^I click Add New Button on Categories Page$/, () => {
    mauticCategoryPage.clickAddNewButton()
});

When(/^I select Categories type as "([^"]*)"$/, (text) => {
    mauticCategoryPage.selectCategoryTypeAs(text)
});

When(/^I type Categories title as "([^"]*)"$/, (text) => {
    mauticCategoryPage.typeCategoryTitleAs(text)
});

When(/^I click Save And Close Button on Category Page$/, () => {
    mauticCategoryPage.ClickSaveAndCloseButton()
});

Then(/^I should see "([^"]*)" is created$/, (text) => {
    return mauticCategoryPage.isCateogryCreated(text)
});


When(/^I delete Email Category "([^"]*)"$/, (text) => {
    mauticCategoryPage.deleteEmailCategory(text)
});

Then(/^I should see Email Category "([^"]*)" is deleted$/, (text) => {
    return mauticCategoryPage.isEmailCategoryDeleted(text)
});
