/*jslint es6 */
/// <reference types="Cypress" />
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

const settings = require("../../Pages/Settings");
const search =require("../../Pages/Search");
const customObject =require("../../Pages/CustomObject");

var carCustomObjectc = "Cars";
context("Create a custom object", () => {

  it("Create a new custom object", () => {
    settings.settingsMenuButton.click();
    settings.customObjectsSection.click();
    customObject.waitforPageLoad();
    customObject.addNewButton.click();
    customObject.waitforNewObjectGetsLoaded();
    customObject.nameSignular.type('Car');
    customObject.namePlural.type(carCustomObjectc);
    customObject.fieldsOptions.click();
    customObject.waitforFieldsOptionGetsVisble();
    customObject.clickOnSearchBoxForField.click();
    customObject.typeAndSearchForField.type('Multiselect');
    customObject.selectTheFirstSearchedField.click();
    customObject.waitforSelectedFieldPopUpGetsVisible();
    customObject.addTheLabelForField.type('Model');
    customObject.clickOnPropertiesTab.click();
    customObject.clickOnAddValue.click();
    customObject.AddFirstLabelForProperties.type('BMW');
    customObject.AddFirstValueForProperties.type('BMW');
    customObject.clickOnAddValue.click();
    customObject.AddSecondLabelForProperties.type('Audi');
    customObject.AddSecondValueForProperties.type('Audi');
    customObject.clickOnAddValue.click();
    customObject.AddThirdLabelForProperties.type('Honda');
    customObject.AddThirdValueForProperties.type('Honda');
    customObject.saveAndCloseButton.click();

    customObject.clickOnSearchBoxForField.click();
    customObject.typeAndSearchForField.type('Number');
    customObject.selectTheFirstFromPresentList.click();
    customObject.waitforSelectedFieldPopUpGetsVisible();
    customObject.addTheLabelForField.type('Car Number');
    customObject.saveAndCloseButton.click();
    customObject.saveAndClose.click();
    customObject.waitforCustomebject();
  });

  it("Edit newly added custom object", () => {
    settings.settingsMenuButton.click();
    settings.customObjectsSection.click();
    customObject.waitforPageLoad();
    customObject.clickOnCreatedCustomObject.contains(carCustomObjectc).click();
    customObject.waitforCustomebject();
    customObject.editCustomObject.click();
    customObject.waitTillClickedCustomObjectGetsLoaded();
    customObject.fieldsOptions.click();
    customObject.clickToEditMultiSelect.click();
    customObject.waitforSelectedFieldPopUpGetsVisible();
    customObject.clickOnPropertiesTab.click();
    customObject.clickOnAddValue.click();
    customObject.AddFourthLabelForProperties.type('Porsche');
    customObject.AddFourthValueForProperties.type('Porsche');
    customObject.saveAndCloseButton.click();
    customObject.waitforEditCustomObjectPageVisible();
    customObject.saveAndClose.click();
    customObject.waitforCustomebject();
  });
  
  it("Search and delete newly added custom object", () => {
    settings.settingsMenuButton.click();
    settings.customObjectsSection.click();
    customObject.waitforPageLoad();
    customObject.selectFirstCheckbox.click();
    customObject.clickOnFirstDropdown.click();
    search.deleteButtonForFirstItem.click();
    search.confirmDeleteButton.click();
  });
});
