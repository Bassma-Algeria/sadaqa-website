import React, { useState } from 'react';

import styles from '../../PostCard.module.scss';

import { useLikeHandler } from './hooks/useLikeHandler';
import { useAuthContext } from '../../../../../utils/hooks/useAuthContext';
import { useNeedAuthPopup } from '../../../../../utils/hooks/Popups/useNeedAuthPopup';

import { AnimatedLikeButton } from './AnimatedLikeButton/AnimatedLikeButton';

interface Props {
  postId: string;
  likesCount: number;
}

const LikeButton: React.FC<Props> = ({ likesCount: count, postId }) => {
  const { isAuthenticated } = useAuthContext();
  const { NeedAuthPopup, openPopup } = useNeedAuthPopup();
  const { isLiked, likePost, likesCount } = useLikeHandler(postId, count);

  const handleClick = async () => {
    if (isAuthenticated) likePost();
    else openPopup();
  };

  return (
    <>
      <NeedAuthPopup />
      <div className={styles.Button} onClick={handleClick}>
        <AnimatedLikeButton liked={isLiked} />
        <p>{likesCount}</p>
      </div>
    </>
  );
};

export { LikeButton };
