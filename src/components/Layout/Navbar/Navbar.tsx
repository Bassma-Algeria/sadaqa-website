import React from 'react';

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
