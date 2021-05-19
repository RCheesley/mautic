import { mauticGlobalPage } from "./mauticGlobalPage";

import { Cutils } from "../CommonUtils/Cutils";

export class mauticEmailsPage {
    static CreateEmails(text) {
        var input;
        mauticGlobalPage.verifyPageTitle('Emails')
        mauticGlobalPage.waitForPageLoad('Emails')
        Cutils.click('//a[contains(@href,"new")]//span[text()="New"]')
        Cutils.IsVisible('//button[@class="btn btn-lg btn-default btn-nospin text-success"]')
        switch (text) {
            case 'Template':
                input = 'template';
                break;
            case 'Segment':
                input = 'list';
        }
        Cutils.click('//button[contains(@onclick, ' + "\'" + input + "\'" + ')][contains(@class,"text-success")]')
        Cutils.typeText('//input[@id="emailform_subject"]', 'Test Email')
        Cutils.typeText('//input[@id="emailform_name"]', 'Test Email')
        if (input == 'list') {
            Cutils.typeText('//div[@id="emailform_lists_chosen"]//input[@class="chosen-search-input default"]', 'TestSegment')
        }
        Cutils.click('//button[@id="emailform_buttons_save_toolbar"]')
        mauticGlobalPage.waitForPageLoad('Test Email')
        Cutils.click('//span[text()="Close"]')
        Cutils.IsVisible('//a[contains(text(),"Test Email")]')


    }

    static isEmailCreated() {
        return Cutils.IsVisible('//div[contains(@class,alert)]');
    }
}