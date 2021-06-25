export class mauticEmailsPageElements {
    static addNewButton = '//a[contains(@href,"new")]//span[text()="New"]';
    static templateEmailSelector = '//button[@class="btn btn-lg btn-default btn-nospin text-success"]';
    static emailSubject = '//input[@id="emailform_subject"]';
    static emailInternalName = '//input[@id="emailform_name"]';
    static emailSegment = '//div[@id="emailform_lists_chosen"]';
    static saveEmailButton = '//button[@id="emailform_buttons_save_toolbar"]';
    static closeButton = '//span[text()="Close"]';
    static emailEntryRow = '//a[contains(text(),"Test Email")]';
    static alert = '//div[contains(@class,alert)]';
    static AddNewButton = '//span[text()="New"]';
    static filter = '//input[@id="list-search"]';
    static EditButton = '//span[text()="Edit"]';
    static SendEmail = '//span[text()="Send"]';
    static ScheduleButton = '//button[@class="btn btn-default btn-save btn-copy"]';
    static ScheduleLabel = '//span[normalize-space(text())="Scheduled"]';
    static PendingEmailLabel = '//span[contains(@id,"pending-")][not(contains(@class,"hide"))]';
}