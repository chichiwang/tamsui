import React from 'react';

import HeadingBlock from 'app/components/HeadingBlock';
import ExternalLink from 'app/components/ExternalLink';
import CopyButton, { ColorModes } from 'app/components/CopyButton';

import styles from './styles.module.scss';

const dataRoutesSnippet = `// dataRoutes.js
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
}];`;

function ApplicationLayouts() {
  return (
    <HeadingBlock
      level="3"
      id="Application-Layouts"
      heading="Application Layouts"
    >
      <p>
        {'Layouts can be directly applied to routes in '}
        <ExternalLink href="https://reactrouter.com/en/main">React Router</ExternalLink>
        {' using '}
        <ExternalLink href="https://reactrouter.com/en/main/start/concepts#layout-routes">
          Layout Routes
        </ExternalLink>
        .
      </p>

      <div className={styles.codeBlock}>
        <CopyButton
          className={styles.copyButton}
          textToCopy={dataRoutesSnippet}
          colorMode={ColorModes.light}
        />
        <p>
          <span className={styles.grey}>&#47;&#47; dataRoutes.js</span>
          <br />
          <span className={styles.red}>import</span>
          {' '}
          <span className={styles.orange}>Layout</span>
          {' '}
          <span className={styles.red}>from</span>
          {' '}
          <span className={styles.blue}>&apos;app/Layout&apos;</span>
          ;
          <br />
          <br />
          <span className={styles.red}>import</span>
          {' '}
          <span className={styles.orange}>Home</span>
          {' '}
          <span className={styles.red}>from</span>
          {' '}
          <span className={styles.blue}>&apos;pages/Home&apos;</span>
          ;
          <br />
          <span className={styles.red}>import</span>
          {' '}
          <span className={styles.orange}>AnotherPage</span>
          {' '}
          <span className={styles.red}>from</span>
          {' '}
          <span className={styles.blue}>&apos;pages/AnotherPage&apos;</span>
          ;
          <br />
          <br />
          <span className={styles.red}>const</span>
          {' routes '}
          <span className={styles.blue}>=</span>
          {' [{'}
          <br />
          &nbsp;&nbsp;
          <span className={styles.darkBlue}>Component</span>
          {': '}
          <span className={styles.orange}>Layout</span>
          ,
          <br />
          &nbsp;&nbsp;
          <span className={styles.darkBlue}>children</span>
          {': [{'}
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;
          <span className={styles.darkBlue}>path</span>
          {': '}
          <span className={styles.blue}>&apos;/&apos;</span>
          ,
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;
          <span className={styles.darkBlue}>Component</span>
          {': '}
          <span className={styles.orange}>Home</span>
          ,
          <br />
          &nbsp;&nbsp;
          {'}, {'}
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;
          <span className={styles.darkBlue}>path</span>
          {': '}
          <span className={styles.blue}>&apos;/another-page&apos;</span>
          ,
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;
          <span className={styles.darkBlue}>Component</span>
          {': '}
          <span className={styles.orange}>AnotherPage</span>
          ,
          <br />
          &nbsp;&nbsp;
          {'}],'}
          <br />
          {'}];'}
        </p>
      </div>

      <p>
        {'In the boilerplate, a default Layout has been created in '}
        <ExternalLink href="https://github.com/chichiwang/tamsui/blob/main/app/Layout">
          app/Layout
        </ExternalLink>
        .
      </p>

      <p>
        {`One issue that has arisen from the usage of a layout route is that client-side navigation
         will not reset the browser scroll upon page navigation: clicking a link to another page will
         land the user on the new page, scrolled the same amount as on the previous page.`}
      </p>

      <p>
        {'A solution has been implemented in this boilerplate in the form of a '}
        <ExternalLink href="https://react.dev/learn/reusing-logic-with-custom-hooks">
          custom react hook
        </ExternalLink>
        {': '}
        <ExternalLink href="https://github.com/chichiwang/tamsui/blob/main/app/hooks/README.md#useresetscroll">
          useResetScroll
        </ExternalLink>
        {'. This hook needs to be invoked by any layouts in use, and '}
        <ExternalLink href="https://reactrouter.com/en/main/components/link">
          Links
        </ExternalLink>
        {' to pages that need the scroll reset need to pass a '}
        <ExternalLink href="https://reactrouter.com/en/main/components/link#state">
          state
        </ExternalLink>
        {' object with a property '}
        <span className={styles.highlight}>resetScroll</span>
        {' set to '}
        <span className={styles.highlight}>true</span>
        {'. A reusable component '}
        <ExternalLink href="https://github.com/chichiwang/tamsui/blob/main/app/components/InternalLink">
          InternalLink
        </ExternalLink>
        {' has been provided to automatically pass this state object property.'}
      </p>
    </HeadingBlock>
  );
}

export default ApplicationLayouts;
