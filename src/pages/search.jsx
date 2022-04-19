import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/router';

// styles
import styles from '../styles/adsPages.module.scss';

// redux
import { getSearchedPosts } from '../redux/actions/postsActions';

// components
import Layout from '../components/common/layout/Layout';
import AdCard from '../components/common/cards/AdCard';
import { Container } from '../components/common/containers/Container';
import { Header } from '../components/common/others/Headers';
import { SecondaryBackground } from '../components/common/others/SecondaryBackground';
import Spinner from '../components/common/loaders/Spinner';
import PageMetaData from '../components/common/others/PageMetaData';
import NoAds from '../components/common/others/NoAds';
import Hr from '../components/posts/Hr';
import Margin from '../components/posts/Margin';

export default function Search() {
  const {
    searchedPosts: { isDataLoaded, data: searchResult },
  } = useSelector(state => state.posts);
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    dispatch(getSearchedPosts(router.query.searchPhrase));
  }, [router.query.searchPhrase]);

  return (
    <Layout navbarWithBoxShadow withSidebar>
      <PageMetaData title={'Sadaqa صدقة'} />

      <SecondaryBackground>
        <Margin style={{ paddingTop: 100 }}>
          <Container>
            <Header>
              Result For{' '}
              <span style={{ textTransform: 'unset' }}>
                &quot;{router.query.searchPhrase}&quot;
              </span>
            </Header>

            <Hr />

            {!isDataLoaded ? (
              <div style={{ height: '70vh', width: '100%' }}>
                <Spinner style={{ fontSize: 12, top: '20vh', color: '#000' }} />
              </div>
            ) : searchResult.length === 0 ? (
              <div style={{ minHeight: '60vh' }}>
                <NoAds styles={styles} message={'no ads found!'} />
              </div>
            ) : (
              <div className={`flex flex-wrap`} style={{ gap: '2%', minHeight: '70vh' }}>
                {searchResult.map((post, index) => {
                  return <AdCard key={index} {...post} subType={post.type} isSearchedPost />;
                })}
              </div>
            )}
          </Container>
        </Margin>
      </SecondaryBackground>
    </Layout>
  );
}
