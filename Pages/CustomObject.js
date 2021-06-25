"use strict";
class CustomObject {

    get addNewButton() {
        return  cy.get('a[href*="/new"]');
    }

    get addNewCustomObjectInstance() {
        return  cy.get('a[href*="item/new"]');
    }

    get addNewInstanceWithCustomObject() {
        return  cy.get('#custom_item_name');
    }

    get typeNumberForInstanceCreated() {
        return  cy.get('input[id*="custom_item_custom_field_values"]');
    }

    get typeAndSearchObjectCreated() {
        return  cy.get('div[id*="custom_item_custom_field_values_"]>ul>li');
    }

    get selectSearchedPropertyOfCustomObject() {
        return  cy.get('div[id*="custom_item_custom_field_values_"]>div>ul>li');
    }

    get saveAndCloseInstanceCreated() {
        return   cy.get('#custom_item_buttons_save_toolbar');
    }

    waitforNewObjectGetsLoaded(){
        cy.get('div[class="content-body"]>div>div>div>h3').should('contain', 'New Custom Object').should('be.visible');
    }

    waitforEditCustomObjectPageVisible(){
        cy.get('div[class="content-body"]>div>div>div>h3').should('contain', 'Edit Custom Object').should('be.visible');
    }

    get nameSignular() {
        return  cy.get('#custom_object_nameSingular');
    }

    get namePlural() {
        return  cy.get('#custom_object_namePlural');
    }

    get fieldsOptions() {
        return   cy.get('a[href*="fields-container"]');
    }

    waitforFieldsOptionGetsVisble(){
        cy.get('#form-field-placeholder>p').should('be.visible');
    }

    get clickOnSearchBoxForField() {
        return   cy.get('#mauticforms_fields>div>div>div>a>span');
    }

    get typeAndSearchForField() {
        return   cy.get('input[class="chosen-search-input"]').eq(0);
    }

    get selectTheFirstSearchedField() {
        return   cy.get('div[class="chosen-container chosen-container-single chosen-with-drop chosen-container-active"]>div>ul>li');
    }

    get selectTheFirstFromPresentList() {
        return   cy.get('div[class="chosen-container chosen-container-single chosen-with-drop chosen-container-active"]>div>ul>li').eq(0);
    }

    waitforSelectedFieldPopUpGetsVisible(){
        cy.get('div[class="modal-body-content"]>div>div>h3').should('be.visible');
    }

    get addTheLabelForField() {
        return   cy.get('#custom_field_label');
    }

    get clickOnPropertiesTab() {
        return   cy.get('a[href*="properties"]');
    }

    get clickOnAddValue() {
        return   cy.get('#custom_field_options_additem');
    }

    get AddFirstLabelForProperties() {
        return   cy.get('input[id*="0_label"]');
    }

    get AddSecondLabelForProperties() {
        return   cy.get('input[id*="1_label"]');
    }

    get AddThirdLabelForProperties() {
        return   cy.get('input[id*="2_label"]');
    }

    get AddFourthLabelForProperties() {
        return   cy.get('input[id*="3_label"]');
    }

    get AddFirstValueForProperties() {
        return   cy.get('input[id*="0_value"]');
    }

    get AddSecondValueForProperties() {
        return   cy.get('input[id*="1_value"]');
    }

    get AddThirdValueForProperties() {
        return   cy.get('input[id*="2_value"]');
    }

    get AddFourthValueForProperties() {
        return   cy.get('input[id*="3_value"]');
    }

    get saveAndCloseButton() {
        return   cy.get('div[class="modal-form-buttons"]>button[class*="save"]');
    }

    get saveAndClose() {
        return   cy.get('#custom_object_buttons_save_toolbar');
    }

    get clickOnCreatedCustomObject() {
        return   cy.get('#custom-objects-table>tbody>tr>td>div>a');
    }

    get editCustomObject() {
        return   cy.get('a[href*="object/edit"]');
    }

    get clickToEditMultiSelect() {
        return   cy.get('button[href*="multiselect"]');
    }

    get selectFirstCheckbox() {
        return   cy.get('input[type="checkbox"]').eq(1);
    }

    get clickOnFirstDropdown() {
        return   cy.get('#custom-objects-table>tbody>tr>td>div>div>button');
    }

    get selectCreatedCustomObject() {
        return   cy.get('#mautic_custom_object_list_child>li>a>span');
    }
    
    waitforPageLoad(){
        cy.get('div[class="content-body"]>div>div>div>h3').should('contain', 'Custom Objects').should('be.visible');
    }

    waitForCustomObjectPageLoad(){
        cy.get('div[class="content-body"]>div>div>div>h3').should('be.visible');
    }

    waitforCustomebject(){
        cy.get('span[class="tt-u label label-success"]').should('be.visible');
    }

    waitTillClickedCustomObjectGetsLoaded(){
        cy.get('#custom_object_buttons_save_toolbar').should('be.visible');
    }

    waitTillClickedInstanceCustomObjectGetsOpened(){
        cy.get('#custom_item_buttons_save_toolbar').should('be.visible');
    }
  
}
const customObject = new CustomObject();
module.exports = customObject;
