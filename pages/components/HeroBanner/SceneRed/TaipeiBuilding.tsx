import React from 'react';
import classNames from 'classnames';

import styles from './styles.module.scss';

function TaipeiBuilding() {
  return (
    <div className={styles.taipei101}>
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
  );
}

export default TaipeiBuilding;
