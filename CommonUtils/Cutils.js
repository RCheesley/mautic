require('cypress-xpath')
require('cypress-file-upload')
require('cypress-iframe')
export class Cutils {
    static getTime;
    static flag = false;
    //open url
    static openURL(text) {
        cy.visit(text)
    }
    //check browser tab title
    static isOnPage(text) {
        return cy.title().should('include', text)
    }
    //type any string
    static typeText(locator, text) {
        this.IsVisible(locator)
        cy.xpath(locator).clear();
        cy.xpath(locator).type(text)
    }
    //click any element
    static click(locator) {
        //this.IsVisible(locator)
        cy.xpath(locator).first().click({ force: true })
    }
    //method for hardcoded wait
    static waitForTime(value) {
        cy.wait(parseInt(value))
    }
    //navigate To Url
    static navigateTo(text) {
        cy.visit(text)
    }
    //select from drop down for dropdown with tag select
    static selectValueFromDropDown(locator, value) {
        cy.xpath(locator).select(value)
    }
    //check if element is visible dynamic wait
    static IsVisible(locator) {
        return cy.xpath(locator).should('be.visible');
    }
    //check if element is not empty
    static IsNotEmpty(locator) {
        cy.xpath(locator).should('not.be.empty');
    }
    //check if element contais text
    static isContains(locator, text) {
        cy.xpath(locator).should('contain', text);
    }
    //returns date in desired format
    static formatDate(date) {
        var d = new Date(date),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();

        if (month.length < 2)
            month = '0' + month;
        if (day.length < 2)
            day = '0' + day;

        return [year, month, day].join('-');
    }
    //drag and drop file upload
    static uploadFile(locator, fileName) {
        this.IsVisible(locator)
        cy.xpath(locator).attachFile(fileName, { subjectType: 'drag-n-drop' });
    }
    // check is element is disappered dynamic wait
    static IsNotVisible(locator) {
        return cy.xpath(locator).should('not.be.visible');
    }
    //check if element is removed from page
    static IsNotExist(locator) {
        return cy.xpath(locator).should('not.exist');
    }
    //select value from dropdown for not select type dropdowns
    static selectValueFromDropDownNonSelect(locator, text) {
        this.click(locator);
        this.typeText(locator + '//input', text);
        this.click(locator + '//li[contains(.,' + "\'" + text + "\'" + ')]')
    }
    //select value from dropdown for not select type dropdowns with keyboard enter key
    static selectValueFromDropDownNonSelectWithEnterKey(locator, text) {
        this.click(locator);
        this.typeText(locator + '//input', text);
        cy.xpath(locator + '//input').type('{enter}')
    }
    //normal file upload for input type controller 
    static uploadFileNormal(locator, fileName) {
        this.IsVisible(locator)
        cy.xpath(locator).attachFile(fileName);
    }
    //use locator as css selector here
    static typeTextInsideiFrame(locator, text) {
        cy.wait(5000)
        //cy.frameLoaded()
        cy.get('iframe[class="cke_wysiwyg_frame cke_reset"]').then($element => {
            const $body = $element.contents().find('body')
            let stripe = cy.wrap($body)
            stripe.find(locator).click().clear().type(text)
        })
    }

    static pageReload() {
        cy.reload()
    }


}