import React from 'react';
import classNames from 'classnames';

import AnimatedLogo from 'pages/components/Logo/AnimatedLogo';
import SceneRed from './SceneRed';
import SceneOrange from './SceneOrange';
import SceneBlue from './SceneBlue';

import styles from './styles.module.scss';

type HeroBannerProps = {
  className?: string;
};

function HeroBanner({
  className,
}: HeroBannerProps) {
  return (
    <div className={classNames(className, styles.heroContainer)}>

      <div className={styles.fieldMaroon}>
        <div className={styles.scene} />
      </div>

      <div className={classNames(styles.spacer, styles.small)} />
      <SceneRed />
      <div className={classNames(styles.spacer, styles.small)} />
      <SceneOrange />
      <div className={styles.spacer} />
      <SceneBlue />

      <div className={styles.logoContainer}>
        <div className={styles.hexBackdrop} />
        <AnimatedLogo className={styles.logo} height="200px" />
      </div>

    </div>
  );
}

export default HeroBanner;
