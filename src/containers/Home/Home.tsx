import React from 'react';

import PageMetaData from '../../components/common/others/PageMetaData';

import { Hero } from './components/Hero/Hero';
import { Donations } from './components/Donations';
import { Layout } from '../../components/Layout/Layout';
import { PeopleNeedHelp } from './components/PeopleNeedHelp';
import { Container } from '../../components/common/Container/Container';

const Home: React.FC = () => {
  return (
    <>
      <PageMetaData title={'Sadaqa صدقة'} />

      <Hero />
      <Layout withFooter withContainer>
        <PeopleNeedHelp />
        <Donations />
      </Layout>
    </>
  );
};

export { Home };
