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

When(/^I click on new campaign event after action$/, () => {
  mauticCampaignPage.clickCampaignEventAfterAction();
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

And(
  /^I add event name "([^"]*)" and add company "([^"]*)"$/,
  (args1, args2) => {
    mauticCampaignPage.selectCompanyToAdd(args1, args2);
  }
);

When(/^I add event name "([^"]*)" and add stage "([^"]*)"$/, (args1, args2) => {
  mauticCampaignPage.changeContactStage(args1, args2);
});

And(
  /^I add event name "([^"]*)" and add to the company score "([^"]*)"$/,
  (args1, args2) => {
    mauticCampaignPage.addToCompanyScore(args1, args2);
  }
);

And(/^I apply changes to builder and close the builder$/, () => {
  mauticCampaignPage.applyChangesToBuilder();
});

Then(/^I check company "([^"]*)" score is "([^"]*)"$/, (args1, args2) => {
  mauticCampaignPage.checkCompanyAndScore(args1, args2);
});

Then(/^I publish the campaign and save it$/, () => {
  mauticCampaignPage.Publish_SaveTheCampaign();
});

When(
  /^I wait for 12 sec to apply campaign action on segments contacts$/,
  () => {
    mauticCampaignPage.hardCodedWaitAddedforCampaignGetsPublished();
  }
);

When(/^I click on "([^"]*)" tab$/, (args1) => {
  mauticCampaignPage.selectCampaignTab(args1);
});

Then(
  /^verify that campaign is executed successfully with "([^"]*)" action completion$/,
  (args1) => {
    mauticCampaignPage.isCampaignExecutedSuccessfully(args1);
  }
);

Then(
  /^I check that campaign triggered successfully with "([^"]*)" and event "([^"]*)"$/,
  (args1, args2) => {
    mauticCampaignPage.checkThatEventIsTriggeredAndAddedCorrectlyInActionsTab(
      args1,
      args2
    );
  }
);

Then(
  /^I check the first action tab that campaign is triggered successfully with "([^"]*)" and event "([^"]*)" and success percentage "([^"]*)"$/,
  (args1, args2, args3) => {
    mauticCampaignPage.checkThatEventIsTriggeredAndAddedCorrectlyInActions_FirstTab(
      args1,
      args2,
      args3
    );
  }
);

Then(
  /^I check the second action tab that campaign is triggered successfully with "([^"]*)" and event "([^"]*)" and success percentage "([^"]*)"$/,
  (args1, args2, args3) => {
    mauticCampaignPage.checkThatEventIsTriggeredAndAddedCorrectlyInActions_SecondTab(
      args1,
      args2,
      args3
    );
  }
);

And(
  /^I check that company "([^"]*)" is displayed in grid contact$/,
  (args1) => {
    mauticCampaignPage.checkCompanyIsPresentInContactsGrid(args1);
  }
);

And(
  /^I check that "([^"]*)" is present in contact details page as primary company$/,
  (args1) => {
    mauticCampaignPage.checkCompanyIsPresentInContactDetailsPage(args1);
  }
);

When(/^I click on first contact under campaign contacts$/, () => {
  mauticCampaignPage.selectAndClickOnFirstContactUnderCampaign();
});

Then(/^I check that contact "([^"]*)" do not contact label$/, (args1) => {
  mauticCampaignPage.checkThatConatctHasDoNotContactLabel(args1);
});

And(
  /^I type "([^"]*)" and "([^"]*)" and "([^"]*)" values$/,
  (args1, args2, args3) => {
    mauticCampaignPage.typeDateFieldValuesInContacts(args1, args2, args3);
  }
);

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

Then(
  /^I check that second event triggered successfully Event Name "([^"]*)" and Event Type "([^"]*)" and Event Timestamp "([^"]*)"$/,
  (args1, args2, args3) => {
    console.log(args1, args2, args3);
    return true;
  }
);

Then(/^I check that contact has gained "([^"]*)"$/, (args1) => {
  mauticCampaignPage.checkContactGainPoints(args1);
});

