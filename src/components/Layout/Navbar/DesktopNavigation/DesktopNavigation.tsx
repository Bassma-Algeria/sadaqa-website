import React, { useState } from 'react';
import { useRouter } from 'next/router';

import styles from '../Navbar.module.scss';

import { Logo } from './Logo';
import { LanguagesSwitcher } from './LanguagesSwitcher/LanguagesSwitcher';
import { DesktopSearchBar } from './DesktopSearchBar';
import { NavigationLinks } from './NavigationLinks/NavigationLinks';
import { AuthenticationButtons } from './AuthenticationButtons';
import { DonateButton } from './DonateButton';
import { Notifications } from './Notifications/Notifications';
import { Profile } from './Profile/Profile';

interface Props {}

const DesktopNavigation: React.FC<Props> = () => {
  const { locale } = useRouter();
  const isAuthenticated = true;

  const [isSearchBarOpen, setIsSearchBarOpen] = useState<boolean>(false);

  return (
    <div className={`${styles.desktopNavbar} ${styles[locale!]}`}>
      <div className={styles.contentContainer}>
        <div>
          <Logo />
          <LanguagesSwitcher />
        </div>

        <div>
          <DesktopSearchBar
            isOpened={isSearchBarOpen}
            openSearchBar={() => setIsSearchBarOpen(true)}
            closeSearchBar={() => setIsSearchBarOpen(false)}
          />

          {!isSearchBarOpen && <NavigationLinks />}

          {!isAuthenticated && <AuthenticationButtons />}
          {isAuthenticated && (
            <>
              <Notifications />
              <Profile />
              <DonateButton />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export { DesktopNavigation };
