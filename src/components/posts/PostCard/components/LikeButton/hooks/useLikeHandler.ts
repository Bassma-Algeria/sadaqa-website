import { useState } from 'react';

import { SOUNDS } from '../../../../../../utils/constants/Sounds';

const checkIsLiked = (postId: string): boolean => {
  return postId === '';
};

const useLikeHandler = (postId: string, initialLikesCount: number) => {
  const [isLiked, setIsLiked] = useState<boolean>(checkIsLiked(postId));
  const [likesCount, setLikesCount] = useState<number>(initialLikesCount);

  const likePost = async () => {
    try {
      // await postsGateway.likePost(postId);

      const likeSound = new Audio(SOUNDS.LIKE);
      likeSound.play();

      setLikesCount(isLiked ? likesCount - 1 : likesCount + 1);
      setIsLiked(!isLiked);
    } catch (e) {}
  };

  return { isLiked, likePost, likesCount };
};

export { useLikeHandler };
