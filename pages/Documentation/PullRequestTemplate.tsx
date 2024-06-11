import React from 'react';
import classNames from 'classnames';

import HeadingBlock from 'app/components/HeadingBlock';
import ExternalLink from 'app/components/ExternalLink';

import styles from './styles.module.scss';

function PullRequestTemplate() {
  return (
    <HeadingBlock
      level="3"
      id="Pull-Request-Template"
      heading="Pull Request Template"
    >
      <p>
        <b>Tamsui</b>
        {' contains a '}
        <ExternalLink href="https://docs.github.com/en/communities/using-templates-to-encourage-useful-issues-and-pull-requests/creating-a-pull-request-template-for-your-repository">
          Github Pull Request template
        </ExternalLink>
        {' that is intended to provide a scaffold for a thorough pull request. '}
        <ExternalLink href="https://github.com/chichiwang/tamsui/blob/main/.github/pull_request_template.md">
          This template
        </ExternalLink>
        {' provides the following sections:'}
      </p>

      <ul className={styles.list}>
        <li>
          <span className={styles.highlight}>Description</span>
          :
          <ul className={styles.list}>
            <li>
              {`Link to a related issue/story - important for documentation of
               why this change is being made`}
            </li>
            <li>
              A prompt to provide a description of the intent of the changes
            </li>
          </ul>
        </li>
        <li>
          <span className={styles.highlight}>Changes</span>
          : A prompt to list the code changes in the pull request
        </li>
        <li>
          <span className={styles.highlight}>Steps to QA</span>
          {`: A prompt to provide steps for reviewers to verify the changes
           achieve their intended result`}
        </li>
      </ul>

      <p>
        The reason for these sections is two-fold:
      </p>

      <ul className={classNames(styles.list, styles.numbered)}>
        <li>
          {`Make it easier for reviewers to review the code changes, with full context of the reasons
           the changes are being made, in order that the team can produce the best results for the codebase.`}
        </li>
        <li>
          {`Provide a history of documentation in the repository, so that every significant change is
           documented and vetted. This can be useful in the future to trace changes and intent when debugging
           or extending the codebase.`}
        </li>
      </ul>
    </HeadingBlock>
  );
}

export default PullRequestTemplate;
