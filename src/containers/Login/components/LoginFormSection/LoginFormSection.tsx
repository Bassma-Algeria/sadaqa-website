import React from 'react';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';

import styles from '../../Login.module.scss';

import { LoginForm } from './LoginForm';

const LoginFormSection: React.FC = () => {
  const { t } = useTranslation(['common', 'login']);

  return (
    <section className={styles.loginFormSection}>
      <h1>{t('login')}</h1>

      <LoginForm />

      <p>
        {t('do-not-have-account', { ns: 'login' })} <Link href="/signup">{t('signup')}</Link>
      </p>
    </section>
  );
};

export { LoginFormSection };
