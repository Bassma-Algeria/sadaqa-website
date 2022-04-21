import React, { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import { ReactSVG } from 'react-svg';

// styles
import styles from '../../../../../../styles/navbar.module.scss';

// images and icons
import searchIcon from '../../../../../../../public/svg/search_icon.svg';

const SearchBar = ({ isSearchOpen, setIsSearchOpen }) => {
  const [searchValue, setSearchValue] = useState('');

  const searchInput = useRef(null);
  const router = useRouter();

  const handleInputkeyPress = e => {
    if (e.key === 'Enter' && searchValue !== '') {
      handleSearchIconClick();
    }
  };

  const handleSearchIconClick = () => {
    if (searchValue !== '') {
      router.prefetch(`/search`);
      router.push(`/search?searchPhrase=${searchValue}`);
    }
  };

  useEffect(() => {
    if (router.asPath.includes('search')) {
      setSearchValue(router.query.searchPhrase);
      setIsSearchOpen(true);
    }
  }, []);

  if (isSearchOpen) searchInput.current.focus();

  return (
    <div className={`${styles.searchBarContainer} ${isSearchOpen ? styles.open : ''}`}>
      <div className={styles.searchBar}>
        <input
          type="text"
          value={searchValue}
          placeholder="Search..."
          onChange={e => setSearchValue(e.target.value)}
          onKeyPress={handleInputkeyPress}
          ref={searchInput}
        />
        <button className={styles.iconContainer} onClick={handleSearchIconClick}>
          <ReactSVG className={styles.searchIcon} src={searchIcon.src} />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
