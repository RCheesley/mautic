
import { When } from "cypress-cucumber-preprocessor/steps";
import { mauticSegments } from "../pageActions/mauticSegments";


When(/^I add Sample Segment based on "([^"]*)"$/, (text) => {
    mauticSegments.createSegment(text);
});

Then(/^I should see Segment is created$/, () => {
    return mauticSegments.isSegmentCreated();
});

