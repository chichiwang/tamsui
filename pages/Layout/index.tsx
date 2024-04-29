import React from 'react';

import Nav from './Nav';

import styles from './styles.module.scss';

function Layout({ children }: React.PropsWithChildren) {
  return (
    <section className={styles.page}>
      <Nav />
      <main className={styles.content}>
        {children}
      </main>
    </section>
  );
}

export default Layout;
