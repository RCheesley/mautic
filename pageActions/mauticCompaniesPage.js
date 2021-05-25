
import { Cutils } from "../CommonUtils/Cutils";
import { mauticCompaniesPageElements } from "../pageElements/mauticCompaniesPageElements";
import { mauticContactsPageElements } from "cypress/pageElements/mauticContactsPageElements";
import { Cutils } from "cypress/CommonUtils/Cutils";
export class mauticCompaniesPage {
    static clickAddNewButton() {
        Cutils.click(mauticCompaniesPageElements.addNewButton)
    }

    static typeCompanyNameAs(text) {
        Cutils.typeText(mauticCompaniesPageElements.companyName, text)
    }
    static clickSaveAndCloseButton() {
        Cutils.click(mauticCompaniesPageElements.saveAndCloseButton)
    }
    static isCompanyCreated(text) {
        Cutils.IsVisible('//div[contains(@class,alert-growl-container)]//*[text()=' + "\'" + text + "\'" + ']')
        Cutils.IsVisible(mauticCompaniesPageElements.filter)
        Cutils.typeText(mauticCompaniesPageElements.filter, text)
        return Cutils.IsVisible('//tr[1]//a[contains(text(), ' + "\'" + text + "\'" + ')]')
    }

    static searchCompanyByName(text) {
        Cutils.IsVisible(mauticCompaniesPageElements.filter)
        Cutils.typeText(mauticCompaniesPageElements.filter, text)
    }
    static clickEditCompany(text) {
        Cutils.IsVisible('//tr[1]//a[contains(text(), ' + "\'" + text + "\'" + ')]')
        Cutils.click('//tr[1]//a[contains(text(), ' + "\'" + text + "\'" + ')]')
    }
    static typeCompanyCityAs(text) {
        Cutils.typeText(mauticCompaniesPageElements.companyCity, text)
    }
    static typeCompanyZipCodeAs(text) {
        Cutils.typeText(mauticCompaniesPageElements.companyZipCode, text)
    }

    static deleteCompany(text) {
        Cutils.click('//tr[1]//a[contains(text(), ' + "\'" + text + "\'" + ')]/preceding::td//div//input[@type="checkbox"]')
        Cutils.click('//tr[1]//a[contains(text(), ' + "\'" + text + "\'" + ')]/preceding::td//div[@class="input-group-btn"]')
        Cutils.click('//tr[1]//span[text()="Delete"]')
        Cutils.IsVisible('//button[text()="Delete"]')
        Cutils.click('//button[text()="Delete"]')
    }
    static isCompanyDeleted(text) {
        return Cutils.IsNotExist('//tr[1]//a[contains(text(), ' + "\'" + text + "\'" + ')]')
    }
    static isCustomeFiledCreated(text) {
        return Cutils.IsVisible('//*[text()=' + "\'" + text + "\'" + ']')
    }
    static selectValyeFOrCustomFiled(text1, text2) {
        Cutils.click('//*[text()=' + "\'" + text1 + "\'" + ']/following::span[text()=' + "\'" + text2 + "\'" + ']')
    }
}