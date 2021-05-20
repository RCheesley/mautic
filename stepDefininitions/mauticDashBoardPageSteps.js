
import { When, Then } from "cypress-cucumber-preprocessor/steps";
import { mauticDashBoardPage } from "../pageActions/mauticDashBoardPage";

When(/^I select "([^"]*)" option in settings$/, (text) => {
    mauticDashBoardPage.selectOptionFromSettings(text);
});


