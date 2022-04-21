import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// styles
import styles from '../../../styles/cards.module.scss';

// sounds
import sound from '../../../../public/media/like_sound.mp3';

// helpers
import { checkIfPostLiked } from '../../../utils/postsHelpers';

// redux
import { likePost } from '../../../redux/actions/postsActions';

// components
import { AnimatedLikeButton } from './AnimatedLikeButton';
import UnauthorizePopup from '../pop-ups/UnauthorizePopup';

const LikeButton = ({
  postId,
  likesCount,
  type,
  subType,
  isDashboardPage,
  isSearchedPost,
  isAuthUserPost,
}) => {
  const [isUnautorizePopupOpen, setIsUnautorizePopupOpen] = useState(false);

  const { likes, isAuthenticated } = useSelector(state => state.authUser);
  const dispatch = useDispatch();

  const isPostLiked = checkIfPostLiked(likes, postId);
  const likeSound = new Audio(sound);

  const handleLikeClick = () => {
    if (!isAuthenticated) {
      setIsUnautorizePopupOpen(true);
      return;
    }
    dispatch(
      likePost(postId, likesCount, isPostLiked, type, subType, isSearchedPost, isAuthUserPost),
    ).then(res => {
      likeSound.play();
    });
  };

  return (
    <>
      {isUnautorizePopupOpen && (
        <UnauthorizePopup action="like" setIsPopupOpen={setIsUnautorizePopupOpen} />
      )}
      <div className={styles.Button} onClick={handleLikeClick}>
        <AnimatedLikeButton isPostLiked={isPostLiked} />
        {isDashboardPage && <p>{likesCount}</p>}
      </div>
    </>
  );
};

export default LikeButton;
