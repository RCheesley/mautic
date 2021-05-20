export class mauticEmailsPageElements {
    static addNewButton = '//a[contains(@href,"new")]//span[text()="New"]';
    static templateEmailSelector = '//button[@class="btn btn-lg btn-default btn-nospin text-success"]';
    static emailSubject = '//input[@id="emailform_subject"]';
    static emailInternalName = '//input[@id="emailform_name"]';
    static emailSegment = '//div[@id="emailform_lists_chosen"]//input[@class="chosen-search-input default"]';
    static saveEmailButton = '//button[@id="emailform_buttons_save_toolbar"]';
    static closeButton = '//span[text()="Close"]';
    static emailEntryRow = '//a[contains(text(),"Test Email")]';
    static alert = '//div[contains(@class,alert)]';
}