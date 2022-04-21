import React from 'react';
import Link from 'next/link';
import { ReactSVG } from 'react-svg';

// styles
import styles from '../../../../../styles/dashboard.module.scss';

// images and icons
import rightArrow from '../../../../../../public/svg/right_arrow_nav_links.svg';

const SettingItem = ({ title, link, icon }) => {
  return (
    <Link href={link}>
      <div className={styles.settingItem}>
        <div className={styles.title}>
          <ReactSVG className={styles.iconContainer} src={icon} />
          <p>{title}</p>
        </div>
        <ReactSVG src={rightArrow.src} className={styles.arrowIconContainer} />
      </div>
    </Link>
  );
};

export default SettingItem;
