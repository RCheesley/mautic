"use strict";
class Search {
    get searchBox() {
        return  cy.get('#list-search');
    }

    get selectCheckBoxForFirstItem() {
        return  cy.get('.list-checkbox').eq(0);
    }

    get OptionsDropdownForFirstItem() {
        return    cy.get('tbody > tr > :nth-child(1) > .input-group > .input-group-btn > .btn').eq(0);
    }

    get deleteButtonForFirstItem() {
        return   cy.get('td.active > .input-group > .input-group-btn > .pull-left > :nth-child(3) > a > :nth-child(1) > .fa');
    }

    get confirmDeleteButton(){
        return cy.get('.btn-danger');
    }


  
}
const search = new Search();
module.exports = search;
