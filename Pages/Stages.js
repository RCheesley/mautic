"use strict";
class Stages {
    get addNewButton() {
        return  cy.get('i[class="fa fa-plus"]');
    }

    get stageName() {
        return  cy.get('#stage_name');
    }

    get stageWeight() {
        return   cy.get('#stage_weight');
    }

    get saveAndCloseButton() {
        return   cy.get('#stage_buttons_save_toolbar');
    }
  
}
const stages = new Stages();
module.exports = stages;
