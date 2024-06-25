/* global PROJECT_URL */
import React from 'react';

function Head() {
  const url = `${PROJECT_URL}`;

  return (
    <>
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Tamsui: A React/Express universal JavaScript boilerplate" />
      <meta property="og:description" content="Build a universal JavaScript application using React and Express." />
      <meta property="og:url" content={url} />
    </>
  );
}

export default Head;
