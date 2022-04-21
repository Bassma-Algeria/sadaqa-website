import React from 'react';
import { ReactSVG } from 'react-svg';

// images and components
import noNotificationsIcon from '../../../../public/svg/no-notification.svg';

const NoNotifications = ({ styles }) => {
  return (
    <div className={styles.noNotifications}>
      <ReactSVG src={noNotificationsIcon.src} />
      <h1>you didn&apos;t have any notifications yet.</h1>
    </div>
  );
};

export default NoNotifications;
