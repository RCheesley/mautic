
import { When, Then } from "cypress-cucumber-preprocessor/steps";
import { mauticCustomObjectsPage } from "../pageActions/mauticCustomObjectsPage";


When(/^I click Add New Button on Custom Objects Page$/, () => {
    mauticCustomObjectsPage.clickAddNewButton();
});


When(/^I click "([^"]*)" tab on Custom Objects Page$/, (text) => {

    mauticCustomObjectsPage.clickTab(text);
});

When(/^I select Add a new field as "([^"]*)"$/, (text) => {

    mauticCustomObjectsPage.selectAddANewFieldAs(text);
});

When(/^I type Label as "([^"]*)"$/, (text) => {
    mauticCustomObjectsPage.typeLabelAs(text);
});


When(/^I type Custom Objects Name Singular as "([^"]*)"$/, (text) => {
    mauticCustomObjectsPage.typeCustomObjectsNameSingularAs(text);
});

When(/^I type Custom Objects Name Plural as "([^"]*)"$/, (text) => {
    mauticCustomObjectsPage.typeCustomObjectsNamePluralAs(text);
});

When(/^I click Add a value Button$/, () => {
    mauticCustomObjectsPage.clickAddAValueButton();
});

When(/^I type Option "([^"]*)" Label as "([^"]*)"$/, (text1, text2) => {

    mauticCustomObjectsPage.typeOptionLabelAs(text1, text2);
});

When(/^I type Option "([^"]*)" Value as "([^"]*)"$/, (text1, text2) => {

    mauticCustomObjectsPage.typeOptionValueAs(text1, text2);
});

When(/^I click Save And Close Button on Custom Objects Pop up$/, () => {
    mauticCustomObjectsPage.clickSaveAndCloseButtonOnCustomObjectsPopUp();
});

Then(/^I should see "([^"]*)" is Created on Custom Objects Page$/, (text) => {

    mauticCustomObjectsPage.isCustomObjectCreated(text);
});

When(/^I click Save And Close Button on Custom Objects Page$/, () => {
    mauticCustomObjectsPage.clickSaveAndCloseButton();
});

Then(/^I should see "([^"]*)" Custom Objects is Created$/, (text) => {
    mauticCustomObjectsPage.isCustomObjectCreatedOnCustomObjectsPage(text);
});

When(/^I edit Custom Object "([^"]*)" On Custom Object Page$/, (text) => {
    mauticCustomObjectsPage.editCustomObject(text);
});

When(/^I edit Field Option "([^"]*)"$/, (text) => {
    mauticCustomObjectsPage.editFieldOption(text);
});

When(/^I click Add New Button on Cars page$/, () => {
    mauticCustomObjectsPage.clickAddNewButtonOnCarsPage();
});

When(/^I type Car Name as "([^"]*)"$/, (text) => {
    mauticCustomObjectsPage.typeCarNameAs(text);
});


When(/^I "([^"]*)" as "([^"]*)"$/, (text1, text2) => {
    mauticCustomObjectsPage.typeCustoFieldValue(text1, text2);
});

When(/^I select "([^"]*)" as "([^"]*)"$/, (text1, text2) => {
    mauticCustomObjectsPage.selectCustomFieldValue(text1, text2)
});

When(/^I click Save And Close Button on Cars Page$/, () => {
    mauticCustomObjectsPage.clickSaveAndCloseButtonOnCarsPage();
});

Then(/^I should see "([^"]*)" is created on Cars Page$/, (text) => {
    mauticCustomObjectsPage.isItemCreated(text);
});

When(/^I delete the "([^"]*)" Custom Object$/, (text) => {
    mauticCustomObjectsPage.deleteCustomObject(text);
});

Then(/^I should see Custom Object "([^"]*)" is deleted$/, (text) => {
    return mauticCustomObjectsPage.isCustomObjectDeleted(text);
});



