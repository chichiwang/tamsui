import React from 'react';

import HeadingBlock from 'app/components/HeadingBlock';
import ExternalLink from 'app/components/ExternalLink';
import CopyButton from 'app/components/CopyButton';

import styles from './styles.module.scss';

function NPMScripts() {
  return (
    <HeadingBlock
      className={styles.pageBreak}
      level="2"
      id="NPM-Scripts"
      heading="NPM Scripts"
    >
      <table className={styles.scriptsList}>
        <thead>
          <tr>
            <th>Script</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={styles.script}>
                <span className={styles.highlight}>analyze</span>
                <CopyButton className={styles.copyButton} textToCopy="npm run analyze" />
              </div>
            </td>
            <td>
              <p>
                {'Run '}
                <ExternalLink href="https://www.npmjs.com/package/webpack-bundle-analyzer">webpack-bundle-analyzer</ExternalLink>
                {' against a '}
                <span className={styles.highlight}>stats.json</span>
                {' in the root directory'}
              </p>
            </td>
          </tr>

          <tr>
            <td>
              <div className={styles.script}>
                <span className={styles.highlight}>analyze:dev</span>
                <CopyButton className={styles.copyButton} textToCopy="npm run analyze:dev" />
              </div>
            </td>
            <td>
              <p>
                {'Build dev assets and run '}
                <ExternalLink href="https://www.npmjs.com/package/webpack-bundle-analyzer">webpack-bundle-analyzer</ExternalLink>
                {' against the generated asssets'}
              </p>
            </td>
          </tr>

          <tr>
            <td>
              <div className={styles.script}>
                <span className={styles.highlight}>analyze:prod</span>
                <CopyButton className={styles.copyButton} textToCopy="npm run analyze:prod" />
              </div>
            </td>
            <td>
              <p>
                {'Build prod assets and run '}
                <ExternalLink href="https://www.npmjs.com/package/webpack-bundle-analyzer">webpack-bundle-analyzer</ExternalLink>
                {' against the generated asssets'}
              </p>
            </td>
          </tr>

          <tr>
            <td>
              <div className={styles.script}>
                <span className={styles.highlight}>build:dev</span>
                <CopyButton className={styles.copyButton} textToCopy="npm run build:dev" />
              </div>
            </td>
            <td>
              <p>
                {'Build dev assets and generate '}
                <span className={styles.highlight}>stats.json</span>
              </p>
            </td>
          </tr>

          <tr>
            <td>
              <div className={styles.script}>
                <span className={styles.highlight}>build:dist</span>
                <CopyButton className={styles.copyButton} textToCopy="npm run build:dist" />
              </div>
            </td>
            <td>
              <p>
                {'Create a '}
                <span className={styles.highlight}>dist/</span>
                {' directory in the project root'}
              </p>
            </td>
          </tr>

          <tr>
            <td>
              <div className={styles.script}>
                <span className={styles.highlight}>build:prod</span>
                <CopyButton className={styles.copyButton} textToCopy="npm run build:prod" />
              </div>
            </td>
            <td>
              <p>
                {'Build prod assets and generate '}
                <span className={styles.highlight}>stats.json</span>
              </p>
            </td>
          </tr>

          <tr>
            <td>
              <div className={styles.script}>
                <span className={styles.highlight}>build:static</span>
                <CopyButton className={styles.copyButton} textToCopy="npm run build:static" />
              </div>
            </td>
            <td>
              <p>
                {'Copy the '}
                <span className={styles.highlight}>static/</span>
                {' directory ino the project root into '}
                <span className={styles.highlight}>dist/</span>
              </p>
            </td>
          </tr>

          <tr>
            <td>
              <div className={styles.script}>
                <span className={styles.highlight}>clean</span>
                <CopyButton className={styles.copyButton} textToCopy="npm run clean" />
              </div>
            </td>
            <td>
              <p>
                {'Remove '}
                <span className={styles.highlight}>stats.json</span>
                {' and '}
                <span className={styles.highlight}>dist/</span>
                {' directory'}
              </p>
            </td>
          </tr>

          <tr>
            <td>
              <div className={styles.script}>
                <span className={styles.highlight}>dev</span>
                <CopyButton className={styles.copyButton} textToCopy="npm run dev" />
              </div>
            </td>
            <td>
              <p>
                {'Build dev assets and run the webserver, running server logs through '}
                <ExternalLink href="https://github.com/pinojs/pino-pretty">pino-pretty</ExternalLink>
                {' for development purposes'}
              </p>
            </td>
          </tr>

          <tr>
            <td>
              <div className={styles.script}>
                <span className={styles.highlight}>lint</span>
                <CopyButton className={styles.copyButton} textToCopy="npm run lint" />
              </div>
            </td>
            <td>
              <p>
                {'Run '}
                <ExternalLink href="https://eslint.org/">ESLint</ExternalLink>
              </p>
            </td>
          </tr>

          <tr>
            <td>
              <div className={styles.script}>
                <span className={styles.highlight}>prod</span>
                <CopyButton className={styles.copyButton} textToCopy="npm run prod" />
              </div>
            </td>
            <td>
              <p>
                {'Build prod assets and run the webserver, running server logs through '}
                <ExternalLink href="https://github.com/pinojs/pino-pretty">pino-pretty</ExternalLink>
                {' for development purposes'}
              </p>
            </td>
          </tr>

          <tr>
            <td>
              <div className={styles.script}>
                <span className={styles.highlight}>run</span>
                <CopyButton className={styles.copyButton} textToCopy="npm run run" />
              </div>
            </td>
            <td>
              <p>
                {'Run '}
                <span className={styles.highlight}>dist/index.js</span>
              </p>
            </td>
          </tr>

          <tr>
            <td>
              <div className={styles.script}>
                <span className={styles.highlight}>start</span>
                <CopyButton className={styles.copyButton} textToCopy="npm start" />
              </div>
            </td>
            <td>
              <p>
                {`Build prod assets and run the webserver, 
                  intended to be used in production environments`}
              </p>
            </td>
          </tr>

          <tr>
            <td>
              <div className={styles.script}>
                <span className={styles.highlight}>test</span>
                <CopyButton className={styles.copyButton} textToCopy="npm test" />
              </div>
            </td>
            <td>
              <p>
                {`Build prod assets and run the webserver, 
                  intended to be used in production environments`}
              </p>
            </td>
          </tr>

          <tr>
            <td>
              <div className={styles.script}>
                <span className={styles.highlight}>test:snapshot</span>
                <CopyButton className={styles.copyButton} textToCopy="npm run test:snapshot" />
              </div>
            </td>
            <td>
              <p>
                {'Update snapshots with '}
                <ExternalLink href="https://github.com/pinojs/pino-pretty">Jest</ExternalLink>
                {', can be used in lieu of '}
                <span className={styles.highlight}>npm run test -- -u</span>
              </p>
            </td>
          </tr>

          <tr>
            <td>
              <div className={styles.script}>
                <span className={styles.highlight}>watch</span>
                <CopyButton className={styles.copyButton} textToCopy="npm run watch" />
              </div>
            </td>
            <td>
              <p>
                Run the watch server, will restart the server on every file change
              </p>
            </td>
          </tr>
        </tbody>
      </table>
    </HeadingBlock>
  );
}

export default NPMScripts;
