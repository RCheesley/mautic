
import { When } from "cypress-cucumber-preprocessor/steps";
import { mauticContactsPage } from "../pageActions/mauticContactsPage";
import { mauticContactsPageElements } from "cypress/pageElements/mauticContactsPageElements";

When(/^I add Contact$/, () => {
    mauticContactsPage.createContact();
});


Then(/^I should see Contact is Created$/, () => {
    return mauticContactsPage.isContactCreated();
});


When(/^I click Add New Button on Contact Page$/, () => {
    mauticContactsPage.clickAddNewButton();
});

When(/^I type Contact Title as "([^"]*)"$/, (text) => {
    mauticContactsPage.typeTitleAs(text);
});

When(/^I type Contact First Name as "([^"]*)"$/, (text) => {
    mauticContactsPage.typeContactFirstNameaAs(text);

});

When(/^I type Conact Last Name as "([^"]*)"$/, (text) => {
    mauticContactsPage.typeContactLastNameaAs(text);

});

When(/^I type Conatct email as "([^"]*)"$/, (text) => {
    mauticContactsPage.typeContactEmailAs(text);

});

When(/^I click Save Button on Contact Page$/, () => {
    mauticContactsPage.clickSaveButton();
});

When(/^I click Close Button on Contact Page$/, () => {
    mauticContactsPage.clickCloseButton();
});

Then(/^I should see "([^"]*)" Contact is Created$/, (text) => {
    mauticContactsPage.isContactCreated(text);
});

When(/^I search Contact as "([^"]*)"$/, (text) => {
    mauticContactsPage.searchContact(text)
});

When(/^I edit the "([^"]*)" Contact$/, (text) => {
    mauticContactsPage.editContact(text)
});

When(/^I type Contact City as "([^"]*)"$/, (text) => {
    mauticContactsPage.typeContactCity(text)
});

When(/^I Type Contact Zip Code as "([^"]*)"$/, (text) => {
    mauticContactsPage.typeContactZipCity(text)
});

Then(/^I should see Contact is Updated as "([^"]*)"$/, (text) => {
    mauticContactsPage.isContactCreated(text);
});


When(/^I delete the "([^"]*)" Contact$/, (text) => {
    mauticContactsPage.deleteContact(text);
});

Then(/^I should see Contact "([^"]*)" is deleted$/, (text) => {
    return mauticContactsPage.isContactDeleted(text);
});

When(/^I click On "([^"]*)" Contact option$/, (text) => {
    mauticContactsPage.clickOption(text);
});

When(/^I upload "([^"]*)" contact file$/, (text) => {
    mauticContactsPage.uploadFile(text);
});

When(/^I click Upload Button on Contact Page$/, () => {
    mauticContactsPage.clickUploadButton();
});

When(/^I click Import Button on Contact Page$/, () => {
    mauticContactsPage.clickImportButton();
});

When(/^I select mapping option for Company as "([^"]*)"$/, (text) => {
    mauticContactsPage.selectMappingOptionForCompanyAs(text);
});

Then(/^I should see "([^"]*)" file upload status is "([^"]*)"$/, (fileName, status) => {
    return mauticContactsPage.isStatusDisplayed(fileName, status);
});










