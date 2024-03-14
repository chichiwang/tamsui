/**
 * @jest-environment jsdom
 */

/* eslint global-require: 0 */
import { hydrateRoot } from 'react-dom/client';

jest.mock('react-dom/client');

beforeEach(() => {
  jest.clearAllMocks();
  require('../entry');
});

test('calls hydrateRoot with the correct arguments', () => {
  expect(hydrateRoot).toHaveBeenCalledWith(document, expect.any(Object));
});
