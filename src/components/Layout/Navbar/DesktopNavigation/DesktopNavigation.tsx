import React from 'react';
import { useRouter } from 'next/router';

import styles from '../Navbar.module.scss';

import { Logo } from './Logo';
import { LanguagesSwitcher } from './LanguagesSwitcher/LanguagesSwitcher';
import { DesktopSearchBar } from './DesktopSearchBar';
import { NavigationLinks } from './NavigationLinks/NavigationLinks';
import { AuthenticationButtons } from './AuthenticationButtons';

interface Props {}

const DesktopNavigation: React.FC<Props> = () => {
  const { locale } = useRouter();

  return (
    <div className={`${styles.desktopNavbar} ${styles[locale!]}`}>
      <div className={styles.contentContainer}>
        <div>
          <Logo />
          <LanguagesSwitcher />
        </div>

        <div>
          <DesktopSearchBar />
          <NavigationLinks />
          <AuthenticationButtons />

          {/* {!isAuthenticated ? (
          <AuthenticationButtons />
        ) : (
          <>
            <Notifications />
            <Profile />
            <DonateButton />
          </>
        )} */}
        </div>
      </div>
    </div>
  );
};

export { DesktopNavigation };
