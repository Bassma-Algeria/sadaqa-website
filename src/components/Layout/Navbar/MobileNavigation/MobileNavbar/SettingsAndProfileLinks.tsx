import React from 'react';
import Link from 'next/link';
import { ReactSVG } from 'react-svg';

import styles from '../../Navbar.module.scss';

import { ICONS } from '../../../../../utils/constants/Icons';
import { IMAGES } from '../../../../../utils/constants/Images';

import { Avatar } from '../../../../common/Avatar/Avatar';

const SettingsAndProfileLinks: React.FC = () => {
  return (
    <div className={styles.settingsAndProfileLinks}>
      <Link href="/dashbaord/settings">
        <div className={styles.settingsIconContainer}>
          <ReactSVG src={ICONS.SETTINGS} />
        </div>
      </Link>

      <Link href="/dashboard/profile">
        <Avatar image={IMAGES.DEFAULT_PROFILE_PIC.src} size={28} />
      </Link>
    </div>
  );
};

export { SettingsAndProfileLinks };
