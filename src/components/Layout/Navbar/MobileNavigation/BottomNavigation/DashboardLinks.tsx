import React from 'react';

import { ICONS } from '../../../../../utils/constants/Icons';

import { BottomNavItem } from './BottomNavItem';

const DashboardLinks: React.FC = () => {
  return (
    <>
      <BottomNavItem pageNameKey="home" icon={ICONS.HOME} pageLink="/" />
      <BottomNavItem pageNameKey="messages" icon={ICONS.MESSAGES} pageLink="/dashboard/messages" />
      <BottomNavItem pageNameKey="new-ad" icon={ICONS.NEW_POST} pageLink="/donate" />
      <BottomNavItem pageNameKey="my-ads" icon={ICONS.MY_ADS} pageLink="/dashboard/my_ads" />
      <BottomNavItem
        pageNameKey="dashboard"
        icon={ICONS.DASHBOARD}
        pageLink="/dashboard/activities"
      />
    </>
  );
};

export { DashboardLinks };
