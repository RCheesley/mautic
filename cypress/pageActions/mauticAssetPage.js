import { Cutils } from "../CommonUtils/Cutils"
import { mauticAssetPagElements } from "../pageElements/mauticAssetPageElements"
import { mauticGlobalPage } from "./mauticGlobalPage";
import { mauticAssetPage } from "cypress/pageActions/mauticAssetPage";

export class mauticAssetPage {
    static typeAssetTitle(text) {
        mauticGlobalPage.waitForPageLoad('New Asset');
        Cutils.typeText(mauticAssetPagElements.assetTitle, text)
    }

    static uploadFile(text) {
        Cutils.uploadFile(mauticAssetPagElements.uploadDrop, text)
        Cutils.IsVisible(mauticAssetPagElements.uploadSuccess);
    }

    static isFileUplaoded() {
        return Cutils.IsVisible(mauticAssetPagElements.alert)
    }

    static clickSaveAndCloseButton() {
        Cutils.click(mauticAssetPagElements.saveAndCloseButton)
    }
    static clickAddNewButton() {
        Cutils.click(mauticAssetPagElements.addNewButton)
    }
    static clickEditAsset(text) {
        mauticGlobalPage.waitForPageLoad('Assets');
        Cutils.click('//tr[1]//a[contains(text(), ' + "\'" + text + "\'" + ')]')
        mauticGlobalPage.waitForPageLoad(text);
        Cutils.click('//span[text()="Edit"]')
    }
    static updateAssetTitle(text) {
        mauticGlobalPage.waitForPageLoad('Edit Asset');
        Cutils.typeText(mauticAssetPagElements.assetTitle, text)
    }
    static clickCloseButton() {
        Cutils.click(mauticAssetPagElements.closeButton);
    }
    static deleteAsset(text) {
        Cutils.click('//tr//a[contains(text(), ' + "\'" + text + "\'" + ')]/preceding::td//div//input[@type="checkbox"]')
        Cutils.click('//tr//a[contains(text(), ' + "\'" + text + "\'" + ')]/preceding::td//div[@class="input-group-btn"]')
        Cutils.click('//tr//span[text()="Delete"]')
        Cutils.IsVisible('//button[text()="Delete"]')
        Cutils.click('//button[text()="Delete"]')
    }
    static isAssetDeleted(text) {
        return Cutils.IsNotExist('//tr//a[contains(text(), ' + "\'" + text + "\'" + ')]')
    }

    static selectStorageAs(text) {
        switch (text) {
            case "Remote":
                Cutils.click(mauticAssetPagElements.RemoteStorage)
                break;
            case "Local":
                Cutils.click(mauticAssetPagElements.LocalStorage)
                break;
        }
    }

    static typeRemoteAssetLocation(text) {
        Cutils.typeText(mauticAssetPagElements.RemoteAssetLocation, text)
    }

}