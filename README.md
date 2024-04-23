<div align="center">
  <img width="200" height="200" alt="Tamsui logo" src="./static/images/logo.webp" /><br/>
  <h1>Tamsui</h1>
  <p>
    Tamsui is an Express/TypeScript/React server-side rendered universal JavaScript application boilerplate.
  </p>
</div>

**Tamsui** is a [Node.js](https://nodejs.org/en) boilerplate using [TypeScript](https://www.typescriptlang.org/) and [React](https://react.dev/). It provides server-side rendering using an [Express](https://expressjs.com/) webserver for a client-side [React](https://react.dev/) application.

**Tamsui** renders to a React application to a [Node.js stream](https://nodejs.org/api/stream.html) utilizing React 18's [renderToPipeableStream method](https://react.dev/reference/react-dom/server/renderToPipeableStream).

## Mission Intent
**Tamsui** is meant to be a baseline boilerplate for future projects. The intent of this repository is to provide a thorough project start utilizing a specific set of tech stack and implemenentation decisions while remaining as simple as possible. This boilerplate will provide a foundation for building out a client with a webserver that acts as a [backend for frontend](https://learn.microsoft.com/en-us/azure/architecture/patterns/backends-for-frontends).

Documentation for this project will be thorough, test coverage will be complete. To that end unit test coverage requirements are set to 100% to start.

Any non-trivial decisions made within this project will be documented. Technical decisions will be documented in [Pull Request descriptions](https://github.com/chichiwang/tamsui/pulls?q=is%3Aclosed), project decisions documented in a [project board](https://github.com/users/chichiwang/projects/1).

### What Tamsui Is Not
**Tamsui** is an [isomorphic JavaScript](https://en.wikipedia.org/wiki/Isomorphic_JavaScript) application. The [Express](https://expressjs.com/) server that renders the application is intended to serve as a simple [backend for frontend](https://learn.microsoft.com/en-us/azure/architecture/patterns/backends-for-frontends), not a full fledged backend for business logic.

**Tamsui** is meant to be a starting point for building a frontend layer, not an entire business application. Any backend API for managing business logic should not be built on top of Tamsui, and should exist outside of any application built on top of this boilerplate.

## Technology Stack
**Server**
* [Node.js](https://nodejs.org/en)
* [Express](https://expressjs.com/)

**Client**
* [React](https://react.dev/)
* [Sass](https://sass-lang.com/)

**Developer Tooling**
* [TypeScript](https://www.typescriptlang.org/): Strict typing
* [Webpack](https://webpack.js.org/): Bundling
* [Babel](https://babeljs.io/): Transpilation
* [Jest](https://jestjs.io/): Testing
* [ESLint](https://eslint.org/): Linting

## Usage
Usage documentation is provided in [docs/README.md](docs/README.md).
