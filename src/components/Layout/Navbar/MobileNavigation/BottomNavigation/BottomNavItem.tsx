import React from 'react';
import Link from 'next/link';
import { ReactSVG } from 'react-svg';
import { useRouter } from 'next/router';
import classNames from 'classnames/bind';
import { useTranslation } from 'next-i18next';

import styles from '../../Navbar.module.scss';

const cx = classNames.bind(styles);

interface Props {
  pageNameKey: string;
  icon: string;
  pageLink: string;
}

const BottomNavItem: React.FC<Props> = ({ icon, pageLink, pageNameKey }) => {
  const { pathname } = useRouter();
  const { t } = useTranslation('common');

  return (
    <Link href={pageLink}>
      <div className={cx('navItem', { active: pathname === pageLink })}>
        <div className={styles.iconContainer}>
          <ReactSVG src={icon} />
        </div>

        <h1>{t(pageNameKey)}</h1>
      </div>
    </Link>
  );
};

export { BottomNavItem };
