
import { When, Then } from "cypress-cucumber-preprocessor/steps";
import { mauticAssetPage } from "../pageActions/mauticAssetPage";

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

