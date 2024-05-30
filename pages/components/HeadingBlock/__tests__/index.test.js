import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import HeadingBlock from '../index';

describe('HeadingBlock Component', () => {
  test('matches uncentered snapshot', () => {
    const tree = renderer.create(
      <HeadingBlock heading="Test Heading" level="1">
        <p>Block content</p>
      </HeadingBlock>,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('matches centered snapshot', () => {
    const tree = renderer.create(
      <HeadingBlock heading="Test Heading" level="1" center>
        <p>Block content</p>
      </HeadingBlock>,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('matches className snapshot', () => {
    const tree = renderer.create(
      <HeadingBlock className="margin-top-large" heading="Test Heading" level="3">
        <p>Block content</p>
      </HeadingBlock>,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('renders child components', () => {
    const childText = 'Paragraph Contents';

    render(
      <HeadingBlock heading="Test Heading" level="1" center>
        <p>{childText}</p>
      </HeadingBlock>,
    );

    expect(screen.getByText(childText)).toBeInTheDocument();
  });

  describe('heading levels', () => {
    test('contains a h1 tag', () => {
      const headingText = 'H1 tag contents';
      const content = 'Block content';

      render(
        <HeadingBlock heading={headingText} level="1" center>
          <p>{content}</p>
        </HeadingBlock>,
      );

      expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(headingText);
      expect(screen.getByText(content)).toBeInTheDocument();
    });

    test('contains a h2', () => {
      const headingText = 'H2 tag contents';
      const content = 'Block content';

      render(
        <HeadingBlock heading={headingText} level="2" center>
          <p>{content}</p>
        </HeadingBlock>,
      );

      expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(headingText);
      expect(screen.getByText(content)).toBeInTheDocument();
    });

    test('contains a h3', () => {
      const headingText = 'H3 tag contents';
      const content = 'Block content';

      render(
        <HeadingBlock heading={headingText} level="3" center>
          <p>{content}</p>
        </HeadingBlock>,
      );

      expect(screen.getByRole('heading', { level: 3 })).toHaveTextContent(headingText);
      expect(screen.getByText(content)).toBeInTheDocument();
    });

    test('contains a h4', () => {
      const headingText = 'H4 tag contents';
      const content = 'Block content';

      render(
        <HeadingBlock heading={headingText} level="4" center>
          <p>{content}</p>
        </HeadingBlock>,
      );

      expect(screen.getByRole('heading', { level: 4 })).toHaveTextContent(headingText);
      expect(screen.getByText(content)).toBeInTheDocument();
    });

    test('contains a h5', () => {
      const headingText = 'H5 tag contents';
      const content = 'Block content';

      render(
        <HeadingBlock heading={headingText} level="5" center>
          <p>{content}</p>
        </HeadingBlock>,
      );

      expect(screen.getByRole('heading', { level: 5 })).toHaveTextContent(headingText);
      expect(screen.getByText(content)).toBeInTheDocument();
    });

    test('contains a h6', () => {
      const headingText = 'H6 tag contents';
      const content = 'Block content';

      render(
        <HeadingBlock heading={headingText} level="6" center>
          <p>{content}</p>
        </HeadingBlock>,
      );

      expect(screen.getByRole('heading', { level: 6 })).toHaveTextContent(headingText);
      expect(screen.getByText(content)).toBeInTheDocument();
    });
  });
});
