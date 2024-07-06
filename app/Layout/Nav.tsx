import React from 'react';
import classNames from 'classnames';

import Logo from 'app/components/Logo';
import ExternalLink from 'app/components/ExternalLink';
import InternalLink from 'app/components/InternalLink';

import styles from './styles.module.scss';

function Nav() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.contents}>
        <div className={classNames(styles.segment, styles.home)}>
          <InternalLink className={styles.menuLink} aria-labelledby="Site-Name" to="/">
            <Logo className={styles.logo} height="30px" />
            <span id="Site-Name">Tamsui</span>
          </InternalLink>
        </div>
        <div className={classNames(styles.segment, styles.pages)}>
          <InternalLink className={styles.menuLink} to="/documentation">
            Documentation
          </InternalLink>
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
