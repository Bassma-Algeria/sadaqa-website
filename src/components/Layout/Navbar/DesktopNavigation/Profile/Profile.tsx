import React, { useState } from 'react';

import styles from '../../Navbar.module.scss';

import { ProfileAvatar } from './ProfileAvatar';
import { DashboardLinksPopup } from './DashboardLinksPopup';

const Profile: React.FC = () => {
  const [isDashboardLinksPopupOpen, setIsDashboardLinksPopupOpen] = useState<boolean>(false);

  return (
    <div className={styles.profile}>
      <ProfileAvatar onClick={() => setIsDashboardLinksPopupOpen(true)} />

      {isDashboardLinksPopupOpen && (
        <DashboardLinksPopup closePopup={() => setIsDashboardLinksPopupOpen(false)} />
      )}
    </div>
  );
};

export { Profile };
