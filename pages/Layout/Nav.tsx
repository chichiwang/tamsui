import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

import Logo from 'app/components/Logo';
import ExternalLink from 'app/components/ExternalLink';

import styles from './styles.nav.module.scss';

function Nav() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.contents}>
        <div className={classNames(styles.segment, styles.home)}>
          <Link className={styles.menuLink} to="/">
            <Logo className={styles.logo} height="30px" />
            <span>Tamsui</span>
          </Link>
        </div>
        <div className={classNames(styles.segment, styles.pages)}>
          <Link className={styles.menuLink} to="/documentation">
            Documentation
          </Link>
        </div>
        <div className={classNames(styles.segment, styles.social)}>
          <ExternalLink href="https://github.com/chichiwang/tamsui">
            <img alt="Github logo" className={styles.logo} src="/static/images/github-mark.svg" />
          </ExternalLink>
        </div>
      </div>
      <div className={styles.accentBarContainer}>
        <div className={classNames(styles.accentBar, styles.slowSlide)} />
      </div>
    </nav>
  );
}

export default Nav;
