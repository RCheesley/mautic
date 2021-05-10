import "/Users/rohit.sakhawalkar/Documents/GitHub/mc-cs-cypress/cypress/support/commands.js"
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
        cy.xpath(locator).click()
    }

    static NavigateTo(text) {
        cy.visit(text);
    }




}