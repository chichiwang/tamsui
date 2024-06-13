import React from 'react';

import HeadingBlock from 'app/components/HeadingBlock';
import ExternalLink from 'app/components/ExternalLink';
import CopyButton, { ColorModes } from 'app/components/CopyButton';

import styles from './styles.module.scss';

const errorBoundarySnippet = `// app/dataRoutes/index.ts
import PageComponent from 'pages/pageComponent';

import withErrorBoundary from './withErrorBoundary';

const dataRoutes = [
  withErrorBoundary({
    path: '/path-to-page',
    Component: PageComponent,
  }),
];`;

function ErrorBoundary() {
  return (
    <HeadingBlock
      level="3"
      id="Error-Boundary"
      heading="Error Boundary"
    >
      <p>
        <b>Tamsui</b>
        {' implements a basic '}
        <ExternalLink href="https://react.dev/reference/react/Component#catching-rendering-errors-with-an-error-boundary">
          React Error Boundary
        </ExternalLink>
        {' in '}
        <ExternalLink href="https://github.com/chichiwang/tamsui/blob/main/app/ErrorBoundary">
          app/ErrorBoundary
        </ExternalLink>
        {'. This error boundary is configured as an '}
        <ExternalLink href="https://reactrouter.com/en/main/route/error-element">
          errorElement
        </ExternalLink>
        {' in the '}
        <ExternalLink href="https://github.com/chichiwang/tamsui/blob/main/app/dataRoutes">
          dataRoutes
        </ExternalLink>
        {' object. It is recommended all root routes are wrapped in this error boundary. A utility, '}
        <ExternalLink href="https://github.com/chichiwang/tamsui/blob/main/app/dataRoutes/withErrorBoundary.tsx">
          withErrorBoundary
        </ExternalLink>
        {' is provided to more easily (and declaratively) extend routes with this '}
        <span className={styles.highlight}>errorElement</span>
        {' property:'}
      </p>

      <div className={styles.codeBlock}>
        <CopyButton
          className={styles.copyButton}
          textToCopy={errorBoundarySnippet}
          colorMode={ColorModes.light}
        />
        <p>
          <span className={styles.grey}>&#47;&#47; app/dataRoutes/index.ts</span>
          <br />
          <span className={styles.red}>import</span>
          {' '}
          <span className={styles.orange}>PageComponent</span>
          {' '}
          <span className={styles.red}>from</span>
          {' '}
          <span className={styles.blue}>&apos;pages/PageComponent&apos;</span>
          ;
          <br />
          <br />
          <span className={styles.red}>import</span>
          {' withErrorBoundary '}
          <span className={styles.red}>from</span>
          {' '}
          <span className={styles.blue}>&apos;./withErrorBoundary&apos;</span>
          ;
          <br />
          <br />
          <span className={styles.red}>const</span>
          {' dataRoutes '}
          <span className={styles.blue}>=</span>
          {' ['}
          <br />
          &nbsp;&nbsp;
          <span className={styles.purple}>withErrorBoundary</span>
          (&#123;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;
          <span className={styles.darkBlue}>path</span>
          {': '}
          <span className={styles.blue}>&apos;/path-to-page&apos;</span>
          ,
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;
          <span className={styles.darkBlue}>Component</span>
          {': '}
          <span className={styles.orange}>PageComponent</span>
          ,
          <br />
          &nbsp;&nbsp;&#125;),
          <br />
          ];
        </p>
      </div>

      <p>
        {`On the server, if an error in rendering the application occurs it will
         redirect the request to `}
        <span className={styles.highlight}>/error</span>
        {', '}
        <ExternalLink href="https://github.com/chichiwang/tamsui/blob/main/server/appHandler.tsx">
          configured by default
        </ExternalLink>
        {' to be the '}
        <ExternalLink href="https://github.com/chichiwang/tamsui/blob/main/pages/ErrorPage">
          application&apos;s error page
        </ExternalLink>
        .
      </p>

      <p>
        {'On the client, an error in a page will render the '}
        <ExternalLink href="https://github.com/chichiwang/tamsui/blob/main/pages/ErrorPage">
          ErrorPage component
        </ExternalLink>
        {' as fallback.'}
      </p>

      <p>
        <b>To change the path to the error page</b>
        {': change the value of the constant '}
        <span className={styles.highlight}>errorPagePath</span>
        {' in '}
        <ExternalLink href="https://github.com/chichiwang/tamsui/blob/main/server/appHandler.tsx">
          server/appHandler.tsx
        </ExternalLink>
        {'. Make sure you define this route in the '}
        <ExternalLink href="https://github.com/chichiwang/tamsui/blob/main/app/dataRoutes/index.ts">
          app/dataRoutes/index.ts
        </ExternalLink>
        {' file.'}
      </p>

      <p>
        {'Alternatively, keep the error page path and just replace the '}
        <ExternalLink href="https://github.com/chichiwang/tamsui/blob/main/pages/ErrorPage">
          ErrorPage component
        </ExternalLink>
        .
      </p>
    </HeadingBlock>
  );
}

export default ErrorBoundary;
