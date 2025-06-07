describe('Signup Page - Functional Tests', () => {
  it('Should load signup page and find input fields', () => {
    cy.visit('https://thinking-tester-contact-list.herokuapp.com/signup', { timeout: 60000 });

    // Make sure we're on the right page
    cy.url().should('include', '/signup');

    // Wait for the form and input fields
    cy.get('#firstName', { timeout: 10000 }).should('be.visible');
    cy.get('#lastName').should('be.visible');
    cy.get('#email').should('be.visible');
    cy.get('#password').should('be.visible');
  });
});
