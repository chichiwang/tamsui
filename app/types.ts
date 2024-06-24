import React from 'react';
import type { UIMatch } from 'react-router-dom';

type HeadingLevel = '1' | '2' | '3' | '4' | '5' | '6';

type Manifest = {
  [key: string]: string;
};

/**
 * Route Match and Handle types
 */

type RouteHead = {
  title?: string;
  tags?: React.ReactNode;
};

type PageHandle = {
  head?: RouteHead;
};

interface PageMatch extends UIMatch {
  handle: PageHandle,
}

export {
  HeadingLevel,
  Manifest,
  PageMatch,
  PageHandle,
  RouteHead,
};
