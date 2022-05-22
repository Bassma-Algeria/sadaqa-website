import React from 'react';
import { ReactSVG } from 'react-svg';

import styles from '../../../Navbar.module.scss';

import { ICONS } from '../../../../../../utils/constants/Icons';

interface Props {
  onClick: () => void;
}

const SearchIcon: React.FC<Props> = ({ onClick }) => {
  return (
    <div onClick={onClick} className={styles.searchIconContainer}>
      <ReactSVG src={ICONS.SEARCH} />
    </div>
  );
};

export { SearchIcon };
