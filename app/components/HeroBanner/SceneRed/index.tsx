import React from 'react';

import styles from './styles.module.scss';

import Cityscape from './Cityscape';
import MountainRange from './MountainRange';

function SceneRed() {
  return (
    <div className={styles.field}>
      <div className={styles.scene}>
        <Cityscape />
        <MountainRange />
      </div>
    </div>
  );
}

export default SceneRed;
