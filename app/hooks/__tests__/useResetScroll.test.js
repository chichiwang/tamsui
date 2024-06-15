import { useLayoutEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '@testing-library/jest-dom';

import useResetScroll, { ResetScrollKey } from '../useResetScroll';

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useLayoutEffect: jest.fn(),
}));

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: jest.fn(),
  useNavigate: jest.fn(),
}));

const mockedNavigate = jest.fn();
const mockedLocation = {
  pathname: '/mocked',
};
const mockedScrollTo = jest.fn();

describe('useResetScroll', () => {
  beforeAll(() => {
    useNavigate.mockReturnValue(mockedNavigate);
    useLocation.mockReturnValue(mockedLocation);
    global.document.documentElement.scrollTo = mockedScrollTo;
  });

  beforeEach(() => {
    useLayoutEffect.mockClear();
    useLocation.mockClear();
    useNavigate.mockClear();
    mockedNavigate.mockClear();
    mockedScrollTo.mockClear();
  });

  afterAll(() => {
    delete global.document.documentElement.scrollTo;
  });

  test('assigns handler to useLayoutEffect, watching location.pathname', () => {
    useResetScroll();

    expect(useLocation).toHaveBeenCalledTimes(1);
    expect(useNavigate).toHaveBeenCalledTimes(1);
    expect(mockedNavigate).toHaveBeenCalledTimes(0);
    expect(mockedScrollTo).toHaveBeenCalledTimes(0);
    expect(useLayoutEffect).toHaveBeenCalledTimes(1);

    expect(useLayoutEffect).toHaveBeenCalledWith(
      expect.any(Function),
      expect.arrayContaining([mockedLocation.pathname]),
    );
  });

  test('does not scroll document if location state doesn\'t exist', () => {
    useResetScroll();

    const [effectHandler] = useLayoutEffect.mock.calls[0];
    effectHandler();

    expect(mockedScrollTo).not.toHaveBeenCalled();
    expect(mockedNavigate).not.toHaveBeenCalled();
  });

  test('does not scroll document if location state resetScroll property is set to false', () => {
    mockedLocation.state = {
      [ResetScrollKey]: false,
    };

    useResetScroll();

    const [effectHandler] = useLayoutEffect.mock.calls[0];
    effectHandler();

    expect(mockedScrollTo).not.toHaveBeenCalled();
    expect(mockedNavigate).not.toHaveBeenCalled();

    delete mockedLocation.state;
  });

  describe('location.state.scrollReset set to true', () => {
    beforeAll(() => {
      mockedLocation.state = {
        [ResetScrollKey]: true,
      };
    });

    afterAll(() => {
      delete mockedLocation.state;
    });

    test('handler scrolls the document to the top-left', () => {
      useResetScroll();

      const [effectHandler] = useLayoutEffect.mock.calls[0];
      effectHandler();

      expect(mockedScrollTo).toHaveBeenCalledTimes(1);
      expect(mockedScrollTo).toHaveBeenCalledWith(expect.objectContaining({
        top: 0,
        left: 0,
        behavior: 'instant',
      }));
    });

    test('handler replaces the history with the same path, eliminating the location state', () => {
      useResetScroll();

      const [effectHandler] = useLayoutEffect.mock.calls[0];
      effectHandler();

      expect(mockedNavigate).toHaveBeenCalledTimes(1);
      expect(mockedNavigate).toHaveBeenCalledWith(mockedLocation.pathname, expect.objectContaining({
        replace: true,
      }));
    });
  });
});
