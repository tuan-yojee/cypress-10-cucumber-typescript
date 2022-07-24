import { When, Then, Step } from "@badeball/cypress-cucumber-preprocessor";
import loginPage from '../../page_objects/login_page';

When('I login with correct email and password', () => {
  loginPage.loginDispatcher('yojee-auto-dev@qacypressone.com', 'P@ssw0rd1');
});

When('I login with valid email but incorrect password', () => {
  loginPage.loginDispatcher('yojee-auto-dev@qacypressone.com', 'incorectpassword');
});

When('I login with incorrect email and valid password', () => {
  loginPage.loginDispatcher('a@a.com', 'P@ssw0rd1');
});

When('I login with empty email and valid password', () => {
  loginPage.typeEmail('');
  loginPage.typePassword('P@ssw0rd1');
});

When('I login with valid email and empty password', () => {
  loginPage.typeEmail('yojee-auto-dev@qacypressone.com');
  loginPage.typePassword('');
});

Then('I should see the button Login is be disabled', () => {
  loginPage.loginButton().should('have.attr', 'disabled');
});

Then('I should see the error message notification', () => {
  loginPage
    .errorMessageNotification()
    .should(
      'contain',
      'The Email Address or Password/Code entered is incorrect. Please enter valid email and password/code'
    );
});

Then('I should see the explore page', () => {
  cy.explore_tab_should_visible();
});
