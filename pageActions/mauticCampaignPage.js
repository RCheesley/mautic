import { Cutils } from "../CommonUtils/Cutils";
import { mauticCampaignsPageElements } from "../pageElements/mauticCampaignsPageElements";
import { mauticGlobalPage } from "./mauticGlobalPage";

export class mauticCampaignPage {
  static clickAddNewButton() {
    Cutils.IsVisible(mauticCampaignsPageElements.addNewButton);
    Cutils.click(mauticCampaignsPageElements.addNewButton);
  }
  static typeCampaignTitle(text) {
    mauticGlobalPage.waitForPageLoad("New Campaign");
    Cutils.IsVisible(mauticCampaignsPageElements.campaignName);
    Cutils.typeText(mauticCampaignsPageElements.campaignName, text);
  }
  static clickLaunchCampaignBuilder() {
    Cutils.IsVisible(mauticCampaignsPageElements.campaignBuilder);
    Cutils.click(mauticCampaignsPageElements.campaignBuilder);
  }
  static selectCampaignSource(text) {
    Cutils.IsVisible(mauticCampaignsPageElements.campaignAddContactSource);
    Cutils.selectValueFromDropDownNonSelect(
      mauticCampaignsPageElements.campaignAddContactSource,
      text
    );
  }
  static selectSegmentSource(text) {
    mauticGlobalPage.waitForPageLoad("Contact Source");
    Cutils.IsVisible(mauticCampaignsPageElements.segmentSource);
    Cutils.selectValueFromDropDownNonSelect(
      mauticCampaignsPageElements.segmentSource,
      text
    );
    Cutils.click(mauticCampaignsPageElements.addButtonForModel);
    Cutils.isContains(mauticCampaignsPageElements.checkSegmentIsSelected, text);
  }
  static clickCampaignEventList() {
    Cutils.scrollToView(mauticCampaignsPageElements.campaignEventsList);
    Cutils.click(mauticCampaignsPageElements.campaignEventsList);
  }
  static selectEventToPerform(text) {
    Cutils.click(
      '//div[@id="' +
        text +
        'GroupSelector"]//div[@class="hidden-xs panel-footer text-center"]/button'
    );
  }
  static selectActionFromDropDown(text) {
    Cutils.IsVisible(mauticCampaignsPageElements.searchTextBoxForActions);
    Cutils.selectValueFromDropDownNonSelect(
      mauticCampaignsPageElements.searchTextBoxForActions,
      text
    );
  }
  static addContactInDNC(eventName, channel) {
    Cutils.IsVisible(mauticCampaignsPageElements.addNameForEvent);
    Cutils.typeText(mauticCampaignsPageElements.addNameForEvent, eventName);
    Cutils.selectValueFromDropDownNonSelect(
      mauticCampaignsPageElements.selectChannelForDNC,
      channel
    );
    Cutils.click(mauticCampaignsPageElements.addButtonForModel);
  }
  static changeContactStage(eventName, stage) {
    Cutils.IsVisible(mauticCampaignsPageElements.addNameForEvent);
    Cutils.typeText(mauticCampaignsPageElements.addNameForEvent, eventName);
    Cutils.selectValueFromDropDownNonSelect(
      mauticCampaignsPageElements.selectContactStage,
      stage
    );
    Cutils.click(mauticCampaignsPageElements.addButtonForModel);
  }
  static adjustContactsPoints(eventName, points) {
    Cutils.IsVisible(mauticCampaignsPageElements.addNameForEvent);
    Cutils.typeText(mauticCampaignsPageElements.addNameForEvent, eventName);
    Cutils.typeText(mauticCampaignsPageElements.adjustPoints, points);
    Cutils.click(mauticCampaignsPageElements.addButtonForModel);
  }

  static selectCompanyToAdd(eventName, companyName) {
    Cutils.IsVisible(mauticCampaignsPageElements.addNameForEvent);
    Cutils.typeText(mauticCampaignsPageElements.addNameForEvent, eventName);
    Cutils.selectValueFromDropDownNonSelect(
      mauticCampaignsPageElements.selectCompany,
      companyName
    );
    Cutils.click(mauticCampaignsPageElements.addButtonForModel);
  }

