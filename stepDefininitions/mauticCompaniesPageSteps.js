
import { When, Then } from "cypress-cucumber-preprocessor/steps";
import { mauticCompaniesPage } from "../pageActions/mauticCompaniesPage";
import { mauticContactsPageElements } from "cypress/pageElements/mauticContactsPageElements";

When(/^I click Add New Company Button$/, () => {
    mauticCompaniesPage.clickAddNewButton()
});

When(/^I type Company Name as "([^"]*)"$/, (text) => {
    mauticCompaniesPage.typeCompanyNameAs(text)
});

When(/^I click Save and Close Button on Companies Page$/, () => {
    mauticCompaniesPage.clickSaveAndCloseButton()
});

Then(/^I should see Company is Created$/, () => {

});

Then(/^I should see Company is Created as "([^"]*)"$/, (text) => {
    return mauticCompaniesPage.isCompanyCreated(text);
});


When(/^I search Company as "([^"]*)"$/, (text) => {
    mauticCompaniesPage.searchCompanyByName(text)
});

When(/^I edit the "([^"]*)" Company$/, (text) => {
    mauticCompaniesPage.clickEditCompany(text)
});

When(/^I type Company City as "([^"]*)"$/, (text) => {
    mauticCompaniesPage.typeCompanyCityAs(text)
});

When(/^I Type Company Zip Code as "([^"]*)"$/, (text) => {
    mauticCompaniesPage.typeCompanyZipCodeAs(text)
});


Then(/^I should see Company is Updated as "([^"]*)"$/, (text) => {
    return mauticCompaniesPage.isCompanyCreated(text);
});


When(/^I delete the "([^"]*)" Company$/, (text) => {
    mauticCompaniesPage.deleteCompany(text)
});

Then(/^I should see Company "([^"]*)" is deleted$/, (text) => {
    return mauticCompaniesPage.isCompanyDeleted(text)
});