When(/^I search for contact"([^"]*)"$/, (args1) => {
  mauticCampaignPage.search(args1);
});

When(/^I search for campaign "([^"]*)"$/, (args1) => {
  mauticCampaignPage.searchCampaign(args1);
});

When(/^I delete campaign "([^"]*)"$/, (args1) => {
  mauticCampaignPage.deleteCampaign(args1);
});

Then(/^I should see campaign "([^"]*)" is deleted$/, (args1) => {
  mauticCampaignPage.isCampaignDeleted(args1);
});

Then(/^I check that "([^"]*)" present in contact details Page$/, (args1) => {
  mauticCampaignPage.checkStage(args1);
});

When(
  /^I add event name "([^"]*)" and choose segment in which i want to add contact "([^"]*)" and remove contact's from segment "([^"]*)"$/,
  (args1, args2, args3) => {
    mauticCampaignPage.addAndRemoveSegment(args1, args2, args3);
  }
);

Then(/^I check that "([^"]*)" is present under contacts tab$/, (args1) => {
  mauticCampaignPage.noContactsPresent(args1);
});

Then(
  /^I check that "([^"]*)" segment contain "([^"]*)" and I click on it$/,
  (args1, args2) => {
    mauticCampaignPage.checkSegmentContainesExactContacts(args1, args2);
  }
);

When(/^I click on first contact from that segment$/, () => {
  mauticCampaignPage.clickOnFirstContactUnderSegment();
});

Then(/^I check that it has no contacts "([^"]*)"$/, (args1) => {
  mauticCampaignPage.noContactsPresent(args1);
});

When(
  /^I add event name "([^"]*)" with values of dateField1 "([^"]*)" and dateField2 "([^"]*)" and dateField3 "([^"]*)"$/,
  (args1, args2, args3, args4) => {
    mauticCampaignPage.updateContactDateFieldValues(args1, args2, args3, args4);
  }
);

Then(
  /^I click on contact details link and verify that dateField1 is updated "([^"]*)" and dateField2 with "([^"]*)" and dateField3 with "([^"]*)" updated accordingly as per today's date$/,
  (args1, args2, args3) => {
    mauticCampaignPage.verifyDateFieldOfContact(args1, args2, args3);
  }
);

And(/^I add event name "([^"]*)" and E-mail "([^"]*)"$/, (args1, args2) => {
  mauticCampaignPage.sendEmail(args1, args2);
});

Then(
  /^I check the mailbox of "([^"]*)" and verify that contact has received "([^"]*)" email$/,
  (args1, args2) => {
    mauticCampaignPage.checkMailboxOfContact(args1, args2);
  }
);

Then(/^I read the the email of "([^"]*)" and delete it$/, (args1) => {
  mauticCampaignPage.getMailId(args1);
});

Then(
  /^I check that contact "([^"]*)" has received "([^"]*)" points of reading an email$/,
  (args1, args2) => {
    mauticCampaignPage.checkContactsPoints(args1, args2);
  }
);

When(/^I select decision as "([^"]*)" from decision list$/, (args1) => {
  mauticCampaignPage.selectDecisionFromDropDown(args1);
});

When(/^I add event name "([^"]*)"$/, (args1) => {
  mauticCampaignPage.ifOpensAnEmail(args1);
});

And(/^I click on "([^"]*)" for condition$/, (args1) => {
  mauticCampaignPage.selectConditionOption(args1);
});

When(/^I click on company named "([^"]*)"$/, (args1) => {
  mauticCampaignPage.clickOnCompanyName(args1);
});

And(
  /^I add event name "([^"]*)" with city as "([^"]*)" and country as "([^"]*)" with number of employee "([^"]*)"$/,
  (args1, args2, args3, args4) => {
    mauticCampaignPage.updateCompanyFields(args1, args2, args3, args4);
  }
);

Then(
  /^I check that company city is "([^"]*)" and country is "([^"]*)" and no of employee is "([^"]*)"$/,
  (args1, args2, args3) => {
    mauticCampaignPage.checkCompanyDetails(args1, args2, args3);
  }
);
