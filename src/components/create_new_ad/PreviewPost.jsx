import React from 'react';
import { useSelector } from 'react-redux';
import { ReactSVG } from 'react-svg';

// styles
import styles from '../../styles/createNewAdd.module.scss';

// images and icons
import closeIcon from '../../../public/svg/close_icon.svg';

// helpers
import { convertTypeIdToText } from '../../utils/createNewAdHelpers';

// components
import AdCard from '../common/cards/AdCard';
import PostPageProfileCard from '../common/cards/user_card/UserCard';
import { Container } from '../common/containers/Container';
import { SecondaryBackground } from '../common/others/SecondaryBackground';
import PostDetailsContainer from '../posts/PostDetailsContainer';

const PostPreview = ({ postInfo, setShowPreviewPost }) => {
  const {
    profileInfo: { generalInfo, profilePic, socialAccounts },
  } = useSelector(state => state.authUser);

  const publisher = {
    userInfo: generalInfo,
    userProfilePic: profilePic,
    userSocialLinks: socialAccounts,
  };
  const postPhotos = postInfo.postPhotos.map(photo => ({
    link: URL.createObjectURL(photo),
  }));

  postInfo.type = convertTypeIdToText(postInfo.typeId);
  postInfo.active = true;
  postInfo.created_at = new Date().toISOString();
  postInfo.thumbnail_link = postPhotos[0] && postPhotos[0].link;
  postInfo.wilaya = postInfo.wilaya.replace(/\d|-/g, '').trim();
  postInfo.ccp_key = postInfo.ccpKey;

  return (
    <>
      <div className={styles.overlay} onClick={() => setShowPreviewPost(false)}>
        <div className={styles.closeBtn}>
          <ReactSVG src={closeIcon.src} />
        </div>
      </div>
      <SecondaryBackground className={styles.postPreviewContainer}>
        <Container>
          <div className={styles.topContainer}>
            <PostDetailsContainer
              postInfo={postInfo}
              publisher={publisher}
              postPhotos={postPhotos}
            />
            <PostPageProfileCard {...publisher} style={{ top: 0 }} />
          </div>
          <h1 className="mt-20 font-semibold" style={{ fontSize: 28 }}>
            Cards Preview
          </h1>
          <AdCard {...postInfo} />
          <AdCard {...postInfo} isGrid />
        </Container>
      </SecondaryBackground>
    </>
  );
};

export default PostPreview;
