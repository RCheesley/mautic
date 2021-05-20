import { Cutils } from "../CommonUtils/Cutils"
import { mauticAssetPagElements } from "../pageElements/mauticAssetPageElements"
import { mauticGlobalPage } from "./mauticGlobalPage";



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

}