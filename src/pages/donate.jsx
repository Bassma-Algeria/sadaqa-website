import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import Link from 'next/link';

// styles
import styles from '../styles/createNewAdd.module.scss';

// redux
import { publishNewPost } from '../redux/actions/postsActions';
import { clearErrors } from '../redux/reducers/UISlice';

// components
import Layout from '../components/common/layout/Layout';
import { Container } from '../components/common/containers/Container';
import { SecondaryBackground } from '../components/common/others/SecondaryBackground';
import AccountNotActivePopup from '../components/common/pop-ups/AccountNotActivePopup';
import PageMetaData from '../components/common/others/PageMetaData';
import Inputs from '../components/create_new_ad/Inputs';
import ButtonsContainer from '../components/create_new_ad/ButtonsContainer';
import PostPreview from '../components/create_new_ad/PreviewPost';

export default function Create_new_add() {
  const {
    profileInfo: {
      generalInfo: { wilaya, commun, active },
    },
    isAuthenticated,
  } = useSelector(state => state.authUser);
  const dispatch = useDispatch();

  const router = useRouter();

  const [showPreviewPost, setShowPreviewPost] = useState(false);
  const [uploadedAdId, setUploadedAdId] = useState(false);
  const [newAdInputValues, setNewAdInputValues] = useState({
    typeId: '',
    title: '',
    description: '',
    wilaya,
    commun,
    phoneNum: '',
    category: '',
    ccp: '',
    ccpKey: '',
    rib: '',
    postPhotos: [],
  });

  const handleSubmit = e => {
    e.preventDefault();
    const formData = new FormData();

    for (const [key, value] of Object.entries(newAdInputValues)) {
      if (key !== 'postPhotos') {
        formData.append(key, value);
      } else {
        value.map(doc => {
          formData.append(key, doc, doc.name);
        });
      }
    }

    dispatch(publishNewPost(formData)).then(postId => {
      if (postId) {
        router.prefetch(`/posts/${postId}`);
        setUploadedAdId(postId);
      }
    });
  };

  useEffect(() => {
    if (!isAuthenticated) router.back();

    return () => dispatch(clearErrors());
  }, []);

  return (
    <Layout>
      <PageMetaData title={'Sadaqa صدقة | New Ad'} />

      <SecondaryBackground>
        <Container
          style={{
            background: 'white',
            boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.05)',
            borderTopColor: 'transparent',
            borderBottomColor: 'transparent',
          }}
        >
          {!active && <AccountNotActivePopup />}

          <form onSubmit={handleSubmit} className={styles.container}>
            <h1>Create New Advertisement</h1>

            <p className={styles.note}>
              Note*: Only associations can publish a call for help or family in need. <br />{' '}
              <Link href="/term_of_use">See why.</Link>
            </p>

            <Inputs inputValues={newAdInputValues} setInputValues={setNewAdInputValues} />

            <ButtonsContainer
              setShowPreviewPost={setShowPreviewPost}
              handleSubmit={handleSubmit}
              uploadedAdId={uploadedAdId}
            />
          </form>
        </Container>
      </SecondaryBackground>
      {showPreviewPost && (
        <PostPreview postInfo={newAdInputValues} setShowPreviewPost={setShowPreviewPost} />
      )}
    </Layout>
  );
}
