import React, { useMemo, useRef } from 'react';
import classNames from 'classnames/bind';

import styles from '../Navbar.module.scss';

import { useOutsideClickListener } from '../../../../utils/hooks/useOutsideClickListener';

import { SearchBar } from '../common/SearchBar';

const cx = classNames.bind(styles);

interface Props {
  onSearchBarExpandedStateChange: (isExpanded: boolean) => void;
  isSearchBarOpen: boolean;
}

const DesktopSearchBar: React.FC<Props> = ({
  onSearchBarExpandedStateChange,
  isSearchBarOpen: isOpened,
}) => {
  const onSubmit = (searchValue: string) => {
    console.log(searchValue);
  };

  return (
    <div className={cx('searchBarContainer', { isOpened })}>
      <SearchBar onStateChange={onSearchBarExpandedStateChange} onSubmit={onSubmit} />
    </div>
  );
};

export { DesktopSearchBar };
