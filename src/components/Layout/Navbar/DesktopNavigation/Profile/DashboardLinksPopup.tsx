import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import React, { useRef } from 'react';
import { useOutsideClickListener } from '../../../../../utils/hooks/useOutsideClickListener';

import styles from '../../Navbar.module.scss';

interface Props {
  closePopup: () => void;
}

const DashboardLinksPopup: React.FC<Props> = ({ closePopup }) => {
  const ref = useRef(null);
  const { t } = useTranslation('common');
  const { locale } = useRouter();

  useOutsideClickListener(ref, closePopup);

  return (
    <div ref={ref} className={styles.dashboardLinksPopupContainer}>
      <div className={`${styles.dashboardLinksPopup} ${styles[locale!]}`}>popup</div>
    </div>
  );
};

export { DashboardLinksPopup };
