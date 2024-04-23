import React from 'react';
import { Link } from 'react-router-dom';

import styles from './styles.module.scss';

export default function Home(): React.ReactElement {
  return (
    <main>
      <img className={styles.logo} alt="Tamsui logo" src="/static/images/logo.webp" />
      <h1 className={styles.heading}>Tamsui</h1>
      <Link to="/counter">React Counter</Link>
    </main>
  );
}
