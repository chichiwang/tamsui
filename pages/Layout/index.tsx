import React from 'react';
import { Outlet } from 'react-router-dom';

import Nav from './Nav';

import styles from './styles.module.scss';

function Layout() {
  return (
    <section className={styles.page}>
      <Nav />
      <main className={styles.content}>
        <Outlet />
      </main>
    </section>
  );
}

export default Layout;
