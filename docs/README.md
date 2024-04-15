# Developer Documentation

## Installing the Boilerplate

- [] Clone this repository
- [] Rename the directory
- [] Update `package.json`
  - [] Update `name` field
  - [] Update `repository/url` field
  - [] Update `bugs/url` field
  - [] Update `homepage` field
- Run `npm install`

## NPM Scripts

| Script          | Description                                                                                                                                        |
| --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `analyze`       | Run [webpack-bundle-analyzer](https://www.npmjs.com/package/webpack-bundle-analyzer) against a `stats.json` in the root directory                  |
| `analyze:dev`   | Build dev assets and run [webpack-bundle-analyzer](https://www.npmjs.com/package/webpack-bundle-analyzer) against the generated assets             |
| `analyze:prod`  | Build prod assets and run [webpack-bundle-analyzer](https://www.npmjs.com/package/webpack-bundle-analyzer) against the generated assets            |
| `build:dev`     | Build dev assets                                                                                                                                   |
| `build:prod`    | Build prod assets                                                                                                                                  |
| `clean`         | Remove `stats.json` and `dist/` directory                                                                                                          |
| `dev`           | Build dev assets and run the webserver, running server logs through [pino-pretty](https://github.com/pinojs/pino-pretty) for development purposes  |
| `lint`          | Run [ESLint](https://eslint.org/)                                                                                                                  |
| `prod`          | Build prod assets and run the webserver, running server logs through [pino-pretty](https://github.com/pinojs/pino-pretty) for development purposes |
| `run`           | Run `dist/index.js`                                                                                                                                |
| `start`         | Build prod assets and run the webserver, intended to be used in production environments                                                            |
| `test`          | Run test suites with coverage requirements in place, generates coverage files                                                                      |
| `test:snapshot` | Update snapshots with [Jest](https://jestjs.io/), can use in lieu of `npm run test -- -u`                                                          |
| `watch`         | Run watch server, will restart the server on every file change                                                                                     |

## Developing Locally

### Running the Application

Run `npm run watch` to run the development watch server.

`npm run dev` will build and run the application in development mode. `npm run prod` will build and run the application in production mode. All of the above modes will run the server output through [pino-pretty](https://github.com/pinojs/pino-pretty).

### Project Directories

The `client/` directory is intended to house files specific to the client-side bundle. At the moment it only contains the entrypoint file, which [mounts and hydrates the root application](https://react.dev/reference/react-dom/client/hydrateRoot).

The `app/` directory houses application-level concerns: the root application contains the html root, head, and body. The routes are housed in [app/dataRoutes](../app/dataRoutes) as a [data routes object](https://reactrouter.com/en/main/route/route). The reason the routes are not declared in [JSX](https://react.dev/learn/writing-markup-with-jsx) is for compatibility with rendering [React to a Node.js stream](https://react.dev/reference/react-dom/server/renderToPipeableStream).

The `pages/` directory houses the page-level react components. These are plugged into the application via the [dataRoutes object](../app/dataRoutes).

The `server/` directory houses the server-side rendering logic and defines the static asset directories. [Pino](https://getpino.io/) is implemented as the logger.

### Testing

**Tamsui** utilizes [Jest](https://jestjs.io/) as test runner. Tests should be housed in a `__tests__/` directory and/or contain the extension `.test.js` anywhere within the [project directories](#project-directories).

The default [coverage threshhold](https://jestjs.io/docs/configuration#coveragethreshold-object) is set to 100% across the board. To reduce or remove the test coverage requirements, modify the `coverageThreshold` field in the [config}(../jest.config.js).

## Building for Production

## Github Tooling
PR Template/Workflow for Actions
## Project Directories/Files
### Adding a Directory
## Adding Path Aliases
## Adding Jest Projects
