import { mauticAPICredentialsPageElements } from "../pageElements/mauticAPICredentialsPageElements";
import { Cutils } from "../CommonUtils/Cutils";
import { Cutils } from "cypress/CommonUtils/Cutils";
import { Status } from "cucumber";

export class mauticAPICredentialsPage {
    static getHostUrl = Cypress.config().baseUrl
    static appendUrl = "/oauth/v2/token"
    static public_key
    static secret_Key
    static clickAddNewButton() {
        Cutils.click(mauticAPICredentialsPageElements.addNewButton)
    }
    static selectAuthorizationProtocolAs(text) {
        Cutils.selectValueFromDropDownNonSelect(mauticAPICredentialsPageElements.AuthorizationProtocol, text)
        Cutils.IsNotExist('//div[@class="loading-bar active"]')
    }
    static typeCredentialsNameAs(text) {
        Cutils.typeText(mauticAPICredentialsPageElements.CredentialsName, text)
    }
    static typeCallbackURIAs(text) {
        Cutils.typeText(mauticAPICredentialsPageElements.CallbackURI, text)
    }
    static clickSaveAndCloseButton() {
        Cutils.click(mauticAPICredentialsPageElements.SaveAndCloseButton)
    }
    static isCredentailsCreated(text) {
        Cutils.IsVisible('//div[contains(@class,alert-growl-container)]//*[text()=' + "\'" + text + "\'" + ']')
        Cutils.IsVisible('//*[@id="app-content"]/div/div[2]/div[2]/div/table/tbody/tr/td[3]/input')
        this.public_key = cy.xpath('//*[@id="app-content"]/div/div[2]/div[2]/div/table/tbody/tr/td[3]/input').invoke("prop", "value");
        this.secret_Key = cy.xpath('//*[@id="app-content"]/div/div[2]/div[2]/div/table/tbody/tr/td[4]/input').invoke("prop", "value");
        cy.log(this.public_key)
        cy.log(this.secret_Key)
        return Cutils.IsVisible('//tr//td[contains(text(), ' + "\'" + text + "\'" + ')]')
    }
    static isResponse(text1, text2) {
        var key1 = "";
        var secret1 = "";
        cy.xpath('//*[@id="app-content"]/div/div[2]/div[2]/div/table/tbody/tr/td[3]/input').invoke("val").then((key) => {
            key1 = key;
            cy.xpath('//*[@id="app-content"]/div/div[2]/div[2]/div/table/tbody/tr/td[4]/input').invoke("val").then((secret) => {
                secret1 = secret;
                var token = "";
                cy.request({
                    method: 'POST',
                    url: this.getHostUrl + this.appendUrl,
                    failOnStatusCode: false,
                    body:
                    {
                        'grant_type': 'client_credentials',
                        'client_id': key1,
                        'client_secret': secret1
                    },
                    headers: {
                        'Content-Type': 'application/json',
                    }
                }).then(function (response) {
                    expect(response).to.have.property('status', parseInt(text1))
                    expect(response.body.errors[0].message).to.contain(text2);
                });
            });
        });
    }
    static searchCredentials(text) {
        Cutils.IsVisible(mauticAPICredentialsPageElements.filter)
        Cutils.typeText(mauticAPICredentialsPageElements.filter, text)
    }
    static deleteCredentials(text) {
        Cutils.click('//tr[1]//td[contains(text(), ' + "\'" + text + "\'" + ')]/preceding::td//div//input[@type="checkbox"]')
        Cutils.click('//tr[1]//td[contains(text(), ' + "\'" + text + "\'" + ')]/preceding::td//div[@class="input-group-btn"]')
        Cutils.click('//tr[1]//span[text()="Delete"]')
        Cutils.IsVisible('//button[text()="Delete"]')
        Cutils.click('//button[text()="Delete"]')
    }
    static areCredentialsDeleted(text) {
        return Cutils.IsNotExist('//tr[1]//td[contains(text(), ' + "\'" + text + "\'" + ')]')
    }
    static selectAuthenticationTypeAs(text) {
        Cutils.selectValueFromDropDownNonSelect(mauticAPICredentialsPageElements.AuthenticationType, text)
    }
}