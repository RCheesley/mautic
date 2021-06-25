import { muaticFormsPageElements } from "../pageElements/mauticFormsPageElements"
import { Cutils } from "../CommonUtils/Cutils";
import { Cutils } from "cypress/CommonUtils/Cutils";

export class mauticFormsPage {

    static clickAddNewButton() {
        Cutils.IsVisible(muaticFormsPageElements.addNewButton)
        Cutils.click(muaticFormsPageElements.addNewButton)
    }
    static selectFormTypeAs(text) {
        Cutils.click('//div[@class="modal-dialog"]//button[contains(@onclick,' + "\'" + text + "\'" + ')][not(contains(@class,"visible-xs"))]')
    }
    static typeFormNameAs(text) {
        Cutils.typeText(muaticFormsPageElements.FormnName, text)
    }
    static clickTab(text) {
        Cutils.IsVisible(muaticFormsPageElements.SaveAndCloseButton);
        Cutils.click('//a[normalize-space(text())=' + "\'" + text + "\'" + ']');
    }
    static selectFieldType(text1, text2) {
        Cutils.selectValueFromDropDownNonSelect(muaticFormsPageElements.FieldType, text2);
    }
    static typeFieldLabelAs(text1, text2) {
        Cutils.typeText(muaticFormsPageElements.FormLabel, text2)
    }
    static selectFieldMathchingObjectAs(text1, text2) {
        Cutils.selectValueFromDropDownNonSelect(muaticFormsPageElements.FieldMathchingObject, text2)
    }
    static selectFieldMathchingFieldAs(text1, text2) {
        Cutils.selectValueFromDropDownNonSelect(muaticFormsPageElements.FieldMathchingField, text2)
    }
    static clickAddButtonOnFormPagePopUp() {
        Cutils.click(muaticFormsPageElements.AddButtonOnFormPagePopUp)
        Cutils.IsNotVisible(muaticFormsPageElements.AddButtonOnFormPagePopUp)
    }
    static isFieldCreated(text1, text2) {
        return Cutils.IsVisible('//div[@class="panel form-field-wrapper"][' + "\'" + text1 + "\'" + ']//label[text()=' + "\'" + text2 + "\'" + ']')
    }
    static clickSaveAndCloseButton() {
        Cutils.click(muaticFormsPageElements.SaveAndCloseButton)
    }
    static clickCloseButton() {
        Cutils.click(muaticFormsPageElements.CloseButton)
    }
    static isFormCreated(text) {
        Cutils.IsVisible('//div[contains(@class,alert-growl-container)]//*[contains(text(), ' + "\'" + text + "\'" + ')]')
        return Cutils.IsVisible('//tr//a[contains(text(), ' + "\'" + text + "\'" + ')]')
    }
    static editForm(text) {
        Cutils.IsVisible('//tr//a[contains(text(), ' + "\'" + text + "\'" + ')]')
        Cutils.click('//tr//a[contains(text(), ' + "\'" + text + "\'" + ')]')
        Cutils.IsVisible(muaticFormsPageElements.EditButton)
        Cutils.click(muaticFormsPageElements.EditButton)
    }
    static deleteForm(text) {
        Cutils.click('//tr//a[contains(text(), ' + "\'" + text + "\'" + ')]/ancestor::td/preceding-sibling::td//div//input[@type="checkbox"]')
        Cutils.click('//tr//a[contains(text(), ' + "\'" + text + "\'" + ')]/ancestor::td/preceding-sibling::td//div[@class="input-group-btn"]')
        Cutils.click('//tr//a[contains(text(), ' + "\'" + text + "\'" + ')]/ancestor::td/preceding-sibling::td//span[text()="Delete"]')
        Cutils.IsVisible('//button[text()="Delete"]')
        Cutils.click('//button[text()="Delete"]')
    }
    static isFormDeleted(text) {
        return Cutils.IsVisible('//div[contains(@class,alert-growl-container)]//*[text()=' + "\'" + text + "\'" + ']')
    }
}