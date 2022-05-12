import React from 'react';

import styles from '../PostsSuggestionsList.module.scss';

import type { IPost } from '../../../../@types/Posts';

import { NoPosts } from '../../NoPosts/NoPosts';
import { PostCard } from '../../PostCard/PostCard';

interface Props {
  posts: IPost[];
}

const PostsList: React.FC<Props> = ({ posts = [] }) => {
  return !posts.length ? (
    <NoPosts containerClass={styles.noPosts} />
  ) : (
    <div className={styles.postsListContainer}>
      {posts.map(post => {
        return <PostCard key={post.postId} {...post} />;
      })}
    </div>
  );
};

export { PostsList };
