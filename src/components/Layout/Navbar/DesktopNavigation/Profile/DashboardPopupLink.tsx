import React from 'react';
import { ReactSVG } from 'react-svg';

import styles from '../../Navbar.module.scss';

interface Props {
  title: string;
  icon: string;
  onClick: () => void;
}

const DashboardPopupLink: React.FC<Props> = ({ title, icon, onClick }) => {
  return (
    <div className={styles.dashboardLink} onClick={onClick}>
      <div className={styles.iconContainer}>
        <ReactSVG src={icon} />
      </div>

      <h4 className={styles.title}>{title}</h4>
    </div>
  );
};

export { DashboardPopupLink };
