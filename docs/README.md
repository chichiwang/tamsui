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

## Github Tooling
PR Template/Workflow for Actions
## Project Directories/Files
### Adding a Directory
## Adding Path Aliases
## Adding Jest Projects
## Developing Locally
## Adding Tests
## Building for Production
