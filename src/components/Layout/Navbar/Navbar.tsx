import React from 'react';
import { BrowserView, MobileView } from 'react-device-detect';

// style
import styles from '../../../../styles/navbar.module.scss';

import { DesktopNavigation } from './DesktopNavigation/DesktopNavigation';

// components

const Navbar = () => {
  return (
    <>
      <DesktopNavigation />
    </>
  );
};

export { Navbar };
