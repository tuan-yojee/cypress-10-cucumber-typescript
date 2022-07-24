class LoginPage {
  private path = '/login';

  emailInput = () => cy.get("[data-cy='email']");
  passwordInput = () => cy.get("[data-cy='password']");
  loginButton = () => cy.get("button[data-cy='submit']");
  errorMessageNotification = () => cy.get('.MuiSnackbarContent-message').find('span');

  visitLogin() {
    cy.visit(this.path);
  }

  typeEmail(email: string) {
    if (email.length !== 0) {
      this.emailInput().clear().type(email);
    }
  }

  typePassword(password: string) {
    if (password.length !== 0) {
      this.passwordInput().clear().type(password);
    }
  }

  clickLogin() {
    this.loginButton().click();
  }

  loginDispatcher(email: string, password: string) {
    Cypress.log({ displayName: 'LOGIN:', message: [`🔐 Authenticating: ${email} | ${password}`] });
    this.typeEmail(email);
    this.typePassword(password);
    this.clickLogin();
  }
}

export default new LoginPage();
