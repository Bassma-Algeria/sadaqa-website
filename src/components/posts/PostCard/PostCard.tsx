import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import classNames from 'classnames/bind';
import { useTranslation } from 'next-i18next';

import styles from './PostCard.module.scss';

import { Post } from '../../../core/CoreGateways/PostsGateway/PostsGateway.types';

import { IMAGES } from '../../../utils/constants/Images';

import { useRightToLeftDetector } from '../../../utils/hooks/useRightToLeftDetector';

import { ShareButton } from './components/ShareButton';
import { LikeButton } from './components/LikeButton/LikeButton';
import Image from 'next/image';

const cx = classNames.bind(styles);

interface Props extends Post {
  gridView?: boolean;
}

const PostCard: React.FC<Props> = ({ gridView, ...props }) => {
  const { push } = useRouter();
  const { t } = useTranslation('common');
  const { rightToLeft } = useRightToLeftDetector();

  const navigateToTagPage = () => {
    let pageLink: string;

    if (props.type === 'donation') pageLink = '/donations';
    else pageLink = `/people-need-help/${props.type}`;

    push(pageLink);
  };

  return (
    <div className={cx('postCard', { gridView, rightToLeft })}>
      <Link href={`/posts/${props.postId}`}>
        <div className={styles.imageContainer}>
          {props.pictures[0] ? (
            <img src={props.pictures[0]} alt="post pic" />
          ) : (
            <Image src={IMAGES.NO_IMAGE} />
          )}
        </div>
      </Link>

      <div className={styles.details}>
        <div className={styles.time}>
          <p>{props.timeAgo}</p>
        </div>

        <div className={styles.tag} onClick={navigateToTagPage}>
          <p>{t(props.type)}</p>
        </div>

        <Link href={`/posts/${props.postId}`}>
          <h1>{props.title}</h1>
        </Link>

        <div className={styles.adress}>
          <p>{props.wilaya}</p>
        </div>

        <p className={styles.desc}>{props.description}</p>

        <div className={styles.buttonsContainer}>
          <LikeButton postId={props.postId} likesCount={props.likesCount} />
          <ShareButton postId={props.postId} />
        </div>
      </div>
    </div>
  );
};

export { PostCard };
