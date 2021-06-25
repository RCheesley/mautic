
import { Cutils } from "../CommonUtils/Cutils";
import { mauticStagesPageElements } from "../pageElements/mauticStagesPageElements";
import { Cutils } from "cypress/CommonUtils/Cutils";
export class mauticStagesPage {
    static clickAddNewButton() {
        Cutils.click(mauticStagesPageElements.addNewButton)
    }
    static typeStagesTitleAs(text) {
        Cutils.typeText(mauticStagesPageElements.stagesTitle, text)
    }
    static typeStagesWeightAs(text) {
        Cutils.typeText(mauticStagesPageElements.StagesWeight, text)
    }
    static clickSaveAndCloseButton() {
        Cutils.click(mauticStagesPageElements.SaveAndCloseButton)
    }
    static isStagesCreated(text) {
        Cutils.IsVisible('//div[contains(@class,alert-growl-container)]//*[text()=' + "\'" + text + "\'" + ']')
        Cutils.IsVisible(mauticStagesPageElements.filter)
        Cutils.typeText(mauticStagesPageElements.filter, text)
        return Cutils.IsVisible('//tr[1]//a[contains(text(), ' + "\'" + text + "\'" + ')]')
    }

    static searchStages(text) {
        Cutils.IsVisible(mauticStagesPageElements.filter)
        Cutils.typeText(mauticStagesPageElements.filter, text)
    }
    static editStages(text) {
        Cutils.IsVisible('//tr[1]//a[contains(text(), ' + "\'" + text + "\'" + ')]')
        Cutils.click('//tr[1]//a[contains(text(), ' + "\'" + text + "\'" + ')]')
    }

    static deleteStages(text) {
        Cutils.click('//tr[1]//a[contains(text(), ' + "\'" + text + "\'" + ')]/preceding::td//div//input[@type="checkbox"]')
        Cutils.click('//tr[1]//a[contains(text(), ' + "\'" + text + "\'" + ')]/preceding::td//div[@class="input-group-btn"]')
        Cutils.click('//tr[1]//span[text()="Delete"]')
        Cutils.IsVisible('//button[text()="Delete"]')
        Cutils.click('//button[text()="Delete"]')
    }
    static isStagesDeleted(text) {
        return Cutils.IsNotExist('//tr[1]//a[contains(text(), ' + "\'" + text + "\'" + ')]')
    }
}