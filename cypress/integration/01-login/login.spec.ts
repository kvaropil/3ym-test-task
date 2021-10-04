describe('01 - Login', (): void => {
  it('Successful login', (): void => {
    const validLoginName: string = Cypress.env('validLoginName');
    const validPassword: string = Cypress.env('validPassword');

    cy.visit('/');

    cy.get('input[name="login"]').type(validLoginName);
    cy.get('input[name="password"]').type(validPassword);
    cy.get('button#modal-login-button').click();

    cy.contains('Close').click();

    cy.url().should('include', '/user-panel');
  });
});
