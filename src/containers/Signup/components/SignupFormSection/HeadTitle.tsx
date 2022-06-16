import React from 'react';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';

import styles from '../../Signup.module.scss';

const HeadTitle: React.FC = () => {
  const { t } = useTranslation(['common', 'signup']);

  return (
    <div className={styles.headTitle}>
      <h1>{t('signup')}</h1>
      <p>
        {t('already-have-account', { ns: 'signup' })} <Link href="/login">{t('login')}</Link>
      </p>
    </div>
  );
};

export { HeadTitle };
