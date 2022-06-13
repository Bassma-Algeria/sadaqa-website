import React from 'react';
import { BrowserView, MobileView } from 'react-device-detect';

import styles from '../../../../styles/navbar.module.scss';

import { DesktopNavigation } from './DesktopNavigation/DesktopNavigation';
import { MobileNavigation } from './MobileNavigation/MobileNavigation';
import { RouteChangingProgressLoader } from './RouteChangingProgressLoader/RouteChangingProgressLoader';

const Navbar = () => {
  return (
    <>
      <DesktopNavigation />
      <MobileNavigation />
      <RouteChangingProgressLoader />
    </>
  );
};

export { Navbar };
