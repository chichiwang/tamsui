import React from 'react';

import HeadingBlock from 'app/components/HeadingBlock';
import ExternalLink from 'app/components/ExternalLink';
import InternalLink from 'app/components/InternalLink';

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
        <span className={styles.highlight}>dist/static/</span>
        {` directory on project build. This directory is served statically by the
         Express server in development builds. `}
        <span className={styles.highlight}>static/</span>
        {' is meant to house static files (images, JSON files, etc.) used by '}
        <b>Tamsui</b>
        .
      </p>

      <p>
        {'Similarly, JavaScript assets are built to '}
        <span className={styles.highlight}>dist/scripts/</span>
        {', CSS files are built to '}
        <span className={styles.highlight}>dist/styles/</span>
        {`. For local development all of these directories are served by the Express
         backend server (dictated by the `}
        <span className={styles.highlight}>dist/styles/</span>
        {' '}
        <InternalLink to="#Project-Configurations">
          project variable
        </InternalLink>
        {' in '}
        <span className={styles.highlight}>project-configs.js</span>
        {'). For production builds the '}
        <span className={styles.highlight}>SERVE_STATIC</span>
        {' config is set to '}
        <span className={styles.highlight}>false</span>
        {' by default.'}
      </p>

      <p>
        {'On deployment: the directories '}
        <span className={styles.highlight}>/dist/static/</span>
        {', '}
        <span className={styles.highlight}>/dist/scripts/</span>
        {', and '}
        <span className={styles.highlight}>/dist/styles/</span>
        {' can be deployed to a CDN.'}
      </p>
    </HeadingBlock>
  );
}

export default StaticFiles;
