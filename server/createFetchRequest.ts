/**
 * createFetchRequest function taken from react-router's
 *   ssr guide (https://reactrouter.com/en/main/guides/ssr):
 *
 *   "The createFetchRequest method is specific to an Express
 *    request and in this example is extracted from the
 *    @remix-run/express adapter"
 *
 *    The purpose of this function is to convert Express
 *      Request and Response objects into a Fetch request.
 *
 *    An attempt was made to find an external package that
 *      would convert Express Request/Response objects into
 *      a Fetch request but one was not found. Should a
 *      standalone package become available, this module
 *      can and should be replaced.
 */

import {
  Request as ExpressRequest,
  Response as ExpressResponse,
} from 'express';

type InitObj = {
  method: string;
  headers: Headers;
  signal: AbortSignal,
  body?: string;
};

export default function createFetchRequest(req: ExpressRequest, res: ExpressResponse) {
  const origin = `${req.protocol}://${req.get('host')}`;
  // Note: This had to take originalUrl into account for presumably vite's proxying
  const url = new URL(req.originalUrl || req.url, origin);

  const controller = new AbortController();
  res.on('close', () => controller.abort());

  const headers = new Headers();

  for (const [key, values] of Object.entries(req.headers)) {
    if (values) {
      if (Array.isArray(values)) {
        for (const value of values) {
          headers.append(key, value);
        }
      } else {
        headers.set(key, values);
      }
    }
  }

  const init: InitObj = {
    method: req.method,
    headers,
    signal: controller.signal,
  };

  if (req.method !== 'GET' && req.method !== 'HEAD') {
    init.body = req.body;
  }

  return new Request(url.href, init);
}
