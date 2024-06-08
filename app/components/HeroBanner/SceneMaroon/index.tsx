import React from 'react';

import CloudscapeBackground from './CloudscapeBackground';

import styles from './styles.module.scss';

function SceneMaroon() {
  return (
    <div className={styles.field}>
      <div className={styles.scene}>
        <CloudscapeBackground />
      </div>
    </div>
  );
}

export default SceneMaroon;
