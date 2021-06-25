
import { Cutils } from "../CommonUtils/Cutils";
afterEach(() => {
    Cutils.IsNotExist('//div[@class="loading-bar active"]')
    cy.screenshot()
});
