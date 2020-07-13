class ClientTypeSelection {
  public get addNewButton() {
   return  cy.get('[href="/s/contacts/new"] > :nth-child(1) > .hidden-xs')
  }
 
}

export { ClientTypeSelection };
