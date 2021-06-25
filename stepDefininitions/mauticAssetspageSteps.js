
import { When, Then } from "cypress-cucumber-preprocessor/steps";
import { mauticAssetPage } from "../pageActions/mauticAssetPage";
import { mauticAssetPage } from "cypress/pageActions/mauticAssetPage";

When(/^I type Asset title as "([^"]*)"$/, (text) => {
    mauticAssetPage.typeAssetTitle(text);
});

When(/^I Upload File "([^"]*)"$/, (text) => {
    mauticAssetPage.uploadFile(text);
});

When(/^I click Save and Close Button on Asset page$/, () => {
    mauticAssetPage.clickSaveAndCloseButton();
});

Then(/^I should see Asset file is uploaded$/, () => {
    return mauticAssetPage.isFileUplaoded();
});

When(/^I click Add New Button on Asset page$/, () => {
    mauticAssetPage.clickAddNewButton();
});

When(/^I click Edit button for "([^"]*)"$/, (text) => {
    mauticAssetPage.clickEditAsset(text);
});

When(/^I update Asset title as "([^"]*)"$/, (text) => {
    mauticAssetPage.updateAssetTitle(text);
});

When(/^I click Close Button on Asset page$/, () => {
    mauticAssetPage.clickCloseButton()
});


When(/^I Delete Asset "([^"]*)"$/, (text) => {
    mauticAssetPage.deleteAsset(text);
});

Then(/^I should see Asset "([^"]*)" is deleted$/, (text) => {
    return mauticAssetPage.isAssetDeleted(text);
});


When(/^I select Storage Location as "([^"]*)"$/, (text) => {
    mauticAssetPage.selectStorageAs(text);
});

When(/^I type Remote Asset Location$/, () => {
    mauticAssetPage.typeRemoteAssetLocation(Cypress.env("remoteUrl"));
});





