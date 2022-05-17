import React from 'react';
import { useTranslation } from 'next-i18next';

import styles from '../Navbar.module.scss';

import { Button } from '../../../common/Button/Button';

const AuthenticationButtons: React.FC = () => {
  const { t } = useTranslation('common');

  return (
    <div className={styles.authButtonContainer}>
      <Button variant="secondary" size="sm">
        {t('signup')}
      </Button>
      <Button variant="primary" size="sm">
        {t('login')}
      </Button>
    </div>
  );
};

export { AuthenticationButtons };
