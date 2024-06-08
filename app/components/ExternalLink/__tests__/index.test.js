import React from 'react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';

import ExternalLink from '../index';

describe('ExternalLink Component', () => {
  test('matches snapshot', () => {
    const href = 'https://www.github.com';
    const tree = renderer.create(
      <ExternalLink href={href}>
        Repository
      </ExternalLink>,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('className snapshot', () => {
    const href = 'https://developer.mozilla.org/';
    const className = 'color-orange dotted-underline';
    const tree = renderer.create(
      <ExternalLink className={className} href={href}>
        <b>Developer Documentation</b>
      </ExternalLink>,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
