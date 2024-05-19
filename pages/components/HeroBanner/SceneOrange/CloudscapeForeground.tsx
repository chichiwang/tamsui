import React from 'react';
import classNames from 'classnames';

import styles from './styles.cloudscapeforeground.module.scss';

function CloudscapeForeground() {
  return (
    <div className={classNames(styles.cloudscape, styles.float)}>

      <div className={classNames(styles.container, styles.offscreen)}>
        <div className={styles.cloud01}>
          <div className={styles.c01} />
        </div>

        <div className={styles.cloud02}>
          <div className={styles.c01} />
          <div className={styles.c02} />
          <div className={styles.c03} />
          <div className={styles.c04} />
        </div>

        <div className={classNames(styles.cloud01, styles.pos01)}>
          <div className={styles.c01} />
        </div>

        <div className={styles.cloud03}>
          <div className={styles.c01} />
          <div className={styles.c02} />
          <div className={styles.c03} />
        </div>

        <div className={classNames(styles.cloud01, styles.pos02)}>
          <div className={styles.c01} />
        </div>

        <div className={classNames(styles.cloud03, styles.pos01)}>
          <div className={styles.c01} />
          <div className={styles.c02} />
          <div className={styles.c03} />
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.cloud01}>
          <div className={styles.c01} />
        </div>

        <div className={styles.cloud02}>
          <div className={styles.c01} />
          <div className={styles.c02} />
          <div className={styles.c03} />
          <div className={styles.c04} />
        </div>

        <div className={classNames(styles.cloud01, styles.pos01)}>
          <div className={styles.c01} />
        </div>

        <div className={styles.cloud03}>
          <div className={styles.c01} />
          <div className={styles.c02} />
          <div className={styles.c03} />
        </div>

        <div className={classNames(styles.cloud01, styles.pos02)}>
          <div className={styles.c01} />
        </div>

        <div className={classNames(styles.cloud03, styles.pos01)}>
          <div className={styles.c01} />
          <div className={styles.c02} />
          <div className={styles.c03} />
        </div>
      </div>

    </div>
  );
}

export default CloudscapeForeground;
