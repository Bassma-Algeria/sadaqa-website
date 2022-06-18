import React from 'react';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';

import styles from '../../Navbar.module.scss';

const RequestADonation: React.FC = () => {
  const { t } = useTranslation('common');

  return (
    <div className={styles.navigationLinksContainer}>
      <div className={styles.navigationLink}>
        <Link href="/new-post">
          <p>{t('request-a-donation')}</p>
        </Link>
      </div>
    </div>
  );
};

export { RequestADonation };
