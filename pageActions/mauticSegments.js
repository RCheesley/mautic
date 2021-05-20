import { Cutils } from "../CommonUtils/Cutils";
import { mauticGlobalPage } from "../pageActions/mauticGlobalPage";
import { mauticSegmentsElemenets } from "../pageElements/mauticSegmentPageElements";
export class mauticSegments {
    static createSegment(text) {
        mauticGlobalPage.verifyPageTitle('Segments')
        mauticGlobalPage.waitForPageLoad('Contact Segments')
        Cutils.click(mauticSegmentsElemenets.addNewButton)
        Cutils.typeText(mauticSegmentsElemenets.segmentName)
        Cutils.click(mauticSegmentsElemenets.filterTab)
        Cutils.click(mauticSegmentsElemenets.filterDropDown)
        Cutils.typeText(mauticSegmentsElemenets.filterSearchBox, text)
        Cutils.click('//li[contains(.,' + "\'" + text + "\'" + ')]')
        Cutils.selectValueFromDropDown(mauticSegmentsElemenets.filterField, 'contains')
        Cutils.IsVisible(mauticSegmentsElemenets.filterValue)
        Cutils.waitForTime(2000)
        Cutils.typeText(mauticSegmentsElemenets.filterValue, 'testContact')
        Cutils.click(mauticSegmentsElemenets.saveAndCloseButton)
        Cutils.IsVisible(mauticSegmentsElemenets.segmentHeader)
    }

    static isSegmentCreated() {
        return Cutils.IsVisible(mauticSegmentsElemenets.alert)
    }
}