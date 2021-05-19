
import { When } from "cypress-cucumber-preprocessor/steps";
import { mauticEmailsPage } from "../pageActions/mauticEmailsPage";


When(/^I add Sample "([^"]*)" email$/, (text) => {
    mauticEmailsPage.CreateEmails(text);
});

Then(/^I should see Tempalate is created$/, () => {
    return mauticEmailsPage.isEmailCreated();
});

