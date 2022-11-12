import React from 'react';
import Head from 'next/head';

// Styles
import styles from './MainLayout.module.css';

// Components
import { Navbar } from '../Navbar';

export const MainLayout = ({ children }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>NextJs - Eliab</title>
        <meta name='description' content='Eliab page' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Navbar />

      <main className={styles.main}>{children}</main>
    </div>
  );
};
