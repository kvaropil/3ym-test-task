import 'cypress-file-upload';

describe('02 - Upload file', (): void => {
  it('Upload file to the server via drag and drop', (): void => {
    const validLoginName: string = Cypress.env('validLoginName');
    const validPassword: string = Cypress.env('validPassword');
    const fileToUpload: string = 'Apple.stl';
    const fileName: string = '3YM-test-task';
    const fileExtension: string = 'stl';

    cy.visit('app.3yourmind.com');

    cy.get('input[name="login"]').type(validLoginName);
    cy.get('input[name="password"]').type(validPassword);
    cy.get('button#modal-login-button').click();

    cy.contains('Close').click();

    cy.fixture(fileToUpload, 'binary')
      .then(Cypress.Blob.binaryStringToBlob)
      .then((fileContent) => {
        cy.get('.basket--upload-file').attachFile(
          {
            fileContent,
            fileName: `${fileName}.${fileExtension}`,
          },
          {
            subjectType: 'drag-n-drop',
          },
        );
      });

    cy.url().should('include', '/wizard');
    cy.get('*[class="basket-line__name"]').should('include.text', fileName);
  });

  after((): void => {
    cy.get('.vue-yodify__close').click();
    cy.get('.actions').contains('Delete').click();
    cy.contains('Confirm').click();
  });
});
