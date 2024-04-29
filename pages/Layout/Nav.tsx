import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

import styles from './styles.nav.module.scss';

function Nav() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.contents}>
        <div className={classNames(styles.segment, styles.home)}>
          <Link className={styles.menuLink} to="/">
            <img alt="Tamsui logo" className={styles.logo} src="/static/images/logo.webp" />
            <span>Tamsui</span>
          </Link>
        </div>
        <div className={classNames(styles.segment, styles.pages)}>
          <Link className={styles.menuLink} to="/counter">
            Counter
          </Link>
        </div>
        <div className={classNames(styles.segment, styles.social)}>
          <a href="https://github.com/chichiwang/tamsui" rel="noreferrer" target="_blank">
            <img alt="Github logo" className={styles.logo} src="/static/images/github-mark.svg" />
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
