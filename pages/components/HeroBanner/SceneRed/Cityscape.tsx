import React from 'react';
import classNames from 'classnames';

import styles from './styles.module.scss';

function Cityscape() {
  return (
    <>
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
    </>
  );
}

export default Cityscape;
