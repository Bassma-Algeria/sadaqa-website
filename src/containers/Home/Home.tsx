import React from 'react';

// styles
import styles from './Home.module.scss';

// components
import { Container } from '../../components/common/containers/Container';
import { SecondaryBackground } from '../../components/common/others/SecondaryBackground';
// import Layout from '../../components/common/layout/Layout';
import PageMetaData from '../../components/common/others/PageMetaData';

import { Hero } from './components/Hero/Hero';
import { PeopleNeedHelp } from './components/PeopleNeedHelp/PeopleNeedHelp';
import { Donations } from './components/Donations/Donations';
import { Layout } from '../../components/Layout/Layout';

const Home: React.FC = () => {
  return (
    <Layout withFooter withSidebar>
      <PageMetaData title={'Sadaqa صدقة'} />

      {/* <Hero /> */}
      {/* <SecondaryBackground> */}
      <Container>
        <PeopleNeedHelp />
        <Donations />
      </Container>
      {/* </SecondaryBackground> */}
    </Layout>
  );
};

export { Home };
