import React from 'react';
import classNames from 'classnames';

import styles from './styles.module.scss';

function SceneBlue() {
  return (
    <div className={styles.field}>
      <div className={classNames(styles.hex, styles.ripple)} />
      <div className={classNames(styles.hex, styles.ripple, styles.delay1)} />
      <div className={classNames(styles.hex, styles.ripple, styles.delay2)} />
    </div>
  );
}

export default SceneBlue;
