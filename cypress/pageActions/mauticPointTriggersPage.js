import { mauticPointTriggersPageElements } from "../pageElements/mauticPointTriggersPageElements";
import { Cutils } from "../CommonUtils/Cutils";
import { Cutils } from "cypress/CommonUtils/Cutils";

export class mauticPointTriggersPage {
    static getMailId;
    static clickAddNewButton() {
        Cutils.click(mauticPointTriggersPageElements.addNewButton)
    }
    static typePointTriggersNameAs(text) {
        Cutils.typeText(mauticPointTriggersPageElements.PointTriggersName, text)
    }
    static typeMinimumNumberOfPointsAs(text) {
        Cutils.typeText(mauticPointTriggersPageElements.MinimumNumberOfPoints, text)
    }
    static selectPublishedOptionAs(text) {
        Cutils.click('//label[text()="Published"]/following::label//span[text()=' + "\'" + text + "\'" + ']')
    }
    static clickTab(text) {
        Cutils.click('//a[text()=' + "\'" + text + "\'" + ']')
    }
    static clickAddAnEventButton() {
        Cutils.click(mauticPointTriggersPageElements.AddAnEventButton)
    }
    static selectEvent(text) {
        Cutils.click('//li//span[text()=' + "\'" + text + "\'" + ']');
    }
    static selectSendEmail(text) {
        Cutils.selectValueFromDropDownNonSelect(mauticPointTriggersPageElements.SendEmail, text)
    }
    static clickAddButtonOnPointTriggersPagePopUp() {
        Cutils.click(mauticPointTriggersPageElements.AddButtonOnPointTriggersPagePopUp)
        Cutils.IsNotVisible(mauticPointTriggersPageElements.AddButtonOnPointTriggersPagePopUp)
    }
    static clickSaveAndCloseButton() {
        Cutils.click(mauticPointTriggersPageElements.saveAndCloseButton)
    }
    static isPointTirggerCreated(text) {
        Cutils.IsVisible('//div[contains(@class,alert-growl-container)]//*[text()=' + "\'" + text + "\'" + ']')
        Cutils.IsVisible(mauticPointTriggersPageElements.filter)
        Cutils.typeText(mauticPointTriggersPageElements.filter, text)
        return Cutils.IsVisible('//tr[1]//a[contains(text(), ' + "\'" + text + "\'" + ')]')
    }
    static editTrigger(text) {
        Cutils.IsVisible('//tr//a[contains(text(), ' + "\'" + text + "\'" + ')]')
        Cutils.click('//tr//a[contains(text(), ' + "\'" + text + "\'" + ')]')
    }

    static isEmailTriggered(text1, text2) {
        Cutils.waitForTime('5000')
        cy.request({
            method: "GET",
            url: Cypress.env("mailtestUrl") + text2,
        }).then(function (response) {
            expect(response).to.have.property("status", 200);
            expect(response.body).to.not.be.null;
            expect(response.body[0]).to.have.property("mailbox", text2);
            expect(response.body[0]).to.have.property("subject", text1);
            expect(response.body[0]).to.have.property("seen", false);
            const body = response.body[0];
            this.getMailId = body["id"];
        });
    }
    static deleteEmailFromMailBox(text) {
        cy.request({
            method: "DELETE",
            url: Cypress.env("mailtestUrl") + text + "/" + this.getMailId,
        }).then(function (response) {
            expect(response).to.have.property("status", 200);
        });
    }

    static searchPointTrigger(text) {
        Cutils.IsVisible(mauticPointTriggersPageElements.filter)
        Cutils.typeText(mauticPointTriggersPageElements.filter, text)
    }

    static deletePointTrigger(text) {
        Cutils.click('//tr[1]//a[contains(text(), ' + "\'" + text + "\'" + ')]/preceding::td//div//input[@type="checkbox"]')
        Cutils.click('//tr[1]//a[contains(text(), ' + "\'" + text + "\'" + ')]/preceding::td//div[@class="input-group-btn"]')
        Cutils.click('//tr[1]//span[text()="Delete"]')
        Cutils.IsVisible('//button[text()="Delete"]')
        Cutils.click('//button[text()="Delete"]')
    }

    static isPointTriggerDeleted(text) {
        return Cutils.IsNotExist('//tr[1]//a[contains(text(), ' + "\'" + text + "\'" + ')]')
    }

}