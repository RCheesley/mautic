import { Cutils } from "../CommonUtils/Cutils";
import { mauticGlobalPage } from "../pageActions/mauticGlobalPage";
import { mauticSegmentsElemenets } from "../pageElements/mauticSegmentPageElements";
import { Cutils } from "cypress/CommonUtils/Cutils";
import { mauticSegmentsElemenets } from "cypress/pageElements/mauticSegmentPageElements";

export class mauticSegments {
    static createSegment(text) {
        mauticGlobalPage.verifyPageTitle('Segments')
        mauticGlobalPage.waitForPageLoad('Contact Segments')
        Cutils.click(mauticSegmentsElemenets.addNewButton)
        Cutils.typeText(mauticSegmentsElemenets.segmentName, 'TestSegment')
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
    static clickAddNeButton() {
        Cutils.click(mauticSegmentsElemenets.addNewButton)
    }
    static typeSegmentNameAs(text) {
        Cutils.typeText(mauticSegmentsElemenets.segmentName, text)
    }
    static clickTab(text) {
        Cutils.click(mauticSegmentsElemenets.filterTab)
    }
    static chooseFilterAs(text) {
        Cutils.selectValueFromDropDownNonSelect(mauticSegmentsElemenets.filterDropDown, text)
    }
    static chooseFilterConditionAs(text) {
        Cutils.selectValueFromDropDown(mauticSegmentsElemenets.filterField, text)
    }
    static chooseFilterValueAs(text) {
        Cutils.waitForTime(2000)
        Cutils.typeText(mauticSegmentsElemenets.filterValue, text)
    }
    static clickSaveAndCloseButton() {
        Cutils.click(mauticSegmentsElemenets.saveAndCloseButton)
    }
    static isContactAddedToSegment(text1, text2) {
        return Cutils.IsVisible('//a[normalize-space(text())="' + text1 + ' (' + text1 + ')"]/following::a[contains(text(),"View ' + text2 + ' Contact")]')
    }
    static isSegmentCreated(text) {
        Cutils.IsVisible('//div[contains(@class,alert-growl-container)]//*[contains(text(), ' + "\'" + text + "\'" + ')]')
        return Cutils.IsVisible('//tr//a[contains(text(), ' + "\'" + text + "\'" + ')]')
    }
    static editSegment(text) {
        Cutils.IsVisible('//tr//a[contains(text(), ' + "\'" + text + "\'" + ')]')
        Cutils.click('//tr//a[contains(text(), ' + "\'" + text + "\'" + ')]')
        Cutils.IsVisible(mauticSegmentsElemenets.EditButton)
        Cutils.click(mauticSegmentsElemenets.EditButton)
    }
    static clickCloseButton() {
        Cutils.click(mauticSegmentsElemenets.CloseButton)
    }
    static searchContactSegment(text) {
        Cutils.IsVisible(mauticSegmentsElemenets.filter)
        Cutils.typeText(mauticSegmentsElemenets.filter, text)
    }
    static deleteContactSegment(text) {
        Cutils.click('//tr[1]//a[contains(text(), ' + "\'" + text + "\'" + ')]/preceding::td//div//input[@type="checkbox"]')
        Cutils.click('//tr[1]//a[contains(text(), ' + "\'" + text + "\'" + ')]/preceding::td//div[@class="input-group-btn"]')
        Cutils.click('//tr[1]//span[text()="Delete"]')
        Cutils.IsVisible('//button[text()="Delete"]')
        Cutils.click('//button[text()="Delete"]')
    }
    static isContactSegmentDeleted(text) {
        return Cutils.IsNotExist('//tr[1]//a[contains(text(), ' + "\'" + text + "\'" + ')]')
    }

}