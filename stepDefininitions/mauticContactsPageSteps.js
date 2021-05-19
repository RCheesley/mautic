
import { When } from "cypress-cucumber-preprocessor/steps";
import { mauticContactsPage } from "../pageActions/mauticContactsPage";

When(/^I add Contact$/, () => {
    mauticContactsPage.createContact();
});


Then(/^I should see Contact is Created$/, () => {
    return mauticContactsPage.isContactCreated();
});

