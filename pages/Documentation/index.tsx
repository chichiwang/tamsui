import React from 'react';
import classNames from 'classnames';

import ContentBlock from 'app/components/ContentBlock';
import HeadingBlock from 'app/components/HeadingBlock';
import ExternalLink from 'app/components/ExternalLink';

import StartingAProject from './StartingAProject';
import NPMScripts from './NPMScripts';
import RunningTheApplication from './RunningTheApplication';
import ProjectDirectories from './ProjectDirectories';
import AddingAnApplicationDirectory from './AddingAnApplicationDirectory';
import StaticFiles from './StaticFiles';
import ErrorBoundary from './ErrorBoundary';
import Testing from './Testing';
import PullRequestTemplate from './PullRequestTemplate';
import GithubWorkflow from './GithubWorkflow';

import styles from './styles.module.scss';

function Documentation() {
  return (
    <ContentBlock>
      <HeadingBlock
        level="1"
        heading="Developer Documentation"
      >
        <p>
          {'Documentation is also provided in the '}
          <ExternalLink href="https://github.com/chichiwang/tamsui">Github repository</ExternalLink>
          {' in the README file '}
          <ExternalLink href="https://github.com/chichiwang/tamsui/blob/main/docs/README.md">/docs/README.md</ExternalLink>
          .
        </p>
      </HeadingBlock>

      <HeadingBlock
        level="2"
        heading="Contents"
      >
        <ul className={classNames(styles.list, styles.content)}>
          <li>
            <a href="#Starting-a-Project">Starting a Project</a>
          </li>
          <li>
            <a href="#NPM-Scripts">NPM Scripts</a>
          </li>
          <li>
            <a href="#Developing-Locally">Developing Locally</a>
          </li>
          <li>
            <a href="#Building-for-Production">Building for Production</a>
          </li>
        </ul>
      </HeadingBlock>

      <StartingAProject />
      <NPMScripts />

      <HeadingBlock
        level="2"
        id="Developing-Locally"
        heading="Developing Locally"
      >
        <ul className={classNames(styles.list, styles.content)}>
          <li>
            <a href="#Running-the-Application">Running the Application</a>
          </li>
          <li>
            <a href="#Project-Directories">Project Directories</a>
          </li>
          <li>
            <a href="#Adding-an-Application-Directory">Adding an Application Directory</a>
          </li>
          <li>
            <a href="#Static-Files">Static Files</a>
          </li>
          <li>
            <a href="#Error-Boundary">Error Boundary</a>
          </li>
          <li>
            <a href="#Testing">Testing</a>
          </li>
          <li>
            <a href="#Pull-Request-Template">Pull Request Template</a>
          </li>
          <li>
            <a href="#Github-Workflow">Github Workflow</a>
          </li>
        </ul>
      </HeadingBlock>

      <RunningTheApplication />
      <ProjectDirectories />
      <AddingAnApplicationDirectory />
      <StaticFiles />
      <ErrorBoundary />
      <Testing />
      <PullRequestTemplate />
      <GithubWorkflow />

      <HeadingBlock
        level="2"
        id="Building-for-Production"
        heading="Building for Production"
      >
        <p>
          {'To build for production run '}
          <span className={styles.highlight}>npm build:prod</span>
          {'. The production assets to be deployed will be generated in the '}
          <span className={styles.highlight}>dist/</span>
          {' directory.'}
        </p>

        <p>
          {`To build the production assets and run the Express server in a single
           command, run `}
          <span className={styles.highlight}>npm start</span>
          .
        </p>
      </HeadingBlock>
    </ContentBlock>
  );
}

export default Documentation;
