/// <reference types="cypress" />

describe('Add Contact Form - Functional Test', () => {
  beforeEach(() => {
    cy.visit('https://thinking-tester-contact-list.herokuapp.com/', {
  timeout: 120000
}); 

    // Log in with valid credentials
    cy.get('#email').type('johndpaul@gmail.com');
    cy.get('#password').type('987654321j');
    cy.get('#submit').click();

    // Confirm login was successful
    cy.url().should('include', '/contactList'); 

  });

  it('Should allow user to fill and submit Add Contact form', () => {
    // Click "Add Contact" button
    cy.get('#add-contact').should('be.visible').click();

    // Verify redirection
    cy.url().should('include', '/addContact');
    cy.get('form').should('exist');

    // Fill out the form fields
    cy.get('input[name="firstName"]').type('Ada');
    cy.get('#lastName').type('Lovelace');
    cy.get('#birthdate').type('1815-12-10');
    cy.get('#email').type('ada.lovelace@example.com');
    cy.get('#phone').type('1234567890');
    cy.get('#street1').type('123 Computing Blvd');
    cy.get('#street2').type('Suite 42');
    cy.get('#city').type('London');
    cy.get('#stateProvince').type('ENG');
    cy.get('#postalCode').type('WC2N');

    // Submit the form
    cy.get('button[type="submit"]').click();

    // Assert redirection to contact list
    cy.url().should('include', '/contactList.html');

    // Check for the newly added contact in the list
    cy.contains('Ada').should('exist');
    cy.contains('Lovelace').should('exist');
    cy.contains('ada.lovelace@example.com').should('exist');
  });
});
