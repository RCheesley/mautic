export class mauticSegmentsElemenets {
    static addNewButton = '//a[contains(@href,"new")]//span[text()="New"]';
    static segmentName = '//input[@id="leadlist_name"]', 'TestSegment';
    static filterTab = '//a[@href="#filters"]'
    static filterDropDown = '//div[@id="available_filters_chosen"]'; // Community specific
    static filterSearchBox = '//input[@class="chosen-search-input"]';
    static filterField = '//select[contains(@id,"leadlist_filters")][contains(@id,"operator")]';
    static filterValue = '//input[contains(@id,"leadlist_filters")][@required="required"]';
    static saveAndCloseButton = '//button[@id="leadlist_buttons_save_toolbar"]';
    static alert = '//div[contains(@class,alert)]';
    static segmentHeader = '//a[contains(text(),"TestSegment")]';
    static EditButton = '//span[text()="Edit"]';
    static CloseButton = '//span[text()="Close"]';
    static filter = '//input[@id="list-search"]';
    static filterValueDropDown = '//div[contains(@id,"leadlist_filters_")][contains(@id,"_properties_filter_chosen")]';
    static filterValueSegmentMem = '//input[@class="chosen-search-input default"]';
}
