import React from 'react';
import { Link } from 'react-router-dom';

export default function Counter(): React.ReactElement {
  return (
    <main>
      <h1>React Counter</h1>
      <Link to="/">Back to home</Link>
    </main>
  );
}
