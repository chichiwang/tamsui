import React from 'react';
import classNames from 'classnames';

import TaipeiBuilding from './TaipeiBuilding';

import styles from './styles.module.scss';

function Cityscape() {
  return (
    <>
      <TaipeiBuilding />
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
