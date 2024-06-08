import React from 'react';
import classNames from 'classnames';
import getDimensions from './getDimensions';

import Egret from './Egret';

import styles from './styles.module.scss';

type AnimatedLogoProps = {
  className?: string;
  width?: string;
  height?: string;
};

function AnimatedLogo({ className, width, height }: AnimatedLogoProps) {
  const [containerWidth, containerHeight] = getDimensions(width, height);

  const containerStyles = {
    width: containerWidth,
    height: containerHeight,
  };

  return (
    <div className={classNames(className, styles.logoContainer)} style={containerStyles}>

      <div className={styles.outerHex}>
        <div className={styles.top} />
        <div className={styles.middle} />
        <div className={styles.bottom} />
      </div>

      <div className={styles.innerHex}>

        <div className={classNames(styles.hexMaroonContainer, styles.spin)}>
          <div className={classNames(styles.hexMaroon, styles.backFace)}>
            <div className={styles.top} />
            <div className={styles.bottom} />
          </div>

          <Egret className={classNames(styles.egret, styles.backFace)} height="175.36%" color="#fff" />
          <div className={classNames(styles.hexMaroon, styles.frontFace)}>
            <div className={styles.top} />
            <div className={styles.bottom} />
          </div>
          <Egret className={classNames(styles.egret, styles.frontFace)} height="175.36%" color="#fff" />
        </div>

        <div className={classNames(styles.spacer, styles.small)} />

        <div className={classNames(styles.hexRedContainer, styles.spin, styles.delay1)}>
          <div className={classNames(styles.hexRed, styles.backFace)} />
          <Egret className={classNames(styles.egret, styles.backFace)} height="2032.54%" color="#fff" />

          <div className={classNames(styles.hexRed, styles.frontFace)} />
          <Egret className={classNames(styles.egret, styles.frontFace)} height="2032.54%" color="#fff" />
        </div>

        <div className={classNames(styles.spacer, styles.small)} />

        <div className={classNames(styles.hexOrangeContainer, styles.spin, styles.delay2)}>
          <div className={classNames(styles.hexOrange, styles.backFace)} />
          <Egret className={classNames(styles.egret, styles.backFace)} height="2915.3%" color="#fff" />

          <div className={classNames(styles.hexOrange, styles.frontFace)} />
          <Egret className={classNames(styles.egret, styles.frontFace)} height="2915.3%" color="#fff" />
        </div>

        <div className={styles.spacer} />

        <div className={classNames(styles.hexBlueContainer, styles.spin, styles.delay3)}>
          <div className={classNames(styles.hexBlue, styles.backFace)}>
            <div className={styles.top} />
            <div className={styles.bottom} />
          </div>
          <Egret className={classNames(styles.egret, styles.backFace)} height="215.64%" color="#fff" />

          <div className={classNames(styles.hexBlue, styles.frontFace)}>
            <div className={styles.top} />
            <div className={styles.bottom} />
          </div>
          <Egret className={classNames(styles.egret, styles.frontFace)} height="215.64%" color="#fff" />
        </div>

      </div>

    </div>
  );
}

export default AnimatedLogo;
