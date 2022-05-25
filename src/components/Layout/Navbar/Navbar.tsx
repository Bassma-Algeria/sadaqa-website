import React from 'react';
import { BrowserView, MobileView } from 'react-device-detect';

import styles from '../../../../styles/navbar.module.scss';

import { DesktopNavigation } from './DesktopNavigation/DesktopNavigation';
import { MobileNavigation } from './MobileNavigation/MobileNavigation';

const Navbar = () => {
  return (
    <>
      <DesktopNavigation />
      <MobileNavigation />
    </>
  );
};

export { Navbar };
