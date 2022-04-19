import React from 'react';
import moment from 'moment';
import Slider from 'react-slick';

// styles
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from '../../styles/postPage.module.scss';

// componenents
import { Ribbon } from '../common/others/Ribbon';
import { ActionMenuDots } from '../common/others/ActionsMenu';

// helpers
import { getAvailabiltyText, getDefaultPostThumbnail } from '../../utils/postsHelpers';
import { postPageSliderSetting } from '../../utils/slidersSettings';
import { getPostInformationData } from '../../data/postsData';
import Image from 'next/image';

const PostDetailsContainer = ({ postInfo, postPhotos, publisher: { userInfo } }) => {
  const status = getAvailabiltyText(postInfo.type, postInfo.active);
  const adInfo = getPostInformationData({ ...postInfo, ...userInfo, status });

  return (
    <div className={styles.postDetailsContainer}>
      {!postInfo.active && (
        <Ribbon className={styles.ribbon}>
          <p>{status}</p>
        </Ribbon>
      )}

      <div className={styles.postHeader}>
        <Title title={postInfo.title} postStatus={status} createdAd={postInfo.created_at} />
        <ActionMenuDots
          element="Ad"
          elementLink={`${process.env.NEXT_PUBLIC_BASE_FRONT_URL}/posts/${postInfo.post_id}`}
          menuPosition="left"
        />
      </div>

      <PostPics postPhotos={postPhotos} postType={postInfo.type} />

      <div className={styles.postInfo} style={{ paddingTop: postPhotos.length > 1 && 100 }}>
        <Description desc={postInfo.description} />
        <AdInfo adInfo={adInfo} />
      </div>
    </div>
  );
};

const Title = ({ title, postStatus, createdAd }) => {
  return (
    <div>
      <h1>{title}</h1>
      <div className={styles.availablityAndDate}>
        <p>{postStatus}</p>
        <p className={styles.pointSeperator}>.</p>
        <p>Published on : {moment(createdAd).format('MMMM Do, YYYY')}</p>
      </div>
    </div>
  );
};

const PostPics = ({ postPhotos, postType }) => {
  const paggingFunction = i => {
    return (
      <a>
        <Image
          height={80}
          width={150}
          objectFit="cover"
          src={postPhotos.length !== 0 && postPhotos[i].link}
          alt="post pic"
        />
      </a>
    );
  };

  return (
    <div className={styles.postPics}>
      <Slider {...postPageSliderSetting} customPaging={paggingFunction}>
        {postPhotos.length === 0 ? (
          <PostPic link={getDefaultPostThumbnail(postType)} />
        ) : (
          postPhotos.map((photo, index) => <PostPic link={photo.link} key={index} />)
        )}
      </Slider>
    </div>
  );
};

const PostPic = ({ link }) => {
  return (
    <div>
      <div className={styles.imgContainer} style={{ backgroundImage: `url(${link})` }}>
        <Image layout="fill" src={link} alt="post pic" />
      </div>
    </div>
  );
};

const Description = ({ desc }) => {
  return (
    <div className={styles.desc}>
      <h1>Description :</h1>
      <p>{desc}</p>
    </div>
  );
};

const AdInfo = ({ adInfo }) => (
  <div className={styles.addInfo}>
    <h1>Ad Information</h1>

    {adInfo.map(
      (info, index) =>
        info.content && (
          <AdInfoItem
            key={index}
            header={info.header}
            content={info.content}
            style={
              index >= adInfo.length - 2 && {
                borderBottom: 'unset',
              }
            }
          />
        ),
    )}
  </div>
);

const AdInfoItem = ({ header, content, style }) => (
  <div className={styles.postSingleInfo} style={{ ...style }}>
    <h3 className={styles.header}>{header} :</h3>
    <h3 className={styles.content}>{content}</h3>
  </div>
);

export default PostDetailsContainer;
