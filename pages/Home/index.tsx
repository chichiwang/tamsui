import React from 'react';

import HeroBanner from 'pages/components/HeroBanner';
import HeadingBlock from 'pages/components/HeadingBlock';

import styles from './styles.module.scss';

function Home(): React.ReactElement {
  return (
    <>
      <HeroBanner />

      <HeadingBlock level="1" heading="Tamsui" center>

        <p className={styles.tagline}>
          An Express / Typescript / React server-side rendered
          universal JavaScript application Boilerplate
        </p>

        <p>
          {'Tamsui is a '}
          <a href="https://nodejs.org/en" rel="noreferrer" target="_blank">Node.js</a>
          {' boilerplate using '}
          <a href="https://www.typescriptlang.org/" rel="noreferrer" target="_blank">TypeScript</a>
          {' and '}
          <a href="https://react.dev/" rel="noreferrer" target="_blank">React</a>
          {'. It provides server-side rendering using an '}
          <a href="https://expressjs.com/" rel="noreferrer" target="_blank">Express</a>
          {' webserver for a client-side '}
          <a href="https://react.dev/" rel="noreferrer" target="_blank">React</a>
          {' application.'}
        </p>

        <p>
          {'Tamsui renders a React application to a '}
          <a href="https://nodejs.org/api/stream.html" rel="noreferrer" target="_blank">Node.js stream</a>
          {' utilizing React 18\'s '}
          <a href="https://react.dev/reference/react-dom/server/renderToPipeableStream" rel="noreferrer" target="_blank">renderToPipeableStream method</a>
          .
        </p>

      </HeadingBlock>

      <HeadingBlock id="Mission-Intent" level="2" heading="Mission Intent">
        <p>
          {`Tamsui is meant to be a baseline boilerplate for starting new projects. 
          The intent of this boilerplate is to provide a thorough project start 
          utilizing a specific set of tech stack and implementation decisions while 
          remaining as simple as possible. This boilerplate will provide a foundation 
          for building out a client served by a webserver that acts as a `}
          <a href="https://learn.microsoft.com/en-us/azure/architecture/patterns/backends-for-frontends" rel="noreferrer" target="blank">backend for frontend</a>
          .
        </p>

        <p>
          Documentation for this project will be thorough, test coverage will be complete.
          To that end unit tests coverage requirements are set to 100%.
        </p>

        <p>
          {`Any non-trivial decisions made within this project will be documented. 
          Technical decisions will be documented in `}
          <a href="https://github.com/chichiwang/tamsui/pulls?q=is%3Aclosed" rel="noreferrer" target="_blank">pull request descriptions</a>
          {', project decisions documented in a '}
          <a href="https://github.com/users/chichiwang/projects/1" rel="noreferrer" target="_blank">project board</a>
          .
        </p>
      </HeadingBlock>

      <HeadingBlock id="What-Tamsui-Is-Not" level="3" heading="What Tamsui Is Not">
        <p>
          {'Tamsui is an '}
          <a href="https://en.wikipedia.org/wiki/Isomorphic_JavaScript" rel="noreferrer" target="_blank">isomorphic JavaScript</a>
          {' application. The '}
          <a href="https://expressjs.com/" rel="noreferrer" target="_blank">Express</a>
          {' server that renders the application is intended to serve as a simple '}
          <a href="https://learn.microsoft.com/en-us/azure/architecture/patterns/backends-for-frontends" rel="noreferrer" target="_blank">backend for frontend</a>
          , not a full fledged backend for business logic.
        </p>

        <p>
          {`Tamsui is meant to be a starting point for building a frontend layer, not an entire business application. 
            Any backend API for managing business logic should not be built on top of Tamsui, and should exist outside 
            of any application built on top of this boilerplate.`}
        </p>
      </HeadingBlock>
    </>
  );
}

export default Home;
