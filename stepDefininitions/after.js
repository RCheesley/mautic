
import { After, Status, Before } from "cypress-cucumber-preprocessor";
afterEach(() => {
    cy.screenshot()
});
