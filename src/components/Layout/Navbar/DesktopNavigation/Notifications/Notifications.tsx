import React, { useState } from 'react';

import styles from '../../Navbar.module.scss';

import { NotificationsIcon } from './NotificationsIcon';
import { NotificationsPopup } from './NotificationsPopup';

const Notifications: React.FC = () => {
  const [isNotificationPopupOpen, setIsNotificationPopupOpen] = useState<boolean>(false);

  return (
    <div className={styles.notifications}>
      <NotificationsIcon onClick={() => setIsNotificationPopupOpen(true)} />

      {isNotificationPopupOpen && (
        <NotificationsPopup closePopup={() => setIsNotificationPopupOpen(false)} />
      )}
    </div>
  );
};

export { Notifications };
