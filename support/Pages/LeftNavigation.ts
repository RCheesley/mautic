class LeftNavigation {
 
  public get contactsSection() {
    return cy.get("#mautic_contact_index > .nav-item-name")
  }
  
 
}

export { LeftNavigation };