  static addToCompanyScore(eventName, score) {
    Cutils.IsVisible(mauticCampaignsPageElements.addNameForEvent);
    Cutils.typeText(mauticCampaignsPageElements.addNameForEvent, eventName);
    Cutils.typeText(mauticCampaignsPageElements.companyScore, score);
    Cutils.click(mauticCampaignsPageElements.addButtonForModel);
  }
  static addAndRemoveSegment(
    eventName,
    sourceSegment,
    removeContactFromSegment
  ) {
    Cutils.IsVisible(mauticCampaignsPageElements.addNameForEvent);
    Cutils.typeText(mauticCampaignsPageElements.addNameForEvent, eventName);
    Cutils.selectValueFromDropDownNonSelect(
      mauticCampaignsPageElements.addContactToSelectedSegment,
      sourceSegment
    );
    Cutils.selectValueFromDropDownNonSelect(
      mauticCampaignsPageElements.removeContactFromSelectedSegment,
      removeContactFromSegment
    );
    Cutils.click(mauticCampaignsPageElements.addButtonForModel);
  }

  static applyChangesToBuilder() {
    Cutils.IsVisible(mauticCampaignsPageElements.applyChangesToBuilder);
    Cutils.click(mauticCampaignsPageElements.applyChangesToBuilder);
    Cutils.isEnabled(mauticCampaignsPageElements.applyChangesToBuilder);
    Cutils.click(mauticCampaignsPageElements.closeBuilder);
  }
  static Publish_SaveTheCampaign() {
    Cutils.IsVisible(mauticCampaignsPageElements.campaignPublished_Yes);
    Cutils.click(mauticCampaignsPageElements.campaignPublished_Yes);
    Cutils.click(mauticCampaignsPageElements.campaignSaveAndClose);
  }
  static hardCodedWaitAddedforCampaignGetsPublished() {
    Cutils.waitForTime(12000);
    Cutils.pageReload();
  }
  static selectCampaignTab(text) {
    if (text == "Preview") {
      Cutils.IsVisible(mauticCampaignsPageElements.campaignPreview);
      Cutils.click(mauticCampaignsPageElements.campaignPreview);
    }
    if (text == "Actions") {
      Cutils.IsVisible(mauticCampaignsPageElements.campaignActions);
      Cutils.click(mauticCampaignsPageElements.campaignActions);
    }
    if (text == "Contacts") {
      Cutils.IsVisible(mauticCampaignsPageElements.campaignContacts);
      Cutils.click(mauticCampaignsPageElements.campaignContacts);
    }
  }

  static isCampaignExecutedSuccessfully(succesPercent) {
    Cutils.IsVisible(mauticCampaignsPageElements.campiganSuccessLabel);
    Cutils.isContains(
      mauticCampaignsPageElements.campiganSuccessLabel,
      succesPercent
    );
  }

  static selectAndClickOnFirstContactUnderCampaign() {
    Cutils.IsVisible(
      mauticCampaignsPageElements.selectFirstContactUnderCampaignTab
    );
    Cutils.click(
      mauticCampaignsPageElements.selectFirstContactUnderCampaignTab
    );
  }

  static checkThatConatctHasDoNotContactLabel(label) {
    Cutils.IsVisible(mauticCampaignsPageElements.contactsEngagement);
    if (label == "have") {
      Cutils.IsVisible(mauticCampaignsPageElements.doNotContactLabel);
      Cutils.isContains(
        mauticCampaignsPageElements.doNotContactLabel,
        "Do Not Contact"
      );
    }
    if (label == "does not have") {
      Cutils.IsVisible(mauticCampaignsPageElements.doNotContactLabel);
      Cutils.isNotContains(
        mauticCampaignsPageElements.doNotContactLabel,
        "Do Not Contact"
      );
    }
  }

  static selectIncludeEventsBySource(text) {
    Cutils.clear(mauticCampaignsPageElements.includeEventsBySource);
    Cutils.IsVisible(mauticCampaignsPageElements.includeEventsBySource);
    Cutils.selectValueFromDropDownNonSelect(
      mauticCampaignsPageElements.includeEventsBySource,
      text
    );
    Cutils.IsNotExist(mauticCampaignsPageElements.loadingBarActive);
  }

