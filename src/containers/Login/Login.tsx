import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

import styles from './Login.module.scss';

import Layout from '../../components/common/layout/Layout';
import PageMetaData from '../../components/common/others/PageMetaData';

import { LoginImageSection } from './components/LoginImageSection';
import { LoginFormSection } from './components/LoginFormSection/LoginFormSection';

const Login: React.FC = () => {
  const isAuthenticated = false;
  const { locale, back } = useRouter();

  useEffect(() => {
    if (isAuthenticated) back();
  }, []);

  return (
    <Layout withoutFooter>
      <PageMetaData title={'Sadaqa صدقة | login'} />

      <div className={`${styles.login} ${styles[locale!]}`}>
        <LoginImageSection />
        <LoginFormSection />
      </div>
    </Layout>
  );
};

export { Login };
