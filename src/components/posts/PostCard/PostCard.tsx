import React from 'react';
import { useRouter } from 'next/router';

import type { IPost } from '../../../@types/Posts';

import { BasePostCard } from '../../common/BasePostCard/BasePostCard';
import { postsGateway } from '../../../Gateways';
import { useNeedAuthPopup } from '../../../utils/hooks/Popups/useNeedAuthPopup';
import { useSharePostPopup } from '../../../utils/hooks/Popups/useSharePostPopup';
import { getDefaultPostThumbnail } from '../../../utils/postsHelpers';

interface Props extends IPost {}

const PostCard: React.FC<Props> = props => {
  const router = useRouter();
  const isAuthenticated = false;
  const { NeedAuthPopup, openPopup: openNeedAuthPopup } = useNeedAuthPopup();
  const { SharePopup, openPopup: openSharePopup } = useSharePostPopup(props.postId);

  // ! need to change the routing
  const navigateToTagPage = () => {
    let pageLink: string;

    if (props.type === 'donation') pageLink = '/donations';
    else pageLink = `/people_need_help/${props.type}`;

    router.push(pageLink);
  };

  const isLiked = (): boolean => {
    return true;
  };

  const likePost = async (): Promise<{ success: boolean }> => {
    if (!isAuthenticated) {
      openNeedAuthPopup();
      return { success: false };
    }

    try {
      await postsGateway.likePost('', props.postId);
      return { success: true };
    } catch (error) {
      return { success: false };
    }
  };

  return (
    <>
      <NeedAuthPopup />
      <SharePopup />

      <BasePostCard
        {...props}
        location={props.wilaya}
        postPicture={props.thumbnailLink || getDefaultPostThumbnail(props.type)}
        gridView={props.type == 'donation'}
        tag={props.type.replaceAll('_', ' ')}
        directionReversed={router.locale === 'ar'}
        liked={isLiked()}
        likePost={likePost}
        sharePost={openSharePopup}
        navigateToPostPage={() => router.push(`/posts/${props.postId}`)}
        navigateToTagPage={navigateToTagPage}
      />
    </>
  );
};

export { PostCard };
