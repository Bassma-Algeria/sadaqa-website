import React, { useRef } from 'react';
import Link from 'next/link';
import { ReactSVG } from 'react-svg';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';

import styles from '../../Navbar.module.scss';

import { IMAGES } from '../../../../../utils/constants/Images';

import { useOutsideClickListener } from '../../../../../utils/hooks/useOutsideClickListener';

import { ICONS } from '../../../../../utils/constants/Icons';

import { Avatar } from '../../../../common/Avatar/Avatar';
import { DashboardPopupLink } from './DashboardPopupLink';

interface Props {
  closePopup: () => void;
}

const DashboardLinksPopup: React.FC<Props> = ({ closePopup }) => {
  const ref = useRef(null);
  const { locale, push } = useRouter();
  const { t } = useTranslation('common');

  useOutsideClickListener(ref, () => {
    closePopup();
  });

  return (
    <div ref={ref} className={styles.dashboardLinksPopupContainer}>
      <div className={`${styles.dashboardLinksPopup} ${styles[locale!]}`}>
        <Header />

        <DashboardLinksPopupSeparator />

        <DashboardPopupLink
          title={t('messages')}
          icon={ICONS.MESSAGES}
          onClick={() => push('/dashboard/messages')}
        />
        <DashboardPopupLink
          title={t('dashboard')}
          icon={ICONS.DASHBOARD}
          onClick={() => push('/dashboard/activities')}
        />

        <DashboardLinksPopupSeparator />

        <DashboardPopupLink
          title={t('profile-information')}
          icon={ICONS.EDIT_PROFILE}
          onClick={() => push('/dashboard/settings/public_info')}
        />

        <DashboardLinksPopupSeparator />

        <DashboardPopupLink
          title={t('logout')}
          icon={ICONS.LOGOUT}
          onClick={() => console.log('logout')}
        />
      </div>
    </div>
  );
};

const Header: React.FC = () => {
  return (
    <div className={styles.header}>
      <div className={styles.profileImage}>
        <Avatar image={IMAGES.DEFAULT_PROFILE_PIC.src} size={45} />
      </div>

      <Link href="/dashboard/profile">
        <div className={styles.profileLink}>
          <h4>Yasser</h4>
          <ReactSVG src={ICONS.RIGHT_ARROW_2} />
        </div>
      </Link>
    </div>
  );
};

const DashboardLinksPopupSeparator: React.FC = () => <div className={styles.separator} />;

export { DashboardLinksPopup };
