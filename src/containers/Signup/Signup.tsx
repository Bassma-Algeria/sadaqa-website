import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import classNames from 'classnames/bind';

import styles from './Signup.module.scss';

import { useAuthContext } from '../../utils/hooks/useAuthContext';
import { useRightToLeftDetector } from '../../utils/hooks/useRightToLeftDetector';

import PageMetaData from '../../components/common/others/PageMetaData';

import { Layout } from '../../components/Layout/Layout';
import { SignupImageSection } from './components/SignupImageSection';
import { SignupFormSection } from './components/SignupFormSection/SignupFormSection';

const cx = classNames.bind(styles);

const Signup: React.FC = () => {
  const { back } = useRouter();
  const { rightToLeft } = useRightToLeftDetector();
  const { isAuthenticated } = useAuthContext();

  useEffect(() => {
    if (isAuthenticated) back();
  }, []);

  return (
    <Layout>
      <PageMetaData title={'Sadaqa صدقة | Signup'} />

      <div className={cx('signup', { rightToLeft })}>
        <SignupImageSection />
        <SignupFormSection />
      </div>
    </Layout>
  );
};

export { Signup };
