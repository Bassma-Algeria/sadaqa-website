import React, { useRef } from 'react';
import classNames from 'classnames/bind';

import styles from '../Navbar.module.scss';

import { SearchBar } from '../common/SearchBar';
import { useOutsideClickListener } from '../../../../utils/hooks/useOutsideClickListener';

const cx = classNames.bind(styles);

interface Props {
  isOpened: boolean;
  openSearchBar: () => void;
  closeSearchBar: () => void;
}

const DesktopSearchBar: React.FC<Props> = ({ isOpened, openSearchBar, closeSearchBar }) => {
  const ref = useRef(null);

  useOutsideClickListener(ref, () => {
    if (isOpened) closeSearchBar();
  });

  return (
    <div ref={ref} className={cx('searchBarContainer', { isOpened })}>
      <SearchBar isExpanded={isOpened} expandSearchBar={openSearchBar} />
    </div>
  );
};

export { DesktopSearchBar };
