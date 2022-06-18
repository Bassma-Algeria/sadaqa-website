import React from 'react';

import PageMetaData from '../../components/common/others/PageMetaData';

import { Hero } from './components/Hero/Hero';
import { Layout } from '../../components/Layout/Layout';
import { Donations } from './components/Donations/Donations';
import { Container } from '../../components/common/Container/Container';
import { PeopleNeedHelp } from './components/PeopleNeedHelp/PeopleNeedHelp';

const Home: React.FC = () => {
  return (
    <>
      <PageMetaData title={'Sadaqa صدقة'} />

      <Hero />

      <Layout withFooter>
        <Container>
          <PeopleNeedHelp />
          <Donations />
        </Container>
      </Layout>
    </>
  );
};

export { Home };
