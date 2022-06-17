import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import classNames from 'classnames/bind';

import styles from './Login.module.scss';

import { useAuthContext } from '../../utils/hooks/useAuthContext';
import { useRightToLeftDetector } from '../../utils/hooks/useRightToLeftDetector';

import PageMetaData from '../../components/common/others/PageMetaData';

import { Layout } from '../../components/Layout/Layout';
import { LoginImageSection } from './components/LoginImageSection';
import { LoginFormSection } from './components/LoginFormSection/LoginFormSection';

const cx = classNames.bind(styles);

const Login: React.FC = () => {
  const { back } = useRouter();
  const { isAuthenticated } = useAuthContext();
  const { rightToLeft } = useRightToLeftDetector();

  useEffect(() => {
    if (isAuthenticated) back();
  }, []);

  return (
    <Layout>
      <PageMetaData title={'Sadaqa صدقة | login'} />

      <div className={cx('login', { rightToLeft })}>
        <LoginImageSection />
        <LoginFormSection />
      </div>
    </Layout>
  );
};

export { Login };
