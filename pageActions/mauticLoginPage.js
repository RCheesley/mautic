import { Cutils } from "../CommonUtils/Cutils";
import { mauticLoginPageElements } from "../pageElements/mauticLoginPageElements";



export class mauticLoginPage {
    static openLoginpage() {
        Cutils.openURL('/');
    }

    static GoToURL(text) {
        Cutils.navigateTo(text);
    }

    static enterUserName() {
        Cutils.typeText(mauticLoginPageElements.username_xpath, Cypress.env("userName"));
    }
    static enterpassword() {
        Cutils.typeText(mauticLoginPageElements.password_xpath, Cypress.env("password"));
    }

    static clickLoginButton() {
        Cutils.click(mauticLoginPageElements.login_Button_xpath);
    }


}