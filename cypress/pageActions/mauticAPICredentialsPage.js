import { mauticAPICredentialsPageElements } from "../pageElements/mauticAPICredentialsPageElements";
import { Cutils } from "../CommonUtils/Cutils";
import { Cutils } from "cypress/CommonUtils/Cutils";
const bearerToken, getContactId, getCreatedContactId;
export class mauticAPICredentialsPage {
    static getHostUrl = Cypress.config().baseUrl
    static appendUrl = "/oauth/v2/token";
    static contactsEndPoint = "/api/contacts";
    static createContactEndPoint = "/api/contacts/new";
    static apiKey = "";
    static apiSecretValue = "";
    static flag = true;


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
    static getCredentials() {
        cy.xpath('//*[@id="app-content"]/div/div[2]/div[2]/div/table/tbody/tr/td[3]/input').invoke("val").then((text1) => {
            this.apiKey = text1
        })

        cy.xpath('//*[@id="app-content"]/div/div[2]/div[2]/div/table/tbody/tr/td[4]/input').invoke("val").then((text2) => {
            this.apiSecretValue = text2
        })
    }
    static makeAuthAPICall() {
        var value
        cy.request({
            method: 'POST',
            url: this.getHostUrl + this.appendUrl,
            body:
            {
                'grant_type': 'client_credentials',
                'client_id': this.apiKey,
                'client_secret': this.apiSecretValue
            },
            headers: {
                'Content-Type': 'application/json',
            }
        }).then((response) => {
            expect(response).to.have.property('status', 200)
            expect(response.body).to.not.be.null
            value = response.body.access_token
            bearerToken = value
            cy.log(value)
            cy.log(bearerToken)
        })
        cy.log(bearerToken)

    }
    static isBearerTokenGenerated() {
        if (bearerToken !== null && bearerToken !== '') {
            return true
        }
        return false
    }
    static makeAuthAPICallWithInvalidCredentials() {
        cy.request({
            method: 'POST',
            url: this.getHostUrl + this.appendUrl,
            failOnStatusCode: false,
            body:
            {
                'grant_type': 'client_credentials',
                'client_id': 'api3_3f8iroo7dzgg4oocsok0ocowcso0sss4sw888ko0ow4cswgwwcKey',
                'client_secret': '2ozt6ozkqwow0sgcg448gsoow0skws8cw00sg4osswsw84c88w'
            },
            headers: {
                'Content-Type': 'application/json',
            }
        }).then(function (response) {
            expect(response).to.have.property('status', 400)
            expect(response.body).to.not.be.null
            expect(response.body.errors[0].message).to.contain("The client credentials are invalid");
            mauticAPICredentialsPage.flag = false;
        })
    }
    static isError() {
        if (this.flag !== true) {
            return true
        }
        return false
    }
    static makeAPIcallToCreateContact() {
        var count = 0
        cy.request({
            method: 'GET',
            url: this.getHostUrl + this.contactsEndPoint,
            headers: {
                'Content-Type': 'application/json',
                'Connection': 'keep-alive',
                'Authorization': 'Bearer ' + bearerToken
            }
        }).then((response) => {
            expect(response).to.have.property('status', 200)
            expect(response.body).to.not.be.null
            Object.keys(response.body.contacts).forEach((key) => {
                if (count == 0) {
                    getContactId = response.body.contacts[key].id
                    count++
                }
            })
        })
    }

    static isCountryFieldEmpty() {
        cy.request({
            method: 'GET',
            url: this.getHostUrl + this.contactsEndPoint + '/' + getContactId,
            headers: {
                'Content-Type': 'application/json',
                'Connection': 'keep-alive',
                'Authorization': 'Bearer ' + bearerToken
            }
        }).then(function (response) {
            expect(response).to.have.property('status', 200)
            expect(response.body).to.not.be.null
            expect(response.body.contact).has.property('id', getContactId)
            expect(response.body.contact.fields.core.country).has.property('value', null)
        })
    }

    static updateContactCountryFieldWithValue(text) {
        cy.request({
            method: 'PATCH',
            url: this.getHostUrl + this.contactsEndPoint + '/' + getContactId + '/edit',
            body:
            {
                "country": text
            },
            headers: {
                'Content-Type': 'application/json',
                'Connection': 'keep-alive',
                'Authorization': 'Bearer ' + bearerToken
            }
        }).then(function (response) {
            expect(response).to.have.property('status', 200)
            expect(response.body).to.not.be.null
            expect(response.body.contact).has.property('id', getContactId)
            expect(response.body.contact.fields.core.country).has.property('value', text)
        })
    }

    static isUpdatedWithValue(text) {
        cy.request({
            method: 'GET',
            url: this.getHostUrl + this.contactsEndPoint + '/' + getContactId,
            headers: {
                'Content-Type': 'application/json',
                'Connection': 'keep-alive',
                'Authorization': 'Bearer ' + bearerToken
            }
        }).then(function (response) {
            expect(response).to.have.property('status', 200)
            expect(response.body).to.not.be.null
            expect(response.body.contact).has.property('id', getContactId)
            expect(response.body.contact.fields.core.country).has.property('value', text)
        })
    }

    static makeAPIcallToCreateContactWithDetails(text1, text2, text3) {
        cy.request({
            method: 'POST',
            url: this.getHostUrl + this.createContactEndPoint,
            headers: {
                'Content-Type': 'application/json',
                'Connection': 'keep-alive',
                'Authorization': 'Bearer ' + bearerToken
            },
            body:
            {
                "firstname": text1,
                "lastname": text2,
                "email": text3
            }
        }).then(function (response) {
            expect(response.body).to.not.be.null
            getCreatedContactId = response.body.contact.id
            expect(response).to.have.property('status', 201)
        })
    }
    static isContactCreatedusingAPI() {
        cy.request({
            method: 'GET',
            url: this.getHostUrl + this.contactsEndPoint + '/' + getCreatedContactId,
            headers: {
                'Content-Type': 'application/json',
                'Connection': 'keep-alive',
                'Authorization': 'Bearer ' + bearerToken
            }
        }).then(function (response) {
            expect(response).to.have.property('status', 200)
            expect(response.body).to.not.be.null
            expect(response.body.contact).has.property('id', getCreatedContactId)
        })
    }

    static deleteContact() {
        cy.request({
            method: 'DELETE',
            url: this.getHostUrl + this.contactsEndPoint + '/' + getCreatedContactId + '/delete',
            headers: {
                'Content-Type': 'application/json',
                'Connection': 'keep-alive',
                'Authorization': 'Bearer ' + bearerToken
            }
        }).then(function (response) {
            expect(response).to.have.property('status', 200)
            expect(response.body).to.not.be.null
            expect(response.body.contact).has.property('id', null)
        })
    }
    static isContactDeleted() {
        cy.request({
            method: 'GET',
            url: this.getHostUrl + this.contactsEndPoint + '/' + getCreatedContactId,
            failOnStatusCode: false,
            headers: {
                'Content-Type': 'application/json',
                'Connection': 'keep-alive',
                'Authorization': 'Bearer ' + bearerToken
            }
        }).then(function (response) {
            expect(response).to.have.property('status', 404)
        })
    }
}