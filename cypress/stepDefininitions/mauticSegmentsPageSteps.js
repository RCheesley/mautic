
import { When } from "cypress-cucumber-preprocessor/steps";
import { mauticSegments } from "../pageActions/mauticSegments";


When(/^I add Sample Segment based on "([^"]*)"$/, (text) => {
    mauticSegments.createSegment(text);
});

Then(/^I should see Segment is created$/, () => {
    return mauticSegments.isSegmentCreated();
});

When(/^I click Add New Button on Contact Segments page$/, () => {
    mauticSegments.clickAddNeButton();
});

When(/^I type Segment Name as "([^"]*)"$/, (text) => {
    mauticSegments.typeSegmentNameAs(text);
});

When(/^I Click on "([^"]*)" tab on Contact Segments page$/, (text) => {
    mauticSegments.clickTab(text);
});

When(/^I choose Filter as "([^"]*)" on Contact Segments page$/, (text) => {
    mauticSegments.chooseFilterAs(text);
});

When(/^I choose Filter Condition as "([^"]*)" on Contact Segments page$/, (text) => {
    mauticSegments.chooseFilterConditionAs(text);
});

When(/^I choose Filter Value as "([^"]*)" on Contact Segments page$/, (text) => {
    mauticSegments.chooseFilterValueAs(text);
});

When(/^I click Save and Close Button on Contact Segments page$/, () => {
    mauticSegments.clickSaveAndCloseButton();
});


Then(/^I should see Segment "([^"]*)" has "([^"]*)" contacts added to it$/, (text1, text2) => {
    return mauticSegments.isContactAddedToSegment(text1, text2);
});


Then(/^I should be see Contact Segment "([^"]*)" is created$/, (text) => {
    return mauticSegments.isSegmentCreated(text);
});

When(/^I edit Contact Segment "([^"]*)"$/, (text) => {
    mauticSegments.editSegment(text);
});

When(/^I click Close Button on Contact Segment Page$/, () => {
    mauticSegments.clickCloseButton();
});


When(/^I search Contact Segment as "([^"]*)"$/, (text) => {
    mauticSegments.searchContactSegment(text);
});

When(/^I delete Contact Segments "([^"]*)"$/, (text) => {
    mauticSegments.deleteContactSegment(text)
});

Then(/^I should see "([^"]*)" is deleted$/, (text) => {
    return mauticSegments.isContactSegmentDeleted(text);
});


When(/^I choose Filter as "([^"]*)" "([^"]*)" at "([^"]*)" on Contact Segments page$/, (type, filter, index) => {
    mauticSegments.chooseFilterWithAddtionalParamsAs(type, filter, index);
});








