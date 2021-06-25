export class mauticAssetPagElements {
    static addNewButton = '//a[contains(@href,"new")]//span[text()="New"]';
    static assetTitle = '//input[@id="asset_title"]';
    static saveAndCloseButton = '//button[@id="asset_buttons_save_toolbar"]';
    static uploadDrop = '//div[@id="dropzone"]';
    static alert = '//div[contains(@class,alert)]';
    static uploadSuccess = '//div[contains(@class,"dz-success dz-complete")]';
    static closeButton = '//span[text()="Close"]';
    static RemoteStorage = '//input[@id="asset_storageLocation_1"]';
    static LocalStorage = '//input[@id="asset_storageLocation_0"]';
    static RemoteAssetLocation = '//input[@id="asset_remotePath"]';
}