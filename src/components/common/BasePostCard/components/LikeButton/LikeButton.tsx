import React, { useState } from 'react';

import styles from '../../BasePostCard.module.scss';

import { SOUNDS } from '../../../../../utils/constants/Sounds';

import { AnimatedLikeButton } from './AnimatedLikeButton/AnimatedLikeButton';

interface Props {
  liked: boolean;
  likesCount: number;
  likePost: () => Promise<{ success: boolean }>;
}

const LikeButton: React.FC<Props> = ({ likePost, likesCount: count, liked }) => {
  const [isLiked, setIsLiked] = useState<boolean>(liked);
  const [likesCount, setLikesCount] = useState<number>(count);

  const handleClick = async () => {
    const { success } = await likePost();
    if (!success) return;

    const likeSound = new Audio(SOUNDS.LIKE);
    likeSound.play();

    setLikesCount(isLiked ? likesCount - 1 : likesCount + 1);
    setIsLiked(!isLiked);
  };

  return (
    <div className={styles.Button} onClick={handleClick}>
      <AnimatedLikeButton liked={isLiked} />
      <p>{likesCount}</p>
    </div>
  );
};

export { LikeButton };
