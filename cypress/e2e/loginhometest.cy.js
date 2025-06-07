/// <reference types="cypress" />

describe('Login Test - UI Test', () => {
  beforeEach(() => {
    cy.visit('https://thinking-tester-contact-list.herokuapp.com/', { timeout: 120000 });
  });

  it('Should login successfully with valid credentials', () => {
    cy.get('#email').type('johndpaul@gmail.com');
    cy.get('#password').type('987654321j');
    cy.contains('Submit').click();

    // Verify successful redirect
    cy.url().should('include', '/contactList');
  });

  it('Should not login with empty email and password', () => {
    cy.contains('Submit').click();

    // Confirm still on login page
    cy.url().should('not.include', '/contactList');


  });
});
