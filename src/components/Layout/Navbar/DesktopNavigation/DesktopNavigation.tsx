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
import { useAuthContext } from '../../../../utils/hooks/useAuthContext';

const DesktopNavigation: React.FC = () => {
  const { locale } = useRouter();
  const { isAuthenticated } = useAuthContext();

  const [shouldHideNavigationLinks, setShouldHideNavigationLinks] = useState<boolean>(false);

  const handleSeachBarExpandedStateChange = (isExpanded: boolean) => {
    if (isExpanded) setShouldHideNavigationLinks(true);
    else setShouldHideNavigationLinks(false);
  };

  return (
    <nav className={`${styles.desktopNavbar} ${styles[locale!]}`}>
      <div className={styles.contentContainer}>
        <div>
          <Logo />
          <LanguagesSwitcher />
        </div>

        <div>
          <DesktopSearchBar
            isSearchBarOpen={shouldHideNavigationLinks}
            onSearchBarExpandedStateChange={handleSeachBarExpandedStateChange}
          />

          {!shouldHideNavigationLinks && <NavigationLinks />}

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
    </nav>
  );
};

export { DesktopNavigation };
