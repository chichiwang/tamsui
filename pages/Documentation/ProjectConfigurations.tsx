import React from 'react';

import HeadingBlock from 'app/components/HeadingBlock';
import ExternalLink from 'app/components/ExternalLink';
import CopyButton, { ColorModes } from 'app/components/CopyButton';

import styles from './styles.module.scss';

const configSnippet = `// project-configs.js

module.exports = {
  development: {
    NEW_CONFIG: false,
  },
  production: {
    NEW_CONFIG: true,
  },
};`;

const declarationSnippet = `// app/global.d.ts

declare const NEW_CONFIG: boolean;`;

const globalsSnippet = `// example.js
/* global NEW_CONFIG */

if (NEW_CONFIG) {
  // ...
}`;

const stringsSnippet = `// project-configs.js

module.exports = {
  development: {
    DOUBLE_WRAPPED_STRING: "'string value'",
    JSON_WRAPPED_STRING: JSON.stringify('remains a string'),
  },
  production: {
    // ...
  },
};`;

function ProjectConfigurations() {
  return (
    <HeadingBlock
      level="3"
      id="Project-Configurations"
      heading="Project Configurations"
    >
      <p>
        <b>Tamsui</b>
        {' uses environment-aware configurations via '}
        <ExternalLink href="https://webpack.js.org/plugins/define-plugin/">
          Webpack&apos;s DefinePlugin
        </ExternalLink>
        {'. This behavior is instrumented in '}
        <ExternalLink href="https://github.com/chichiwang/tamsui/blob/main/webpack/define.js">
          webpack/define.js
        </ExternalLink>
        .
      </p>

      <p>
        {'A config file '}
        <span className={styles.highlight}>project-configs.js</span>
        {` exists in the project root directory. These variables are replaced with their corresponding
         values in the project code at build time.`}
      </p>

      <p>
        Currently the following variables are used:
      </p>

      <ul className={styles.list}>
        <li>
          <span className={styles.highlight}>PORT</span>
          {' (number): The port the express server will run on.'}
        </li>
        <li>
          <span className={styles.highlight}>SERVE_STATIC</span>
          {' (boolean): Whether the Express server should serve static assets located in '}
          <span className={styles.highlight}>dist/static/</span>
          {', '}
          <span className={styles.highlight}>dist/styles/</span>
          {', and '}
          <span className={styles.highlight}>dist/scripts/</span>
          .
        </li>
        <li>
          <span className={styles.highlight}>PROJECT_URL</span>
          {' (string): The intended deployment URL of the application in each environment, used to set '}
          <ExternalLink href="https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/rel#canonical">
            canonical links
          </ExternalLink>
          {' and '}
          <ExternalLink href="https://ogp.me/">
            Open Graph
          </ExternalLink>
          {' meta tags.'}
        </li>
      </ul>

      <p>
        <b>Adding configuration variables</b>
      </p>

      <p>
        {'To add a configuration variable, add the variable as a property to '}
        <span className={styles.highlight}>project-configs.js</span>
        , in both defined environments:
      </p>

      <div className={styles.codeBlock}>
        <CopyButton
          className={styles.copyButton}
          textToCopy={configSnippet}
          colorMode={ColorModes.light}
        />
        <p>
          <span className={styles.grey}>&#47;&#47; project-configs.js</span>
          <br />
          <br />
          module.
          <span className={styles.darkBlue}>exports =</span>
          {' {'}
          <br />
          &nbsp;&nbsp;
          <span className={styles.darkBlue}>development</span>
          {': {'}
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;
          <span className={styles.darkBlue}>NEW_CONFIG</span>
          {': '}
          <span className={styles.darkBlue}>false</span>
          ,
          <br />
          &nbsp;&nbsp;
          {'},'}
          <br />
          &nbsp;&nbsp;
          <span className={styles.darkBlue}>production</span>
          {': {'}
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;
          <span className={styles.darkBlue}>NEW_CONFIG</span>
          {': '}
          <span className={styles.darkBlue}>false</span>
          ,
          <br />
          &nbsp;&nbsp;
          {'},'}
          <br />
          {'};'}
        </p>
      </div>

      <p>
        {'Then add a '}
        <ExternalLink href="https://www.typescriptlang.org/docs/handbook/2/type-declarations.html">
          type declaration
        </ExternalLink>
        {' for the new configuration variable to '}
        <ExternalLink href="https://github.com/chichiwang/tamsui/blob/main/app/global.d.ts">
          app/global.d.ts
        </ExternalLink>
        :
      </p>

      <div className={styles.codeBlock}>
        <CopyButton
          className={styles.copyButton}
          textToCopy={declarationSnippet}
          colorMode={ColorModes.light}
        />
        <p>
          <span className={styles.grey}>&#47;&#47; app/globals.d.ts</span>
          <br />
          <br />
          <span className={styles.red}>declare const</span>
          {' NEW_CONFIG: '}
          <span className={styles.orange}>boolean</span>
          ;
        </p>
      </div>

      <p>
        {'To avoid running afoul of ESLint\'s '}
        <ExternalLink href="https://eslint.org/docs/latest/rules/no-undef">
          no-undef
        </ExternalLink>
        {' rule when using these project config variables, a '}
        <span className={styles.highlight}>{'/* global */'}</span>
        {' comment should be used in any file that references a project config variable:'}
      </p>

      <div className={styles.codeBlock}>
        <CopyButton
          className={styles.copyButton}
          textToCopy={globalsSnippet}
          colorMode={ColorModes.light}
        />
        <p>
          <span className={styles.grey}>&#47;&#47; example.js</span>
          <br />
          <span className={styles.grey}>&#47;* global NEW_CONFIG *&#47;</span>
          <br />
          <br />
          <span className={styles.red}>if</span>
          {' ('}
          <span className={styles.darkBlue}>NEW_CONFIG</span>
          {') {'}
          <br />
          &nbsp;&nbsp;
          <span className={styles.grey}>&#47;&#47; ...</span>
          <br />
          {'}'}
        </p>
      </div>

      <p>
        {'Now '}
        <span className={styles.highlight}>NEW_CONFIG</span>
        {' can be used in the project code. When building for development, instances of '}
        <span className={styles.highlight}>NEW_CONFIG</span>
        {' will be replaced with '}
        <span className={styles.highlight}>false</span>
        {', when building for production instances will be replaced with '}
        <span className={styles.highlight}>true</span>
        .
      </p>

      <p>
        <b>Note</b>
        {`: String values must be double-wrapped in quotes, since all config values are
         passed into the `}
        <ExternalLink href="https://webpack.js.org/plugins/define-plugin/#usage">
          DefinePlugin
        </ExternalLink>
        {'. This means that string values are treated as code fragments. Calling '}
        <span className={styles.highlight}>JSON.stringify()</span>
        {' on string values will also preserve them as strings:'}
      </p>

      <div className={styles.codeBlock}>
        <CopyButton
          className={styles.copyButton}
          textToCopy={stringsSnippet}
          colorMode={ColorModes.light}
        />
        <p>
          <span className={styles.grey}>&#47;&#47; project-config.js</span>
          <br />
          <br />
          module.
          <span className={styles.darkBlue}>exports =</span>
          {' {'}
          <br />
          &nbsp;&nbsp;
          <span className={styles.darkBlue}>development</span>
          {': {'}
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;
          <span className={styles.darkBlue}>DOUBLE_WRAPPED_STRING</span>
          {': '}
          <span className={styles.blue}>&quot;&apos;string value&apos;&quot;</span>
          ,
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;
          <span className={styles.darkBlue}>JSON_WRAPPED_STRING</span>
          {': '}
          <span className={styles.blue}>JSON</span>
          .
          <span className={styles.purple}>stringify</span>
          (
          <span className={styles.blue}>&apos;remains a string&apos;</span>
          ),
          <br />
          &nbsp;&nbsp;
          {'},'}
          <br />
          &nbsp;&nbsp;
          <span className={styles.darkBlue}>production</span>
          {': {'}
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;
          <span className={styles.grey}>&#47;&#47; ...</span>
          <br />
          &nbsp;&nbsp;
          {'},'}
          <br />
          {'};'}
        </p>
      </div>

      <p>
        <b>Testing with configuration variables</b>
      </p>

      <p>
        {'New configuration variables can either be mocked into tests by modifying the '}
        <span className={styles.highlight}>global</span>
        {' object, or adding the variable to the '}
        <ExternalLink href="https://jestjs.io/docs/configuration#globals-object">
          Jest globals object
        </ExternalLink>
        {'. The globals object can be added to '}
        <span className={styles.highlight}>sharedConfigs</span>
        {', '}
        <span className={styles.highlight}>appConfig</span>
        {', '}
        <span className={styles.highlight}>clientConfig</span>
        {', or '}
        <span className={styles.highlight}>serverConfig</span>
        {' (as appropriate) in '}
        <ExternalLink href="https://github.com/chichiwang/tamsui/blob/main/jest.config.js">
          jest.config.js
        </ExternalLink>
        .
      </p>
    </HeadingBlock>
  );
}

export default ProjectConfigurations;
