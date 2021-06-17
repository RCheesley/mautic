import { mauticGlobalPage } from "./mauticGlobalPage";

import { Cutils } from "../CommonUtils/Cutils";
import { mauticEmailsPageElements } from "../pageElements/mauticEmailsPageElements";
import { mauticEmailsPage } from "cypress/pageActions/mauticEmailsPage";
import { Cutils } from "cypress/CommonUtils/Cutils";

export class mauticEmailsPage {
    static CreateEmails(text) {
        var input;
        mauticGlobalPage.verifyPageTitle('Emails')
        mauticGlobalPage.waitForPageLoad('Emails')
        Cutils.click(mauticEmailsPageElements.addNewButton)
        Cutils.IsVisible(mauticEmailsPageElements.templateEmailSelector)
        switch (text) {
            case 'Template':
                input = 'template';
                break;
            case 'Segment':
                input = 'list';
        }
        Cutils.click('//button[contains(@onclick, ' + "\'" + input + "\'" + ')][contains(@class,"text-success")]')
        Cutils.typeText(mauticEmailsPageElements.emailSubject, 'Test Email')
        Cutils.typeText(mauticEmailsPageElements.emailInternalName, 'Test Email')
        if (input == 'list') {
            Cutils.typeText(mauticEmailsPageElements.emailSegment, 'TestSegment')
        }
        Cutils.click(mauticEmailsPageElements.saveEmailButton)
        mauticGlobalPage.waitForPageLoad('Test Email')
        Cutils.click(mauticEmailsPageElements.closeButton)
        Cutils.IsVisible(mauticEmailsPageElements.emailEntryRow)


    }

    static isEmailCreated() {
        return Cutils.IsVisible(mauticEmailsPageElements.alert);
    }

    static clickAddNewButton() {
        Cutils.IsVisible(mauticEmailsPageElements.AddNewButton)
        Cutils.click(mauticEmailsPageElements.AddNewButton)
    }
    static selectEmailType(input) {
        switch (input) {
            case 'Template':
                input = 'template';
                break;
            case 'Segment':
                input = 'list';
        }
        Cutils.IsVisible(mauticEmailsPageElements.templateEmailSelector)
        Cutils.click('//div[@class="modal-content"]//div[@class="hidden-xs panel-footer text-center"]//button[contains(@onclick,  ' + "\'" + input + "\'" + ')]')
    }
    static typeEmailSubject(text) {
        Cutils.IsVisible(mauticEmailsPageElements.emailSubject)
        Cutils.typeText(mauticEmailsPageElements.emailSubject, text)
    }

    static typeEmailInternalName(text) {
        Cutils.typeText(mauticEmailsPageElements.emailInternalName, text)
    }
    static typeEmailSegment(text) {
        Cutils.selectValueFromDropDownNonSelectWithEnterKey(mauticEmailsPageElements.emailSegment, text)
    }
    static clickSaveAndCloseButton() {
        Cutils.click(mauticEmailsPageElements.saveEmailButton)
    }
    static clickCloseButton() {
        Cutils.IsVisible(mauticEmailsPageElements.closeButton)
        Cutils.click(mauticEmailsPageElements.closeButton)
    }
    static isEmailCreated(text) {
        Cutils.IsVisible('//div[contains(@class,alert-growl-container)]//*[text()=' + "\'" + text + "\'" + ']')
        return Cutils.IsVisible('//tr//a[contains(text(), ' + "\'" + text + "\'" + ')]')
    }

    static searchEmailAs(text) {
        Cutils.IsVisible(mauticEmailsPageElements.filter)
        Cutils.typeText(mauticEmailsPageElements.filter, text)
    }

    static editEmail(text) {
        Cutils.IsVisible('//tr//a[contains(text(), ' + "\'" + text + "\'" + ')]')
        Cutils.click('//tr//a[contains(text(), ' + "\'" + text + "\'" + ')]')
        Cutils.IsVisible(mauticEmailsPageElements.EditButton)
        Cutils.click(mauticEmailsPageElements.EditButton)
    }

    static deleteEmail(text) {
        Cutils.click('//tr//a[contains(text(), ' + "\'" + text + "\'" + ')]/preceding::td//div//input[@type="checkbox"]')
        Cutils.click('//tr//a[contains(text(), ' + "\'" + text + "\'" + ')]/preceding::td//div[@class="input-group-btn"]')
        Cutils.click('//tr//span[text()="Delete"]')
        Cutils.IsVisible('//button[text()="Delete"]')
        Cutils.click('//button[text()="Delete"]')
    }

    static isEmailDeleted(text) {
        return Cutils.IsNotExist('//tr[1]//a[contains(text(), ' + "\'" + text + "\'" + ')]')
    }
    static seneEmail(text) {
        Cutils.IsVisible('//tr//a[contains(text(), ' + "\'" + text + "\'" + ')]')
        Cutils.click('//tr//a[contains(text(), ' + "\'" + text + "\'" + ')]')
        Cutils.IsVisible(mauticEmailsPageElements.SendEmail)
        Cutils.click(mauticEmailsPageElements.SendEmail)
    }

    static clickScheduleButton() {
        Cutils.IsVisible(mauticEmailsPageElements.ScheduleButton)
        Cutils.click(mauticEmailsPageElements.ScheduleButton)
    }

    static isEmailScheduled(text) {
        Cutils.IsVisible(mauticEmailsPageElements.ScheduleLabel)
        Cutils.waitForTime(5000)
        Cutils.pageReload()
    }

    static IsNoPendingEmail() {
        Cutils.IsNotExist(mauticEmailsPageElements.ScheduleLabel)
    }

}