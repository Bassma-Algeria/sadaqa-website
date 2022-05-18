import React from 'react';
import { ReactSVG } from 'react-svg';

import styles from '../../Navbar.module.scss';

import { ICONS } from '../../../../../utils/constants/Icons';

interface Props {
  onClick: () => void;
}

const NotificationsIcon: React.FC<Props> = ({ onClick }) => {
  return (
    <div className={styles.notificationIconContainer} onClick={onClick}>
      <ReactSVG src={ICONS.NOTIFICATIONS} />
    </div>
  );
};

export { NotificationsIcon };
