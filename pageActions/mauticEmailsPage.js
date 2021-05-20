import { mauticGlobalPage } from "./mauticGlobalPage";

import { Cutils } from "../CommonUtils/Cutils";
import { mauticEmailsPageElements } from "../pageElements/mauticEmailsPageElements";
import { mauticEmailsPage } from "cypress/pageActions/mauticEmailsPage";

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
}