import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Heading from '../index';

describe('Heading component', () => {
  test('matches uncentered snapshot', () => {
    const tree = renderer.create(
      <Heading level="2">
        H2 Heading
      </Heading>,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('matches className snapshot', () => {
    const tree = renderer.create(
      <Heading level="4" className="foobar">
        H1 Heading
      </Heading>,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('renders child components', () => {
    const childText = 'Paragraph Contents';

    render(
      <Heading level="3">
        <p>{childText}</p>
      </Heading>,
    );

    expect(screen.getByText(childText)).toBeInTheDocument();
  });

  describe('heading levels', () => {
    test('contains a h1 tag', () => {
      const headingText = 'H1 tag contents';

      render(
        <Heading level="1">
          {headingText}
        </Heading>,
      );

      expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(headingText);
    });

    test('contains a h2 tag', () => {
      const headingText = 'H2 tag contents';

      render(
        <Heading level="2">
          {headingText}
        </Heading>,
      );

      expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(headingText);
    });

    test('contains a h3 tag', () => {
      const headingText = 'H3 tag contents';

      render(
        <Heading level="3">
          {headingText}
        </Heading>,
      );

      expect(screen.getByRole('heading', { level: 3 })).toHaveTextContent(headingText);
    });

    test('contains a h4 tag', () => {
      const headingText = 'H4 tag contents';

      render(
        <Heading level="4">
          {headingText}
        </Heading>,
      );

      expect(screen.getByRole('heading', { level: 4 })).toHaveTextContent(headingText);
    });

    test('contains a h5 tag', () => {
      const headingText = 'H4 tag contents';

      render(
        <Heading level="5">
          {headingText}
        </Heading>,
      );

      expect(screen.getByRole('heading', { level: 5 })).toHaveTextContent(headingText);
    });

    test('contains a h6 tag', () => {
      const headingText = 'H6 tag contents';

      render(
        <Heading level="6">
          {headingText}
        </Heading>,
      );

      expect(screen.getByRole('heading', { level: 6 })).toHaveTextContent(headingText);
    });
  });
});
