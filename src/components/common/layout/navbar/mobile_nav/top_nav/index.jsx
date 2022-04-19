import React, { useState } from 'react';

// styles
import styles from '../../../../../../styles/navbar.module.scss';

// components
import SearchBar from './SearchBar';
import Menu from './side_menu';
import RightIcon from './RightIcon';
import Logo from './Logo';

const TopNav = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <>
      <SearchBar isSearchOpen={isSearchOpen} setIsSearchOpen={setIsSearchOpen} />
      <div className={styles.mobileNav}>
        <Menu />
        <Logo />
        <RightIcon openSearchBar={() => setIsSearchOpen(!isSearchOpen)} />
      </div>
    </>
  );
};

export default TopNav;
