import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import useResetScroll from 'app/hooks/useResetScroll';

import Layout from '../index';

jest.mock('app/hooks/useResetScroll', () => jest.fn());

function RouterWrappedLayout() {
  return (
    <MemoryRouter>
      <Layout />
    </MemoryRouter>
  );
}

describe('Layout Component - default', () => {
  beforeEach(() => {
    useResetScroll.mockRestore();
  });

  test('matches no-child snapshot', () => {
    const tree = renderer.create(<RouterWrappedLayout />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('invokes the useResetScroll hook', () => {
    renderer.create(<RouterWrappedLayout />);

    expect(useResetScroll).toHaveBeenCalledTimes(1);
  });
});
