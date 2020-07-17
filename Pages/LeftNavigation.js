"use strict";
class LeftNavigation {
    get contactsSection() {
        return cy.get("#mautic_contact_index > .nav-item-name");
    }
   
}
const leftNavigation = new LeftNavigation();
module.exports = leftNavigation ;
