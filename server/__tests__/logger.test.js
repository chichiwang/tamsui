/* eslint-disable global-require */
import pino from 'pino';

jest.mock('pino');

const mockLogger = jest.fn();

let logger;

describe('logger', () => {
  beforeAll(() => {
    pino.mockReturnValue(mockLogger);
    logger = require('../logger').default;
  });

  test('returns an instance of a pino logger', () => {
    expect(logger).toBe(mockLogger);
  });
});
