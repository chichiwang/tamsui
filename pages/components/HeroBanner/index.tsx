import React from 'react';
import classNames from 'classnames';

import AnimatedLogo from 'pages/components/Logo/AnimatedLogo';
import SceneMaroon from './SceneMaroon';
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
      <SceneMaroon />
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
