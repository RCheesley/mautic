"use strict";
class Segments {
    get addNewButton() {
        return cy.get('.std-toolbar > .btn');
    }

    get segmentName() {
        return  cy.get('#leadlist_name');
    }

    get filterTab() {
        return  cy.get('.bg-auto > [data-toggle="tooltip"] > a');
    }

    get filterDropDown(){
        return cy.get('.chosen-single > span')
    }

    get filterSearchBox(){
        return cy.get('#available_segment_filters_chosen > div > div > input');
    }

    get filterField(){
        return     cy.get('#available_segment_filters_chosen > div > ul > li.active-result.group-option.segment-filter.user');
    }

    get filterValue(){
        return   cy.get('#leadlist_filters_1_properties_filter');
    }

    get saveAndCloseButton(){
        return    cy.get('#leadlist_buttons_save_toolbar');
    }

}
const segment = new Segments();
module.exports = segment;
