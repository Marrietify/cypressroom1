describe('Signup Page - Functional Tests', () => {
  it('Should load signup page and find input fields', () => {
    cy.visit('https://thinking-tester-contact-list.herokuapp.com/addUser', { timeout: 60000 });

    // Make sure we're on the right page
    cy.url().should('include', '/addUser');

    // Wait for the form and input fields
    cy.get('#firstName', { timeout: 10000 }).should('be.visible').type('Test');
    cy.get('#lastName').should('be.visible').type('User');
    cy.get('#email').should('be.visible').type('email');
    cy.get('#password').should('be.visible').type('StrongPassword123!');

      cy.get('#submit').click(); 

  });
});
