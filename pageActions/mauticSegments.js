import { Cutils } from "../CommonUtils/Cutils";
import { mauticGlobalPage } from "../pageActions/mauticGlobalPage";
export class mauticSegments {
    static createSegment(text) {
        mauticGlobalPage.verifyPageTitle('Segments')
        mauticGlobalPage.waitForPageLoad('Contact Segments')
        Cutils.click('//a[contains(@href,"new")]//span[text()="New"]')
        Cutils.typeText('//input[@id="leadlist_name"]', 'TestSegment')
        Cutils.click('//a[@href="#filters"]')
        Cutils.click('//div[@id="available_segment_filters_chosen"]')
        Cutils.typeText('//input[@class="chosen-search-input"]', text)
        Cutils.click('//li[contains(.,' + "\'" + text + "\'" + ')]')
        Cutils.selectValueFromDropDown('//select[contains(@id,"leadlist_filters")][contains(@id,"operator")]', 'contains')
        Cutils.IsVisible('//input[contains(@id,"leadlist_filters")][@required="required"]')
        Cutils.waitForTime(2000)
        Cutils.typeText('//input[contains(@id,"leadlist_filters")][@required="required"]', 'testContact')
        Cutils.click('//button[@id="leadlist_buttons_save_toolbar"]')
        Cutils.IsVisible('//a[contains(text(),"TestSegment")]')
    }

    static isSegmentCreated() {
        return Cutils.IsVisible('//div[contains(@class,alert)]')
    }
}