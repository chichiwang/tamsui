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
    </>
  );
}

export default Home;
