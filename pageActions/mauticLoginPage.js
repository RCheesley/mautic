import { Cutils } from "../CommonUtils/Cutils";
import { login } from "/Users/rohit.sakhawalkar/Documents/GitHub/mc-cs-cypress/cypress/support/commands.js";

export class mauticLoginPage {
    static openLoginpage() {
        Cutils.openURL('/');
    }

    static GoToURL(text) {
        Cutils.NavigateTo(text);
    }

    static enterUserName() {
        Cutils.typeText('//input[@id="username"]', Cypress.env("userName"));
    }
    static enterpassword() {
        Cutils.typeText('//input[@id="password"]', Cypress.env("password"));
    }

    static clickLoginButton() {
        Cutils.click('//button[text()="login"]')
    }

    static isOnPage(text) {
        return Cutils.isOnPage(text);
    }
}