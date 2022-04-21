import React from 'react';
import { ReactSVG } from 'react-svg';
import Link from 'next/link';

// styles
import styles from '../../../styles/pop-ups.module.scss';

// images and icons
import checkMarkIcon from '../../../../public/svg/check_mark_icon.svg';
import closeIcon from '../../../../public/svg/close_icon.svg';

// components
import { AdLoadingSpinner } from '../loaders/AdLoadingSpinner';

const EditInfoLoadingPopup = ({ loading, setIsPopupOpen }) => {
  return (
    <div className={styles.editInfoLoadingPopup}>
      <div className={styles.overlay} />

      <div className={styles.popupContainer}>
        {loading ? <NewInfoNotUploadedYet /> : <NewInfoUploaded setIsPopupOpen={setIsPopupOpen} />}
      </div>
    </div>
  );
};

const NewInfoNotUploadedYet = () => (
  <>
    <h1>We&apos;re changing your informations, this may take some seconds please wait...</h1>
    <AdLoadingSpinner />
  </>
);

const NewInfoUploaded = ({ setIsPopupOpen }) => (
  <>
    <button className={styles.closeButton} onClick={() => setIsPopupOpen(false)}>
      <ReactSVG src={closeIcon.src} />
    </button>

    <div className={styles.iconContainer} style={{}}>
      <ReactSVG src={checkMarkIcon.src} />
    </div>

    <h1>Your information changed successfully.</h1>
  </>
);

export default EditInfoLoadingPopup;
