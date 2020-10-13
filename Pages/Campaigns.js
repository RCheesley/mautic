"use strict";
class Campaigns {

    waitforPageLoad (){
        cy.get('h3.pull-left').should('contain', 'Campaigns');
    }

    get addNewButton() {
        return cy.get('#toolbar > div.std-toolbar.btn-group > a');
    }

    get campaignName() {
        return  cy.get('#campaign_name');
    }

    get launchCampaignBuilderButton() {
        return  cy.get('#campaign_buttons_builder_toolbar');
    }

    get saveAndCloseButton(){
        return cy.get('#campaign_buttons_save_toolbar')
    }

    get applyButton(){
        return cy.get('#campaign_buttons_apply_toolbar');
    }

    get sourceSelector(){
        return     cy.get('#SourceList');
    }

    get segmentSelector(){
        return   cy.get('#campaign_leadsource_lists_chosen>div>ul>li').eq(0);
    }

    get segmentSelectorButton(){
        return cy.get('.chosen-choices');
    }

    get addSourceCamapignButton(){
        return cy.get('#CampaignEventModal > div > div > div.modal-footer > div > button.btn.btn-default.btn-save.btn-copy');
    }

    get addStepButtonBottom(){
        return    cy.get("#CampaignCanvas > div.jtk-endpoint.jtk-endpoint-anchor-leadsource.CampaignEvent_lists.jtk-draggable.jtk-droppable");
    }

    get actionSelector() {
        return cy.get('#ActionGroupSelector > .panel > .panel-footer > .btn');
    }

    get listOfActions(){
        return cy.get('#ActionList');
    }

    get sendEmailActionName() {
        return cy.get('#campaignevent_name');
    }

    get emailTOBeSentSelector() {
        return cy.get('#campaignevent_properties_email_chosen');
    }

    get emailSearchBox(){
        return cy.get('#campaignevent_properties_email_chosen > div > div');
    }

    get firstEmailinTheSearchList(){
       return cy.get("#campaignevent_properties_email_chosen > div > ul > li.active-result.group-option.highlighted");
    }

    get addEmailButton(){
        return cy.get('.modal-form-buttons > .btn-save');
    }
    get closeBuilderButton() {
        return cy.get('.btn-close-campaign-builder');
    }

    get publishToggleYes() {
        return    cy.get(':nth-child(3) > .form-group > .choice-wrapper > .btn-group > .btn-yes');
    }

    get closeSummaryPageButton() {
        return cy.get('.std-toolbar > [href="/s/campaigns"]');
    }

}
const campaigns = new Campaigns();
module.exports = campaigns;