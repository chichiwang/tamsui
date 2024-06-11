import React from 'react';

import HeadingBlock from 'app/components/HeadingBlock';
import ExternalLink from 'app/components/ExternalLink';

import styles from './styles.module.scss';

function StaticFiles() {
  return (
    <HeadingBlock
      level="3"
      id="Static-Files"
      heading="Static Files"
    >
      <p>
        {'The directory '}
        <ExternalLink href="https://github.com/chichiwang/tamsui/blob/main/static">
          static/
        </ExternalLink>
        {', housed in the project root, is copied directly into the '}
        <span className={styles.highlight}>dist/</span>
        {` directory on the project build. This directory is served statically by the
         Express server.`}
      </p>

      <p>
        {'This directory is meant to house static files (images, JSON files, etc.) used by '}
        <b>Tamsui</b>
        {`. This is a stop-gap solution: the Express server should not be used to serve static
         files like images - these should be housed in a CDN.`}
      </p>

      <p>
        {'On deployment, the '}
        <span className={styles.highlight}>/dist/static/</span>
        {' directory can be uploaded to your CDN of choice.'}
      </p>

      <p>
        <b>TODO</b>
        {' (future tasks for the '}
        <b>Tamsui</b>
        {' project):'}
      </p>

      <ul className={styles.list}>
        <li>
          {`Add a configuration to provide a base route to static assets
             (so a CDN route can be provided)`}
        </li>
        <li>
          {'Add a configuration to enable/disable serving '}
          <span className={styles.highlight}>/static</span>
          {' directory files in various environments (development/production)'}
        </li>
        <li>
          Add configuration options for serving built assets (
          <span className={styles.highlight}>/scripts</span>
          {', '}
          <span className={styles.highlight}>/styles</span>
          ) as well, so these assets can also be served via CDN
        </li>
      </ul>
    </HeadingBlock>
  );
}

export default StaticFiles;
