
import { When, Then } from "cypress-cucumber-preprocessor/steps";
import { mauticLandingPage } from "../pageActions/mauticLandingPage";


When(/^I click Add New Button on Landing Page$/, () => {
    mauticLandingPage.clickAddNewButton();
});

When(/^I type Landing Page Title as "([^"]*)"$/, (text) => {
    mauticLandingPage.typeLandingPageTitleAs(text);
});

When(/^I click Save and Close Button on Landing page$/, () => {
    mauticLandingPage.clickSaveAndCloseButton();
});

Then(/^I should see "([^"]*)" Landing Page is created$/, (text) => {
    return mauticLandingPage.isLandingPageCreated(text);
});

When(/^I click Close Button on Landing page$/, () => {
    mauticLandingPage.clickCloseButton();
});

When(/^I search Landing Page as "([^"]*)"$/, (text) => {
    mauticLandingPage.searchLandingpage(text);
});

When(/^I edit the "([^"]*)" Landing Page$/, (text) => {
    mauticLandingPage.editLandingPage(text);
});

When(/^I select theme as "([^"]*)"$/, (text) => {
    mauticLandingPage.selectTheme(text);
});

When(/^I delete the "([^"]*)" Landing Page$/, (text) => {
    mauticLandingPage.deleteLandingPage(text);
});

Then(/^I should see Landing Page "([^"]*)" is deleted$/, (text) => {
    return mauticLandingPage.isLandingPageDeleted(text);
});



