
export class mauticReportsPageElements {
    static addNewButton = '//a[contains(@href,"new")]//span[text()="New"]';
    static ReportName = '//input[@id="report_name"]';
    static ColumnTextBox = '//*[text()="Columns"]/following::div[1]//div[@class="choice-wrapper"]//div[@class="ms-selectable"]//input[@class="ms-search form-control"]';
    static DataSource = '//div[@id="report_source_chosen"]';
    static SaveAndCloseButton = '//button[@id="report_buttons_save_toolbar"]';
    static CloseButton = '//span[text()="Close"]';
    static EditButton = '//span[text()="Edit"]';
}