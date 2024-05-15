import React from 'react';
import classNames from 'classnames';

import AnimatedLogo from 'pages/components/Logo/AnimatedLogo';

import styles from './styles.module.scss';
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

      <div className={styles.fieldRed}>
        <div className={styles.scene}>

          <div className={styles.fiveBuilding}>
            <div className={styles.base} />
            <div className={classNames(styles.level, styles.one)} />
            <div className={classNames(styles.level, styles.two)} />
            <div className={classNames(styles.level, styles.three)} />
            <div className={classNames(styles.level, styles.four)} />
            <div className={classNames(styles.level, styles.five)} />
            <div className={classNames(styles.level, styles.six)} />
            <div className={classNames(styles.level, styles.seven)} />
            <div className={classNames(styles.level, styles.eight)} />
            <div className={styles.topBase} />
            <div className={styles.antenna} />
            <div className={styles.sign} />
          </div>

          <div className={styles.cappedBldg} />
          <div className={classNames(styles.cappedBldg, styles.bldg01)} />
          <div className={classNames(styles.cappedBldg, styles.bldg02)} />
          <div className={styles.flatBldg} />
          <div className={classNames(styles.flatBldg, styles.bldg01)} />
          <div className={classNames(styles.flatBldg, styles.bldg02)} />
          <div className={styles.domedBldg} />
          <div className={classNames(styles.domedBldg, styles.bldg01)} />

        </div>
      </div>

      <div className={classNames(styles.spacer, styles.small)} />

      <div className={styles.fieldOrange}>
        <div className={classNames(styles.scene, styles.foreground)}>

          <div className={classNames(styles.cloudBig, styles.offScreen)}>
            <div className={styles.inside} />
            <div className={styles.middle} />
            <div className={styles.outside} />
          </div>

          <div className={classNames(styles.cloudSmall, styles.offScreen)}>
            <div className={styles.inside} />
            <div className={styles.inner} />
            <div className={styles.outer} />
            <div className={styles.outside} />
          </div>

          <div className={styles.cloudBig}>
            <div className={styles.inside} />
            <div className={styles.middle} />
            <div className={styles.outside} />
          </div>

          <div className={styles.cloudSmall}>
            <div className={styles.inside} />
            <div className={styles.inner} />
            <div className={styles.outer} />
            <div className={styles.outside} />
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
