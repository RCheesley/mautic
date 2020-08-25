// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

Cypress.Cookies.defaults({
    whitelist: ['28ced7f51a554f149cfb8289fdddb9fb','_ga','_gid','_gat','mautic_referer_id','mtc_id','mtc_sid','mautic_device_id','device_id','sid','id','success']
  })

  it("Perform login", () => {
    cy.visit("https://cr.mautic.net/s/login");
    cy.login(Cypress.env('userName'), Cypress.env('password');
   });

// Alternatively you can use CommonJS syntax:
// require('./commands')
