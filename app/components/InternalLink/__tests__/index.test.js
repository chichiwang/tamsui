import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { ResetScrollKey } from 'app/hooks/useResetScroll';
import InternalLink from '../index';

function RenderProp({ k, v }) {
  return (
    <p data-testid={`${k}`}>{v}</p>
  );
}

function MockedLink(props) {
  return (
    <div>
      { Object.entries(props).map(function renderEachProp([key, value]) {
        const val = JSON.stringify(value);
        return <RenderProp key={key} k={key} v={val} />;
      }) }
    </div>
  );
}

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  Link: MockedLink,
}));

const expectedStateContent = {
  [ResetScrollKey]: true,
};

describe('InternalLink component', () => {
  test('matches the snapshot', () => {
    const tree = renderer.create(<InternalLink to="/test" />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('passes all properties through to React Router Link', () => {
    const props = {
      to: '/test-props',
      children: 'nested-elements',
      foo: 'bar',
      hello: 'compositional component!',
    };

    render(<InternalLink {...props} />);

    for (const [key, value] of Object.entries(props)) {
      const $el = screen.queryByTestId(key);

      expect($el).toBeInTheDocument();
      expect($el).toHaveTextContent(JSON.stringify(value));
    }
  });

  test('adds a state object to trigger scroll reset', () => {
    const targetPath = '/test-state-applied';

    render(<InternalLink to={targetPath} />);

    expect(screen.queryByTestId('to')).toHaveTextContent(targetPath);
    expect(screen.queryByTestId('state')).toHaveTextContent(JSON.stringify(expectedStateContent));
  });

  test('extends provided state object with trigger for scroll reset', () => {
    const targetPath = '/test-state-extended';
    const initialStateObject = {
      some: 'state',
    };

    render(<InternalLink to={targetPath} state={initialStateObject} />);

    expect(screen.queryByTestId('to')).toHaveTextContent(targetPath);
    expect(screen.queryByTestId('state')).toHaveTextContent(JSON.stringify({
      ...initialStateObject,
      ...expectedStateContent,
    }));
  });
});
