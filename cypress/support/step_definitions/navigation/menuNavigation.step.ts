import { Given } from "@badeball/cypress-cucumber-preprocessor";

Given('I am on the dispatcher login page', () => {
  // If you are on the login page or not
  if (!cy.location('href').toString().includes('/login')) {
    cy.intercept('GET', 'api/v3/public/orders/company_info?company_slug=*').as('getCompanyInfo');
    cy.visit('https://qacypressone.dispatcher-dev.yojee.com/login');
    cy.wait('@getCompanyInfo');
  }
});