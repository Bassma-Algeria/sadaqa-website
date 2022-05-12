import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

// styles
import styles from './Home.module.scss';

// redux
import { clearPosts } from '../../redux/reducers/postsSlice';

// components
import { Container } from '../../components/common/containers/Container';
import { SecondaryBackground } from '../../components/common/others/SecondaryBackground';
import Layout from '../../components/common/layout/Layout';
import PageMetaData from '../../components/common/others/PageMetaData';
import { Hero } from './components/Hero/Hero';
import { PeopleNeedHelp } from './components/PeopleNeedHelp/PeopleNeedHelp';

import Donations from '../../components/Home/Donations';

const Home: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearPosts());
  }, []);

  return (
    <Layout {...({} as any)}>
      <PageMetaData title={'Sadaqa صدقة'} />

      <Hero />
      <SecondaryBackground>
        <Container>
          <PeopleNeedHelp />
          <Donations />
        </Container>
      </SecondaryBackground>
    </Layout>
  );
};

export { Home };
