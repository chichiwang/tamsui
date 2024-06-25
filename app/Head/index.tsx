/* global PROJECT_URL */
import React, { useContext } from 'react';

import ManifestContext from 'app/context/ManifestContext';
import useRouteHead from 'app/hooks/useRouteHead';
import type { Manifest } from 'app/types';

function Head() {
  const manifest: Manifest = useContext(ManifestContext);
  const head = useRouteHead();

  const defaultTitle = 'Tamsui: A Universal JavaScript Application Boilerplate';
  const titleSuffix = '| Tamsui';
  const title = head?.title
    ? `${head.title} ${titleSuffix}`
    : defaultTitle;

  return (
    <head>
      <meta charSet="utf-8" />
      <title>{ title }</title>
      <meta name="author" content="Chi-chi Wang" />
      <meta
        name="keywords"
        content="Tamsui, js, JavaScript, isomorphic, Node.js, React, TypeScript, Express, React-Router, Boilerplate"
      />
      <meta name="description" content="An Express/React universal application boilerplate" />
      <meta name="robots" content="all" />
      <meta name="viewport" content="width=device-width" />
      <link rel="stylesheet" type="text/css" href={`/${manifest['app.css']}`} />
      <link rel="apple-touch-icon" sizes="180x180" href="/static/images/favicon/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/static/images/favicon/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/static/images/favicon/favicon-16x16.png" />
      <link rel="manifest" href="/static/site.webmanifest" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:image" content={`${PROJECT_URL}/static/images/site-preview.webp`} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:type" content="image/webp" />
    </head>
  );
}

export default Head;
