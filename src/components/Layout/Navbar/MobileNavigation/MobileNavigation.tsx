import React from 'react';

import styles from '../Navbar.module.scss';

import { useLocaleDetector } from '../../../../utils/hooks/useLocaleDetector';

import { BottomNavigation } from './BottomNavigation/BottomNavigation';
import { MobileNavbar } from './MobileNavbar/MobileNavbar';

interface Props {}

const MobileNavigation: React.FC<Props> = () => {
  const locale = useLocaleDetector();

  return (
    <div className={`${styles.mobileNavigation} ${styles[locale]}`}>
      <MobileNavbar />
      <BottomNavigation />
    </div>
  );
};

export { MobileNavigation };
