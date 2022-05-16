import React, { useState } from 'react';
import { ReactSVG } from 'react-svg';
import { useTranslation } from 'next-i18next';

import { ICONS } from '../../../../utils/constants/Icons';

import styles from '../Navbar.module.scss';

import { SearchBar } from '../common/SearchBar';

const DesktopSearchBar: React.FC = () => {
  return (
    <div className={styles.searchBarContainer}>
      <SearchBar isExpanded={false} />
    </div>
  );
};

export { DesktopSearchBar };
