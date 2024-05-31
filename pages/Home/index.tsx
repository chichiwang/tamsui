import React from 'react';

import HeroBanner from 'pages/components/HeroBanner';
import ContentBlock from 'pages/components/ContentBlock';
import HeadingBlock from 'pages/components/HeadingBlock';
import ExternalLink from 'pages/components/ExternalLink';

import styles from './styles.module.scss';

function Home(): React.ReactElement {
  return (
    <>
      <HeroBanner />

      <ContentBlock>
        <HeadingBlock level="1" heading="Tamsui" center>
          <p className={styles.tagline}>
            An Express / TypeScript / React server-side rendered
            universal JavaScript application Boilerplate
          </p>

          <p>
            {'Tamsui is a '}
            <ExternalLink href="https://nodejs.org/en">Node.js</ExternalLink>
            {' boilerplate using '}
            <ExternalLink href="https://www.typescriptlang.org/">TypeScript</ExternalLink>
            {' and '}
            <ExternalLink href="https://react.dev/">React</ExternalLink>
            {'. It provides server-side rendering using an '}
            <ExternalLink href="https://expressjs.com/">Express</ExternalLink>
            {' webserver for a client-side '}
            <ExternalLink href="https://react.dev/">React</ExternalLink>
            {' application.'}
          </p>

          <p>
            {'Tamsui renders a React application to a '}
            <ExternalLink href="https://nodejs.org/api/stream.html">Node.js stream</ExternalLink>
            {' utilizing React 18\'s '}
            <ExternalLink href="https://react.dev/reference/react-dom/server/renderToPipeableStream">renderToPipeableStream method</ExternalLink>
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
            <ExternalLink href="https://learn.microsoft.com/en-us/azure/architecture/patterns/backends-for-frontends">backend for frontend</ExternalLink>
            .
          </p>

          <p>
            Documentation for this project will be thorough, test coverage will be complete.
            To that end unit tests coverage requirements are set to 100%.
          </p>

          <p>
            {`Any non-trivial decisions made within this project will be documented. 
            Technical decisions will be documented in `}
            <ExternalLink href="https://github.com/chichiwang/tamsui/pulls?q=is%3Aclosed">pull request descriptions</ExternalLink>
            {', project decisions documented in a '}
            <ExternalLink href="https://github.com/users/chichiwang/projects/1">project board</ExternalLink>
            .
          </p>
        </HeadingBlock>

        <HeadingBlock id="What-Tamsui-Is-Not" level="3" heading="What Tamsui Is Not">
          <p>
            {'Tamsui is an '}
            <ExternalLink href="https://en.wikipedia.org/wiki/Isomorphic_JavaScript">isomorphic JavaScript</ExternalLink>
            {' application. The '}
            <ExternalLink href="https://expressjs.com/">Express</ExternalLink>
            {' server that renders the application is intended to serve as a simple '}
            <ExternalLink href="https://learn.microsoft.com/en-us/azure/architecture/patterns/backends-for-frontends">backend for frontend</ExternalLink>
            , not a full fledged backend for business logic.
          </p>

          <p>
            {`Tamsui is meant to be a starting point for building a frontend layer, not an entire business application. 
              Any backend API for managing business logic should not be built on top of Tamsui, and should exist outside 
              of any application built on top of this boilerplate.`}
          </p>
        </HeadingBlock>

        <HeadingBlock className={styles.printPageBreak} id="Tech-Stack" level="2" heading="Tech Stack">
          <div className={styles.fullStackContainer}>
            <div className={styles.stackContainer}>
              <div className={styles.stack}>
                <h3 className={styles.title}>Server</h3>
                <div className={styles.link}>
                  <ExternalLink href="https://nodejs.org/en">Node.js</ExternalLink>
                </div>
                <div className={styles.link}>
                  <ExternalLink href="https://expressjs.com/">Express</ExternalLink>
                </div>
                <div className={styles.link}>
                  <ExternalLink href="https://react.dev/">React</ExternalLink>
                </div>
                <div className={styles.link}>
                  <ExternalLink href="https://reactrouter.com/en/main/guides/ssr">React Router</ExternalLink>
                </div>
                <div className={styles.link}>
                  <ExternalLink href="https://getpino.io/">Pino</ExternalLink>
                </div>
              </div>
            </div>
            <div className={styles.stackContainer}>
              <div className={styles.stack}>
                <h3 className={styles.title}>Client</h3>
                <div className={styles.link}>
                  <ExternalLink href="https://react.dev/">React</ExternalLink>
                </div>
                <div className={styles.link}>
                  <ExternalLink href="https://reactrouter.com/en/main/guides/ssr">React Router</ExternalLink>
                </div>
              </div>
            </div>
            <div className={styles.stackContainer}>
              <div className={styles.stack}>
                <h3 className={styles.title}>Developer Tooling</h3>
                <div className={styles.link}>
                  <ExternalLink href="https://www.typescriptlang.org/">TypeScript</ExternalLink>
                </div>
                <div className={styles.link}>
                  <ExternalLink href="https://sass-lang.com/">Sass</ExternalLink>
                </div>
                <div className={styles.link}>
                  <ExternalLink href="https://webpack.js.org/">Webpack</ExternalLink>
                </div>
                <div className={styles.link}>
                  <ExternalLink href="https://babeljs.io/">Babel</ExternalLink>
                </div>
                <div className={styles.link}>
                  <ExternalLink href="https://jestjs.io/">Jest</ExternalLink>
                </div>
                <div className={styles.link}>
                  <ExternalLink href="https://testing-library.com/docs/react-testing-library/intro/">React Testing Library</ExternalLink>
                </div>
                <div className={styles.link}>
                  <ExternalLink href="https://eslint.org/">Eslint</ExternalLink>
                </div>
              </div>
            </div>
          </div>
        </HeadingBlock>
      </ContentBlock>
    </>
  );
}

export default Home;
