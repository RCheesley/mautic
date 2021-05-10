import { Cutils } from "../CommonUtils/Cutils";

export class mauticRolesPage {

    static clickNewButton() {
        Cutils.click('//a[@href="/s/roles/new"]');
    }
}
