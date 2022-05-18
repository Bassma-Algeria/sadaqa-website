import React from 'react';
import { useTranslation } from 'next-i18next';

import styles from '../Navbar.module.scss';

import { Button } from '../../../common/Button/Button';
import Link from 'next/link';

const AuthenticationButtons: React.FC = () => {
  const { t } = useTranslation('common');

  return (
    <div className={styles.actionButtonsContainer}>
      <Link href={'/signup'}>
        <Button variant="secondary" size="sm">
          {t('signup')}
        </Button>
      </Link>

      <Link href={'/login'}>
        <Button variant="primary" size="sm">
          {t('login')}
        </Button>
      </Link>
    </div>
  );
};

export { AuthenticationButtons };
