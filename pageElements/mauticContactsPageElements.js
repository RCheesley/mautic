export class mauticContactsPageElements {
    static addNewButton = '//a[contains(@href,"new")]//span[text()="New"]';
    static title = '//input[@id="lead_title"]';
    static firstName = '//input[@id="lead_firstname"]';
    static lastName = '//input[@id="lead_lastname"]';
    static leadEmail = '//input[@id="lead_email"]';
    static SaveButton = '//button[@id="lead_buttons_save_toolbar"]';
    static closeButton = '//span[text()="Close"]';
    static alert = '//div[contains(@class,alert)]';
    static filter = '//input[@id="list-search"]';
    static contactCity = '//input[@id="lead_city"]';
    static contactZipCode = '//input[@id="lead_zipcode"]';
    static EditButton = '//span[text()="Edit"]';
    static moreOptionMenu = '//button[@class="btn btn-default btn-nospin dropdown-toggle"]';
    static uploadFile = '//input[@id="lead_import_file"]';
    static uploadButton = '//button[@id="lead_import_start"]';
    static importButton = '//button[@class="btn btn-primary btn-copy"]';
    static companyMapping = '//div[@id="lead_field_import_company_chosen"]';
    static ContactPoint = '//input[@id="lead_points"]';
}
