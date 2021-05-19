
import { mauticLoginPage } from "../pageActions/mauticLoginPage";
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";


Given(/^I am on Mautic Login Page$/, () => {
    mauticLoginPage.openLoginpage("/");
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



