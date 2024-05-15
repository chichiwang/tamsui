import React from 'react';

import styles from './styles.module.scss';

import Cityscape from './Cityscape';

function SceneRed() {
  return (
    <div className={styles.field}>
      <div className={styles.scene}>
        <Cityscape />
      </div>
    </div>
  );
}

export default SceneRed;
