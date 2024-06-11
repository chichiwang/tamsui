import React from 'react';

import HeadingBlock from 'app/components/HeadingBlock';
import ExternalLink from 'app/components/ExternalLink';

function GithubWorkflow() {
  return (
    <HeadingBlock
      level="3"
      id="Github-Workflow"
      heading="Github Workflow"
    >
      <b>Tamsui</b>
      {' contains a '}
      <ExternalLink href="https://docs.github.com/en/actions/using-workflows/about-workflows">
        Github workflow
      </ExternalLink>
      {' configured to '}
      <ExternalLink href="https://github.com/chichiwang/tamsui/blob/main/.github/workflows/lint-test.yml">
        run the linter and test runner
      </ExternalLink>
      {' on '}
      <ExternalLink href="https://docs.github.com/en/actions/using-workflows/events-that-trigger-workflows#push">
        push events
      </ExternalLink>
      {'. If this is not desired, '}
      <ExternalLink href="https://docs.github.com/en/actions/using-workflows/disabling-and-enabling-a-workflow#disabling-a-workflow">
        disable the workflow in Github
      </ExternalLink>
      .
    </HeadingBlock>
  );
}

export default GithubWorkflow;
