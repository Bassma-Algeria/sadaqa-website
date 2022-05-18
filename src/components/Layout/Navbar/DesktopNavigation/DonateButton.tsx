import React from 'react';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';

import styles from '../Navbar.module.scss';

import { Button } from '../../../common/Button/Button';

const DonateButton: React.FC = () => {
  const { t } = useTranslation('common');

  return (
    <Link href="/donate">
      <div className={styles.actionButtonsContainer}>
        <Button variant="primary" size="sm">
          {t('donate')}
        </Button>
      </div>
    </Link>
  );
};

export { DonateButton };
