
import { When, Then } from "cypress-cucumber-preprocessor/steps";
import { mauticcustomFieldsPage } from "../pageActions/mauticcustomFieldsPage";

When(/^I click Add New Button on Custom Fields Page$/, () => {
    mauticcustomFieldsPage.clickAddNewButton();
});

When(/^I type Custom Field Label as "([^"]*)"$/, (text) => {

    mauticcustomFieldsPage.typeCustomFieldLabelAs(text);
});

When(/^I select Custom Field Object as "([^"]*)"$/, (text) => {

    mauticcustomFieldsPage.selectCustomFieldObjectAs(text);
});

When(/^I select Custom Field Data type as "([^"]*)"$/, (text) => {

    mauticcustomFieldsPage.selectCustomFieldDataTypeAs(text);
});

When(/^I click Save And Close Button on Custom Field Page$/, () => {
    mauticcustomFieldsPage.clickSaveAndCloseButton()
});

Then(/^I should see "([^"]*)" is Created on Custom Field Page$/, (text) => {

    return mauticcustomFieldsPage.isCustomeFiledCreated(text);
});

When(/^I delete the "([^"]*)" Custom Field$/, (text) => {
    mauticcustomFieldsPage.deleteCustomField(text);
});

Then(/^I should see Custom Field "([^"]*)" is deleted$/, (text) => {
    return mauticcustomFieldsPage.isCustomFieldDeleted(text);
});



