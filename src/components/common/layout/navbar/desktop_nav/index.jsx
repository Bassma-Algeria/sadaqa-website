import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

// styles
import styles from '../../../../../styles/navbar.module.scss';

// images and icons
import logo from '../../../../../public/images/sadaqa-logo.png';

// components
import { NavLinks } from './NavLinks';
import SearchBar from './SearchBar';
import LanguageContainer from './LanguageContainer';
import Buttons from './Buttons';
import Image from 'next/image';

const DesktopNavbar = () => {
  const router = useRouter();
  const currentPath = router.asPath;

  const [isSearchBarOpen, setIsSearchBarOpen] = useState(currentPath.includes('search'));

  return (
    <nav className={styles.desktopNav}>
      <LeftSide />
      <RightSide isSearchBarOpen={isSearchBarOpen} setIsSearchBarOpen={setIsSearchBarOpen} />
    </nav>
  );
};

const LeftSide = () => {
  return (
    <div className={styles.logoLanguageContainer}>
      <div className={styles.imgContainer}>
        <Link href="/">
          <Image placeholder="blur" src={logo} alt="logo" />
        </Link>
      </div>
      <LanguageContainer />
    </div>
  );
};

const RightSide = ({ isSearchBarOpen, setIsSearchBarOpen }) => {
  return (
    <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
      <SearchBar isSearchBarOpen={isSearchBarOpen} setIsSearchBarOpen={setIsSearchBarOpen} />
      <div className={styles.navLinksContainer}>
        <NavLinks isSearchBarOpen={isSearchBarOpen} />
        <Buttons />
      </div>
    </div>
  );
};

export default DesktopNavbar;
