import React, { useState, useRef, useEffect } from 'react';
import { ReactSVG } from 'react-svg';
import { useRouter } from 'next/router';

// styles
import styles from '../../../../../styles/navbar.module.scss';

// helpers
import { isClickedElementInsideTarget } from '../../../../../utils/navbarHelpers';

// icons
import searchIcon from '../../../../../../public/svg/search_icon.svg';

const SearchBar = ({ isSearchBarOpen, setIsSearchBarOpen }) => {
  const [searchValue, setSearchValue] = useState('');

  const searchInput = useRef(null);
  const router = useRouter();

  const currentPath = router.asPath;

  const handleInputkeyPress = e => {
    if (e.key === 'Enter') {
      if (searchValue !== '') {
        handleSearchIconClick();
      }
    }
  };

  const handleSearchIconClick = () => {
    if (isSearchBarOpen) {
      if (searchValue !== '') {
        router.prefetch(`/search`);
        router.push(`/search?searchPhrase=${searchValue}`);
      }
    } else {
      setTimeout(() => searchInput.current.focus(), 300);
      setIsSearchBarOpen(true);
    }
  };

  useEffect(() => {
    const onWindowClick = e => {
      if (!isClickedElementInsideTarget('searchBarContainer', e.target)) {
        setIsSearchBarOpen(false);
      }
    };
    window.addEventListener('click', onWindowClick);

    if (currentPath.includes('search')) {
      window.removeEventListener('click', onWindowClick);
      setSearchValue(router.query.searchPhrase);
      setIsSearchBarOpen(true);
    }

    return () => window.removeEventListener('click', onWindowClick);
  }, []);

  return (
    <div
      className={`${styles.searchBar} ${isSearchBarOpen ? styles.openSearchBar : ''}`}
      id="searchBarContainer"
    >
      <input
        type="text"
        value={searchValue}
        placeholder="Search..."
        onChange={e => setSearchValue(e.target.value)}
        style={{ width: !isSearchBarOpen && 'none' }}
        onKeyPress={handleInputkeyPress}
        ref={searchInput}
      />
      <button className={styles.iconContainer} onClick={handleSearchIconClick}>
        <ReactSVG className={styles.searchIcon} src={searchIcon.src} />
      </button>
    </div>
  );
};

export default SearchBar;
