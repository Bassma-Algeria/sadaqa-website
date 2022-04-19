import React from "react";
import { ReactSVG } from "react-svg";
import Link from "next/link";

// styles
import styles from "../../../styles/pop-ups.module.scss";

// images and icons
import checkMarkIcon from "../../../public/svg/check_mark_icon.svg";
import closeIcon from "../../../public/svg/close_icon.svg";

// components
import { AdLoadingSpinner } from "../loaders/AdLoadingSpinner";
import Button from "../buttons/Button";

const AdLoadingPopup = ({ loading, uploadedAdId, setIsPopupOpen }) => {
  return (
    <div className={styles.postLoadingPopup}>
      <div className={styles.overlay} />

      <div className={styles.popupContainer}>
        {loading ? (
          <AdNotUploadedYet />
        ) : (
          <AdUploaded
            uploadedAdId={uploadedAdId}
            setIsPopupOpen={setIsPopupOpen}
          />
        )}
      </div>
    </div>
  );
};

const AdNotUploadedYet = () => (
  <>
    <h1>
      Your ad is being uploaded, this may take some seconds please wait...
    </h1>
    <AdLoadingSpinner />
  </>
);

const AdUploaded = ({ uploadedAdId, setIsPopupOpen }) => (
  <>
    <button
      className={styles.closeButton}
      onClick={() => setIsPopupOpen(false)}
    >
      <ReactSVG src={closeIcon.src} />
    </button>

    <div className={styles.iconContainer} style={{}}>
      <ReactSVG src={checkMarkIcon.src} />
    </div>

    <h1>Your ad is published successfully.</h1>

    <div className={styles.buttonsContainer}>
      <Button
        secondary
        size="sm"
        onClick={() => setIsPopupOpen(false)}
        className={styles.secondary}
      >
        Close
      </Button>
      <Link href={`/posts/${uploadedAdId}`}>
        <Button primary size="sm" className={styles.primary}>
          See Ad
        </Button>
      </Link>
    </div>
  </>
);

export default AdLoadingPopup;
