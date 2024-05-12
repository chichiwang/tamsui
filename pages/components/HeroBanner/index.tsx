import React from 'react';
import classNames from 'classnames';

import AnimatedLogo from 'pages/components/Logo/AnimatedLogo';

import styles from './styles.module.scss';

type HeroBannerProps = {
  className?: string;
};

function HeroBanner({
  className,
}: HeroBannerProps) {
  return (
    <div className={classNames(className, styles.heroContainer)}>
      <div className={styles.fieldMaroon} />
      <div className={styles.fieldRed} />
      <div className={styles.fieldOrange} />
      <div className={styles.fieldBlue}>
        <div className={classNames(styles.hexRipple, styles.ripple)} />
        <div className={classNames(styles.hexRipple, styles.ripple, styles.delay1)} />
        <div className={classNames(styles.hexRipple, styles.ripple, styles.delay2)} />
        <h2 className={classNames(styles.title, styles.expand)}>Tamsui</h2>
      </div>
      <div className={styles.logoContainer}>
        <div className={styles.hexBackdrop} />
        <AnimatedLogo className={styles.logo} height="200px" />
      </div>
    </div>
  );
}

export default HeroBanner;
