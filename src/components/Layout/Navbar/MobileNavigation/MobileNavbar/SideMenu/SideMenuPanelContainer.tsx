import React from 'react';
import classNames from 'classnames/bind';

import styles from '../../../Navbar.module.scss';

import { SideMenuPanel } from './SideMenuPanel/SideMenuPanel';

const cx = classNames.bind(styles);

interface Props {
  isOpened: boolean;
  closeSideBar: () => void;
}

const SideMenuPanelContainer: React.FC<Props> = ({ isOpened, closeSideBar }) => {
  return (
    <div className={cx('sideMenuPanelContainer', { isOpened })}>
      <div className={styles.overlay} onClick={closeSideBar} />

      <div className={cx('panelContainer')}>
        <SideMenuPanel />
      </div>
    </div>
  );
};

export { SideMenuPanelContainer };
