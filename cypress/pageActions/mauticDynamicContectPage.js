
import { Cutils } from "../CommonUtils/Cutils";
import { mauticDynamicContectPageElements } from "../pageElements/mauticDynamicContectPageStepsElements";
import { Cutils } from "cypress/CommonUtils/Cutils";

export class mauticDynamicContectPage {
    static clickAddNewButton() {
        Cutils.IsVisible(mauticDynamicContectPageElements.addNewButton)
        Cutils.click(mauticDynamicContectPageElements.addNewButton)
    }

    static typeDynamicContentInternalName(text) {
        Cutils.IsVisible(mauticDynamicContectPageElements.DynamicContentInternalName, text)
        Cutils.typeText(mauticDynamicContectPageElements.DynamicContentInternalName, text)
    }
    static typeContentAs(text) {
        Cutils.typeTextInsideiFrame(mauticDynamicContectPageElements.Content, text)
    }
    static clickSaveAndCloseButton() {
        Cutils.click(mauticDynamicContectPageElements.SaveAndCloseButton)
    }
    static clickCloseButton() {
        Cutils.IsVisible(mauticDynamicContectPageElements.CloseButton)
        Cutils.click(mauticDynamicContectPageElements.CloseButton)
    }
    static isDynamicContentCreated(text) {
        Cutils.IsVisible('//div[contains(@class,alert-growl-container)]//*[text()=' + "\'" + text + "\'" + ']')
        return Cutils.IsVisible('//tr//a[contains(text(), ' + "\'" + text + "\'" + ')]')
    }
    static searchDynamicContect(text) {
        Cutils.IsVisible(mauticDynamicContectPageElements.filter)
        Cutils.typeText(mauticDynamicContectPageElements.filter, text)
    }
    static editDynamicContect(text) {
        Cutils.IsVisible('//tr[1]//a[contains(text(), ' + "\'" + text + "\'" + ')]')
        Cutils.click('//tr[1]//a[contains(text(), ' + "\'" + text + "\'" + ')]')
        Cutils.IsVisible(mauticDynamicContectPageElements.EditButton)
        Cutils.click(mauticDynamicContectPageElements.EditButton)
    }
    static deleteDynamicContent(text) {
        Cutils.click('//tr//a[contains(text(), ' + "\'" + text + "\'" + ')]/preceding::td//div//input[@type="checkbox"]')
        Cutils.click('//tr//a[contains(text(), ' + "\'" + text + "\'" + ')]/preceding::td//div[@class="input-group-btn"]')
        Cutils.click('//tr//span[text()="Delete"]')
        Cutils.IsVisible('//button[text()="Delete"]')
        Cutils.click('//button[text()="Delete"]')
    }
    static isDynamicContentDeleted(text) {
        return Cutils.IsNotExist('//tr[1]//a[contains(text(), ' + "\'" + text + "\'" + ')]')
    }

}