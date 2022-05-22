import React, { useState } from 'react';

import styles from '../../../Navbar.module.scss';

import { SearchIcon } from './SearchIcon';
import { MobileSearchBar } from './MobileSearchBar';

const Search: React.FC = () => {
  const [isSearchOpened, setIsSearchOpened] = useState<boolean>(false);

  return (
    <div className={styles.search}>
      <SearchIcon onClick={() => setIsSearchOpened(true)} />

      {isSearchOpened && <MobileSearchBar closeSearchBar={() => setIsSearchOpened(false)} />}
    </div>
  );
};

export { Search };
