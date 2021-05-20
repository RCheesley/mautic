import { mauticDashBoardPageElements } from "../pageElements/mauticDashBoardPageElements";
import { Cutils } from "../CommonUtils/Cutils";


export class mauticDashBoardPage {
    static selectOptionFromSettings(input) {
        Cutils.click(mauticDashBoardPageElements.SettingsIcon)
        Cutils.IsVisible('//span[text()= ' + "\'" + input + "\'" + ']')
        Cutils.click('//span[text()= ' + "\'" + input + "\'" + ']')
    }
}