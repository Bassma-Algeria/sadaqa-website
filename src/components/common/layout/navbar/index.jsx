import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserView, MobileView } from 'react-device-detect';

// style
import styles from '../../../../styles/navbar.module.scss';

// components
import DesktopNavbar from './desktop_nav';
import MobileNav from './mobile_nav';
import NavMessage from './NavMessage';
import ProgressLoader from './ProgressLoader';
import { DesktopNavigation } from '../../../Layout/Navbar/DesktopNavigation/DesktopNavigation';

const Navbar = () => {
  const {
    isAuthenticated,
    profileInfo: {
      generalInfo: { active },
    },
  } = useSelector(state => state.authUser);

  return (
    <div className={styles.navbar}>
      <BrowserView>
        <DesktopNavigation />
        {/* <DesktopNavbar /> */}
        <MobileNav />
      </BrowserView>

      <MobileView>
        <MobileNav />
      </MobileView>

      <ProgressLoader />

      {!active && isAuthenticated && (
        <NavMessage
          success
          text={"You account is not verified yet, you won't be able to post any ads."}
        />
      )}
    </div>
  );
};

export default Navbar;
