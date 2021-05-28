export class mauticCampaignsPageElements {
  static addNewButton = '//a[contains(@href,"new")]//span[text()="New"]';
  static campaignLabel = '//h3[contains(text(), "New Campaign")]';
  static campaignName = '//input[@id="campaign_name"]';
  static campaignPublished_Yes =
    '//label[contains(text(),"Published")]//following::label[@class="btn btn-default  btn-yes"]';
  static campaignPublished_No =
    '//label[contains(text(),"Published")]//following::label[@class="btn btn-default  active btn-no btn-danger"]';
  static restartCampaign_No =
    '(//label[contains(text(),"Allow contacts to restart the campaign ")]/following::label[@class="btn btn-default  active btn-no btn-danger"])[1]';
  static restartCampaign_Yes =
    '(//label[contains(text(),"Allow contacts to restart the campaign ")]/following::label[@class="btn btn-default  btn-yes"])[1]';
  static campaignBuilder = '//button[@id="campaign_buttons_builder_toolbar"]';
  static campaignCancel = '//button[@id="campaign_buttons_cancel_toolbar"]';
  static campaignSaveAndClose = '//button[@id="campaign_buttons_save_toolbar"]';
  static campaignApply = '//button[@id="campaign_buttons_apply_toolbar"]';
  static campaignAddContactSource = '//div[@id="SourceList_chosen"]';
  static segmentSource = '//div[@id="campaign_leadsource_lists_chosen"]';
  static addButtonForModel =
    '//div[@class="modal-form-buttons"]/button[@class="btn btn-default btn-save btn-copy"]';
  static cancelButtonForModel =
    '//div[@class="modal-form-buttons"]/button[@class="btn btn-default btn-cancel btn-copy"]';
  static checkSegmentIsSelected =
    '(//span[@class="campaign-event-name ellipsis"])[2]';
  static campaignEventsList =
    '(//div[@id="CampaignEvent_lists"]/following::div)[1]';
  static tabSelectDecision =
    '(//div[@class="hidden-xs panel-footer text-center"]/button[contains(text(),"Select")])[1]';
  static tabSelectAction =
    '(//div[@class="hidden-xs panel-footer text-center"]/button[contains(text(),"Select")])[2]';
  static tabSelectCondition =
    '(//div[@class="hidden-xs panel-footer text-center"]/button[contains(text(),"Select")])[3]';
  static searchTextBoxForActions = '//div[@id="ActionList_chosen"]';
  static addNameForEvent = '//input[@id="campaignevent_name"]';
  static selectChannelForDNC =
    '//div[@id="campaignevent_properties_channels_chosen"]';
  static applyChangesToBuilder = '//button[contains(text(),"Apply")]';
  static closeBuilder = '//button[contains(text(),"Close Builder")]';
  static campaignPreview = '//li[@id="preview_li"]/a';
  static campaignActions = '//li[@id="actions_li"]/a';
  static campaignContacts = '//a[contains(text(),"Contacts")]';
  static campiganSuccessLabel = '//span[@title="Success percent"]';
  static selectFirstContactUnderCampaignTab =
    '(//div[@id="leads-container"]//a/span)[1]';
  static doNotContactLabel = '//span[@class="label label-danger"]';
  static includeEventsBySource =
    '(//select[@data-placeholder="Include events by source"]/following::div)[1]';
  static eventNameTriggeredByContact = '(//td[@class="timeline-name"])[1]';
  static eventTypeTriggeredByContact = '(//td[@class="timeline-type"])[1]';
  static eventTimeStampTriggeredByContact =
    '(//td[@class="timeline-timestamp"])[1]';
  static contactsEngagement = '//h5[contains(text(),"Engagements")]';
  static adjustPoints = '//div[@id="campaignevent_properties"]';
  static contactsPoints = '//div[@class="mt-sm points-panel text-center"]/h1';
  static filter = '//input[@id="list-search"]';
  static loadingBarActive = '//div[@class="loading-bar active"]';
  static selectCompany = '//div[@id="campaignevent_properties_company_chosen"]';
  static actionsEventsName = '//h5[@class="fw-sb text-primary mb-xs"]';
  static actionPerformed = "//div//em";
  static companyNamePresentUnderContacts =
    '(//div[@class="text-muted mb-1 ellipsis"])[1]';
  static companiesInContactDetails = '//span[@class="label label-success"]';
  static companyScore = '//input[@id="campaignevent_properties_score"]';
  static scoreOnCompanyEdit = '//input[@id="company_score"]';
  static selectContactStage =
    '//div[@id="campaignevent_properties_stage_chosen"]';
  static stageNameOnContactDetailsPage =
    '//div[@class="mt-sm points-panel text-center"]';
  static addContactToSelectedSegment =
    '//div[@id="campaignevent_properties_addToLists_chosen"]';
  static removeContactFromSelectedSegment =
    '//div[@id="campaignevent_properties_removeFromLists_chosen"]';
  static firstContactUnderSegment = '(//table[@id="leadTable"]//td//a/div)[1]';
  static secondEventNameTriggeredForContact =
    '(//td[@class="timeline-name"])[2]';
  static secondEventTypeTriggeredForContact =
    '(//td[@class="timeline-type"])[2]';
  static secondEventTimestampTriggeredForContact =
    '(//td[@class="timeline-timestamp"])[2]';
  static noContactsFound = '//div[@class="page-list"]//h4';
}
