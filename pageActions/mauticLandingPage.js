import { mauticLandingPageElements } from "../pageElements/mauticLandingPageElements";
import { Cutils } from "../CommonUtils/Cutils";
import { Cutils } from "cypress/CommonUtils/Cutils";

export class mauticLandingPage {
    static clickAddNewButton() {
        Cutils.click(mauticLandingPageElements.addNewButton)
    }
    static typeLandingPageTitleAs(text) {
        Cutils.waitForTime(2000)
        Cutils.typeText(mauticLandingPageElements.LandingPageTitle, text)
    }

    static clickSaveAndCloseButton() {
        Cutils.click(mauticLandingPageElements.SaveAndCloseButton)
    }
    static isLandingPageCreated(text) {
        Cutils.IsVisible('//div[contains(@class,alert-growl-container)]//*[text()=' + "\'" + text + "\'" + ']')
        Cutils.IsVisible(mauticLandingPageElements.filter)
        Cutils.typeText(mauticLandingPageElements.filter, text)
        return Cutils.IsVisible('//tr[1]//a[contains(text(), ' + "\'" + text + "\'" + ')]')
    }
    static clickCloseButton() {
        Cutils.click(mauticLandingPageElements.closeButton)
    }

    static searchLandingpage(text) {
        Cutils.IsVisible(mauticLandingPageElements.filter)
        Cutils.typeText(mauticLandingPageElements.filter, text)
    }

    static editLandingPage(text) {
        Cutils.IsVisible('//tr[1]//a[contains(text(), ' + "\'" + text + "\'" + ')]')
        Cutils.click('//tr[1]//a[contains(text(), ' + "\'" + text + "\'" + ')]')
        Cutils.IsVisible(mauticLandingPageElements.EditButton)
        Cutils.click(mauticLandingPageElements.EditButton)
    }
    static selectTheme(text) {
        Cutils.IsVisible('//h3[text()=' + "\'" + text + "\'" + ']/following-sibling::a[normalize-space(text())="Select"]')
        Cutils.click('//h3[text()=' + "\'" + text + "\'" + ']/following-sibling::a[normalize-space(text())="Select"]')
    }
    static deleteLandingPage(text) {
        Cutils.click('//tr[1]//a[contains(text(), ' + "\'" + text + "\'" + ')]/preceding::td//div//input[@type="checkbox"]')
        Cutils.click('//tr[1]//a[contains(text(), ' + "\'" + text + "\'" + ')]/preceding::td//div[@class="input-group-btn"]')
        Cutils.click('//tr[1]//span[text()="Delete"]')
        Cutils.IsVisible('//button[text()="Delete"]')
        Cutils.click('//button[text()="Delete"]')
    }

    static isLandingPageDeleted(text) {
        return Cutils.IsNotExist('//tr[1]//a[contains(text(), ' + "\'" + text + "\'" + ')]')
    }
}