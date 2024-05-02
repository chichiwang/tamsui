import React from 'react';
import classNames from 'classnames';
import getDimensions from './getDimensions';

import Egret from './Egret';

import styles from './styles.module.scss';

type LogoProps = {
  className?: string;
  width?: string;
  height?: string;
};

function Logo({ className, width, height }: LogoProps) {
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
        <div className={styles.hexMaroon}>
          <div className={styles.top} />
          <div className={styles.bottom} />
        </div>
        <div className={classNames(styles.spacer, styles.small)} />
        <div className={styles.hexRed} />
        <div className={classNames(styles.spacer, styles.small)} />
        <div className={styles.hexOrange} />
        <div className={styles.spacer} />
        <div className={styles.hexBlue}>
          <div className={styles.top} />
          <div className={styles.bottom} />
        </div>
      </div>
      <Egret className={styles.egret} height="82%" color="#fff" />
    </div>
  );
}

export default Logo;
