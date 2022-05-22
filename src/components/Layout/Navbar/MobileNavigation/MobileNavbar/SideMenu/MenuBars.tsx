import React from 'react';

import styles from '../../../Navbar.module.scss';

interface Props {
  onClick: () => void;
}

const MenuBars: React.FC<Props> = ({ onClick }) => {
  return (
    <div className={styles.menuBars} onClick={onClick}>
      <span />
      <span />
      <span />
    </div>
  );
};

export { MenuBars };
