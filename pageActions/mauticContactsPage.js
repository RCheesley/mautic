
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
        Cutils.scrollToView(mauticContactsPageElements.SaveButton)
        Cutils.click(mauticContactsPageElements.SaveButton)
    }
    static clickCloseButton() {
        Cutils.IsVisible(mauticContactsPageElements.closeButton)
        Cutils.click(mauticContactsPageElements.closeButton)
    }
    static isContactCreated(text) {
        Cutils.IsVisible('//div[contains(@class,alert-growl-container)]//*[contains(text(), ' + "\'" + text + "\'" + ')]')
        return Cutils.IsVisible('//tr//a//div[contains(text(), ' + "\'" + text + "\'" + ')]')
    }
    static searchContact(text) {
        Cutils.IsVisible(mauticContactsPageElements.filter)
        Cutils.typeText(mauticContactsPageElements.filter, text + '{enter}')
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

    static isCustomeFiledCreated(text) {
        return Cutils.IsVisible('//*[text()=' + "\'" + text + "\'" + ']')
    }

    static clickTab(text) {
        Cutils.IsVisible('//ul[contains(@class,"nav-tabs")][not(@role="tablist")]//a[contains(.,' + "\'" + text + "\'" + ')]')
        Cutils.click('//ul[contains(@class,"nav-tabs")][not(@role="tablist")]//a[contains(.,' + "\'" + text + "\'" + ')]')
    }
    static clickLinkExistingButton(text) {
        Cutils.click('//*[normalize-space(text())="Link existing"]')
    }
    static linkItem(text) {
        Cutils.IsVisible('//tr[1]//a[contains(text(), ' + "\'" + text + "\'" + ')]/preceding::td//div//input[@type="checkbox"]')
        Cutils.click('//tr[1]//a[contains(text(), ' + "\'" + text + "\'" + ')]/preceding::td//div//input[@type="checkbox"]')
        Cutils.scrollToView('//tr[1]//a[contains(text(), ' + "\'" + text + "\'" + ')]/preceding::td//div[@class="input-group-btn"]')
        Cutils.click('//tr[1]//a[contains(text(), ' + "\'" + text + "\'" + ')]/preceding::td//div[@class="input-group-btn"]')
        Cutils.scrollToView('//tr[1]//span[text()="Link"]')
        Cutils.click('//tr[1]//span[text()="Link"]')
    }

    static isItemLinked(text) {
        return Cutils.IsVisible('//div[contains(@class,alert-growl-container)]')
    }
    static typeContactPointAs(text) {
        Cutils.typeText(mauticContactsPageElements.ContactPoint, text)
    }
    static selectCompanyAs(text) {
        Cutils.selectValueFromDropDownNonSelectWithEnterKey(mauticContactsPageElements.Company, text)
        Cutils.waitForTime(2000)
    }
    static typePositionAs(text) {
        Cutils.typeText(mauticContactsPageElements.Position, text)
    }
    static typeAddressLine1As(text) {
        Cutils.typeText(mauticContactsPageElements.AddressLine1, text)
    }
    static typeAddressLine2As(text) {
        Cutils.typeText(mauticContactsPageElements.AddressLine2, text)
    }
    static selectContactStateAs(text) {
        Cutils.selectValueFromDropDownNonSelect(mauticContactsPageElements.ContactState, text)
    }
    static selectContactCountryAs(text) {
        Cutils.selectValueFromDropDownNonSelect(mauticContactsPageElements.ContactCountry, text)
    }
    static typeContactMobileNumberAs(text) {
        Cutils.typeText(mauticContactsPageElements.ContactMobileNumber, text)
    }
    static typeContactPhoneNumberAs(text) {
        Cutils.typeText(mauticContactsPageElements.ContactPhoneNumber, text)
    }
    static typeContactFaxNumberAs(text) {
        Cutils.typeText(mauticContactsPageElements.ContactFaxNumber, text)
    }
    static selectPreferredLocaleAs(text) {
        Cutils.selectValueFromDropDownNonSelect(mauticContactsPageElements.PreferredLocale, text)
    }
    static selectPreferredTimezoneAs(text) {
        Cutils.selectValueFromDropDownNonSelect(mauticContactsPageElements.PreferredTimeZone, text)
    }
    static typeContactWebsiteAs(text) {
        Cutils.typeText(mauticContactsPageElements.ContactWebsite, text)
    }
    static selectContactStageAs(text) {
        Cutils.selectValueFromDropDownNonSelect(mauticContactsPageElements.ContactStage, text)
    }
    static typeContactTagAs(text) {
        Cutils.typeText(mauticContactsPageElements.ContactTag, text + '{enter}')
    }
    static openContact(text) {
        Cutils.IsVisible('//tr[1]//a//div[contains(text(), ' + "\'" + text + "\'" + ')]')
        Cutils.click('//tr[1]//a//div[contains(text(), ' + "\'" + text + "\'" + ')]')
    }
    static isLabelDisplayed(text) {
        return Cutils.IsVisible('//span[normalize-space(text())=' + "\'" + text + "\'" + ']')
    }
    static clickEmailBounced() {
        Cutils.waitForTime(2000)
        Cutils.doubleClick(mauticContactsPageElements.EmailBounced)
        Cutils.waitForTime(2000)
        Cutils.pageReload()
    }
    static isContactRemovedFromDoNotContact() {
        Cutils.IsNotExist(mauticContactsPageElements.EmailBounced)
    }
    static typeAttributionAs(text) {
        Cutils.typeText(mauticContactsPageElements.Attribution, text)
    }
    static typeAttributionDateAsToday() {
        Cutils.typeText(mauticContactsPageElements.AttributionDate, Cutils.formatDate(new Date()))
    }
    static typeDateLastActiveAsToday() {
        Cutils.typeText(mauticContactsPageElements.DateLastActive, Cutils.formatDate(new Date()))
    }
}
