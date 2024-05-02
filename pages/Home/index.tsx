import React from 'react';

import Layout from 'pages/Layout';
import Logo from 'pages/components/Logo';

import styles from './styles.module.scss';

export default function Home(): React.ReactElement {
  return (
    <Layout>
      <Logo width="200px" />
      <h1 className={styles.heading}>Tamsui</h1>
    </Layout>
  );
}
