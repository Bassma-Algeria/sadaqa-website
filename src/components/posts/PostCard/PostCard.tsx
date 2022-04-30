import React from 'react';
import moment from 'moment';
import Link from 'next/link';
import classNames from 'classnames/bind';

import styles from './PostCard.module.scss';

import { LikeButton } from './components/LikeButton/LikeButton';
import { ShareButton } from './components/ShareButton';

const cx = classNames.bind(styles);

interface Props {
  postLink: string;
  postPicture: string;
  title: string;
  description: string;
  location: string;
  tag: string;
  tagPageLink: string;
  liked: boolean;
  createdAt: string;
  likesCount: number;
  gridView?: boolean;
  likePost: () => Promise<{ success: boolean }>;
  sharePost: () => Promise<{ success: boolean }>;
}

const PostCard: React.FC<Props> = ({ gridView, ...props }) => {
  return (
    <div className={cx('postCard', { gridView })}>
      <Link href={props.postLink}>
        <div className={styles.imageContainer}>
          <img src={props.postPicture} alt="post pic" />
        </div>
      </Link>

      <div className={styles.details}>
        <div className={styles.time}>
          <p>{moment(props.createdAt).fromNow()}</p>
        </div>

        <div className={styles.tag}>
          <Link href={props.tagPageLink}>{props.tag}</Link>
        </div>

        <Link href={props.postLink}>
          <h1>{props.title}</h1>
        </Link>

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

export { PostCard };
