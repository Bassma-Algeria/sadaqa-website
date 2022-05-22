import React, { useState } from 'react';

import styles from '../../../Navbar.module.scss';

import { MenuBars } from './MenuBars';
import { SideMenuPanelContainer } from './SideMenuPanelContainer';

const SideMenu: React.FC = () => {
  const [isSideMenuOpened, setIsSideMenuOpened] = useState<boolean>(false);

  return (
    <div className={styles.sideMenu}>
      <MenuBars onClick={() => setIsSideMenuOpened(true)} />

      <SideMenuPanelContainer
        isOpened={isSideMenuOpened}
        closeSideBar={() => setIsSideMenuOpened(false)}
      />
    </div>
  );
};

export { SideMenu };
