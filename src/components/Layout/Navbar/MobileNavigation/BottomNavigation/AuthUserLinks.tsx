import React from 'react';

import { ICONS } from '../../../../../utils/constants/Icons';

import { BottomNavItem } from './BottomNavItem';

const AuthUserLinks: React.FC = () => {
  return (
    <>
      <BottomNavItem pageNameKey="home" icon={ICONS.HOME} pageLink="/" />
      <BottomNavItem pageNameKey="messages" icon={ICONS.MESSAGES} pageLink="/dashboard/messages" />
      <BottomNavItem pageNameKey="new-adv" icon={ICONS.NEW_POST} pageLink="/donate" />
      <BottomNavItem
        pageNameKey="notifications"
        icon={ICONS.NOTIFICATIONS_2}
        pageLink="/dashboard/notifications"
      />
      <BottomNavItem
        pageNameKey="dashboard"
        icon={ICONS.DASHBOARD}
        pageLink="/dashboard/activities"
      />
    </>
  );
};

export { AuthUserLinks };
