import React from 'react';
import { Link } from 'react-router-dom';

import styles from './styles.module.scss';

export default function Home(): React.ReactElement {
  return (
    <main>
      <h1 className={styles.heading}>Hello, React SSR!</h1>
      <Link to="/counter">React Counter</Link>
    </main>
  );
}
