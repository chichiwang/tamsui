/* global PROJECT_URL */
import React from 'react';

function Head() {
  const url = `${PROJECT_URL}/documentation`;

  return (
    <>
      <meta property="og:type" content="article" />
      <meta property="og:author" content="Chi-chi Wang" />
      <meta property="og:title" content="Developer Documentation for Tamsui: React/Express universal JavaScript boilerplate" />
      <meta property="og:description" content="Set up a universal JavaScript application on the Tamsui boilerplate." />
      <meta property="og:url" content={url} />
      <link href={url} rel="canonical" />
    </>
  );
}

export default Head;
