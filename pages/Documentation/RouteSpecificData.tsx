import React from 'react';

import HeadingBlock from 'app/components/HeadingBlock';
import ExternalLink from 'app/components/ExternalLink';
import CopyButton, { ColorModes } from 'app/components/CopyButton';

import styles from './styles.module.scss';

const typedefSnippet = `type RouteHead = {
  title?: string;
  tags?: React.ReactNode;
};

type PageHandle = {
  head?: RouteHead;
};`;

const routesSnippet = `// dataRoutes.js
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

export default dataRoutes;`;

function RouteSpecificData() {
  return (
    <HeadingBlock
      level="3"
      id="Route-Specific-Data"
      heading="Route-Specific Data"
    >
      <p>
        <b>Tamsui</b>
        {' uses a React Router '}
        <ExternalLink href="https://reactrouter.com/en/main/routers/router-provider">
          data router
        </ExternalLink>
        {'. A route can be passed a '}
        <ExternalLink href="https://reactrouter.com/en/main/route/route#handle">
          handle
        </ExternalLink>
        {`, which allows any arbitrary data to be passed to a route, retrieved in a
         component using the `}
        <ExternalLink href="https://reactrouter.com/en/main/hooks/use-matches">
          useMatches
        </ExternalLink>
        {' hook.'}
      </p>

      <p>
        {'This boilerplate has a baseline implementation of this usage in place, passing a '}
        <ExternalLink href="https://github.com/chichiwang/tamsui/blob/main/app/types.ts">
          PageHandle
        </ExternalLink>
        {` object. This is intended to pass route-specific or page-specific data to a page
         component. A `}
        <span className={styles.highlight}>PageHandle</span>
        {' is currently defined as:'}
      </p>

      <div className={styles.codeBlock}>
        <CopyButton
          className={styles.copyButton}
          textToCopy={typedefSnippet}
          colorMode={ColorModes.light}
        />
        <p>
          <span className={styles.red}>type</span>
          {' RouteHead '}
          <span className={styles.darkBlue}>=</span>
          {' {'}
          <br />
          &nbsp;&nbsp;
          <span className={styles.darkBlue}>title</span>
          ?: string;
          <br />
          &nbsp;&nbsp;
          <span className={styles.darkBlue}>tags</span>
          ?: React.ReactNode;
          <br />
          {'};'}
          <br />
          <br />
          <span className={styles.red}>type</span>
          {' PageHandle '}
          <span className={styles.darkBlue}>=</span>
          {' {'}
          <br />
          &nbsp;&nbsp;
          <span className={styles.darkBlue}>head</span>
          ?: RouteHead;
          <br />
          {'};'}
        </p>
      </div>

      <p>
        {'A '}
        <span className={styles.highlight}>PageHandle</span>
        {' object can be passed into a given data route\'s '}
        <span className={styles.highlight}>handle</span>
        {' field. If this '}
        <span className={styles.highlight}>PageHandle</span>
        {' contains a '}
        <span className={styles.highlight}>head</span>
        {' property with '}
        <span className={styles.highlight}>title</span>
        {' or '}
        <span className={styles.highlight}>tags</span>
        {' then these values will be used by the '}
        <ExternalLink href="https://github.com/chichiwang/tamsui/blob/main/app/Head/index.tsx">
          app/Head
        </ExternalLink>
        {' component to set the title and append route-specific head tags to a page.'}
      </p>

      <p>
        <b>NOTE</b>
        {': '}
        <ExternalLink href="https://github.com/chichiwang/tamsui/blob/main/app/Head/index.tsx">
          app/Head
        </ExternalLink>
        {' is rendered by '}
        <ExternalLink href="https://github.com/chichiwang/tamsui/blob/main/app/HTMLBody/index.tsx">
          app/HTMLBody
        </ExternalLink>
        {', which rendered by '}
        <ExternalLink href="https://github.com/chichiwang/tamsui/blob/main/app/Layout/index.tsx">
          app/Layout
        </ExternalLink>
        {'. This makes '}
        <span className={styles.highlight}>app/Head</span>
        {' the ideal component to house site-wide '}
        <ExternalLink href="https://developer.mozilla.org/en-US/docs/Web/API/Document/head">
          document head
        </ExternalLink>
        {' tags. To leverage this in new layouts, follow the example set by '}
        <span className={styles.highlight}>app/Layout</span>
        {': wrap the contents of the layout in '}
        <span className={styles.highlight}>app/HTMLBody</span>
        {' and invoke the hook '}
        <ExternalLink href="https://github.com/chichiwang/tamsui/blob/main/app/hooks/README.md#useresetscroll">
          useResetScroll
        </ExternalLink>
        {' to ensure proper scroll behavior on route change.'}
      </p>

      <p>
        {'A custom hook, '}
        <ExternalLink href="https://github.com/chichiwang/tamsui/blob/main/app/hooks/README.md#useroutehead">
          app/hooks/useRouteHead
        </ExternalLink>
        {', has been created for use in '}
        <span className={styles.highlight}>app/Head</span>
        {' to retrieve the contents of a route\'s PageHandle '}
        <span className={styles.highlight}>head</span>
        {' property if it exists.'}
      </p>

      <p>
        {'To add a '}
        <span className={styles.highlight}>PageHandle</span>
        {' to a data route:'}
      </p>

      <div className={styles.codeBlock}>
        <CopyButton
          className={styles.copyButton}
          textToCopy={routesSnippet}
          colorMode={ColorModes.light}
        />
        <p>
          <span className={styles.grey}>&#47;&#47; dataRoutes.js</span>
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
          <span className={styles.orange}>About</span>
          {' '}
          <span className={styles.red}>from</span>
          {' '}
          <span className={styles.blue}>&apos;pages/About&apos;</span>
          ;
          <br />
          <br />
          <span className={styles.red}>const</span>
          {' dataRoutes '}
          <span className={styles.darkBlue}>=</span>
          {' [{'}

          <br />
          &nbsp;&nbsp;
          <span className={styles.darkBlue}>path</span>
          {': '}
          <span className={styles.blue}>&apos;/&apos;</span>
          ,
          <br />
          &nbsp;&nbsp;
          <span className={styles.darkBlue}>Component</span>
          {': '}
          <span className={styles.orange}>Home</span>
          ,
          <br />
          &nbsp;&nbsp;
          <span className={styles.darkBlue}>handle</span>
          {': {'}
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;
          <span className={styles.darkBlue}>head</span>
          {': {'}
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <span className={styles.darkBlue}>title</span>
          {': '}
          <span className={styles.blue}>&apos;Welcome to my homepage!&apos;</span>
          ,
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <span className={styles.darkBlue}>tags</span>
          : (
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <span className={styles.darkBlue}>&lt;&gt;</span>
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <span className={styles.darkBlue}>&lt;</span>
          <span className={styles.green}>meta</span>
          {' '}
          <span className={styles.darkBlue}>property =</span>
          <span className={styles.blue}>&quot;og:title&quot;</span>
          {' '}
          <span className={styles.darkBlue}>content =</span>
          <span className={styles.blue}>&quot;Check out my website!&quot;</span>
          {' '}
          <span className={styles.darkBlue}>/&gt;</span>
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <span className={styles.darkBlue}>&lt;</span>
          <span className={styles.green}>meta</span>
          {' '}
          <span className={styles.darkBlue}>property =</span>
          <span className={styles.blue}>&quot;og:description&quot;</span>
          {' '}
          <span className={styles.darkBlue}>content =</span>
          <span className={styles.blue}>
            &quot;I think it might be the best website ever made.&quot;
          </span>
          {' '}
          <span className={styles.darkBlue}>/&gt;</span>
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <span className={styles.darkBlue}>&lt;/&gt;</span>
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;),
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;
          {'},'}
          <br />
          &nbsp;&nbsp;
          {'},'}
          <br />
          {'}, {'}

          <br />
          &nbsp;&nbsp;
          <span className={styles.darkBlue}>path</span>
          {': '}
          <span className={styles.blue}>&apos;/about&apos;</span>
          ,
          <br />
          &nbsp;&nbsp;
          <span className={styles.darkBlue}>Component</span>
          {': '}
          <span className={styles.orange}>About</span>
          ,
          <br />
          &nbsp;&nbsp;
          <span className={styles.darkBlue}>handle</span>
          {': {'}
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;
          <span className={styles.darkBlue}>head</span>
          {': {'}
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <span className={styles.darkBlue}>title</span>
          {': '}
          <span className={styles.blue}>&apos;Some things about my website&apos;</span>
          ,
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <span className={styles.darkBlue}>tags</span>
          : (
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <span className={styles.darkBlue}>&lt;&gt;</span>
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <span className={styles.darkBlue}>&lt;</span>
          <span className={styles.green}>meta</span>
          {' '}
          <span className={styles.darkBlue}>property =</span>
          <span className={styles.blue}>&quot;og:title&quot;</span>
          {' '}
          <span className={styles.darkBlue}>content =</span>
          <span className={styles.blue}>&quot;Learn about the best website&quot;</span>
          {' '}
          <span className={styles.darkBlue}>/&gt;</span>
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <span className={styles.darkBlue}>&lt;</span>
          <span className={styles.green}>meta</span>
          {' '}
          <span className={styles.darkBlue}>property =</span>
          <span className={styles.blue}>&quot;og:description&quot;</span>
          {' '}
          <span className={styles.darkBlue}>content =</span>
          <span className={styles.blue}>
            &quot;10 reasons this site is best.&quot;
          </span>
          {' '}
          <span className={styles.darkBlue}>/&gt;</span>
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <span className={styles.darkBlue}>&lt;/&gt;</span>
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;),
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;
          {'},'}
          <br />
          &nbsp;&nbsp;
          {'},'}
          <br />
          {'}];'}
          <br />
          <br />
          <span className={styles.red}>export default</span>
          {' dataRoutes;'}
        </p>
      </div>

      <p>
        {'These '}
        <span className={styles.highlight}>title</span>
        {'s and '}
        <span className={styles.highlight}>tags</span>
        {' will be rendered into the document head only for their respective routes.'}
      </p>
    </HeadingBlock>
  );
}

export default RouteSpecificData;
