import {FC, ReactNode} from 'react';

// Next
import Head from 'next/head';

// Components
import { Navbar } from '../Navbar';

// Styles
import styles from './MainLayout.module.css';


interface IProps {
  children: ReactNode
}

export const MainLayout: FC<IProps> = ({ children }) => {
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
