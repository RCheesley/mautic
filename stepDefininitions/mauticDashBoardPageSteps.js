
import { When, Then } from "cypress-cucumber-preprocessor/steps";
import { mauticDashBoardPage } from "../pageActions/mauticDashBoardPage";

When(/^I select "([^"]*)" option in settings$/, (text) => {
    mauticDashBoardPage.selectOptionFromSettings(text);
});


When(/^I click "([^"]*)" option on Dashboard Page$/, (text) => {
    mauticDashBoardPage.clickOptionOnLeftNavigationBar(text);
});

When(/^I Log out of the Application$/, () => {
    mauticDashBoardPage.logOutApplication();
});


Then(/^I should see "([^"]*)" option is present on DashBoard Page$/, (text) => {
    return mauticDashBoardPage.isOptionPresent(text);
});






