import React, { useRef } from 'react';
import { ReactSVG } from 'react-svg';
import { useDispatch } from 'react-redux';

// styles
import styles from '../../../styles/pop-ups.module.scss';

// images and icons
import closeIcon from '../../../../public/svg/close_icon.svg';
import shareIcon from '../../../../public/svg/popup_share_icon.svg';

// redux
import { sharePost } from '../../../redux/actions/postsActions';

const SharePopup = ({ postLink, setIsSharePopupOpen }) => {
  const dispatch = useDispatch();
  const postLinkRef = useRef(null);

  const closeSharePopup = () => setIsSharePopupOpen(false);

  const handleCopyClick = () => {
    const selection = window.getSelection();

    const range = document.createRange();
    range.selectNodeContents(postLinkRef.current);

    selection.removeAllRanges();
    selection.addRange(range);

    navigator.clipboard.writeText(postLinkRef.current.textContent);

    const postId = getPostIdFromPostPageLink(postLink);
    dispatch(sharePost(postId));
  };

  return (
    <div className={styles.sharePopup}>
      <div className={styles.overlay} onClick={closeSharePopup} />

      <div className={styles.popupContainer}>
        <button className={styles.closeButton} onClick={closeSharePopup}>
          <ReactSVG src={closeIcon.src} />
        </button>

        <div className={styles.iconContainer}>
          <ReactSVG src={shareIcon.src} />
        </div>

        <p>Copy the link bellow and share it with your connections</p>

        <div className={styles.linkContainer}>
          <p ref={postLinkRef}>{postLink}</p>
          <button onClick={handleCopyClick}>Copy</button>
        </div>
      </div>
    </div>
  );
};

const getPostIdFromPostPageLink = pageLink => {
  return Number(pageLink.split('/')[pageLink.split('/').length - 1]);
};

export default SharePopup;
