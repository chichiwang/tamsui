import createFetchRequest from '../createFetchRequest';

const mockedHost = 'website.com:8000';
const mockedOriginalUrl = 'dogecoin/forever';

const mockedReq = {
  method: 'GET',
  get: jest.fn(() => mockedHost),
  headers: {
    'Access-Control-Allow-Origin': undefined,
    Host: 'totally-confusing-hosts.biz',
    Referer: 'https://askjeeves.bike',
    'Set-Cookie': [
      'chocolate chip',
      'oatmeal-raisin',
      'macadamia',
    ],
  },
  protocol: 'ftp',
  url: 'discount/bitcoin',
  body: 'full',
};

const mockedRes = {
  on: jest.fn(),
};

const mockedAbortMethod = jest.fn();

function mockedAbortController() {
  this.abort = mockedAbortMethod;
}

const originalAbortController = AbortController;

describe('createFetchRequest', () => {
  beforeEach(() => {
    global.AbortController = mockedAbortController;
    jest.clearAllMocks();
  });

  afterEach(() => {
    global.AbortController = originalAbortController;
  });

  test('returns a Request object', () => {
    const returnedReq = createFetchRequest(mockedReq, mockedRes);

    expect(returnedReq).toEqual(expect.any(Request));
  });

  test('returned Request object contains a url field', () => {
    const reqWithOriginalUrl = {
      ...mockedReq,
      method: 'UNORTHODOX',
    };
    const expectedUrl = `${mockedReq.protocol}://${mockedHost}/${mockedReq.url}`;

    const returnedReq = createFetchRequest(reqWithOriginalUrl, mockedRes);

    expect(returnedReq.url).toBe(expectedUrl);
  });

  test('returned Request object contains originalUrl if field exists', () => {
    const reqWithOriginalUrl = {
      ...mockedReq,
      originalUrl: mockedOriginalUrl,
      method: 'UNORTHODOX',
    };
    const expectedUrl = `${mockedReq.protocol}://${mockedHost}/${mockedOriginalUrl}`;

    const returnedReq = createFetchRequest(reqWithOriginalUrl, mockedRes);

    expect(returnedReq.url).toBe(expectedUrl);
  });

  test('binds a response close handler', () => {
    createFetchRequest(mockedReq, mockedRes);

    expect(mockedRes.on).toHaveBeenCalledWith('close', expect.any(Function));
  });

  test('response close handler calls abort', () => {
    createFetchRequest(mockedReq, mockedRes);

    const closeHandler = mockedRes.on.mock.calls[0][1];
    closeHandler();

    expect(mockedAbortMethod).toHaveBeenCalledTimes(1);
  });
});
