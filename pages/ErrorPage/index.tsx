import React from 'react';

import ContentBlock from 'app/components/ContentBlock';
import AnimatedLogo from 'app/components/Logo/AnimatedLogo';

import styles from './styles.module.scss';

export default function ErrorPage() {
  return (
    <ContentBlock>
      <div className={styles.logoBlock}>
        <AnimatedLogo height="250px" />
      </div>
      <h1 className={styles.errorHeading}>An Error Occurred!</h1>
      <p className={styles.errorMessage}>
        Unfortunately something has gone wrong, apologies for the inconvenience.
      </p>
    </ContentBlock>
  );
}
