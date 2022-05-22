import React from 'react';

import styles from '../../Navbar.module.scss';

import { Logo } from './Logo';
import { Search } from './Search/Search';
import { SideMenu } from './SideMenu/SideMenu';

interface Props {}

const MobileNavbar: React.FC<Props> = () => {
  return (
    <div className={styles.navbar}>
      <SideMenu />
      <Logo />
      <Search />
    </div>
  );
};

export { MobileNavbar };
