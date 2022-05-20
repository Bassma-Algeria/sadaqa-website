import React from 'react';
import { BrowserView, MobileView } from 'react-device-detect';

import styles from '../../../../styles/navbar.module.scss';

import { DesktopNavigation } from './DesktopNavigation/DesktopNavigation';


const Navbar = () => {
  return (
    <>
      <DesktopNavigation />
    </>
  );
};

export { Navbar };
