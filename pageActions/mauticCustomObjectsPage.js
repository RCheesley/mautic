import { mauticCustomObjectsPageElements } from "../pageElements/mauticCustomObjectsPageElements";
import { Cutils } from "../CommonUtils/Cutils";
import { Cutils } from "cypress/CommonUtils/Cutils";

export class mauticCustomObjectsPage {

    static clickAddNewButton() {
        Cutils.click(mauticCustomObjectsPageElements.addNewButton)
    }
    static typeCustomObjectsNameSingularAs(text) {
        Cutils.typeText(mauticCustomObjectsPageElements.CustomObjectsNameSingular, text)
    }
    static typeCustomObjectsNamePluralAs(text) {
        Cutils.typeText(mauticCustomObjectsPageElements.CustomObjectsNamePlural, text)
    }
    static clickTab(text) {
        Cutils.click('//a[normalize-space(text())=' + "\'" + text + "\'" + ']')
    }
    static selectAddANewFieldAs(text) {
        Cutils.selectValueFromDropDownNonSelect(mauticCustomObjectsPageElements.AddANewFieldDropDown, text)
    }
    static typeLabelAs(text) {
        Cutils.typeText(mauticCustomObjectsPageElements.Label, text)
    }
    static clickAddAValueButton() {
        Cutils.IsVisible(mauticCustomObjectsPageElements.AddAValueButton)
        Cutils.click(mauticCustomObjectsPageElements.AddAValueButton);
    }
    static typeOptionLabelAs(text1, text2) {
        var value = parseInt(text1) - 1
        Cutils.typeText('//input[@id="custom_field_options_list_' + value + '_label"]', text2);
    }
    static typeOptionValueAs(text1, text2) {
        var value = parseInt(text1) - 1
        Cutils.typeText('//input[@id="custom_field_options_list_' + value + '_value"]', text2);
    }
    static clickSaveAndCloseButtonOnCustomObjectsPopUp() {
        Cutils.click(mauticCustomObjectsPageElements.SaveAndCloseButtonOnCustomObjectsPopUp)
        Cutils.IsNotVisible(mauticCustomObjectsPageElements.SaveAndCloseButtonOnCustomObjectsPopUp)
    }
    static isCustomObjectCreated(text) {
        return Cutils.IsVisible('//label[text()=' + "\'" + text + "\'" + ']')
    }
    static clickSaveAndCloseButton() {
        Cutils.click(mauticCustomObjectsPageElements.SaveAndCloseButton)
    }
    static clickCloseButton() {
        Cutils.click(mauticCustomObjectsPageElements.CloseButton)
    }
    static isCustomObjectCreatedOnCustomObjectsPage(text) {
        Cutils.IsVisible('//div[contains(@class,alert-growl-container)]//*[text()=' + "\'" + text + "\'" + ']')
    }
    static editCustomObject(text) {
        Cutils.IsVisible('//tr//a[contains(text(), ' + "\'" + text + "\'" + ')]')
        Cutils.click('//tr//a[contains(text(), ' + "\'" + text + "\'" + ')]')
        Cutils.IsVisible(mauticCustomObjectsPageElements.EditButton)
        Cutils.click(mauticCustomObjectsPageElements.EditButton)
    }

    static editFieldOption(text) {
        Cutils.click('//label[text()=' + "\'" + text + "\'" + ']/ancestor::div/preceding-sibling::div[@class="form-buttons btn-group"]//button[@data-toggle="ajaxmodal"]')
    }

    static clickAddNewButtonOnCarsPage() {
        Cutils.click(mauticCustomObjectsPageElements.addNewButton)
    }
    static typeCarNameAs(text) {
        Cutils.typeText(mauticCustomObjectsPageElements.carName, text)
    }
    static typeCustoFieldValue(text1, text2) {
        Cutils.typeText('//label[text()=' + "\'" + text1 + "\'" + ']/following-sibling::input', text2)
    }
    static selectCustomFieldValue(text1, text2) {
        Cutils.selectValueFromDropDownNonSelect('//label[text()=' + "\'" + text1 + "\'" + ']/following::div[contains(@class,"chosen-container chosen-container-multi")]', text2)
    }
    static clickSaveAndCloseButtonOnCarsPage() {
        Cutils.click(mauticCustomObjectsPageElements.SaveAndCloseButtonOnCarsPage)
    }
    static isItemCreated(text) {
        Cutils.IsVisible('//div[contains(@class,alert-growl-container)]//*[text()=' + "\'" + text + "\'" + ']')
    }

    static deleteCustomObject(text) {
        Cutils.click('//tr//a[contains(text(), ' + "\'" + text + "\'" + ')]/ancestor::td/preceding-sibling::td//div//input[@type="checkbox"]')
        Cutils.click('//tr//a[contains(text(), ' + "\'" + text + "\'" + ')]/ancestor::td/preceding-sibling::td//div[@class="input-group-btn"]')
        Cutils.click('//tr//a[contains(text(), ' + "\'" + text + "\'" + ')]/ancestor::td/preceding-sibling::td//span[text()="Delete"]')
        Cutils.IsVisible('//button[text()="Delete"]')
        Cutils.click('//button[text()="Delete"]')
    }

    static isCustomObjectDeleted(text) {
        return Cutils.IsVisible('//div[contains(@class,alert-growl-container)]//*[text()=' + "\'" + text + "\'" + ']')
    }
}