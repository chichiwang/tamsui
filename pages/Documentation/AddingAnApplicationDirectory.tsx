import React from 'react';

import HeadingBlock from 'app/components/HeadingBlock';
import ExternalLink from 'app/components/ExternalLink';
import CopyButton, { ColorModes } from 'app/components/CopyButton';

import styles from './styles.module.scss';

function AddingAnApplicationDirectory() {
  return (
    <HeadingBlock
      level="3"
      id="Adding-an-Application-Directory"
      heading="Adding an Application Directory"
    >
      <p>
        To add additional application directories, or to remove existing ones:
      </p>

      <ul className={styles.list}>
        <li>Path aliases need to be updated</li>
        <li>Jest projects need to be updated</li>
      </ul>

      <p>
        {'The '}
        <span className={styles.highlight}>app/</span>
        {' and '}
        <span className={styles.highlight}>pages/</span>
        {` directories are set up with path aliases so that a module can be imported with
         absolute pathing rather than relative pathing:`}
      </p>

      <div className={styles.codeBlock}>
        <CopyButton
          className={styles.copyButton}
          textToCopy={'import Module from app/Module;\nimport PageModule from page/PageModule;'}
          colorMode={ColorModes.light}
        />
        <p>
          <span className={styles.red}>import</span>
          {' Module '}
          <span className={styles.red}>from</span>
          {' '}
          <span className={styles.blue}>&apos;app/module&apos;</span>
          ;
          <br />
          <span className={styles.red}>import</span>
          {' PageModule '}
          <span className={styles.red}>from</span>
          {' '}
          <span className={styles.blue}>&apos;page/PageModule&apos;</span>
          ;
        </p>
      </div>

      <p>
        If any directory is removed, or if a new directory needs an alias:
      </p>

      <ul className={styles.list}>
        <li>
          {'An '}
          <span className={styles.highlight}>alias</span>
          {' should be updated in the '}
          <ExternalLink href="https://github.com/chichiwang/tamsui/blob/main/webpack/resolve.js">
            Webpack configs
          </ExternalLink>
          .
        </li>
        <li>
          {'The '}
          <ExternalLink href="https://github.com/johvin/eslint-import-resolver-alias?tab=readme-ov-file#usage">
            alias mapping
          </ExternalLink>
          {' should be added to the '}
          <ExternalLink href="https://github.com/chichiwang/tamsui/blob/main/.eslintrc.js">
            eslint configuration
          </ExternalLink>
          {' to avoid linting errors when using the alias.'}
        </li>
        <li>
          {'The alias should be updated in the '}
          <ExternalLink href="https://www.typescriptlang.org/tsconfig#paths">
            paths configuration
          </ExternalLink>
          {' for TypeScript to avoid type errors.'}
        </li>
        <li>
          {'The alias should be updated in the '}
          <ExternalLink href="https://jestjs.io/docs/configuration#modulenamemapper-objectstring-string--arraystring">
            moduleNameMapper configuration
          </ExternalLink>
          {' in the '}
          <ExternalLink href="https://github.com/chichiwang/tamsui/blob/main/jest.config.js">
            Jest configuration
          </ExternalLink>
          {' to ensure module mocking will work in tests, and so there are no errors in using the alias.'}
          <ul className={styles.list}>
            <li>
              {'The directory should be updated in the '}
              <span className={styles.highlight}>appConfig.testMatch</span>
              {' array to ensure that the test runner knows which directories to cover.'}
            </li>
          </ul>
        </li>
      </ul>
    </HeadingBlock>
  );
}

export default AddingAnApplicationDirectory;
