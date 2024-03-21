import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound(): React.ReactElement {
  return (
    <main>
      <h1>Page Not Found!</h1>
      <Link to="/">Return to Home</Link>
    </main>
  );
}
