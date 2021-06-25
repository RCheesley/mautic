import { mauticUsersPageElements } from "../pageElements/mauticUsersPageElements"
import { Cutils } from "../CommonUtils/Cutils";
import { Cutils } from "cypress/CommonUtils/Cutils";

export class mauticUsersPage {
    static clickAddNewButton() {
        Cutils.click(mauticUsersPageElements.addNewButton)
    }
    static deleteUser(text) {
        Cutils.click('//tr//a[contains(text(), ' + "\'" + text + "\'" + ')]/ancestor::td/preceding-sibling::td//div//input[@type="checkbox"]')
        Cutils.click('//tr//a[contains(text(), ' + "\'" + text + "\'" + ')]/ancestor::td/preceding-sibling::td//div[@class="input-group-btn"]')
        Cutils.click('//tr//a[contains(text(), ' + "\'" + text + "\'" + ')]/ancestor::td/preceding-sibling::td//span[text()="Delete"]')
        Cutils.IsVisible('//button[text()="Delete"]')
        Cutils.click('//button[text()="Delete"]')
    }
    static isUserDeleted(text) {
        return Cutils.IsVisible('//div[contains(@class,alert-growl-container)]//*[text()=' + "\'" + text + "\'" + ']')
    }
    static isUserCreated(text) {
        return Cutils.IsVisible('//div[contains(@class,alert-growl-container)]//*[contains(text(), ' + "\'" + text + "\'" + ')]')
    }
    static searchUserAs(text) {
        Cutils.IsVisible(mauticUsersPageElements.filter)
        Cutils.typeText(mauticUsersPageElements.filter, text)
    }
    static editUser(text) {
        Cutils.IsVisible('//tr[1]//a[contains(text(), ' + "\'" + text + "\'" + ')]')
        Cutils.click('//tr[1]//a[contains(text(), ' + "\'" + text + "\'" + ')]')
        Cutils.IsVisible(mauticUsersPageElements.EditButton)
        Cutils.click(mauticUsersPageElements.EditButton)
    }
    static typeUserFirstNameAs(text) {
        Cutils.typeText(mauticUsersPageElements.UserFirstName, text)
    }
    static typeUserLastNameAs(text) {
        Cutils.typeText(mauticUsersPageElements.UserLastName, text)
    }
    static selectUserRoleAs(text) {
        Cutils.selectValueFromDropDownNonSelect(mauticUsersPageElements.UserRoleDropDown, text)
    }
    static typeUserNameAs(text) {
        Cutils.typeText(mauticUsersPageElements.UserName, text)
    }
    static typeUserEmailAs(text) {
        Cutils.typeText(mauticUsersPageElements.UserEmail, text)
    }
    static typeUserPasswordAs(text) {
        Cutils.typeText(mauticUsersPageElements.UserPassword, text)
    }
    static confirmUserPasswordAs(text) {
        Cutils.typeText(mauticUsersPageElements.confirmUserPassword, text)
    }
    static clickSaveAndCloseButton() {
        Cutils.click(mauticUsersPageElements.SaveAndCloseButton)
    }
}