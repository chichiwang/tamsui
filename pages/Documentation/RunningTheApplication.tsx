import React from 'react';

import HeadingBlock from 'app/components/HeadingBlock';
import ExternalLink from 'app/components/ExternalLink';

import styles from './styles.module.scss';

function RunningTheApplication() {
  return (
    <HeadingBlock
      level="3"
      id="Running-the-Application"
      heading="Running the Application"
    >
      <p>
        {'Run '}
        <span className={styles.highlight}>npm run watch</span>
        {' to run the development watch server.'}
      </p>
      <p>
        <span className={styles.highlight}>npm run dev</span>
        {' will build and run the application in development mode. '}
        <span className={styles.highlight}>npm run prod</span>
        {` will build and run the application in production mode. All of the above modes
         will run the server output through `}
        <ExternalLink href="https://github.com/pinojs/pino-pretty">pino-pretty</ExternalLink>
        .
      </p>
    </HeadingBlock>
  );
}

export default RunningTheApplication;
