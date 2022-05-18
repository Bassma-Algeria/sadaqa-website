import React, { useMemo, useState } from 'react';
import { ReactSVG } from 'react-svg';
import { useRouter } from 'next/router';
import classNames from 'classnames/bind';
import { useTranslation } from 'next-i18next';

import styles from '../Navbar.module.scss';

import { ICONS } from '../../../../utils/constants/Icons';

const cx = classNames.bind(styles);

interface Props {
  isExpanded: boolean;
  onSearchIconClick: () => void;
}

const SearchBar: React.FC<Props> = ({ isExpanded, onSearchIconClick }) => {
  const [searchValue, setSearchValue] = useState<string>('');

  const { t } = useTranslation('common');
  const { locale } = useRouter();

  return (
    <div className={cx('searchBar', locale, { isExpanded })}>
      <input
        value={searchValue}
        placeholder={t('search')}
        onChange={e => setSearchValue(e.target.value)}
      />

      <button className={styles.searchIconContainer} onClick={onSearchIconClick}>
        <ReactSVG src={ICONS.SEARCH} />
      </button>
    </div>
  );
};

export { SearchBar };
