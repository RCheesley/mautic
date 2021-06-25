
import { When, Then } from "cypress-cucumber-preprocessor/steps";
import { mauticFormsPage } from "../pageActions/mauticFormsPage";


When(/^I click Add New Button on Forms page$/, () => {
    mauticFormsPage.clickAddNewButton();
});

When(/^I select Form type as "([^"]*)" form$/, (text) => {
    mauticFormsPage.selectFormTypeAs(text);
});

When(/^I type Form Name as "([^"]*)" on Forms page$/, (text) => {
    mauticFormsPage.typeFormNameAs(text);
});

When(/^I click "([^"]*)" tab on Forms page$/, (text) => {
    mauticFormsPage.clickTab(text);
});

When(/^I select Field "([^"]*)" type as "([^"]*)"$/, (text1, text2) => {
    mauticFormsPage.selectFieldType(text1, text2);
});

When(/^I type Field "([^"]*)" label as "([^"]*)"$/, (text1, text2) => {
    mauticFormsPage.typeFieldLabelAs(text1, text2);
});

When(/^I select Field "([^"]*)" Matching object as "([^"]*)"$/, (text1, text2) => {
    mauticFormsPage.selectFieldMathchingObjectAs(text1, text2);
});

When(/^I select Field "([^"]*)" Matching field as "([^"]*)"$/, (text1, text2) => {
    mauticFormsPage.selectFieldMathchingFieldAs(text1, text2);
});

When(/^I click Add button on Form Page Pop up$/, () => {
    mauticFormsPage.clickAddButtonOnFormPagePopUp();
});

Then(/^I should see Form Field "([^"]*)" is Created as "([^"]*)"$/, (text1, text2) => {
    return mauticFormsPage.isFieldCreated(text1, text2);
});

When(/^I click Save And Close Button on Forms Page$/, () => {
    mauticFormsPage.clickSaveAndCloseButton();
});

When(/^I click Close Button on Forms page$/, () => {
    mauticFormsPage.clickCloseButton();
});

Then(/^I should see "([^"]*)" is Created on Forms Page$/, (text) => {
    return mauticFormsPage.isFormCreated(text);
});


When(/^I edit the "([^"]*)" Form$/, (text) => {
    mauticFormsPage.editForm(text);
});

When(/^I delete form "([^"]*)" on Forms page$/, (text) => {
    mauticFormsPage.deleteForm(text);
});

Then(/^I should see "([^"]*)" is deleted on Forms page$/, (text) => {
    return mauticFormsPage.isFormDeleted(text);
});



