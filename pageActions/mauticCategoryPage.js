
import { Cutils } from "../CommonUtils/Cutils";
import { mauticCategoryPageElements } from "../pageElements/mauticCategoryPageElements";
import { mauticGlobalPage } from "./mauticGlobalPage";
export class mauticCategoryPage {
    static clickAddNewButton() {
        mauticGlobalPage.waitForPageLoad('Categories');
        Cutils.click(mauticCategoryPageElements.addNewButton)
    }

    static selectCategoryTypeAs(text) {
        Cutils.IsVisible(mauticCategoryPageElements.categoryTypeDropwDown)
        Cutils.click(mauticCategoryPageElements.categoryTypeDropwDown)
        Cutils.typeText(mauticCategoryPageElements.categoryTypeInput, text)
        Cutils.click('//div[@id="category_form_bundle_chosen"]//li[contains(., ' + "\'" + text + "\'" + ')]')
    }

    static typeCategoryTitleAs(text) {
        Cutils.typeText(mauticCategoryPageElements.categoryTitle, text)
    }
    static isCateogryCreated(text) {
        Cutils.IsVisible('//div[contains(@class,alert-growl-container)]//*[text()=' + "\'" + text + "\'" + ']')
        return Cutils.IsVisible('//tr[1]//a[contains(text(), ' + "\'" + text + "\'" + ')]')
    }

    static ClickSaveAndCloseButton() {
        Cutils.click(mauticCategoryPageElements.saveAndCloseButton)
    }
    static deleteEmailCategory(text) {
        Cutils.click('//tr[1]//a[contains(text(), ' + "\'" + text + "\'" + ')]/preceding::td//div//input[@type="checkbox"]')
        Cutils.click('//tr[1]//a[contains(text(), ' + "\'" + text + "\'" + ')]/preceding::td//div[@class="input-group-btn"]')
        Cutils.click('//tr[1]//span[text()="Delete"]')
        Cutils.IsVisible('//button[text()="Delete"]')
        Cutils.click('//button[text()="Delete"]')
    }
    static isEmailCategoryDeleted(text) {
        Cutils.IsVisible('//div[contains(@class,alert-growl-container)]//*[text()=' + "\'" + text + "\'" + ']')
        return Cutils.IsNotExist('//tr[1]//a[contains(text(), ' + "\'" + text + "\'" + ')]')
    }


}