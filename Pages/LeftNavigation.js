"use strict";
class LeftNavigation {
    get contactsSection() {
        return cy.get("#mautic_contact_index > .nav-item-name");
    }

    get companySection() {
        return cy.get("#mautic_company_index > .nav-item-name");
    }

    get componentsSection() {

        return cy.get("#mautic_components_root > span.nav-item-name.text.pull-left");
    }

    get formsSubSection(){
        return cy.get("#mautic_form_index");
    }

    get landingPagesSubSection(){
        return cy.get('#mautic_page_index');
    }

    get StagesSection() {

        return cy.get('#mautic_stage_index > .nav-item-name');
    }

    get SegmentsSection() {

        return cy.get('#mautic_segment_index > .nav-item-name');
    }

    get PointsSection() {
    
        return cy.get('#mautic_points_root')
    
   }
}
const leftNavigation = new LeftNavigation();
module.exports = leftNavigation ;
