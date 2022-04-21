import React from 'react';
import { ReactSVG } from 'react-svg';
import Link from 'next/link';

// styles
import styles from '../../../styles/pop-ups.module.scss';

// images and icons
import closeIcon from '../../../../public/svg/close_icon.svg';
import errorIcon from '../../../../public/svg/error_icon.svg';

// components
import Button from '../buttons/Button';

const UnauthorizePopup = ({ action, setIsPopupOpen }) => {
  const closePopup = () => setIsPopupOpen(false);

  const actionText = getActionText(action);

  return (
    <div className={styles.unauthorizePopup}>
      <div className={styles.overlay} onClick={closePopup} />

      <div className={styles.popupContainer}>
        <button className={styles.closeButton} onClick={closePopup}>
          <ReactSVG src={closeIcon.src} />
        </button>
        <div className={styles.iconContainer}>
          <ReactSVG src={errorIcon.src} />
        </div>

        <p>You must be logged in to {actionText}.</p>

        <div className={styles.buttonsContainer}>
          <Link href="/signup">
            <Button secondary size="sm" className={styles.secondary}>
              Sign up
            </Button>
          </Link>
          <Link href="/login">
            <Button primary size="sm" className={styles.primary}>
              Login
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

const getActionText = action => {
  switch (action) {
    case 'like':
      return 'like this ad';
      break;

    case 'sendMessage':
      return 'be able to send messages';
      break;

    case 'createNewAd':
      return 'be able to publish new ads';
      break;

    default:
      break;
  }
};

export default UnauthorizePopup;
