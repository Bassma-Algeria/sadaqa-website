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
}

const SearchBar: React.FC<Props> = ({ isExpanded }) => {
  const [searchValue, setSearchValue] = useState('');

  const { t } = useTranslation('common');
  const { locale } = useRouter();

  return (
    <div className={cx('searchBar', locale, { isExpanded })}>
      <input
        value={searchValue}
        placeholder={t('search')}
        onChange={e => setSearchValue(e.target.value)}
      />

      <button className={styles.searchIconContainer}>
        <ReactSVG src={ICONS.SEARCH} />
      </button>
    </div>
  );
};

export { SearchBar };
