/*jslint es6 */
/// <reference types="Cypress" />
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const settings = require("../../Pages/Settings");
const configuration = require("../../Pages/Configuration");

context("Configuration settings", () => {
  it("Update Email Settings", () => {
    settings.settingsMenuButton.click({force: true});
    configuration.clickOnConfiggurationSetings.click({force: true});
    configuration.waitforPageLoad();
    configuration.clickOnEmailSettings.click({force: true})
    configuration.waitforEmailSettingPageLoad()
    configuration.selectFrquencyForEmail.clear().type('5')
    configuration.clickFrequencyEach.click()
    configuration.selectFrequencyForWeek.click()
    configuration.applyEmailSetting.click()
    configuration.waitTillSettingsGetsApplied();
    configuration.clickOnEmailSettings.click({force: true})
    configuration.saveAndCloseEmailSetting.click({force: true})
    configuration.waitforSettingApplied();
    configuration.waitTillUserRedirectedToDashboard()
    configuration.closeAlert.click()
  })

  });


