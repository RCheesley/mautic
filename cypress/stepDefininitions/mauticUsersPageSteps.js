
import { When, Then } from "cypress-cucumber-preprocessor/steps";
import { mauticUsersPage } from "../pageActions/mauticUsersPage";

When(/^I click Add New Button on Users Page$/, () => {
    mauticUsersPage.clickAddNewButton();
});

When(/^I type User First Name as "([^"]*)" on Users Page$/, (text) => {
    mauticUsersPage.typeUserFirstNameAs(text);

});

When(/^I type User Last Name as "([^"]*)" on Users Page$/, (text) => {
    mauticUsersPage.typeUserLastNameAs(text);

});

When(/^I select User Role as "([^"]*)" on Users Page$/, (text) => {
    mauticUsersPage.selectUserRoleAs(text);

});

When(/^I type User Name as "([^"]*)" on Users Page$/, (text) => {
    mauticUsersPage.typeUserNameAs(text);

});

When(/^I type User email as "([^"]*)" on Users Page$/, (text) => {
    mauticUsersPage.typeUserEmailAs(text);

});

When(/^I type User Password as "([^"]*)" on Users Page$/, (text) => {
    mauticUsersPage.typeUserPasswordAs(text);

});

When(/^I confirm User Password as "([^"]*)" on Users Page$/, (text) => {
    mauticUsersPage.confirmUserPasswordAs(text);

});

When(/^I click Save And Close Button on Users Page$/, () => {
    mauticUsersPage.clickSaveAndCloseButton();
});

Then(/^I shoudl see User "([^"]*)" is created on Users Page$/, (text) => {
    mauticUsersPage.isUserCreated(text)
});


When(/^I search user "([^"]*)" on Users Page$/, (text) => {
    mauticUsersPage.searchUserAs(text)
});

When(/^I delete user "([^"]*)" on Users Page$/, (text) => {
    mauticUsersPage.deleteUser(text)
});

Then(/^I should see "([^"]*)" is deleted on Users Page$/, (text) => {
    return mauticUsersPage.isUserDeleted(text)
});

