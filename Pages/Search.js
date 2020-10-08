"use strict";
class Search {
    get searchBox() {
        return  cy.get('#list-search');
    }

    get selectCheckBoxForFirstItem() {
        return  cy.get('.list-checkbox').eq(0);
    }

    get OptionsDropdownForFirstItem() {
        return    cy.get('button[class="btn btn-default btn-sm dropdown-toggle btn-nospin"]').eq(0);
    }

    get deleteButtonForFirstItem() {
        return   cy.get('div[class="input-group-btn open"]>ul>li>a').contains("Delete");
    }

    get confirmDeleteButton(){
        return cy.get('button[class="btn btn-danger"]');
    }
  
}
const search = new Search();
module.exports = search;
