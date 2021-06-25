
import { Cutils } from "../CommonUtils/Cutils";
import { mauticReportsPageElements } from "../pageElements/mauticReportsPageElements";
import { Cutils } from "cypress/CommonUtils/Cutils";

export class mauticReportsPage {
    static clickAddNewButton() {
        Cutils.click(mauticReportsPageElements.addNewButton)
    }
    static typeReportNameAs(text) {
        Cutils.typeText(mauticReportsPageElements.ReportName, text)
    }
    static selectDataSourceAs(text) {
        Cutils.selectValueFromDropDownNonSelectWithEnterKey(mauticReportsPageElements.DataSource, text)
    }
    static clickTab(text) {
        Cutils.click('//a[text()=' + "\'" + text + "\'" + ']');
    }
    static selectColumnValue(text) {
        Cutils.waitForTime(1000)
        Cutils.typeText(mauticReportsPageElements.ColumnTextBox, text)
        Cutils.click('//span[text()=' + "\'" + text + "\'" + ']')
    }
    static clickSaveAndCloseButton() {
        Cutils.click(mauticReportsPageElements.SaveAndCloseButton)
    }
    static isReportCreated(text) {
        Cutils.IsVisible('//div[contains(@class,alert-growl-container)]//*[contains(text(), ' + "\'" + text + "\'" + ')]')
        return Cutils.IsVisible('//tr//a[contains(text(), ' + "\'" + text + "\'" + ')]')
    }
    static clickCloseButton() {
        Cutils.click(mauticReportsPageElements.CloseButton)
    }
    static editReport(text) {
        Cutils.IsVisible('//tr//a[contains(text(), ' + "\'" + text + "\'" + ')]')
        Cutils.click('//tr//a[contains(text(), ' + "\'" + text + "\'" + ')]')
        Cutils.IsVisible(mauticReportsPageElements.EditButton)
        Cutils.click(mauticReportsPageElements.EditButton)
    }

    static deleteReport(text) {
        Cutils.click('//tr//a[contains(text(), ' + "\'" + text + "\'" + ')]/ancestor::td/preceding-sibling::td//div//input[@type="checkbox"]')
        Cutils.click('//tr//a[contains(text(), ' + "\'" + text + "\'" + ')]/ancestor::td/preceding-sibling::td//div[@class="input-group-btn"]')
        Cutils.click('//tr//a[contains(text(), ' + "\'" + text + "\'" + ')]/ancestor::td/preceding-sibling::td//span[text()="Delete"]')
        Cutils.IsVisible('//button[text()="Delete"]')
        Cutils.click('//button[text()="Delete"]')
    }
    static isReportDeleted(text) {
        return Cutils.IsVisible('//div[contains(@class,alert-growl-container)]//*[text()=' + "\'" + text + "\'" + ']')
    }
}