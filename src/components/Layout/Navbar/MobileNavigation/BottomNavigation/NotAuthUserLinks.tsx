import React from 'react';

import { ICONS } from '../../../../../utils/constants/Icons';

import { BottomNavItem } from './BottomNavItem';

const NotAuthUserLinks: React.FC = () => {
  return (
    <>
      <BottomNavItem pageNameKey="home" icon={ICONS.HOME} pageLink="/" />
      <BottomNavItem pageNameKey="login" icon={ICONS.LOGIN} pageLink="/login" />
      <BottomNavItem pageNameKey="signup" icon={ICONS.SIGNUP} pageLink="/signup" />
    </>
  );
};

export { NotAuthUserLinks };
