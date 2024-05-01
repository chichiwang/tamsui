import React from 'react';

import Layout from 'pages/Layout';
import Logo from 'pages/components/Logo';

import styles from './styles.module.scss';

export default function Home(): React.ReactElement {
  return (
    <Layout>
      <Logo />
      <img className={styles.logo} alt="Tamsui logo" src="/static/images/logo.webp" />
      <h1 className={styles.heading}>Tamsui</h1>
    </Layout>
  );
}
