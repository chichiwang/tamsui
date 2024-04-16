/* eslint-disable global-require */
import pinoHttp from 'pino-http';

jest.mock('pino-http');

const mockLogger = jest.fn();

let httpLogger;

describe('httpLogger', () => {
  beforeAll(() => {
    pinoHttp.mockReturnValue(mockLogger);
    httpLogger = require('../httpLogger').default;
  });

  test('returns an instance of a pino httpLogger', () => {
    expect(httpLogger).toEqual(mockLogger);
  });
});
