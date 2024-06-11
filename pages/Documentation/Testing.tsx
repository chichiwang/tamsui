import React from 'react';

import HeadingBlock from 'app/components/HeadingBlock';
import ExternalLink from 'app/components/ExternalLink';

import styles from './styles.module.scss';

function Testing() {
  return (
    <HeadingBlock
      level="3"
      id="Testing"
      heading="Testing"
    >
      <p>
        <b>Tamsui</b>
        {' utilizes '}
        <ExternalLink href="https://jestjs.io/">Jest</ExternalLink>
        {' as a test runner. Tests should be housed in a '}
        <span className={styles.highlight}>__tests__/</span>
        {' directory within their respective '}
        <a href="#Project-Directories">project directories</a>
        {'. Test files should have the file extension '}
        <span className={styles.highlight}>.test.js</span>
      </p>

      <p>
        {'The default '}
        <ExternalLink href="https://jestjs.io/docs/configuration#coveragethreshold-object">
          coverage threshold
        </ExternalLink>
        {' is set too 100% across the board. To reduce or remove the coverage requirements, modify the '}
        <span className={styles.highlight}>coverageThreshold</span>
        {' field in the '}
        <ExternalLink href="https://github.com/chichiwang/tamsui/blob/main/jest.config.js">
          config
        </ExternalLink>
        .
      </p>

      <p>
        {'To run the test suite locally: '}
        <span className={styles.highlight}>npm test</span>
        {'. To update '}
        <ExternalLink href="https://jestjs.io/docs/snapshot-testing">
          Jest snapshots
        </ExternalLink>
        {' '}
        <span className={styles.highlight}>npm run test:snapshot</span>
        {' can be used. Alternatively, '}
        <span className={styles.highlight}>npm run test -- -u</span>
        {' will also work.'}
      </p>
    </HeadingBlock>
  );
}

export default Testing;
