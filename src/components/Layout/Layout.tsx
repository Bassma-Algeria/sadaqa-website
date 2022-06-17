import React from 'react';
import classNames from 'classnames/bind';

import styles from './Layout.module.scss';

import { useRightToLeftDetector } from '../../utils/hooks/useRightToLeftDetector';

import { Navbar } from './Navbar/Navbar';
import { Footer } from './Footer/Footer';
import { Sidebar } from './Sidebar/Sidebar';

const cx = classNames.bind(styles);

interface Props {
  withFooter?: boolean;
  withSidebar?: boolean;
}

const Layout: React.FC<Props> = ({ children, withFooter, withSidebar }) => {
  const { rightToLeft } = useRightToLeftDetector();

  return (
    <>
      <Navbar />

      <div className={cx('main', { rightToLeft })}>
        {withSidebar && <Sidebar />}

        <main className={styles.content}>{children}</main>
      </div>

      {withFooter && <Footer />}
    </>
  );
};

export { Layout };
