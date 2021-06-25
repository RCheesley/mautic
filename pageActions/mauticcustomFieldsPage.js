import { mauticcustomFieldsPageElements } from "../pageElements/mauticcustomFieldsPageElements";
import { Cutils } from "../CommonUtils/Cutils";
import { Cutils } from "cypress/CommonUtils/Cutils";

export class mauticcustomFieldsPage {

    static clickAddNewButton() {
        Cutils.click(mauticcustomFieldsPageElements.addNewButton)
    }
    static typeCustomFieldLabelAs(text) {
        Cutils.typeText(mauticcustomFieldsPageElements.CustomFieldLabel, text)
    }
    static selectCustomFieldObjectAs(text) {
        Cutils.selectValueFromDropDownNonSelect(mauticcustomFieldsPageElements.ObjectDropDown, text)
    }
    static selectCustomFieldDataTypeAs(text) {
        Cutils.selectValueFromDropDownNonSelect(mauticcustomFieldsPageElements.DataTypeDropDown, text)
    }
    static clickSaveAndCloseButton() {
        Cutils.click(mauticcustomFieldsPageElements.SaveAndCloseButton)
    }
    static isCustomeFiledCreated(text) {
        return Cutils.IsVisible('//tr//a[contains(text(), ' + "\'" + text + "\'" + ')]')
    }
    static deleteCustomField(text) {
        Cutils.click('//tr//a[contains(text(), ' + "\'" + text + "\'" + ')]/ancestor::td/preceding-sibling::td//div//input[@type="checkbox"]')
        Cutils.click('//tr//a[contains(text(), ' + "\'" + text + "\'" + ')]/ancestor::td/preceding-sibling::td//div[@class="input-group-btn"]')
        Cutils.click('//tr//a[contains(text(), ' + "\'" + text + "\'" + ')]/ancestor::td/preceding-sibling::td//span[text()="Delete"]')
        Cutils.IsVisible('//button[text()="Delete"]')
        Cutils.click('//button[text()="Delete"]')
    }

    static isCustomFieldDeleted(text) {
        return Cutils.IsVisible('//div[contains(@class,alert-growl-container)]//*[text()=' + "\'" + text + "\'" + ']')
    }
}
