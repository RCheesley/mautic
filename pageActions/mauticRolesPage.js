
import { mauticRolesPageElements } from "../pageElements/mauticRolesPageElements";
import { Cutils } from "../CommonUtils/Cutils";
import { Cutils } from "cypress/CommonUtils/Cutils";


export class mauticRolesPage {

    static clickAddNewButton() {
        Cutils.click(mauticRolesPageElements.addNewButton)
    }
    static clickTab(text) {
        Cutils.click('//a[text()=' + "\'" + text + "\'" + ']')
    }
    static typeRoleNameAs(text) {
        Cutils.typeText(mauticRolesPageElements.RoleName, text)
    }
    static givePermission(text1, text2, text3) {
        Cutils.IsVisible('//span[text()=' + "\'" + text3 + "\'" + ']')
        Cutils.click('//span[text()=' + "\'" + text3 + "\'" + ']')
        Cutils.IsVisible('//label[text()=' + "\'" + text2 + "\'" + ']/parent::div/child::div//label[normalize-space(.)=' + "\'" + text1 + "\'" + ']')
        Cutils.click('//label[text()=' + "\'" + text2 + "\'" + ']/parent::div/child::div//label[normalize-space(.)=' + "\'" + text1 + "\'" + ']')
    }
    static clickSaveAndCloseButton() {
        Cutils.click(mauticRolesPageElements.SaveAndCloseButton)
    }
    static isRoleCreated(text) {
        Cutils.IsVisible('//div[contains(@class,alert-growl-container)]//*[text()=' + "\'" + text + "\'" + ']')
        Cutils.IsVisible(mauticRolesPageElements.filter)
        Cutils.typeText(mauticRolesPageElements.filter, text)
        return Cutils.IsVisible('//tr[1]//a[contains(text(), ' + "\'" + text + "\'" + ')]')
    }

    static searchRole(text) {
        Cutils.IsVisible(mauticRolesPageElements.filter)
        Cutils.typeText(mauticRolesPageElements.filter, text)
    }

    static editRole(text) {
        Cutils.IsVisible('//tr[1]//a[contains(text(), ' + "\'" + text + "\'" + ')]')
        Cutils.click('//tr[1]//a[contains(text(), ' + "\'" + text + "\'" + ')]')
    }
    static deleteRole(text) {
        Cutils.click('//tr[1]//a[contains(text(), ' + "\'" + text + "\'" + ')]/preceding::td//div//input[@type="checkbox"]')
        Cutils.click('//tr[1]//a[contains(text(), ' + "\'" + text + "\'" + ')]/preceding::td//div[@class="input-group-btn"]')
        Cutils.click('//tr[1]//span[text()="Delete"]')
        Cutils.IsVisible('//button[text()="Delete"]')
        Cutils.click('//button[text()="Delete"]')
    }
    static isRoleDeleted(text) {
        return Cutils.IsNotExist('//tr[1]//a[contains(text(), ' + "\'" + text + "\'" + ')]')
    }
}

