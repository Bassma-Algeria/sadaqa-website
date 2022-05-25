import React from 'react';
import { GetStaticProps, NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { Login as LoginPage } from '../containers/Login/Login';

const Login: NextPage = () => {
  return <LoginPage />;
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  if (!locale) return { props: {} };

  const translation = await serverSideTranslations(locale, ['common', 'login']);

  return { props: { ...translation } };
};

export default Login;
