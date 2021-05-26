import { When, Then, And } from "cypress-cucumber-preprocessor/steps";
import { mauticCampaignPage } from "../pageActions/mauticCampaignPage";

When(/^I click Add New Button on Campaign page$/, () => {
  mauticCampaignPage.clickAddNewButton();
});

When(/^I type Campaign title as "([^"]*)"$/, (args1) => {
  mauticCampaignPage.typeCampaignTitle(args1);
});

And(/^I click on Launch Campaign builder$/, () => {
  mauticCampaignPage.clickLaunchCampaignBuilder();
});

When(/^I select "([^"]*)" as campaign source$/, (args1) => {
  mauticCampaignPage.selectCampaignSource(args1);
});

When(/^I Select "([^"]*)" as contact source and click on add$/, (args1) => {
  mauticCampaignPage.selectSegmentSource(args1);
});

When(/^I click on campaign event list$/, () => {
  mauticCampaignPage.clickCampaignEventList();
});

And(/^I click on "([^"]*)" tab of campaign$/, (args1) => {
  mauticCampaignPage.selectEventToPerform(args1);
});

When(/^I select action as "([^"]*)" from actions list$/, (args1) => {
  mauticCampaignPage.selectActionFromDropDown(args1);
});

And(/^I add event name "([^"]*)" and channel as "([^"]*)"$/, (args1, args2) => {
  mauticCampaignPage.addContactInDNC(args1, args2);
});

And(/^I add event name "([^"]*)" and add "([^"]*)" points$/, (args1, args2) => {
  mauticCampaignPage.adjustContactsPoints(args1, args2);
});

And(/^I apply changes to builder and close the builder$/, () => {
  mauticCampaignPage.applyChangesToBuilder();
});

Then(/^I publish the campaign and save it$/, () => {
  mauticCampaignPage.Publish_SaveTheCampaign();
});

And(/^I wait for 10 sec to apply campaign action on segments contacts$/, () => {
  mauticCampaignPage.hardCodedWaitAddedforCampaignGetsPublished();
});

When(/^I click on "([^"]*)" tab$/, (args1) => {
  mauticCampaignPage.selectCampaignTab(args1);
});

And(/^verify that campaign is executed successfully$/, () => {
  mauticCampaignPage.isCampaignExecutedSuccessfully();
});

When(/^I click on first contact under campaign contacts$/, () => {
  mauticCampaignPage.selectAndClickOnFirstContactUnderCampaign();
});

Then(/^I check that contact "([^"]*)" do not contact label$/, (args1) => {
  mauticCampaignPage.checkThatConatctHasDoNotContactLabel(args1);
});

Then(/^I check "([^"]*)" event is triggered for the contact$/, (args1) => {
  mauticCampaignPage.selectIncludeEventsBySource(args1);
});

Then(
  /^I check that events triggered successfully Event Name "([^"]*)" and Event Type "([^"]*)" and Event Timestamp "([^"]*)"$/,
  (args1, args2, args3) => {
    mauticCampaignPage.checkEventsTriggeredSuccessfullyContactHistory(
      args1,
      args2,
      args3
    );
  }
);

Then(/^I check that contact has gained "([^"]*)"$/, (args1) => {
  mauticCampaignPage.checkContactGainPoints(args1);
});

When(/^I search campaign "([^"]*)"$/, (args1) => {
  mauticCampaignPage.searchCampaign(args1);
});

When(/^I delete campaign "([^"]*)"$/, (args1) => {
  mauticCampaignPage.deleteCampaign(args1);
});

Then(/^I should see campaign "([^"]*)" is deleted$/, (args1) => {
  mauticCampaignPage.isCampaignDeleted(args1);
});
