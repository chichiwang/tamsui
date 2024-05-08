import React from 'react';

import AnimatedLogo from 'pages/components/Logo/AnimatedLogo';

import styles from './styles.module.scss';

export default function Home(): React.ReactElement {
  return (
    <>
      <AnimatedLogo className={styles.logo} width="200px" />
      <h1 className={styles.heading}>Tamsui</h1>
    </>
  );
}
