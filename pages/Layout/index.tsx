import React from 'react';

import styles from './styles.module.scss';

function Layout({ children }: React.PropsWithChildren) {
  return (
    <section className={styles.page}>
      <main className={styles.content}>
        {children}
      </main>
    </section>
  );
}

export default Layout;
