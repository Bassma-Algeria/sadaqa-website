import React, { useRef } from 'react';

import { useOutsideClickListener } from '../../../../../../utils/hooks/useOutsideClickListener';
import { SearchBar } from '../../../common/SearchBar';

import styles from '../../../Navbar.module.scss';

interface Props {
  closeSearchBar: () => void;
}

const MobileSearchBar: React.FC<Props> = ({ closeSearchBar }) => {
  const ref = useRef(null);

  useOutsideClickListener(ref, closeSearchBar);

  const handleSubmit = (value: string) => {
    console.log(value);
  };

  return (
    <div ref={ref} className={styles.mobileSearchContainer}>
      <SearchBar onSubmit={handleSubmit} alwaysExpanded />
    </div>
  );
};

export { MobileSearchBar };
