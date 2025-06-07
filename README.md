# Cypress Room Automation Tests

This repository contains end-to-end (E2E) automation tests for the Cypress Room web application using Cypress. The tests are designed to ensure the core functionalities of the application (like user authentication and contact forms) are working as expected.

## Project Overview / Description of Tests

This Cypress test suite focuses on the following key areas of the Cypress Room application:

* **User Authentication Tests (`loginhometest.cy.js`):**
    * Verifies successful user login with valid credentials.
    * Tests handling of invalid login attempts (e.g., incorrect username/password).
    * Ensures users are redirected to the correct homepage after successful login.

* **New User Registration Tests (`signuptest.cy.js`):**
    * Covers the process of creating a new user account.
    * Validates input fields during registration (e.g., strong password requirements, email format).
    * Confirms successful account creation and appropriate user feedback.

* **Contact Form Submission Tests (`contactformtest.cy.js`):**
    * Tests the functionality of the contact submission form.
    * Verifies that messages can be successfully sent.
    * Checks for proper validation of input fields (e.g., valid email, required fields).

## Getting Started

### Prerequisites

Make sure you have Node.js installed on your machine. You can download it from [nodejs.org](https://nodejs.org/).

### Installation

1.  Clone this repository:
    ```bash
    git clone [https://github.com/Marrietify/cypressroom1.git](https://github.com/Marrietify/cypressroom1.git)
    ```
    (Replace with your actual repository's HTTPS clone URL, e.g., `https://github.com/Marrietify/cypress-room-project.git`)
2.  Navigate into the project directory:
    ```bash
    cd "Cypress Room"
    ```
3.  Install Cypress and other dependencies:
    ```bash
    npm install
    ```

## Running Tests

### Open Cypress Test Runner UI

To open the Cypress Test Runner UI and run tests interactively:
```bash
npx cypress open
