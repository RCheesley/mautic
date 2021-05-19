
import { When, Then } from "cypress-cucumber-preprocessor/steps";
import { mauticGlobalPage } from "../pageActions/mauticGlobalPage";

When(/^I visit "([^"]*)" page$/, (text) => {
    mauticGlobalPage.goToURL(text)
});


Then(/^I should be on "([^"]*)" Page$/, (text) => {
    return mauticGlobalPage.verifyPageTitle(text);
});


