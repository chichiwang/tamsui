import React from 'react';
import classNames from 'classnames';

import ContentBlock from 'app/components/ContentBlock';
import HeadingBlock from 'app/components/HeadingBlock';
import ExternalLink from 'app/components/ExternalLink';
import InternalLink from 'app/components/InternalLink';

import StartingAProject from './StartingAProject';
import NPMScripts from './NPMScripts';
import RunningTheApplication from './RunningTheApplication';
import ProjectDirectories from './ProjectDirectories';
import AddingAnApplicationDirectory from './AddingAnApplicationDirectory';
import StaticFiles from './StaticFiles';
import ErrorBoundary from './ErrorBoundary';
import Testing from './Testing';
import ApplicationLayouts from './ApplicationLayouts';
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
            <InternalLink to="#Starting-a-Project">Starting a Project</InternalLink>
          </li>
          <li>
            <InternalLink to="#NPM-Scripts">NPM Scripts</InternalLink>
          </li>
          <li>
            <InternalLink to="#Developing-Locally">Developing Locally</InternalLink>
          </li>
          <li>
            <InternalLink to="#Building-for-Production">Building for Production</InternalLink>
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
            <InternalLink to="#Running-the-Application">Running the Application</InternalLink>
          </li>
          <li>
            <InternalLink to="#Project-Directories">Project Directories</InternalLink>
          </li>
          <li>
            <InternalLink to="#Adding-an-Application-Directory">Adding an Application Directory</InternalLink>
          </li>
          <li>
            <InternalLink to="#Static-Files">Static Files</InternalLink>
          </li>
          <li>
            <InternalLink to="#Error-Boundary">Error Boundary</InternalLink>
          </li>
          <li>
            <InternalLink to="#Testing">Testing</InternalLink>
          </li>
          <li>
            <InternalLink to="#Application-Layouts">Application Layouts</InternalLink>
          </li>
          <li>
            <InternalLink to="#Pull-Request-Template">Pull Request Template</InternalLink>
          </li>
          <li>
            <InternalLink to="#Github-Workflow">Github Workflow</InternalLink>
          </li>
        </ul>
      </HeadingBlock>

      <RunningTheApplication />
      <ProjectDirectories />
      <AddingAnApplicationDirectory />
      <StaticFiles />
      <ErrorBoundary />
      <Testing />
      <ApplicationLayouts />
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
