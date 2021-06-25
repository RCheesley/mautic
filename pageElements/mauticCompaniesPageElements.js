export class mauticCompaniesPageElements {

    static addNewButton = '//a[contains(@href,"new")]//span[text()="New"]';
    static companyName = '//input[@id="company_companyname"]';
    static saveAndCloseButton = '//button[@id="company_buttons_save_toolbar"]';
    static filter = '//input[@id="list-search"]';
    static companyCity = '//input[@id="company_companycity"]';
    static companyZipCode = '//input[@id="company_companyzipcode"]';
    static CompanyEmail = '//input[@id="company_companyemail"]';
    static AddressLine1 = '//input[@id="company_companyaddress1"]';
    static AddressLine2 = '//input[@id="company_companyaddress2"]';
    static CompanyState = '//div[@id="company_companystate_chosen"]';
    static CompanyCountry = '//div[@id="company_companycountry_chosen"]';
    static CompanyPhoneNumber = '//input[@id="company_companyphone"]';
    static CompanyWebsite = '//input[@id="company_companywebsite"]';
    static CompanyPoints = '//input[@id="company_score"]';
    static ProfessionalSection = '//a[normalize-space(text())="Professional"]';
    static NumberOfEmployees = '//input[@id="company_companynumber_of_employees"]';
    static CompanyFax = '//input[@id="company_companyfax"]';
    static ComapnyAnnualRevenue = '//input[@id="company_companyannual_revenue"]';
    static CompanyIndustry = '//div[@id="company_companyindustry_chosen"]';
    static CompanyDescription = '//input[@id="company_companydescription"]';
}