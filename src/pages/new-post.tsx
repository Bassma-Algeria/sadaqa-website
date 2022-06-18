// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { useRouter } from 'next/router';
// import Link from 'next/link';

// // styles
// import styles from '../styles/createNewAdd.module.scss';

// // redux
// import { publishNewPost } from '../redux/actions/postsActions';
// import { clearErrors } from '../redux/reducers/UISlice';

// // components
// import Layout from '../components/common/layout/Layout';
// import { Container } from '../components/common/containers/Container';
// import { SecondaryBackground } from '../components/common/others/SecondaryBackground';
// import AccountNotActivePopup from '../components/common/pop-ups/AccountNotActivePopup';
// import PageMetaData from '../components/common/others/PageMetaData';
// import Inputs from '../components/create_new_ad/Inputs';
// import ButtonsContainer from '../components/create_new_ad/ButtonsContainer';
// import PostPreview from '../components/create_new_ad/PreviewPost';

// export default function Create_new_add() {
//   const {
//     profileInfo: {
//       generalInfo: { wilaya, active },
//     },
//   } = useSelector(state => state.authUser);
//   const dispatch = useDispatch();

//   const [showPreviewPost, setShowPreviewPost] = useState(false);
//   const [uploadedAdId, setUploadedAdId] = useState(false);
//   const [newAdInputValues, setNewAdInputValues] = useState({
//     typeId: '',
//     title: '',
//     description: '',
//     wilaya,
//     commun: '',
//     phoneNum: '',
//     category: '',
//     ccp: '',
//     ccpKey: '',
//     rib: '',
//     postPhotos: [],
//   });

//   const handleSubmit = e => {
//     e.preventDefault();
//     const formData = new FormData();

//     for (const [key, value] of Object.entries(newAdInputValues)) {
//       if (key !== 'postPhotos') {
//         formData.append(key, value);
//       } else {
//         value.map(doc => {
//           formData.append(key, doc, doc.name);
//         });
//       }
//     }

//     dispatch(publishNewPost(formData)).then(postId => {
//       if (postId) {
//         router.prefetch(`/posts/${postId}`);
//         setUploadedAdId(postId);
//       }
//     });
//   };

//   return (
//       {!active && <AccountNotActivePopup />}

//       <form onSubmit={handleSubmit} className={styles.container}>
//          <Inputs inputValues={newAdInputValues} setInputValues={setNewAdInputValues} />

//          <ButtonsContainer
//            setShowPreviewPost={setShowPreviewPost}
//            handleSubmit={handleSubmit}
//            uploadedAdId={uploadedAdId}
//          />
//        </form>

//       {showPreviewPost && (
//         <PostPreview postInfo={newAdInputValues} setShowPreviewPost={setShowPreviewPost} />
//       )}
//   );
// }

import React from 'react';
import { GetStaticProps, NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { NewPost as NewPostPage } from '../containers/NewPost/NewPost';

const NewPost: NextPage = () => {
  return <NewPostPage />;
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  if (!locale) return { props: {} };

  const translation = await serverSideTranslations(locale, ['common', 'new-post']);

  return { props: { ...translation } };
};

export default NewPost;
