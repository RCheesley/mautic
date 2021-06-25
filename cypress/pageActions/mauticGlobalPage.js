import { Cutils } from "../CommonUtils/Cutils";
export class mauticGlobalPage {

  static goToURL(text) {
    var input_url;
    switch (text) {
      case "Contacts":
        input_url = 's/contacts';
        break;
      case "Emails":
        input_url = 's/emails';
        break;
      case "Segments":
        input_url = 's/segments';
        break;
      case "Asset":
        input_url = 's/assets';
        break;
      case 'Local Asset':
        input_url = '/s/assets?search=Local';
        break;
      case 'Remote Asset':
        input_url = '/s/assets?search=remote';
        break;
      case 'Companies':
        input_url = 's/companies';
        break;
      case 'Emails':
        input_url = 's/emails';
        break;
      case 'Dynamic Content':
        input_url = 's/dwc';
        break;
      case 'Custom Fields':
        input_url = 's/contacts/fields';
        break;
      case 'Custom Objects':
        input_url = 's/custom/object';
        break;
      case 'Landing Pages':
        input_url = 's/pages';
        break;
      case 'Stages':
        input_url = 's/stages';
        break;
      case 'Points':
        input_url = 's/points';
        break;
      case 'Forms':
        input_url = 's/forms';
        break;
      case 'Reports':
        input_url = 's/reports';
        break;
      case 'Point Triggers':
        input_url = 's/points/triggers';
        break;
      case "Campaigns":
        input_url = "s/campaigns";
        break;
      case 'DashBoard':
        input_url = 's/dashboard';
        break;

    }
    console.log(input_url);
    Cutils.navigateTo(input_url);
  }

  static verifyPageTitle(text) {
    return Cutils.isOnPage(text);
  }

  static waitForPageLoad(text) {
    return Cutils.isContains("//h3", text);
  }
}
