
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
    static typeCompanyEmailAs(text) {
        Cutils.typeText(mauticCompaniesPageElements.CompanyEmail, text)
    }
    static typeAddressLine1As(text) {
        Cutils.typeText(mauticCompaniesPageElements.AddressLine1, text)
    }
    static typeAddressLine2As(text) {
        Cutils.typeText(mauticCompaniesPageElements.AddressLine2, text)
    }
    static selectCompanyStateAs(text) {
        Cutils.selectValueFromDropDownNonSelect(mauticCompaniesPageElements.CompanyState, text)
    }
    static selectCompanyCountryAs(text) {
        Cutils.selectValueFromDropDownNonSelect(mauticCompaniesPageElements.CompanyCountry, text)
    }
    static typeCompanyPhoneNumberAs(text) {
        Cutils.typeText(mauticCompaniesPageElements.CompanyPhoneNumber, text)
    }
    static typeCompanyWebsiteAs(text) {
        Cutils.typeText(mauticCompaniesPageElements.CompanyWebsite, text)
    }
    static typeCompanyPointsAs(text) {
        Cutils.typeText(mauticCompaniesPageElements.CompanyPoints, text)
    }
    static clickProfessionalSection() {
        Cutils.click(mauticCompaniesPageElements.ProfessionalSection)
    }
    static typeNumberOfEmployeesAs(text) {
        Cutils.typeText(mauticCompaniesPageElements.NumberOfEmployees, text)
    }
    static typeCompanyFaxAs(text) {
        Cutils.typeText(mauticCompaniesPageElements.CompanyFax, text)
    }
    static typeComapnyAnnualRevenueAs(text) {
        Cutils.typeText(mauticCompaniesPageElements.ComapnyAnnualRevenue, text)
    }
    static selectCompanyIndustryAs(text) {
        Cutils.selectValueFromDropDownNonSelect(mauticCompaniesPageElements.CompanyIndustry, text)
    }
    static typeCompanyDescriptionAs(text) {
        Cutils.typeText(mauticCompaniesPageElements.CompanyDescription, text)
    }
}