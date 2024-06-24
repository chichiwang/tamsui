import { useLocation, useMatches } from 'react-router-dom';

import useRouteHead from '../useRouteHead';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: jest.fn(),
  useMatches: jest.fn(),
}));

const segment1 = '/page';
const segment2 = `${segment1}/section`;
const segment3 = `${segment2}/article`;

const mockedHead = {
  title: 'Page Title',
  tags: ['meta', 'og:description'],
};

const location = {
  pathname: segment3,
};

describe('useRouteHead', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('no matches returned', () => {
    beforeAll(() => {
      useLocation.mockReturnValue(location);
      useMatches.mockReturnValue([]);
    });

    test('returns empty object when there are no matches returned', () => {
      const head = useRouteHead();

      expect(head).toEqual({});
    });
  });

  describe('no matches with handle', () => {
    const matchesNoHandle = [{
      pathname: segment1,
      handle: undefined,
    }, {
      pathname: segment2,
      handle: undefined,
    }, {
      pathname: segment3,
      handle: undefined,
    }];

    beforeAll(() => {
      useLocation.mockReturnValue(location);
      useMatches.mockReturnValue(matchesNoHandle);
    });

    test('returns empty object when matches do not contain a handle', () => {
      const head = useRouteHead();

      expect(head).toEqual({});
    });
  });

  describe('matches with handles do not have PageHandles', () => {
    const matchesNoPageHandle = [{
      pathname: segment1,
      handle: 1337,
    }, {
      pathname: segment2,
      handle: 'random data',
    }, {
      pathname: segment3,
      handle: {
        does: 'not',
        contain: 'expected',
        keys: 'in object',
      },
    }];

    beforeAll(() => {
      useLocation.mockReturnValue(location);
      useMatches.mockReturnValue(matchesNoPageHandle);
    });

    test('returns empty object when matches do not contain a PageHandle', () => {
      const head = useRouteHead();

      expect(head).toEqual({});
    });
  });

  describe('location match with PageHandle', () => {
    const matchesHandle = [{
      pathname: segment1,
      handle: undefined,
    }, {
      pathname: segment2,
      handle: undefined,
    }, {
      pathname: segment3,
      handle: {
        head: mockedHead,
      },
    }];

    beforeAll(() => {
      useLocation.mockReturnValue(location);
      useMatches.mockReturnValue(matchesHandle);
    });

    test('returns the head value of the handle in the matched route', () => {
      const head = useRouteHead();

      expect(head).toBe(mockedHead);
    });
  });

  describe('exact path match does not have PageHandle', () => {
    const ancestorMatchWithHandle = [{
      pathname: segment1,
      handle: {
        root: 'path',
        segment: 'handle',
      },
    }, {
      pathname: segment2,
      handle: {
        head: mockedHead,
      },
    }, {
      pathname: segment3,
      handle: {
        not: 'a',
        page: 'handle',
      },
    }];

    beforeAll(() => {
      useLocation.mockReturnValue(location);
      useMatches.mockReturnValue(ancestorMatchWithHandle);
    });

    test('returns the head value of the PageHandle of the nearest ancestor', () => {
      const head = useRouteHead();

      expect(head).toBe(mockedHead);
    });
  });
});
