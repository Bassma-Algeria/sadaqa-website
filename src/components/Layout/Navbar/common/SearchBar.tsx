import React, { useEffect, useMemo, useRef, useState } from 'react';
import { ReactSVG } from 'react-svg';
import { useRouter } from 'next/router';
import classNames from 'classnames/bind';
import { useTranslation } from 'next-i18next';

import styles from '../Navbar.module.scss';

import { ICONS } from '../../../../utils/constants/Icons';

import { useOutsideClickListener } from '../../../../utils/hooks/useOutsideClickListener';

const cx = classNames.bind(styles);

interface Props {
  onSubmit: (searchValue: string) => void;
  onStateChange?: (isExapded: boolean) => void;
  alwaysExpanded?: boolean;
}

const SearchBar: React.FC<Props> = ({ alwaysExpanded, onStateChange, onSubmit }) => {
  const { locale } = useRouter();
  const { t } = useTranslation('common');

  const ref = useRef(null);

  const [searchValue, setSearchValue] = useState<string>('');
  const [isExpanded, setIsExpanded] = useState<boolean>(!!alwaysExpanded);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') onSubmit(searchValue);
  };

  const handleSearchIconClick = () => {
    if (!isExpanded) setIsExpanded(true);
    else onSubmit(searchValue);
  };

  useOutsideClickListener(ref, () => {
    if (!alwaysExpanded) setIsExpanded(false);
  });

  useEffect(() => {
    onStateChange?.(isExpanded);
  }, [isExpanded]);

  return (
    <div ref={ref} className={cx('searchBar', locale, { isExpanded })}>
      <input
        value={searchValue}
        onKeyDown={handleKeyDown}
        placeholder={t('search')}
        onChange={e => setSearchValue(e.target.value)}
      />

      <button className={styles.searchIconContainer} onClick={handleSearchIconClick}>
        <ReactSVG src={ICONS.SEARCH} />
      </button>
    </div>
  );
};

export { SearchBar };
