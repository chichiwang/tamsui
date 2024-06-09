# Developer Documentation
* [Starting a Project](#starting-a-project)
* [NPM Scripts](#npm-scripts)
* [Developing Locally](#developing-locally)
* [Building for Production](#building-for-production)

## Starting a Project
- [ ] Clone this repository.
- [ ] Rename the project directory.
- [ ] Update the `package.json` file.
  - [ ] Update the `name` field.
  - [ ] Update the `repository/url` field.
  - [ ] Update the `bugs/url` field.
  - [ ] Update the `homepage` field.
- [ ] [Reset the git remote](https://docs.github.com/en/get-started/getting-started-with-git/managing-remote-repositories#changing-a-remote-repositorys-url) to your new project repository.
- [ ] If using [nvm](https://github.com/nvm-sh/nvm), run `nvm use`.
  - [ ] Otherwise, note the contents of `.nvmrc` to see the version of [Node.js](https://nodejs.org/) this project is built on.
- [ ] Run `npm install`.

## NPM Scripts
| Script          | Description                                                                                                                                        |
| --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `analyze`       | Run [webpack-bundle-analyzer](https://www.npmjs.com/package/webpack-bundle-analyzer) against a `stats.json` in the root directory                  |
| `analyze:dev`   | Build dev assets and run [webpack-bundle-analyzer](https://www.npmjs.com/package/webpack-bundle-analyzer) against the generated assets             |
| `analyze:prod`  | Build prod assets and run [webpack-bundle-analyzer](https://www.npmjs.com/package/webpack-bundle-analyzer) against the generated assets            |
| `build:dev`     | Build dev assets and generate `stats.json`                                                                                                         |
| `build:dist`    | Create a `dist/` directory in the project root                                                                                                     |
| `build:prod`    | Build prod assets and generate `stats.json`                                                                                                        |
| `build:static`  | Copy the `static/` directory in project root into `dist/`                                                                                          | 
| `clean`         | Remove `stats.json` and `dist/` directory                                                                                                          |
| `dev`           | Build dev assets and run the webserver, running server logs through [pino-pretty](https://github.com/pinojs/pino-pretty) for development purposes  |
| `lint`          | Run [ESLint](https://eslint.org/)                                                                                                                  |
| `prod`          | Build prod assets and run the webserver, running server logs through [pino-pretty](https://github.com/pinojs/pino-pretty) for development purposes |
| `run`           | Run `dist/index.js`                                                                                                                                |
| `start`         | Build prod assets and run the webserver, intended to be used in production environments                                                            |
| `test`          | Run test suites with coverage requirements in place, generates coverage files                                                                      |
| `test:snapshot` | Update snapshots with [Jest](https://jestjs.io/), can be used in lieu of `npm run test -- -u`                                                      |
| `watch`         | Run watch server, will restart the server on every file change                                                                                     |

## Developing Locally
* [Running the Application](#running-the-application)
* [Project Directories](#project-directories)
* [Adding an Application Directory](#adding-an-application-directory)
* [Static Files](#static-files)
* [Error Boundary](#error-boundary)
* [Testing](#testing)
* [Pull Request Template](#pull-request-template)
* [Github Workflow](#github-workflow)

### Running the Application
Run `npm run watch` to run the development watch server.

`npm run dev` will build and run the application in development mode. `npm run prod` will build and run the application in production mode. All of the above modes will run the server output through [pino-pretty](https://github.com/pinojs/pino-pretty).

### Project Directories
The `client/` directory is intended to house files specific to the client-side bundle. At the moment it only contains the entrypoint file, which [mounts and hydrates the root application](https://react.dev/reference/react-dom/client/hydrateRoot).

The `app/` directory houses application-level concerns: the root application contains the html root, head, and body. The routes are housed in [app/dataRoutes](../app/dataRoutes) as a [data routes object](https://reactrouter.com/en/main/route/route). The reason the routes are not declared in [JSX](https://react.dev/learn/writing-markup-with-jsx) is for compatibility with rendering [React to a Node.js stream](https://react.dev/reference/react-dom/server/renderToPipeableStream).

The `pages/` directory houses the page-level react components. These are plugged into the application via the [dataRoutes object](../app/dataRoutes).

The `server/` directory houses the server-side rendering logic and defines the static asset directories. [Pino](https://getpino.io/) is implemented as the logger.

### Adding an Application Directory
To add additional application directories, or to remove existing ones:
* Path aliases need to be updated
* Jest projects need to be updated

The `app/` and `pages/` directories are set up with path aliases so that a module can be imported with absolute pathing rather than relative pathing:

```javascript
import Module from 'app/Module';
import PageModule from 'pages/PageModule';
```

If any directory is removed, or if a new directory needs an alias:
* An `alias` should be updated in the [webpack configs](../webpack/resolve.js).
* The [alias mapping](https://github.com/johvin/eslint-import-resolver-alias?tab=readme-ov-file#usage) should be added to the [eslint configuration](../.eslintrc.js) to avoid linting errors when using the alias.
* The alias should be updated in the [paths configuration](https://www.typescriptlang.org/tsconfig#paths) for TypeScript to avoid type errors.
* The alias should be updated in the [moduleNameMapper configuration](https://jestjs.io/docs/configuration#modulenamemapper-objectstring-string--arraystring) in the [Jest configuration](../jest.config.js) to ensure module mocking will work in tests, and so there are no errors in using the alias.
* The directory should be updated in the `appConfig`·`testMatch` array to ensure that test runner knows which directories to cover.

### Static Files
The directory [static/](../static) housed in the project root is copied directly into the `dist/` directory on project build. This directory is served statically by the Express server.

This directory is meant to house static files (images, JSON files, etc.) used by **Tamsui**. This is a stop-gap solution: the Express server should not be used to serve static files like images - these should be housed in a CDN.

On deployment, the `/dist/static/` directory can be uploaded to your CDN of choice.

**TODO** (future tasks for the **Tamsui**):
- [ ] Add a configuration to provide a base route to static assets (so a CDN route can be provided)
- [ ] Add a configuration to enable/disable serving `/static` directory files in various environments (development/production)
- [ ] Add configuration options for serving built assets (`/scripts`, `/styles`) as well, so these assets can also be served via CDN

### Error Boundary
**Tamsui** implements a basic [React Error Boundary](https://react.dev/reference/react/Component#catching-rendering-errors-with-an-error-boundary) in [app/ErrorBoundary](../app/ErrorBoundary). This error boundary is configured as the [errorElement](https://reactrouter.com/en/main/route/error-element) in the [dataRoutes](../app/dataRoutes). It is recommended to wrap all root routes in this error boundary. An utility, [withErrorBoundary](../app/dataRoutes/withErrorBoundary.tsx), is provided to more easily (and declaratively) extend routes with this errorElement when extending routes:

```javascript
// app/dataRoutes/index.ts
import withErrorBoundary from './withErrorBoundary';

import PageComponent from 'pages/PageComponent';

const dataRoutes = [
  withErrorBoundary({
    path: '/path-to-page',
    Component: PageComponent,
  }),
];
```

On the server, if an error in rendering the application occurs it will redirect the request to `/error`, [configured by default](../server/appHandler.tsx) to the be [application's error page](../pages/ErrorPage).

On the client, an error in a page will render the [ErrorPage component](../pages/ErrorPage) as fallback.

**To change the path to the error page**: change the value of the constant `errorPagePath` in [server/appHandler.tsx](../server/appHandler.tsx). Make sure you define this route in the [app/dataRoutes/index.ts](../app/dataRoutes/index.ts) file.

Alternatively, keep the error page path and just replace the [ErrorPage component](../pages/ErrorPage).

### Testing
**Tamsui** utilizes [Jest](https://jestjs.io/) as test runner. Tests should be housed in a `__tests__/` directory and/or contain the extension `.test.js` anywhere within the [project directories](#project-directories).

The default [coverage threshhold](https://jestjs.io/docs/configuration#coveragethreshold-object) is set to 100% across the board. To reduce or remove the test coverage requirements, modify the `coverageThreshold` field in the [config](../jest.config.js).

To run the test suite locally: `npm run test`. To update [Jest snapshots](https://jestjs.io/docs/snapshot-testing) `npm run test:snapshot` can be used. Alternatively, `npm run test -- -u` will also work.

### Pull Request Template
**Tamsui** contains a [Github Pull Request template](https://docs.github.com/en/communities/using-templates-to-encourage-useful-issues-and-pull-requests/creating-a-pull-request-template-for-your-repository) that is intended to provide a scaffold for a thorough pull request. [This template](../.github/pull_request_template.md) provides the following sections:

* `Description`:
  * Link to a related issue/story - important for documentation of why this change is being made
  * A prompt to provide a description of the intent of the changes
* `Changes`: A prompt to list the code changes in the pull request
* `Steps to QA`: A prompt to provide steps for reviewers to verify the changes achieve their intended result

The reason for these sections is two-fold:
1. Make it easier for reviewers to review the code changes, with full context of the reasons the changes are being made, in order that the team can produce the best results for the codebase.
2. Provide a history of documentation in the repository, so that every significant change is documented and vetted. This can be useful in the future to trace changes and intent when debugging or extending the codebase.

### Github Workflow
**Tamsui** contains a [Github workflow](https://docs.github.com/en/actions/using-workflows/about-workflows) configured to [run the linter and test runner](../.github/workflows/lint-test.yml) on [push events](https://docs.github.com/en/actions/using-workflows/events-that-trigger-workflows#push). If this is not desired, [disable the workflow in Github](https://docs.github.com/en/actions/using-workflows/disabling-and-enabling-a-workflow#disabling-a-workflow).

## Building for Production
To build for production run `npm build:prod`. The production assets to be deployed live in the `dist/` directory.

To build the production assets and run the Express server in a single command, run `npm start`.
