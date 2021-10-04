# Test task for 3YOURMIND

Repository for interview task to 3YOURMIND written in **Cypress** with **Typescript**

## How to install

- Clone repository via `git clone`, then run `yarn install` to install required dependencies

## Repository structure

### Configuration

- `cypress.json` contains main configuration of Cypress.
- `cypress.env.json` contains parameters used in test such as login and password

#### Config interface

| Variable       | Description                       | Predefined in config |
| -------------- | --------------------------------- | -------------------- |
| baseUrl        | Base url as default url for tests | yes                  |
| validLoginName | username for login into app       | yes                  |
| validPassword  | password for login into app       | yes                  |

### Fixtures

Folder `cypress/fixtures/` contains test data files (see [fixtures docs](https://docs.cypress.io/api/commands/fixture.html)).

- In this case `Apple.stl` model is stored in _fixtures_ directory

### Test files

Test files are located in _integration_ folder. Tests are divided to related folders

### Plugins & Commands

- Plugins are imported in `cypress/plugins/index.js`
- Commands are imported in `cypress/support/index.js`

## Running tests

There are two ways to run tests:

- CLI mode - run `yarn run test`
- interactive window mode - run `yarn run open`

## Improvements if no time constraints

- Implement better command line logger
- Use `.env` for passwords and other sensitive values
- Do better Typescript setup
- Do more test cases for _file upload_, in terms of different ways how to upload file, file extension validation, etc...
- Prepare tests for runs against different environments (DEV|STG|PRD)

## A strategy to implement e2e testing in a SCRUM team / Devops way of working

- Require using `data-cy` attributes to be 100% clear when getting elements
- In cooperation with product team specify crucial parts of application. Then make a set of E2E smoke tests
- Setup GitLab CI pipeline that triggers set of smoke tests (mentioned above) when feature branch is merged into develop branch
- Setup staging test environment that keeps in mind technical details of production environment
- Regarding to opinion of product team we could represent some tests by Gherkin scenarions. Cypress supports running Gherking steps (see [cypress-cucumber-preprocessor](https://github.com/TheBrainFamily/cypress-cucumber-preprocessor))
