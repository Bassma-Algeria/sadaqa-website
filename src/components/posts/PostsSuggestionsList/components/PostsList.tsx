import React from 'react';

import styles from '../PostsSuggestionsList.module.scss';

import type { IPost } from '../../../../@types/Posts';

import AdCard from '../../../common/cards/AdCard';
import { NoPosts } from '../../NoPosts/NoPosts';

interface Props {
  posts: IPost[];
}

const PostsList: React.FC<Props> = ({ posts = [] }) => {
  return !posts.length ? (
    <NoPosts containerClass={styles.noPosts} />
  ) : (
    <div className={styles.postsListContainer}>
      {posts.map(post => {
        return <AdCard key={post.postId} {...post} subType={'donation_request'} />;
      })}
    </div>
  );
};

export { PostsList };
