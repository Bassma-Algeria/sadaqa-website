import React, { useMemo, useState } from 'react';
import { ReactSVG } from 'react-svg';
import classNames from 'classnames/bind';
import { useTranslation } from 'next-i18next';

import { ICONS } from '../../../../utils/constants/Icons';

import styles from '../Navbar.module.scss';
import { useRouter } from 'next/router';

const cx = classNames.bind(styles);

interface Props {
  isExpanded: boolean;
  expandSearchBar: () => void;
}

const SearchBar: React.FC<Props> = ({ isExpanded, expandSearchBar }) => {
  const [searchValue, setSearchValue] = useState<string>('');

  const { t } = useTranslation('common');
  const { locale } = useRouter();

  const handleSearchClick = () => {
    if (!isExpanded) return expandSearchBar();
  };

  return (
    <div className={cx('searchBar', locale, { isExpanded })}>
      <input
        value={searchValue}
        placeholder={t('search')}
        onChange={e => setSearchValue(e.target.value)}
      />

      <button className={styles.searchIconContainer} onClick={handleSearchClick}>
        <ReactSVG src={ICONS.SEARCH} />
      </button>
    </div>
  );
};

export { SearchBar };
