
import { When, Then } from "cypress-cucumber-preprocessor/steps";
import { mauticRolesPage } from "../pageActions/mauticRolesPage";

When(/^I click Add New Button on Roles page$/, () => {
    mauticRolesPage.clickAddNewButton();
});


When(/^I type Roles Name as "([^"]*)"$/, (text) => {
    mauticRolesPage.typeRoleNameAs(text);
});

When(/^I click on "([^"]*)" tab on Roles Page$/, (text) => {
    mauticRolesPage.clickTab(text);
});

When(/^I Give Permission as "([^"]*)" for "([^"]*)" on "([^"]*)" section$/, (text1, text2, text3) => {
    mauticRolesPage.givePermission(text1, text2, text3);
});

When(/^I click Save and Close Button on Roles Page$/, () => {
    mauticRolesPage.clickSaveAndCloseButton();
});

Then(/^I should see "([^"]*)" Role is Created on Roles Page$/, (text) => {
    return mauticRolesPage.isRoleCreated(text);
});

When(/^I search Role as "([^"]*)"$/, (text) => {
    mauticRolesPage.searchRole(text);
});

When(/^I delete the "([^"]*)" Role Page$/, (text) => {
    mauticRolesPage.deleteRole(text);
});

Then(/^I should see Role "([^"]*)" is deleted$/, (text) => {
    return mauticRolesPage.isRoleDeleted(text);
});



