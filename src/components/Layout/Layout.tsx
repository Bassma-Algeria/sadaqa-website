import React from 'react';
import classNames from 'classnames/bind';

import styles from './Layout.module.scss';

import { useRightToLeftDetector } from '../../utils/hooks/useRightToLeftDetector';

import { Navbar } from './Navbar/Navbar';
import { Footer } from './Footer/Footer';
import { Sidebar } from './Sidebar/Sidebar';
import { Container } from '../common/Container/Container';

const cx = classNames.bind(styles);

interface Props {
  withFooter?: boolean;
  withSidebar?: boolean;
  withContainer?: boolean;
}

const Layout: React.FC<Props> = ({ children, withFooter, withSidebar, withContainer }) => {
  const { rightToLeft } = useRightToLeftDetector();

  return (
    <>
      <Navbar />

      <div className={cx('main', { rightToLeft })}>
        {withSidebar && <Sidebar />}

        <main className={styles.content}>
          {withContainer && <Container>{children}</Container>}
          {!withContainer && children}
        </main>
      </div>

      {withFooter && <Footer />}
    </>
  );
};

export { Layout };