  static checkEventsTriggeredSuccessfullyContactHistory(
    eventName,
    eventType,
    eventTimestamp
  ) {
    Cutils.IsVisible(mauticCampaignsPageElements.eventNameTriggeredByContact);
    Cutils.isContains(
      mauticCampaignsPageElements.eventNameTriggeredByContact,
      eventName
    );
    Cutils.isContains(
      mauticCampaignsPageElements.eventTypeTriggeredByContact,
      eventType
    );
    Cutils.isContains(
      mauticCampaignsPageElements.eventTimeStampTriggeredByContact,
      eventTimestamp
    );
  }

  static checkSecondEventsTriggeredSuccessfullyContactHistory(
    eventName,
    eventType,
    eventTimestamp
  ) {
    Cutils.IsVisible(
      mauticCampaignsPageElements.secondEventNameTriggeredForContact
    );
    Cutils.isContains(
      mauticCampaignsPageElements.secondEventNameTriggeredForContact,
      eventName
    );
    Cutils.isContains(
      mauticCampaignsPageElements.secondEventTypeTriggeredForContact,
      eventType
    );
    Cutils.isContains(
      mauticCampaignsPageElements.secondEventTimestampTriggeredForContact,
      eventTimestamp
    );
  }
  static checkContactGainPoints(points) {
    Cutils.IsVisible(mauticCampaignsPageElements.contactsPoints);
    Cutils.isContains(mauticCampaignsPageElements.contactsPoints, points);
  }

  static checkCompanyIsPresentInContactsGrid(company) {
    Cutils.isContains(
      mauticCampaignsPageElements.companyNamePresentUnderContacts,
      company
    );
  }

  static checkCompanyIsPresentInContactDetailsPage(company) {
    Cutils.isContains(
      mauticCampaignsPageElements.companiesInContactDetails,
      company
    );
  }

  static searchCampaign(campaignName) {
    Cutils.IsVisible(mauticCampaignsPageElements.filter);
    Cutils.typeText(mauticCampaignsPageElements.filter, campaignName);
  }
  static deleteCampaign(text) {
    Cutils.click(
      "//tr[1]//a[contains(text(), " +
        "'" +
        text +
        "'" +
        ')]/preceding::td//div//input[@type="checkbox"]'
    );
    Cutils.click(
      "//tr[1]//a[contains(text(), " +
        "'" +
        text +
        "'" +
        ')]/preceding::td//div[@class="input-group-btn"]'
    );
    Cutils.click('//tr[1]//span[text()="Delete"]');
    Cutils.IsVisible('//button[text()="Delete"]');
    Cutils.click('//button[text()="Delete"]');
  }
  static isCampaignDeleted(text) {
    return Cutils.IsNotExist(
      "//tr[1]//a[contains(text(), " + "'" + text + "'" + ")]"
    );
  }
  static checkThatEventIsTriggeredAndAddedCorrectlyInActionsTab(
    eventName,
    action
  ) {
    Cutils.isContains(mauticCampaignsPageElements.actionsEventsName, eventName);
    Cutils.isContains(mauticCampaignsPageElements.actionPerformed, action);
  }

  static checkCompanyAndScore(companyName, score) {
    Cutils.isContains(
      '(//td//div/a[contains(text(),"' + companyName + '")]//following::td)[3]',
      score
    );
  }
  static checkStage(stage) {
    Cutils.isContains(
      mauticCampaignsPageElements.stageNameOnContactDetailsPage,
      stage
    );
  }
  static noContactsPresent(noContactsPresent) {
    Cutils.IsVisible(mauticCampaignsPageElements.noContactsFound);
    Cutils.isContains(
      mauticCampaignsPageElements.noContactsFound,
      noContactsPresent
    );
  }
  static checkSegmentContainesExactContacts(segmentName, noOfContacts) {
    Cutils.isContains(
      '//table[@id="leadListTable"]//td//div/a[contains(text(),"' +
        segmentName +
        '")]//following::td/a',
      noOfContacts
    );
    Cutils.click(
      '//table[@id="leadListTable"]//td//div/a[contains(text(),"' +
        segmentName +
        '")]//following::td/a'
    );
  }
  static clickOnFirstContactUnderSegment() {
    Cutils.IsVisible(mauticCampaignsPageElements.firstContactUnderSegment);
    Cutils.click(mauticCampaignsPageElements.firstContactUnderSegment);
    Cutils.IsVisible(mauticCampaignsPageElements.contactsEngagement);
  }

  static noResultsFound(text) {
    return Cutils.isContains('//div[@class="page-list"]//h4', text);
  }
}
