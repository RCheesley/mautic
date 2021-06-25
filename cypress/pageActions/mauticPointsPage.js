import { mauticPointsPageElements } from "../pageElements/mauticPointsPageElements";
import { Cutils } from "../CommonUtils/Cutils";
import { Cutils } from "cypress/CommonUtils/Cutils";

export class mauticPointsPage {
    static clickAddNewButton() {
        Cutils.click(mauticPointsPageElements.addNewButton)
    }
    static typeActionNameAs(text) {
        Cutils.typeText(mauticPointsPageElements.ActionName, text)
    }
    static typeChangePointsAs(text) {
        Cutils.typeText(mauticPointsPageElements.ChangePoints, text)
    }
    static selectWhenAContactOptionAs(text) {
        Cutils.selectValueFromDropDownNonSelect(mauticPointsPageElements.WhenAContactOptionDropDown, text)
    }
    static selectLimitToTheseSelectedEmailsAs(text) {
        Cutils.selectValueFromDropDownNonSelect(mauticPointsPageElements.LimitToTheseSelectedEmailsDropDown, text)
    }
    static clickSaveandCloseButton() {
        Cutils.click(mauticPointsPageElements.SaveandCloseButton)
    }
    static isActionCreated(text) {
        Cutils.IsVisible('//div[contains(@class,alert-growl-container)]//*[text()=' + "\'" + text + "\'" + ']')
        Cutils.IsVisible(mauticPointsPageElements.filter)
        Cutils.typeText(mauticPointsPageElements.filter, text)
        return Cutils.IsVisible('//tr[1]//a[contains(text(), ' + "\'" + text + "\'" + ')]')
    }

    static searchActions(text) {
        Cutils.IsVisible(mauticPointsPageElements.filter)
        Cutils.typeText(mauticPointsPageElements.filter, text)
    }

    static editActions(text) {
        Cutils.IsVisible('//tr[1]//a[contains(text(), ' + "\'" + text + "\'" + ')]')
        Cutils.click('//tr[1]//a[contains(text(), ' + "\'" + text + "\'" + ')]')
    }

    static deleteActions(text) {
        Cutils.click('//tr[1]//a[contains(text(), ' + "\'" + text + "\'" + ')]/preceding::td//div//input[@type="checkbox"]')
        Cutils.click('//tr[1]//a[contains(text(), ' + "\'" + text + "\'" + ')]/preceding::td//div[@class="input-group-btn"]')
        Cutils.click('//tr[1]//span[text()="Delete"]')
        Cutils.IsVisible('//button[text()="Delete"]')
        Cutils.click('//button[text()="Delete"]')
    }

    static isActionDeleted(text) {
        return Cutils.IsNotExist('//tr[1]//a[contains(text(), ' + "\'" + text + "\'" + ')]')
    }
}