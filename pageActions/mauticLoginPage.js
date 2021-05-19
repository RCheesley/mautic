import { Cutils } from "../CommonUtils/Cutils";
import { LoginPageElements } from "../pageElements/LoginPageElements";
import { LoginPageElements } from "cypress/pageElements/LoginPageElements";


export class mauticLoginPage {
    static openLoginpage() {
        Cutils.openURL('/');
    }

    static GoToURL(text) {
        Cutils.navigateTo(text);
    }

    static enterUserName() {
        Cutils.typeText(LoginPageElements.username_xpath, Cypress.env("userName"));
    }
    static enterpassword() {
        Cutils.typeText(LoginPageElements.password_xpath, Cypress.env("password"));
    }

    static clickLoginButton() {
        Cutils.click(LoginPageElements.login_Button_xpath);
    }

    static isOnPage(text) {
        return Cutils.isOnPage(text);
    }
}