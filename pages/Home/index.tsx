import React from 'react';
import { Link } from 'react-router-dom';

export default function Home(): React.ReactElement {
  return (
    <main>
      <h1>Hello, React SSR!</h1>
      <Link to="/counter">React Counter</Link>
    </main>
  );
}
