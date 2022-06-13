import React, { useState } from 'react';

import styles from '../../BasePostCard.module.scss';

import { SOUNDS } from '../../../../../utils/constants/Sounds';

import { AnimatedLikeButton } from './AnimatedLikeButton/AnimatedLikeButton';

interface Props {
  liked: boolean;
  likesCount: number;
  likePost: () => Promise<{ success: boolean }>;
}

const likeSound = new Audio(SOUNDS.LIKE);

const LikeButton: React.FC<Props> = ({ likePost, likesCount: count, liked }) => {
  const [likesCount, setLikesCount] = useState<number>(count);

  const handleClick = async () => {
    const { success } = await likePost();
    if (!success) return;

    likeSound.play();

    setLikesCount(liked ? likesCount - 1 : likesCount + 1);
  };

  return (
    <div className={styles.Button} onClick={handleClick}>
      <AnimatedLikeButton liked={liked} />
      <p>{likesCount}</p>
    </div>
  );
};

export { LikeButton };
