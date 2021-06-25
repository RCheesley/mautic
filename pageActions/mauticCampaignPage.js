import { Cutils } from "../CommonUtils/Cutils";
import { mauticCampaignsPageElements } from "../pageElements/mauticCampaignsPageElements";
import { mauticGlobalPage } from "./mauticGlobalPage";
import { mauticCampaignsPageElements } from "cypress/pageElements/mauticCampaignsPageElements";
const emailId;
var gifLinkInEmail;
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
  static clickCampaignEventAfterAction() {
    Cutils.scrollToView(mauticCampaignsPageElements.campaignEventAfterAction);
    Cutils.click(mauticCampaignsPageElements.campaignEventAfterAction);
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

    static updateCompanyFields(eventName, city, country, noOfEmployee) {
    Cutils.IsVisible(mauticCampaignsPageElements.addNameForEvent);
    Cutils.typeText(mauticCampaignsPageElements.addNameForEvent, eventName);
    Cutils.typeText(mauticCampaignsPageElements.UpdateCompanyFieldCity, city);
    Cutils.selectValueFromDropDownNonSelect(
      mauticCampaignsPageElements.updateCompanyFieldsCountry,
      country
    );
    Cutils.typeText(mauticCampaignsPageElements.updateCompanyFieldNumberOfEmployee, noOfEmployee)
    Cutils.click(mauticCampaignsPageElements.addButtonForModel);
  }

  static addToCompanyScore(eventName, score) {
    Cutils.IsVisible(mauticCampaignsPageElements.addNameForEvent);
    Cutils.typeText(mauticCampaignsPageElements.addNameForEvent, eventName);
    Cutils.typeText(mauticCampaignsPageElements.companyScore, score);
    Cutils.click(mauticCampaignsPageElements.addButtonForModel);
  }

  static sendEmail(eventName, emailName) {
    Cutils.IsVisible(mauticCampaignsPageElements.addNameForEvent);
    Cutils.typeText(mauticCampaignsPageElements.addNameForEvent, eventName);
    Cutils.selectValueFromDropDownNonSelect(
      mauticCampaignsPageElements.emailToSend,
      emailName
    );
    Cutils.click(mauticCampaignsPageElements.addButtonForModel);
  }

   static selectCustomObjectToLink(eventName, customObjectName) {
    Cutils.typeText(mauticCampaignsPageElements.addNameForEvent, eventName);
    Cutils.typeText(mauticCampaignsPageElements.linkWithCustomObject, customObjectName);
    Cutils.IsVisible(mauticCampaignsPageElements.seletHighlightedItem);
    Cutils.click(mauticCampaignsPageElements.seletHighlightedItem);
    Cutils.click(mauticCampaignsPageElements.addButtonForModel);
   }
  
  static ifOpensAnEmail(eventName) {
    Cutils.IsVisible(mauticCampaignsPageElements.addNameForEvent);
    Cutils.typeText(mauticCampaignsPageElements.addNameForEvent, eventName);
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
    Cutils.IsVisible(mauticCampaignsPageElements.contactsEngagement);
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
    Cutils.pageReload();
    Cutils.clear(mauticCampaignsPageElements.includeEventsBySource);
    Cutils.IsVisible(mauticCampaignsPageElements.includeEventsBySource);
    Cutils.selectValueFromDropDownNonSelect(
      mauticCampaignsPageElements.includeEventsBySource,
      text
    );
    Cutils.IsNotExist(mauticCampaignsPageElements.loadingBarActive);
    Cutils.waitForTime(1000);
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
    static clickOnCompanyName(companyName) {
    Cutils.IsVisible('//div/a[contains(text(),"' + companyName + '")]');
    Cutils.click('//div/a[contains(text(),"' + companyName + '")]');
    }
  
  static checkCompanyDetails(city, country, noOfEmployee) {
    Cutils.IsVisible(mauticCampaignsPageElements.companyDetailsPageCity)
    Cutils.inputFieldContainsValue(mauticCampaignsPageElements.companyDetailsPageCity, city)
    Cutils.dropDownFieldSelectedValue(mauticCampaignsPageElements.companyDetailsPageCountry, country)
    Cutils.click(mauticCampaignsPageElements.companyDetailsProfessionalPage);
    Cutils.inputFieldContainsValue(mauticCampaignsPageElements.updateCompanyFieldNumberOfEmployee, noOfEmployee);
  }

   static checkCustomObjectLinked(customObject, carName, carNumber, carModel) {
     Cutils.IsVisible(mauticCampaignsPageElements.contactDetailsCustomObject);
     Cutils.isContains(mauticCampaignsPageElements.contactDetailsCustomObject, customObject);
     Cutils.click(mauticCampaignsPageElements.contactDetailsCustomObject, customObject);
     Cutils.IsVisible(mauticCampaignsPageElements.contactDetailsCarName);
     Cutils.isContains(mauticCampaignsPageElements.contactDetailsCarName, carName);
     Cutils.isContains(mauticCampaignsPageElements.contactDetailsCarNumber, carNumber);
     Cutils.isContains(mauticCampaignsPageElements.contactDetailsCarModel, carModel);
  }

  static checkCompanyIsPresentInContactsGrid(company) {
    Cutils.isContains(
      mauticCampaignsPageElements.companyNamePresentUnderContacts,
      company
    );
  }

  static selectConditionOption(condition) {
    Cutils.IsVisible(
      '//div[contains(@class,"jtk-endpoint jtk-endpoint-anchor-' +
        condition +
        '")]'
    );
    Cutils.click(
      '//div[contains(@class,"jtk-endpoint jtk-endpoint-anchor-' +
        condition +
        '")]'
    );
  }

  static checkCompanyIsPresentInContactDetailsPage(company) {
    Cutils.isContains(
      mauticCampaignsPageElements.companiesInContactDetails,
      company
    );
    Cutils.IsVisible(mauticCampaignsPageElements.primaryCompanyCheck);
  }

  static search(text) {
    Cutils.IsVisible(mauticCampaignsPageElements.filter);
    Cutils.typeText(mauticCampaignsPageElements.filter, text)
    Cutils.IsVisible('//div[contains(text(),"' + text + '")]');
  }

  static searchCampaign(text) {
    Cutils.IsVisible(mauticCampaignsPageElements.filter);
    Cutils.typeText(mauticCampaignsPageElements.filter, text)
    Cutils.IsVisible('//a[contains(text(),"' + text + '")]');
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

  static checkThatEventIsTriggeredAndAddedCorrectlyInActions_FirstTab(
    eventName,
    action,
    successPercentage
  ) {
    Cutils.isContains(mauticCampaignsPageElements.firstEventName, eventName);
    Cutils.isContains(
      mauticCampaignsPageElements.actionPerformedFirstTab,
      action
    );
    Cutils.isContains(
      mauticCampaignsPageElements.successPercentageOfFirstEvent,
      successPercentage
    );
  }

  static checkThatEventIsTriggeredAndAddedCorrectlyInActions_SecondTab(
    eventName,
    action,
    successPercentage
  ) {
    Cutils.isContains(mauticCampaignsPageElements.secondEventName, eventName);
    Cutils.isContains(
      mauticCampaignsPageElements.actionPerformedSecondTab,
      action
    );
    Cutils.isContains(
      mauticCampaignsPageElements.successPercentageOfSecondEvent,
      successPercentage
    );
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

  static checkContactsPoints(contactName, points) {
    Cutils.IsVisible(
      '//div[contains(text(),"' + contactName + '")]//following::td/span'
    );
    Cutils.isContains(
      '//div[contains(text(),"' + contactName + '")]//following::td/span',
      points
    );
  }

  static selectDecisionFromDropDown(decisionText) {
    Cutils.IsVisible(mauticCampaignsPageElements.searchTextBoxForDecision);
    Cutils.selectValueFromDropDownNonSelect(
      mauticCampaignsPageElements.searchTextBoxForDecision,
      decisionText
    );
  }

  static noResultsFound(text) {
    return Cutils.isContains('//div[@class="page-list"]//h4', text);
  }

  static noResultsFound(text) {
    return Cutils.isContains('//div[@class="page-list"]//h4', text);
  }

  static checkMailboxOfContact(contactName, emailName) {
    cy.request({
      method: "GET",
      url: Cypress.env("mailtestUrl") + contactName,
    }).then(function (response) {
      expect(response).to.have.property("status", 200);
      expect(response.body).to.not.be.null;
      expect(response.body[0]).to.have.property("mailbox", contactName);
      expect(response.body[0]).to.have.property("subject", emailName);
      expect(response.body[0]).to.have.property("seen", false);
      let body = response.body[0];
      emailId = body["id"];
    });
  }

  static getMailId(contactName) {
    var readEmailGifLink;
    cy.request({
      method: "GET",
      url: Cypress.env("mailtestUrl") + contactName + "/" + emailId,
    }).then(function (response) {
      var EmailText = JSON.stringify(response);
      var patternForEmailImages = new RegExp("<img[^>]+>");
      var imageElements = patternForEmailImages.exec(EmailText);
      var patternForImageSources = new RegExp('src=\\\\"(.*?)"');
      readEmailGifLink = patternForImageSources.exec(
        imageElements[0].toString()
      );
      readEmailGifLink = readEmailGifLink[0]
        .toString()
        .substring(6)
        .replace(/\"/, "")
        .replace("\\", "");
       gifLinkInEmail = readEmailGifLink;
      expect(response).to.have.property('status',200)
      expect(response.body).to.not.be.null
      mauticCampaignPage.readEmail();
      mauticCampaignPage.deleteEmail(contactName);
    });
  }
  static readEmail() {
    cy.request({
      method: "GET",
      url: gifLinkInEmail,
    }).then(function (response) {
      expect(response).to.have.property("status", 200);
    });
  }
  static deleteEmail(contactName) {
    cy.request({
      method: "DELETE",
      url: Cypress.env("mailtestUrl") + contactName + "/" + emailId,
    }).then(function (response) {
      expect(response).to.have.property("status", 200);
    });
  }

  static typeDateFieldValuesInContacts(dateField1, dateField2, dateField3) {
    Cutils.typeText(
      mauticCampaignsPageElements.updateContact_dateField1,
      dateField1
    );
    Cutils.typeText(
      mauticCampaignsPageElements.updateContact_dateField2,
      dateField2
    );
    Cutils.typeText(
      mauticCampaignsPageElements.updateContact_dateField3,
      dateField3
    );
  }

  static updateContactDateFieldValues(
    eventName,
    absoluteDate,
    additionRelativeDate,
    subtractelativeDate
  ) {
    Cutils.IsVisible(mauticCampaignsPageElements.addNameForEvent);
    Cutils.typeText(mauticCampaignsPageElements.addNameForEvent, eventName);
    Cutils.typeText(
      mauticCampaignsPageElements.updateContact_dateField1,
      absoluteDate
    );
    Cutils.scrollToView(mauticCampaignsPageElements.updateContact_dateField2);
    Cutils.typeText(
      mauticCampaignsPageElements.updateContact_dateField2,
      additionRelativeDate
    );
    Cutils.scrollToView(mauticCampaignsPageElements.updateContact_dateField3);
    Cutils.typeText(
      mauticCampaignsPageElements.updateContact_dateField3,
      subtractelativeDate
    );
    Cutils.scrollToView(mauticCampaignsPageElements.addButtonForModel);
    Cutils.click(mauticCampaignsPageElements.addButtonForModel);
  }
  static verifyDateFieldOfContact(dateField1, dateField2, dateField3) {
    var myCurrentDate = new Date();
    var updatedRelativeDate = new Date(myCurrentDate);
    Cutils.click(mauticCampaignsPageElements.contactDetails);
    Cutils.scrollToView(mauticCampaignsPageElements.contactDetailsDateField1);
    Cutils.isContains(
      mauticCampaignsPageElements.contactDetailsDateField1,
      dateField1
    );
    Cutils.isContains(
      mauticCampaignsPageElements.contactDetailsDateField2,
      Cutils.formatDate(
        updatedRelativeDate.setDate(
          updatedRelativeDate.getDate() + parseInt(dateField2)
        )
      )
    );
    updatedRelativeDate = myCurrentDate;
    Cutils.isContains(
      mauticCampaignsPageElements.contactDetailsDateField3,
      Cutils.formatDate(
        updatedRelativeDate.setDate(
          updatedRelativeDate.getDate() - parseInt(dateField3)
        )
      )
    );
    Cutils.isContains(
      mauticCampaignsPageElements.contactDetailsLastDateActive,
      " "
    );
    Cutils.scrollToView(mauticCampaignsPageElements.contactDetailsDateField4);
    Cutils.isContains(
      mauticCampaignsPageElements.contactDetailsDateField4,
      " "
    );
  }
}
