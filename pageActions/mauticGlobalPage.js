import { Cutils } from "../CommonUtils/Cutils";

export class mauticGlobalPage {

    static goToURL(text) {
        var input_url;
        switch (text) {
            case "Contacts":
                input_url = 's/contacts';
                break;
            case "Emails":
                input_url = 's/emails';
                break;
            case "Segments":
                input_url = 's/segments';
                break;
        }
        console.log(input_url);
        Cutils.navigateTo(input_url);
    }

    static verifyPageTitle(text) {
        return Cutils.isOnPage(text);
    }

    static waitForPageLoad(text) {
        return Cutils.isContains('//h3', text);
    }
}