import React from 'react';

import ExternalLink from 'app/components/ExternalLink';

import styles from './styles.module.scss';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.divider} />
      <p>
        {'Created by '}
        <ExternalLink href="https://github.com/chichiwang">
          Chi-chi Wang
        </ExternalLink>
      </p>
    </footer>
  );
}

export default Footer;
