import React from 'react';
import classNames from 'classnames';

import styles from './styles.module.scss';

function SceneOrange() {
  return (
    <div className={styles.field}>
      <div className={classNames(styles.scene, styles.foregroundFloat)}>

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
  );
}

export default SceneOrange;
