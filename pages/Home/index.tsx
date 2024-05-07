import React from 'react';

import Layout from 'pages/Layout';
import AnimatedLogo from 'pages/components/Logo/AnimatedLogo';

import styles from './styles.module.scss';

export default function Home(): React.ReactElement {
  return (
    <Layout>
      <AnimatedLogo className={styles.logo} width="200px" />
      <h1 className={styles.heading}>Tamsui</h1>
    </Layout>
  );
}
