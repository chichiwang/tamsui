import React from 'react';
import { Outlet } from 'react-router-dom';

import useResetScroll from 'app/hooks/useResetScroll';

import Nav from './Nav';

import styles from './styles.module.scss';

function Layout() {
  useResetScroll();

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
