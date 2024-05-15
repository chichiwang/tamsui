import React from 'react';
import classNames from 'classnames';

import AnimatedLogo from 'pages/components/Logo/AnimatedLogo';

import styles from './styles.module.scss';
import red from './styles.red.module.scss';
import orange from './styles.orange.module.scss';
import blue from './styles.blue.module.scss';

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

      <div className={orange.field}>
        <div className={classNames(orange.scene, orange.foregroundFloat)}>

          <div className={classNames(orange.cloudBig, orange.offScreen)}>
            <div className={orange.inside} />
            <div className={orange.middle} />
            <div className={orange.outside} />
          </div>

          <div className={classNames(orange.cloudSmall, orange.offScreen)}>
            <div className={orange.inside} />
            <div className={orange.inner} />
            <div className={orange.outer} />
            <div className={orange.outside} />
          </div>

          <div className={orange.cloudBig}>
            <div className={orange.inside} />
            <div className={orange.middle} />
            <div className={orange.outside} />
          </div>

          <div className={orange.cloudSmall}>
            <div className={orange.inside} />
            <div className={orange.inner} />
            <div className={orange.outer} />
            <div className={orange.outside} />
          </div>

        </div>
      </div>

      <div className={styles.spacer} />

      <div className={blue.field}>
        <div className={classNames(blue.hex, blue.ripple)} />
        <div className={classNames(blue.hex, blue.ripple, blue.delay1)} />
        <div className={classNames(blue.hex, blue.ripple, blue.delay2)} />
      </div>

      <div className={styles.logoContainer}>
        <div className={styles.hexBackdrop} />
        <AnimatedLogo className={styles.logo} height="200px" />
      </div>

    </div>
  );
}

export default HeroBanner;
