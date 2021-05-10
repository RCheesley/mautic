
import { When, Then } from "cypress-cucumber-preprocessor/steps";
import { mauticRolesPage } from "../pageActions/mauticRolesPage";

When(/^I click New Button On Roles Page$/, () => {
    mauticRolesPage.clickNewButton();
});

