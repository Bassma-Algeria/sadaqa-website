import React from 'react';
import { GetStaticProps, NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { PeopleNeedHelp as PeopleNeedHelpPage } from '../../containers/Posts/PeopleNeedHelp/PeopleNeedHelp/PeopleNeedHelp';

const PeopleNeedHelp: NextPage = () => {
  return <PeopleNeedHelpPage />;
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  if (!locale) return { props: {} };

  const translation = await serverSideTranslations(locale, ['common', 'people-need-help']);

  return { props: { ...translation } };
};

export default PeopleNeedHelp;
