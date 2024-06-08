import React from 'react';
import classNames from 'classnames';

import TaipeiBuilding from './TaipeiBuilding';

import styles from './styles.cityscape.module.scss';

function Cityscape() {
  return (
    <div className={styles.cityscape}>
      <div className={classNames(styles.cappedBldg, styles.bldg01)} />
      <div className={classNames(styles.flatBldg, styles.bldg01)} />
      <div className={classNames(styles.domedBldg, styles.bldg01)} />
      <div className={classNames(styles.flatBldg, styles.bldg02)} />
      <TaipeiBuilding />
      <div className={styles.cappedBldg} />
      <div className={styles.flatBldg} />
      <div className={classNames(styles.cappedBldg, styles.bldg02)} />
      <div className={styles.domedBldg} />
    </div>
  );
}

export default Cityscape;
