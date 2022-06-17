import React from 'react';
import { useRouter } from 'next/router';

import styles from '../../Navbar.module.scss';

import { Logo } from './Logo';
import { Search } from './Search/Search';
import { SideMenu } from './SideMenu/SideMenu';
import { SettingsAndProfileLinks } from './SettingsAndProfileLinks';

interface Props {}

const MobileNavbar: React.FC<Props> = () => {
  const { pathname } = useRouter();

  const isDashboardPage = pathname.includes('dashboard');

  return (
    <nav className={styles.navbar}>
      <SideMenu />
      <Logo />

      {isDashboardPage ? <SettingsAndProfileLinks /> : <Search />}
    </nav>
  );
};

export { MobileNavbar };
