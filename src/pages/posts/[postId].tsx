import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

// styles
import styles from '../../styles/postPage.module.scss';

// redux
import { getPost } from '../../redux/actions/postsActions';
import { clearSinglePost } from '../../redux/reducers/singlePostSlice';

// components
import Layout from '../../components/common/layout/Layout';
import { SecondaryBackground } from '../../components/common/others/SecondaryBackground';
import { Container } from '../../components/common/containers/Container';
import Spinner from '../../components/common/loaders/Spinner';
import PostDetailsContainer from '../../components/posts/PostDetailsContainer';
import UserCard from '../../components/common/cards/user_card/UserCard';
import PageMetaData from '../../components/common/others/PageMetaData';
import Tags from '../../components/posts/Tags';
import SimilarAds from '../../components/posts/SimilarAds';
import Margin from '../../components/posts/Margin';

export default function PostPage({ postId }) {
  const {
    isDataLoaded,
    post: { postInfo, publisher, postPhotos },
  } = useSelector(state => state.singlePost);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPost(postId));

    return () => dispatch(clearSinglePost());
  }, [postId]);

  return (
    <Layout withSidebar navbarWithBoxShadow>
      <PageMetaData title={'Sadaqa صدقة'} />

      <SecondaryBackground>
        <Margin>
          <Container>
            {!isDataLoaded ? (
              <div style={{ height: '70vh', width: '100%' }}>
                <Spinner style={{ fontSize: 12, top: '20vh', color: '#000' }} />
              </div>
            ) : (
              <>
                <Tags
                  title={postInfo.title}
                  postId={postId}
                  type={postInfo.type === 'donation' ? 'donations' : 'people_need_help'}
                  subType={postInfo.type === 'donation' ? postInfo.category : postInfo.type}
                />
                <div className={styles.container}>
                  <PostDetailsContainer
                    postInfo={postInfo}
                    publisher={publisher}
                    postPhotos={postPhotos}
                  />
                  <UserCard {...publisher} />
                </div>

                <SimilarAds postInfo={postInfo} />
              </>
            )}
          </Container>
        </Margin>
      </SecondaryBackground>
    </Layout>
  );
}

export async function getStaticPaths() {
  const {
    data: { data: postsIds },
  } = await axios.get('/posts/getPostsIds');
  const paths = postsIds.map(({ post_id }) => {
    return {
      params: { postId: post_id.toString() },
    };
  });

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params: { postId } }) {
  return { props: { postId } };
}
