import React from 'react';

import CloudscapeForeground from './CloudscapeForeground';

import styles from './styles.module.scss';

function SceneOrange() {
  return (
    <div className={styles.field}>
      <div className={styles.scene}>
        <CloudscapeForeground />
      </div>
    </div>
  );
}

export default SceneOrange;
