
import { Cutils } from "../CommonUtils/Cutils";
import { mauticContactsPageElements } from "../pageElements/mauticContactsPageElements";
import { mauticGlobalPage } from "./mauticGlobalPage";
import { mauticContactsPage } from "cypress/pageActions/mauticContactsPage";
import { Cutils } from "cypress/CommonUtils/Cutils";
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

    static isContactCreatedOld() {
        return Cutils.IsVisible(mauticContactsPageElements.alert)
    }

    static clickAddNewButton() {
        Cutils.IsVisible(mauticContactsPageElements.addNewButton)
        Cutils.click(mauticContactsPageElements.addNewButton)
    }

    static typeTitleAs(text) {
        Cutils.IsVisible(mauticContactsPageElements.title)
        Cutils.typeText(mauticContactsPageElements.title, text)
    }

    static typeContactFirstNameaAs(text) {
        Cutils.typeText(mauticContactsPageElements.firstName, text)
    }
    static typeContactLastNameaAs(text) {
        Cutils.typeText(mauticContactsPageElements.lastName, text)
    }
    static typeContactEmailAs(text) {
        Cutils.typeText(mauticContactsPageElements.leadEmail, text)
    }
    static clickSaveButton() {
        Cutils.click(mauticContactsPageElements.SaveButton)
    }
    static clickCloseButton() {
        Cutils.IsVisible(mauticContactsPageElements.closeButton)
        Cutils.click(mauticContactsPageElements.closeButton)
    }
    static isContactCreated(text) {
        Cutils.IsVisible('//div[contains(@class,alert-growl-container)]//*[text()=' + "\'" + text + "\'" + ']')
        return Cutils.IsVisible('//tr[1]//a//div[contains(text(), ' + "\'" + text + "\'" + ')]')
    }
    static searchContact(text) {
        Cutils.IsVisible(mauticContactsPageElements.filter)
        Cutils.typeText(mauticContactsPageElements.filter, text)
    }

    static editContact(text) {
        Cutils.IsVisible('//tr[1]//a//div[contains(text(), ' + "\'" + text + "\'" + ')]')
        Cutils.click('//tr[1]//a//div[contains(text(), ' + "\'" + text + "\'" + ')]')
        Cutils.IsVisible(mauticContactsPageElements.EditButton)
        Cutils.click(mauticContactsPageElements.EditButton)
    }

    static typeContactCity(text) {
        Cutils.typeText(mauticContactsPageElements.contactCity, text)
    }
    static typeContactZipCity(text) {
        Cutils.typeText(mauticContactsPageElements.contactZipCode, text)
    }
    static deleteContact(text) {
        Cutils.click('//tr[1]//a//div[contains(text(), ' + "\'" + text + "\'" + ')]/preceding::td//div//input[@type="checkbox"]')
        Cutils.click('//tr[1]//a//div[contains(text(), ' + "\'" + text + "\'" + ')]/preceding::td//div[@class="input-group-btn"]')
        Cutils.click('//tr[1]//span[text()="Delete"]')
        Cutils.IsVisible('//button[text()="Delete"]')
        Cutils.click('//button[text()="Delete"]')
    }
    static isContactDeleted(text) {
        return Cutils.IsNotExist('//tr[1]//a//div[contains(text(), ' + "\'" + text + "\'" + ')]')
    }
    static clickOption(text) {
        if (text == 'Import History') {
            Cutils.waitForTime("10000")
        }
        Cutils.IsVisible(mauticContactsPageElements.moreOptionMenu)
        Cutils.click(mauticContactsPageElements.moreOptionMenu)
        Cutils.click('//span[text()=' + "\'" + text + "\'" + ']')
    }
    static uploadFile(text) {
        Cutils.uploadFileNormal(mauticContactsPageElements.uploadFile, text)
    }
    static clickUploadButton() {
        Cutils.click(mauticContactsPageElements.uploadButton)
    }
    static clickImportButton() {
        Cutils.click(mauticContactsPageElements.importButton)
    }
    static selectMappingOptionForCompanyAs(text) {
        Cutils.selectValueFromDropDownNonSelect(mauticContactsPageElements.companyMapping, text)
    }
    static isStatusDisplayed(fileName, status) {
        return Cutils.IsVisible('//a[normalize-space(text())=' + "\'" + fileName + "\'" + ']/preceding::td//span[normalize-space(text())=' + "\'" + status + "\'" + ']')
    }

}
