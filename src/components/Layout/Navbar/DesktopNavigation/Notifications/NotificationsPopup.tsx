import React, { useRef } from 'react';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';

import styles from '../../Navbar.module.scss';

import { useOutsideClickListener } from '../../../../../utils/hooks/useOutsideClickListener';

interface Props {
  closePopup: () => void;
}

const NotificationsPopup: React.FC<Props> = ({ closePopup }) => {
  const ref = useRef(null);
  const { t } = useTranslation();
  const { locale } = useRouter();

  useOutsideClickListener(ref, () => {
    closePopup();
  });

  return (
    <div ref={ref} className={styles.notificationsPopupContainer}>
      <div className={`${styles.notificationsPopup} ${styles[locale!]}`}>
        <h3>{t('notifications')}</h3>
        <NotificationsPopupBody />
      </div>
    </div>
  );
};

const NotificationsPopupBody: React.FC = () => {
  return <></>;
};

export { NotificationsPopup };
