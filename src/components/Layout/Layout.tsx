import React from 'react';
import { Footer } from './Footer/Footer';

import { Navbar } from './Navbar/Navbar';

interface Props {
  noFooter?: boolean;
}

const Layout: React.FC<Props> = ({ children, noFooter }) => {
  return (
    <>
      <Navbar />

      <main>{children}</main>

      {!noFooter && <Footer />}
    </>
  );
};

export { Layout };
