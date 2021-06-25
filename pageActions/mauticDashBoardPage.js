import { mauticDashBoardPageElements } from "../pageElements/mauticDashBoardPageElements";
import { Cutils } from "../CommonUtils/Cutils";
import { Cutils } from "cypress/CommonUtils/Cutils";


export class mauticDashBoardPage {
    static selectOptionFromSettings(input) {
        Cutils.click(mauticDashBoardPageElements.SettingsIcon)
        Cutils.IsVisible('//span[text()= ' + "\'" + input + "\'" + ']')
        Cutils.click('//span[text()= ' + "\'" + input + "\'" + ']')
    }

    static clickOptionOnLeftNavigationBar(text) {
        Cutils.IsVisible('//*[@class="app-sidebar sidebar-left"]//span[text()=' + "\'" + text + "\'" + ']');
        Cutils.click('//*[@class="app-sidebar sidebar-left"]//span[text()=' + "\'" + text + "\'" + ']');
    }
    static logOutApplication() {
        Cutils.click(mauticDashBoardPageElements.userIcon)
        Cutils.click(mauticDashBoardPageElements.logOut)
    }
    static isOptionPresent(text) {
        return Cutils.IsVisible('//*[@class="app-sidebar sidebar-left"]//span[text()=' + "\'" + text + "\'" + ']')
    }
}