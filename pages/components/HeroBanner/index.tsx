import React from 'react';
import classNames from 'classnames';

import AnimatedLogo from 'pages/components/Logo/AnimatedLogo';
import SceneOrange from './SceneOrange';
import SceneBlue from './SceneBlue';

import styles from './styles.module.scss';
import red from './styles.red.module.scss';

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

      <div className={red.field}>
        <div className={red.scene}>

          <div className={red.fiveBuilding}>
            <div className={red.base} />
            <div className={classNames(red.level, red.one)} />
            <div className={classNames(red.level, red.two)} />
            <div className={classNames(red.level, red.three)} />
            <div className={classNames(red.level, red.four)} />
            <div className={classNames(red.level, red.five)} />
            <div className={classNames(red.level, red.six)} />
            <div className={classNames(red.level, red.seven)} />
            <div className={classNames(red.level, red.eight)} />
            <div className={red.topBase} />
            <div className={red.antenna} />
            <div className={red.sign} />
          </div>

          <div className={red.cappedBldg} />
          <div className={classNames(red.cappedBldg, red.bldg01)} />
          <div className={classNames(red.cappedBldg, red.bldg02)} />
          <div className={red.flatBldg} />
          <div className={classNames(red.flatBldg, red.bldg01)} />
          <div className={classNames(red.flatBldg, red.bldg02)} />
          <div className={red.domedBldg} />
          <div className={classNames(red.domedBldg, red.bldg01)} />

        </div>
      </div>

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
