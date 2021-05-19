
export class Cutils {
    static openURL(text) {
        cy.visit(text)
    }
    static isOnPage(text) {
        return cy.title().should('include', text)
    }
    static typeText(locator, text) {
        cy.xpath(locator).type(text)
    }
    static click(locator) {
        cy.xpath(locator).click({ force: true })
    }
    static waitForTime(value) {
        cy.wait(value)
    }
    static navigateTo(text) {
        cy.visit(text)
    }
    static selectValueFromDropDown(locator, value) {
        cy.xpath(locator).select(value)
    }
    static IsVisible(locator) {
        return cy.xpath(locator).should('be.visible');
    }
    static IsNotEmpty(locator) {
        cy.xpath(locator).should('not.be.empty');
    }
    static isContains(locator, text) {
        cy.xpath(locator).should('contain', text);
    }
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


}