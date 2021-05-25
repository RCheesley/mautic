require("cypress-xpath");
require("cypress-file-upload");
export class Cutils {
  //open url
  static openURL(text) {
    cy.visit(text);
  }
  //check browser tab title
  static isOnPage(text) {
    return cy.title().should("include", text);
  }
  //type any string
  static typeText(locator, text) {
    cy.xpath(locator).clear();
    cy.xpath(locator).type(text);
  }
  //click any element
  static click(locator) {
    cy.xpath(locator).click({ force: true });
  }
  //method for hardcoded wait
  static waitForTime(value) {
    cy.wait(parseInt(value));
  }
  //navigate To Url
  static navigateTo(text) {
    cy.visit(text);
  }
  //select from drop down for dropdown with tag select
  static selectValueFromDropDown(locator, value) {
    cy.xpath(locator).select(value);
  }
  //check if element is visible dynamic wait
  static IsVisible(locator) {
    return cy.xpath(locator).should("be.visible");
  }
  //check if element is not empty
  static IsNotEmpty(locator) {
    cy.xpath(locator).should("not.be.empty");
  }
  //check if element contais text
  static isContains(locator, text) {
    cy.xpath(locator).should("contain", text);
  }

  //check if element contais text
  static isNotContains(locator, text) {
    cy.xpath(locator).should("not.contain", text);
  }

  //returns date in desired format
  static formatDate(date) {
    var d = new Date(date),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    return [year, month, day].join("-");
  }
  //drag and drop file upload
  static uploadFile(locator, fileName) {
    cy.xpath(locator).attachFile(fileName, { subjectType: "drag-n-drop" });
  }
  // check is element is disappered dynamic wait
  static IsNotVisible(locator) {
    return cy.xpath(locator).should("not.be.visible");
  }
  //check if element is removed from page
  static IsNotExist(locator) {
    return cy.xpath(locator).should("not.exist");
  }
  //select value from dropdown for not select type dropdowns
  static selectValueFromDropDownNonSelect(locator, text) {
    this.click(locator);
    this.typeText(locator + "//input", text);
    this.click(locator + "//li[contains(.," + "'" + text + "'" + ")]");
  }
  //normal file upload for input type controller
  static uploadFileNormal(locator, fileName) {
    cy.xpath(locator).attachFile(fileName);
  }
  //scroll to view the element
  static scrollToView(locator) {
    cy.xpath(locator).scrollIntoView();
  }
  // check if element is enabled
  static isEnabled(locator) {
    return cy.xpath(locator).should("be.enabled");
  }
  // reload the page
  static reloadPage() {
    return cy.reload();
  }
  //clear the selected options
  static clear(locator) {
    cy.xpath(locator).clear({ force: true });
  }
}
