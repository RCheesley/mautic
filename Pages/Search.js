"use strict";
class Search {
    get searchBox() {
        return  cy.get('#list-search');
    }

    get selectCheckBoxForFirstItem() {
        return  cy.get('.list-checkbox').eq(1);
    }

    get OptionsDropdownForFirstItem() {
        return    cy.get('button[class="btn btn-default btn-sm dropdown-toggle btn-nospin"]').eq(1);
    }

    get deleteButtonForFirstItem() {
        return   cy.get('div[class="input-group-btn open"]>ul>li').eq(2);
    }

    get confirmDeleteButton(){
        return cy.get('button[class="btn btn-danger"]');
    }
  
}
const search = new Search();
module.exports = search;
