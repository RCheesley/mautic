
import { When, Then } from "cypress-cucumber-preprocessor/steps";
import { mauticReportsPage } from "../pageActions/mauticReportsPage";


When(/^I click Add New Button on Reports Page$/, () => {
    mauticReportsPage.clickAddNewButton();
});

When(/^I type Report name as "([^"]*)" on Report page$/, (text) => {
    mauticReportsPage.typeReportNameAs(text);
});

When(/^I select Data Source as "([^"]*)" on Report Page$/, (text) => {
    mauticReportsPage.selectDataSourceAs(text);
});

When(/^I click on "([^"]*)" tab on Report page$/, (text) => {
    mauticReportsPage.clickTab(text);
});

When(/^I select Column value as "([^"]*)"$/, (text) => {
    mauticReportsPage.selectColumnValue(text);
});

When(/^I click Save and Close Button on Reports Page$/, () => {
    mauticReportsPage.clickSaveAndCloseButton();
});

Then(/^I should see "([^"]*)" Reports is created$/, (text) => {
    return mauticReportsPage.isReportCreated(text);
});

When(/^I click Close Button on Reports Page$/, () => {
    mauticReportsPage.clickCloseButton();
});

When(/^I edit Report "([^"]*)" on Reports Page$/, (text) => {
    mauticReportsPage.editReport(text);
});

When(/^I delete Report "([^"]*)" on Reports Page$/, (text) => {
    mauticReportsPage.deleteReport(text);
});

Then(/^I should see "([^"]*)" is deleted on Reports Page$/, (text) => {
    return mauticReportsPage.isReportDeleted(text);
});

