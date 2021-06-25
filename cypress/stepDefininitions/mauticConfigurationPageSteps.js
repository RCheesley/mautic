
import { When, Then } from "cypress-cucumber-preprocessor/steps";
import { mauticConfigurationPage } from "../pageActions/mauticConfigurationPage";

When(/^I select "([^"]*)" option on Configuration Page$/, (text) => {
    mauticConfigurationPage.clickOption(text);
});

When(/^I type Do not contact more than value as "([^"]*)"$/, (text) => {
    mauticConfigurationPage.typeDoNotContactMoreThanValueAs(text);
});

When(/^I select Email Frequency as "([^"]*)"$/, (text) => {
    mauticConfigurationPage.selectEmailFrequencyAs(text);
});

When(/^I click Save And Close Button on Configuration Page$/, () => {
    mauticConfigurationPage.clickSaveAndCloseButton();
});

Then(/^I should see "([^"]*)" is saved Successfully$/, (text) => {
    return mauticConfigurationPage.isAlertDisplayed(text);
});

