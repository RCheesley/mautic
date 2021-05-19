
import { Cutils } from "../CommonUtils/Cutils";
import { mauticGlobalPage } from "./mauticGlobalPage";
import { mauticRolesPage } from "./mauticRolesPage";
export class mauticContactsPage {

    static createContact() {
        mauticGlobalPage.verifyPageTitle('Contacts')
        mauticGlobalPage.waitForPageLoad('Contacts');
        Cutils.click('//a[contains(@href,"new")]//span[text()="New"]')
        mauticGlobalPage.verifyPageTitle('New Contact')
        mauticGlobalPage.waitForPageLoad('New Contact');
        Cutils.typeText('//input[@id="lead_title"]', 'Mr')
        Cutils.typeText('//input[@id="lead_firstname"]', 'testContact')
        Cutils.typeText('//input[@id="lead_lastname"]', 'Data')
        Cutils.typeText('//input[@id="lead_email"]', 'testContact@mailtest.mautic.com')
        Cutils.click('//button[@id="lead_buttons_save_toolbar"]')
        mauticGlobalPage.waitForPageLoad('testContact Data');
        Cutils.click('//span[text()="Close"]')
        // contact.closeButton.click({ force: true });
        // contact.waitForContactCreation();
    }

    static isContactCreated() {
        return Cutils.IsVisible('//div[contains(@class,alert)]')
    }
}
