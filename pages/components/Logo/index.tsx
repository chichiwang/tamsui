import React from 'react';
import classNames from 'classnames';

import styles from './styles.module.scss';

function Logo() {
  return (
    <div className={styles.logoContainer}>
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
    </div>
  );
}

export default Logo;
