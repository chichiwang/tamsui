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
* [Project Configurations](#project-configurations)
* [Running the Application](#running-the-application)
* [Project Directories](#project-directories)
* [Adding an Application Directory](#adding-an-application-directory)
* [Static Files](#static-files)
* [Error Boundary](#error-boundary)
* [Testing](#testing)
* [Application Layouts](#application-layouts)
* [Route-Specific Data](#route-specific-data)
* [Pull Request Template](#pull-request-template)
* [Github Workflow](#github-workflow)

### Project Configurations
**Tamsui** uses environment-aware configurations via [Webpack's DefinePlugin](https://webpack.js.org/plugins/define-plugin/). This behavior is instrumented in [webpack/define.js](../webpack/define.js).

A config file `project-configs.js` exists in the project root directory. These variables are replaced with their corresponding values in the project code at build time.

Currently the following variables are used:
* `PORT` (number): The port the express server will run on.
* `SERVE_STATIC` (boolean): Whether the Express server should serve static assets located in `dist/static/`, `dist/styles/`, and `dist/scripts`.
* `PROJECT_URL` (string): The intended deployment URL of the application in each environment, used to set [canonical links](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/rel#canonical) and [Open Graph](https://ogp.me/) meta tags.

**Adding configuration variables**

To add a configuration variable, add the variable as a property to `project-configs.js`, in both defined environments:

```javascript
// project-configs.js
module.exports = {
  development: {
    NEW_CONFIG: false,
  },
  production: {
    NEW_CONFIG: true,
  },
};
```

Then add a [type declaration](https://www.typescriptlang.org/docs/handbook/2/type-declarations.html) for the new configuration variable to [app/global.d.ts](../app/globals.d.ts):

```typescript
// app/global.d.ts

declare const NEW_CONFIG: boolean;
```

To avoid running afoul of ESLint's [no-undef](https://eslint.org/docs/latest/rules/no-undef) rule when using these project config variables, a `/* global */` comment should be used in any file that references a project config variable:

```javascript
// example.js
/* global NEW_CONFIG */

if (NEW_CONFIG) {
  // ...
}
```

Now `NEW_CONFIG` can be used in the project code. When building for development, instances of `NEW_CONFIG` will be replaced with `false`, when building for production instances will be replaced with `true`.

**Note**: String values must be double-wrapped in quotes, since all config values are passed into the [DefinePlugin](https://webpack.js.org/plugins/define-plugin/#usage). This means that string values are treated as code fragments. Calling `JSON.stringify()` on string values will also preserve them as strings:

```javascript
// project-configs.js

module.exports = {
  development: {
    DOUBLE_WRAPPED_STRING: "'string value'",
    JSON_WRAPPED_STRING: JSON.stringify('remains a string'),
  },
  production: {
    // ...
  },
};
```

**Testing with configuration variables**

New configuration variables can either be mocked into tests by modifying the `global` object, or adding the variable to the [Jest globals object](https://jestjs.io/docs/configuration#globals-object). The globals object can be added to `sharedConfigs`, `appConfig`, `clientConfig`, or `serverConfig` (as appropriate) in [jest.config.js](../jest.config.js).

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
  * The directory should be updated in the `appConfig.testMatch` array to ensure that the test runner knows which directories to cover.

### Static Files
The directory [static/](../static), housed in the project root, is copied directly into the `dist/static/` directory on project build. This directory is served statically by the Express server in development builds. `static/` is meant to house static files (images, JSON files, etc.) used by **Tamsui**.

Similarly, JavaScript assets are built to `dist/scripts/`, CSS files are built to `dist/styles/`. For local development all of these directories are served by the Express backend server (dictated by the `SERVE_STATIC` [project variable](#project-configurations) in `project-configs.js`). For production builds the `SERVE_STATIC` config is set to `false` by default.

On deployment: the directories `dist/static/`, `dist/scripts/`, and `dist/styles/` can be deployed to a CDN.

### Error Boundary
**Tamsui** implements a basic [React Error Boundary](https://react.dev/reference/react/Component#catching-rendering-errors-with-an-error-boundary) in [app/ErrorBoundary](../app/ErrorBoundary). This error boundary is configured as an [errorElement](https://reactrouter.com/en/main/route/error-element) in the [dataRoutes](../app/dataRoutes) object. It is recommended all root routes are wrapped in this error boundary. A utility, [withErrorBoundary](../app/dataRoutes/withErrorBoundary.tsx), is provided to more easily (and declaratively) extend routes with this `errorElement` property:

```javascript
// app/dataRoutes/index.ts
import PageComponent from 'pages/PageComponent';

import withErrorBoundary from './withErrorBoundary';

const dataRoutes = [
  withErrorBoundary({
    path: '/path-to-page',
    Component: PageComponent,
  }),
];
```

On the server, if an error in rendering the application occurs it will redirect the request to `/error`, [configured by default](../server/appHandler.tsx) to be the [application's error page](../pages/ErrorPage).

On the client, an error in a page will render the [ErrorPage component](../pages/ErrorPage) as fallback.

**To change the path to the error page**: change the value of the constant `errorPagePath` in [server/appHandler.tsx](../server/appHandler.tsx). Make sure you define this route in the [app/dataRoutes/index.ts](../app/dataRoutes/index.ts) file.

Alternatively, keep the error page path and just replace the [ErrorPage component](../pages/ErrorPage).

### Testing
**Tamsui** utilizes [Jest](https://jestjs.io/) as test runner. Tests should be housed in a `__tests__/` directory within their respective [project directories](#project-directories). Test files should have the file extension `.test.js`.

The default [coverage threshhold](https://jestjs.io/docs/configuration#coveragethreshold-object) is set to 100% across the board. To reduce or remove the test coverage requirements, modify the `coverageThreshold` field in the [config](../jest.config.js).

To run the test suite locally: `npm test`. To update [Jest snapshots](https://jestjs.io/docs/snapshot-testing) `npm run test:snapshot` can be used. Alternatively, `npm run test -- -u` will also work.

### Application Layouts
Layouts can be applied directly to routes in [React Router](https://reactrouter.com/en/main) using [Layout Routes](https://reactrouter.com/en/main/start/concepts#layout-routes).

```javascript
// dataRoutes.js
import Layout from 'app/Layout';

import Home from 'pages/Home';
import AnotherPage from 'pages/AnotherPage';

const routes = [{
  Component: Layout,
  children: [{
    path: '/',
    Component: Home,
  }, {
    path: 'another-page',
    Component: AnotherPage,
  }],
}];
```

In the boilerplate, a default Layout has been created in [app/Layout](../app/Layout/index.tsx).

One issue that has arisen from the usage of a layout route is that client-side navigation will not reset the browser scroll upon page navigation: clicking a link to another page will land the user on the new page, scrolled the same amount as on the previous page.

A solution has been implemented in this boilerplate in the form of a [custom React hook](https://react.dev/learn/reusing-logic-with-custom-hooks): [useResetScroll](../app/hooks/README.md#useresetscroll). This hook needs to be invoked by any layouts in use, and [Links](https://reactrouter.com/en/main/components/link) to pages that need the scroll reset need to pass a [state](https://reactrouter.com/en/main/components/link#state) object with a property `resetScroll` set to `true`. A reusable component [InternalLink](../app/components/InternalLink) has been provided to automatically pass this state object property.

### Route-Specific Data
**Tamsui** uses a React Router [data router](https://reactrouter.com/en/main/routers/router-provider). A route can be passed a [handle](https://reactrouter.com/en/main/route/route#handle), which allows any arbitrary data to be passed to a route, retrieved in a component using the [useMatches](https://reactrouter.com/en/main/hooks/use-matches) hook.

This boilerplate has a baseline implementation of this usage in place, passing a [PageHandle](../app/types.ts) object. This is intended to pass route-specific or page-specific data to a page component. A `PageHandle` is currently defined as:

```typescript
type RouteHead = {
  title?: string;
  tags?: React.ReactNode;
};

type PageHandle = {
  head?: RouteHead;
};
```

A `PageHandle` object can be passed into a given data route's `handle` field. If this `PageHandle` contains a `head` property with `title` or `tags` then these values will be used by the [app/Head](../app/Head/index.tsx) component to set the title and append route-specific head tags to a page.

**NOTE**: [app/Head](../app/Head/index.tsx) is rendered by [app/HTMLBody](../app/HTMLBody/index.tsx), which rendered by [app/Layout](../app/Layout/index.tsx). This makes `app/Head` the ideal component to house site-wide [document head](https://developer.mozilla.org/en-US/docs/Web/API/Document/head) tags. To leverage this in new layouts, follow the example set by `app/Layout`: wrap the contents of the layout in `app/HTMLBody` and invoke the hook [useResetScroll](../app/hooks/README.md#useresetscroll) to ensure proper scroll behavior on route change.

A custom hook, [app/hooks/useRouteHead](../app/hooks/README.md#useroutehead), has been created for use in `app/Head` to retrieve the contents of a route's PageHandle `head` property if it exists.

To add a `PageHandle` to a data route:

```javascript
// dataRoutes.js
import Home from 'pages/Home';
import About from 'pages/About';

const dataRoutes = [{
  path: '/',
  Component: Home,
  handle: {
    head: {
      title: 'Welcome to my homepage!',
      tags: (
        <>
          <meta property="og:title" content="Check out my website!" />
          <meta property="og:description" content="I think it might be the best website ever made." />
        </>
      ),
    },
  },
}, {
  path: '/about',
  Component: About,
  handle: {
    head: {
      title: 'Some things about my website',
      tags: (
        <>
          <meta property="og:title" content="Learn about the best website" />
          <meta property="og:description" content="10 reasons this site is best." />
        </>
      ),
    },
  },
}];

export default dataRoutes;
```

These `title`s and `tags` will be rendered into the document head only for their respective routes.

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
To build for production run `npm build:prod`. The production assets to be deployed will be generated in the `dist/` directory.

To build the production assets and run the Express server in a single command, run `npm start`.
