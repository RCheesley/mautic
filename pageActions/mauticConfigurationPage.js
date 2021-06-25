import { Cutils } from "../CommonUtils/Cutils";
import { Cutils } from "cypress/CommonUtils/Cutils";
import { mauticConfigurationPageElements } from "../pageElements/mauticConfigurationPageElements";

export class mauticConfigurationPage {
    static clickOption(text) {
        Cutils.click('//a[normalize-space(text())=' + "\'" + text + "\'" + ']')
    }

    static typeDoNotContactMoreThanValueAs(text) {
        Cutils.typeText(mauticConfigurationPageElements.DoNotContactMoreThan, text)
    }

    static selectEmailFrequencyAs(text) {
        Cutils.selectValueFromDropDownNonSelect(mauticConfigurationPageElements.EmailFrequencyDropDown, text)
    }

    static clickSaveAndCloseButton() {
        Cutils.click(mauticConfigurationPageElements.SaveAndCloseButton)
    }

    static isAlertDisplayed(text) {
        return Cutils.IsVisible('//div[contains(@class,alert-growl-container)]//*[contains(text(),' + "\'" + text + "\'" + ')]')
    }
}