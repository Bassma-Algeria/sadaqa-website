import React from 'react';
import { useRouter } from 'next/router';

import type { IPost } from '../../../@types/Posts';

import { BasePostCard } from '../../common/BasePostCard/BasePostCard';

interface Props extends IPost {}

const PostCard: React.FC<Props> = props => {
  const router = useRouter();

  const navigateToPostPage = () => {
    router.push(`/posts/${props.postId}`);
  };

  const navigateToTagPage = () => {
    let pageLink: string;

    if (props.type === 'donation') pageLink = '/donations';
    else pageLink = `/people_need_help/${props.type}`;

    router.push(pageLink);
  };

  const isLiked = (): boolean => {
    return true;
  };

  return (
    <BasePostCard
      {...props}
      location={props.wilaya}
      postPicture={props.thumbnailLink}
      gridView={props.type == 'donation'}
      tag={props.type.replaceAll('_', ' ')}
      directionReversed={router.locale === 'ar'}
      liked={isLiked()}
      likePost={() => Promise.resolve({ success: true })}
      sharePost={() => Promise.resolve({ success: true })}
      navigateToPostPage={navigateToPostPage}
      navigateToTagPage={navigateToTagPage}
    />
  );
};

export default PostCard;
