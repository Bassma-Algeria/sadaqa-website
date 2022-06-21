import React from 'react';
import classNames from 'classnames/bind';

import styles from './PostDetailsWithPublisherCard.module.scss';

import { useRightToLeftDetector } from '../../../utils/hooks/useRightToLeftDetector';

import { UserCard } from '../../Users/UserCard';
import { PostDetails } from '../PostDetails/PostDetails';

const cx = classNames.bind(styles);

interface Props {
  postDetails: React.ComponentProps<typeof PostDetails>;
  publisherDetails: React.ComponentProps<typeof UserCard>;
}

const PostDetailsWithPublisherCard: React.FC<Props> = ({ postDetails, publisherDetails }) => {
  const { rightToLeft } = useRightToLeftDetector();

  return (
    <div className={cx('container', { rightToLeft })}>
      <div className={styles.postDetailsContainer}>
        <PostDetails {...postDetails} />
      </div>
      <div className={styles.userCardContainer}>
        <UserCard {...publisherDetails} />
      </div>
    </div>
  );
};

export { PostDetailsWithPublisherCard };
