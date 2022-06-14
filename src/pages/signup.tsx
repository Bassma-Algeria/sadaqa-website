import React from 'react';
import { GetStaticProps, NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { Signup as SignupPage } from '../containers/Signup/Signup';

const Signup: NextPage = () => {
  return <SignupPage />;
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  if (!locale) return { props: {} };

  const translation = await serverSideTranslations(locale, ['common', 'signup']);

  return { props: { ...translation } };
};

export default Signup;
