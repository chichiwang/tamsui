import React from 'react';

import HeadingBlock from 'app/components/HeadingBlock';
import ExternalLink from 'app/components/ExternalLink';

import styles from './styles.module.scss';

function ProjectDirectories() {
  return (
    <HeadingBlock
      level="3"
      id="Project-Directories"
      heading="Project Directories"
    >
      <p>
        {'The '}
        <span className={styles.highlight}>client/</span>
        {` directory is intended to house files specific to the client-side bundle.
         At the moment it only contains the entrypoint file, which `}
        <ExternalLink href="https://react.dev/reference/react-dom/client/hydrateRoot">
          mounts and hydrates the root application
        </ExternalLink>
        .
      </p>
      <p>
        {'The '}
        <span className={styles.highlight}>app/</span>
        {` directory houses application-level concerns: the root application contains the
         the html root, head, and body. The routes are housed in `}
        <ExternalLink href="https://github.com/chichiwang/tamsui/blob/main/app/dataRoutes">
          app/dataRoutes
        </ExternalLink>
        {' as a '}
        <ExternalLink href="https://reactrouter.com/en/main/route/route">
          data routes object
        </ExternalLink>
        {'. The reason the routes are not declared in '}
        <ExternalLink href="https://react.dev/learn/writing-markup-with-jsx">
          JSX
        </ExternalLink>
        {' is for compatibility with rendering '}
        <ExternalLink href="https://react.dev/reference/react-dom/server/renderToPipeableStream">
          React to a Node.js stream
        </ExternalLink>
        .
      </p>
      <p>
        {'The '}
        <span className={styles.highlight}>pages/</span>
        {` directory houses the page-level react components. These are plugged into the
         application via the `}
        <ExternalLink href="https://github.com/chichiwang/tamsui/blob/main/app/dataRoutes">
          dataRoutes object
        </ExternalLink>
        .
      </p>
      <p>
        {'The '}
        <span className={styles.highlight}>server/</span>
        {` directory houses the server-side rendering logic and defines the static asset
         directories. `}
        <ExternalLink href="https://getpino.io/">
          Pino
        </ExternalLink>
        {' is implemented as the logger.'}
      </p>
    </HeadingBlock>
  );
}

export default ProjectDirectories;
