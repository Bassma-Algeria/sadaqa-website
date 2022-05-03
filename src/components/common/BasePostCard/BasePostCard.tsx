import React from 'react';
import moment from 'moment';
import classNames from 'classnames/bind';

import styles from './BasePostCard.module.scss';

import { LikeButton } from './components/LikeButton/LikeButton';
import { ShareButton } from './components/ShareButton';

const cx = classNames.bind(styles);

interface Props {
  postPicture: string;
  title: string;
  description: string;
  location: string;
  tag: string;
  liked: boolean;
  createdAt: string;
  likesCount: number;
  gridView?: boolean;
  directionReversed?: boolean;
  navigateToPostPage: () => void;
  navigateToTagPage: () => void;
  likePost: () => Promise<{ success: boolean }>;
  sharePost: () => void;
}

const BasePostCard: React.FC<Props> = ({ gridView, directionReversed, ...props }) => {
  return (
    <div className={cx('postCard', { gridView, directionReversed })}>
      <div className={styles.imageContainer} onClick={props.navigateToPostPage}>
        <img src={props.postPicture} alt="post pic" />
      </div>

      <div className={styles.details}>
        <div className={styles.time}>
          <p>{moment(props.createdAt).fromNow()}</p>
        </div>

        <div className={styles.tag} onClick={props.navigateToTagPage}>
          <p>{props.tag}</p>
        </div>

        <div onClick={props.navigateToPostPage}>
          <h1>{props.title}</h1>
        </div>

        <div className={styles.adress}>
          <p style={{ textTransform: 'capitalize' }}>{props.location}</p>
        </div>

        <p className={styles.desc}>{props.description}</p>

        <div className={styles.buttonsContainer}>
          <LikeButton likesCount={props.likesCount} likePost={props.likePost} liked={props.liked} />
          <ShareButton sharePost={props.sharePost} />
        </div>
      </div>
    </div>
  );
};

export { BasePostCard };
