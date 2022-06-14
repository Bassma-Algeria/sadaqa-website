import React from 'react';
import { useRouter } from 'next/router';

import styles from '../../Navbar.module.scss';

import { useAuthContext } from '../../../../../utils/hooks/useAuthContext';

import { AuthUserLinks } from './AuthUserLinks';
import { NotAuthUserLinks } from './NotAuthUserLinks';
import { DashboardLinks } from './DashboardLinks';

interface Props {}

const BottomNavigation: React.FC<Props> = () => {
  const { pathname } = useRouter();
  const { isAuthenticated } = useAuthContext();

  const showDashboardLink = shouldShowDasboardLinks(pathname);

  return (
    <div className={styles.bottomNavigation}>
      {!isAuthenticated && !showDashboardLink && <NotAuthUserLinks />}
      {isAuthenticated && !showDashboardLink && <AuthUserLinks />}
      {isAuthenticated && showDashboardLink && <DashboardLinks />}
    </div>
  );
};

const shouldShowDasboardLinks = (pathname: string): boolean => {
  return (
    pathname.includes('dashboard') &&
    !pathname.includes('notifications') &&
    !pathname.includes('messages')
  );
};

export { BottomNavigation };
