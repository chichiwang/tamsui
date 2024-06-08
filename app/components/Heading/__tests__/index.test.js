import React from 'react';
import renderer from 'react-test-renderer';
import { fireEvent, render, screen } from '@testing-library/react';
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

  test('matches centered snapshot', () => {
    const tree = renderer.create(
      <Heading level="6" centered>
        H6 Heading centered
      </Heading>,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('matches className snapshot', () => {
    const tree = renderer.create(
      <Heading level="4" className="foobar">
        H4 Heading with className
      </Heading>,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('matches id snapshot', () => {
    const tree = renderer.create(
      <Heading id="FooBaz" level="2">
        H2 Heading with ID
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

  describe('with ID', () => {
    test('displays a link when hovered', async () => {
      const { container } = render(
        <Heading id="Triggered Event" level="3">
          Heading with ID
        </Heading>,
      );

      fireEvent.mouseEnter(screen.getByRole('heading', { level: 3 }));

      expect(container.querySelector('.container').classList).toContain('hover');

      fireEvent.mouseLeave(screen.getByRole('heading', { level: 3 }));

      expect(container.querySelector('.container').classList).not.toContain('hover');
    });
  });
});
