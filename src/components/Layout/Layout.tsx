import React from 'react';

import styles from './Layout.module.scss';

import { Navbar } from './Navbar/Navbar';
import { Footer } from './Footer/Footer';

interface Props {
  noFooter?: boolean;
}

const Layout: React.FC<Props> = ({ children, noFooter }) => {
  return (
    <>
      <Navbar />

      <main className={styles.content}>{children}</main>

      {!noFooter && <Footer />}
    </>
  );
};

export { Layout };
