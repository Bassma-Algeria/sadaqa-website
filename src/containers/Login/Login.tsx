import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import classNames from 'classnames/bind';

import styles from './Login.module.scss';

import Layout from '../../components/common/layout/Layout';
import PageMetaData from '../../components/common/others/PageMetaData';

import { LoginImageSection } from './components/LoginImageSection';
import { LoginFormSection } from './components/LoginFormSection/LoginFormSection';
import { useRightToLeftDetector } from '../../utils/hooks/useRightToLeftDetector';

const cx = classNames.bind(styles);

const Login: React.FC = () => {
  const isAuthenticated = false;
  const { back } = useRouter();
  const { rightToLeft } = useRightToLeftDetector();

  useEffect(() => {
    if (isAuthenticated) back();
  }, []);

  return (
    <Layout withoutFooter>
      <PageMetaData title={'Sadaqa صدقة | login'} />

      <div className={cx('login', { rightToLeft })}>
        <LoginImageSection />
        <LoginFormSection />
      </div>
    </Layout>
  );
};

export { Login };
