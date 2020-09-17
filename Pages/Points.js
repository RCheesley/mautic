"use strict";
class Points {
  
    get manageActionSection() {
        return  cy.get('#mautic_point_index > span');
    }

 

    

    get addNewActionButton() {
        return   cy.get('#toolbar > div.std-toolbar.btn-group > a > span > span');
    }


    get actionName() {
        return   cy.get('#point_name');
    }

    get pointsToBeChanged() {
        return cy.get('#point_delta');
    }

    get actionDropDown() {
        return cy.get('#point_type_chosen > .chosen-single > span');
    }

    get opensAnEmailOption(){
        return cy.get('#point_type_chosen > div > ul > li').eq(4);
    }
 
    get saveAndCloseButton() {
        return   cy.get('#point_buttons_save_toolbar');
    }
    
    get manageTriggerSection() {
        return  cy.get('#mautic_pointtrigger_index > span');
    }

    
    get addNewPointsTriggerButton() {
        return  cy.get('#toolbar > div.std-toolbar.btn-group > a');
    }
  
    get triggerName(){
        return cy.get('#pointtrigger_name');
    }

    get triggerPoints() {
        return cy.get('#pointtrigger_points');
    }

    get eventsTab(){
        return cy.get('#app-content > div.content-body > form > div.box-layout > div.col-md-9.bg-white.height-auto > div > div > ul > li:nth-child(2) > a')
    }

    get addEventButton() {
        return cy.get('#triggerEvents > div.mb-md > div > button');
    }

    get sendEmailEvent(){
        return cy.get('#triggerEvents > div.mb-md > div > ul > li').eq(8);

    }

    get eventName() {

        return cy.get('#pointtriggerevent_name')
    }

    get emailSelector() {
        return cy.get('#pointtriggerevent_properties_email_chosen > a')
    }

    get firstEmail() {
        return cy.get('#pointtriggerevent_properties_email_chosen > div > ul > li').eq(2);
    }

    get addButton() {
        return cy.get('.modal-form-buttons > .btn-save');
    }

    get saveAndCloseTriggerButton() {
        return cy.get('#pointtrigger_buttons_save_toolbar');
    }
}

const points = new Points();
module.exports = points;
