"use strict";
class LeftNavigation {
    get contactsSection() {
        return cy.get("#mautic_contact_index > .nav-item-name");
    }

    get companySection() {
        return cy.get("#mautic_company_index > .nav-item-name");
    }

    get StagesSection() {

        return cy.get('#mautic_stage_index > .nav-item-name');
    }

    get SegmentsSection() {

        return cy.get('#mautic_segment_index > .nav-item-name');
    }

}
const leftNavigation = new LeftNavigation();
module.exports = leftNavigation ;
