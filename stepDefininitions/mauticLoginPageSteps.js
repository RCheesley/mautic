
import { mauticLoginPage } from "../pageActions/mauticLoginPage";
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";


Given(/^I am on Mautic Login Page$/, () => {
    mauticLoginPage.openLoginpage("s/login");
});

When(/^I type User Name on Login Page$/, () => {
    mauticLoginPage.enterUserName();
});

When(/^I type Password on Login Page$/, () => {
    mauticLoginPage.enterpassword();
});

When(/^I click Login Button$/, () => {
    mauticLoginPage.clickLoginButton();
});

When(/^I click on Roles option$/, () => {
    mauticLoginPage.GoToURL("s/roles");
});

When(/^I type User Name as "([^"]*)" on Login Page$/, (text) => {
    mauticLoginPage.enterUserNameCreated(text);
});

When(/^I type Password as "([^"]*)" on Login Page$/, (text) => {
    mauticLoginPage.enterpasswordCreated(text);
});


When(/^I go to URL "([^"]*)"$/, (text) => {
    mauticLoginPage.GoToURL(text);
});





