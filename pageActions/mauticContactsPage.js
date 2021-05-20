
import { Cutils } from "../CommonUtils/Cutils";
import { mauticContactsPageElements } from "../pageElements/mauticContactsPageElements";
import { mauticGlobalPage } from "./mauticGlobalPage";
import { mauticContactsPage } from "cypress/pageActions/mauticContactsPage";
export class mauticContactsPage {

    static createContact() {
        mauticGlobalPage.verifyPageTitle('Contacts')
        mauticGlobalPage.waitForPageLoad('Contacts');
        Cutils.click(mauticContactsPageElements.addNewButton)
        mauticGlobalPage.verifyPageTitle('New Contact')
        mauticGlobalPage.waitForPageLoad('New Contact');
        Cutils.typeText(mauticContactsPageElements.title, 'Mr')
        Cutils.typeText(mauticContactsPageElements.firstName, 'testContact')
        Cutils.typeText(mauticContactsPageElements.lastName, 'Data')
        Cutils.typeText(mauticContactsPageElements.leadEmail, 'testContact@mailtest.mautic.com')
        Cutils.click(mauticContactsPageElements.SaveButton)
        mauticGlobalPage.waitForPageLoad('testContact Data')
        Cutils.click(mauticContactsPageElements.closeButton)

    }

    static isContactCreated() {
        return Cutils.IsVisible(mauticContactsPageElements.alert)
    }
}
