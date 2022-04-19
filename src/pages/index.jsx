import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

// styles
import styles from '../styles/home.module.scss';

// redux
import { clearPosts } from '../redux/reducers/postsSlice';

// components
import { Container } from '../components/common/containers/Container';
import { SecondaryBackground } from '../components/common/others/SecondaryBackground';
import Layout from '../components/common/layout/Layout';
import PageMetaData from '../components/common/others/PageMetaData';
import UnauthorizePopup from '../components/common/pop-ups/UnauthorizePopup';
import Hero from '../components/home/Hero';
import PeopleNeedHelp from '../components/home/PeopleNeedHelp';
import Donations from '../components/home/Donations';

export default function Home() {
  const dispatch = useDispatch();

  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    dispatch(clearPosts());
  }, []);

  return (
    <Layout>
      <PageMetaData title={'Sadaqa صدقة'} />

      <Hero setIsPopupOpen={setIsPopupOpen} />
      <SecondaryBackground>
        <Container>
          <PeopleNeedHelp />
          <Donations />
        </Container>
      </SecondaryBackground>
      {isPopupOpen && <UnauthorizePopup action="createNewAd" setIsPopupOpen={setIsPopupOpen} />}
    </Layout>
  );
}
