"use strict";
class Settings {
    get settingsMenuButton() {
        return cy.get('.navbar-right > :nth-child(2) > a > .fa');
    }

    get customFieldSection() {
        return cy.get('#mautic_lead_field > .nav-item-name');
    }

    get themesSection() {

        return cy.get('#mautic_themes_index > .nav-item-name');
    }

    get apiSection(){
        return cy.get('#mautic_client_index > .nav-item-name');
    }

    get categoriesSection(){
        return cy.get('#mautic_category_index > .nav-item-name');
    }

    get configSection() {

        return cy.get('#mautic_config_index > .nav-item-name');
    }

    get usersSection() {

        return cy.get('#mautic_user_index > .nav-item-name');
    }

    get rolesSection() {
        return cy.get('#mautic_role_index > .nav-item-name');
    }

    get webhookSection() {
    
        return cy.get('#mautic_webhook_root > .nav-item-name')
    
   }

   get customObjectsSection(){
       return cy.get('#mautic_custom_object_list > .nav-item-name');
   }

   get pluginsSection(){
       return cy.get('#mautic_plugin_root > .nav-item-name');
   }

}
const settings = new Settings();
module.exports = settings ;
