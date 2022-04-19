import React from "react";
import { ReactSVG } from "react-svg";
import Link from "next/link";

// styles
import styles from "../../../styles/pop-ups.module.scss";

// images and icons
import closeIcon from "../../../public/svg/close_icon.svg";
import deleteIcon from "../../../public/svg/delete_icon.svg";

// components
import Button from "../buttons/Button";

const ConfirmDeletePopup = ({ setIsPopupOpen, confirmDelete }) => {
  const closePopup = () => setIsPopupOpen(false);

  const handleConfirmDeleteClick = () => {
    confirmDelete();
    setIsPopupOpen(false);
  };

  return (
    <div className={styles.confirmDeletePopup}>
      <div className={styles.overlay} onClick={closePopup} />

      <div className={styles.popupContainer}>
        <button className={styles.closeButton} onClick={closePopup}>
          <ReactSVG src={closeIcon.src} />
        </button>
        <div className={styles.iconContainer}>
          <ReactSVG src={deleteIcon.src} />
        </div>

        <p>Are you sure you wanna delete this ad ?</p>

        <div className={styles.buttonsContainer}>
          <Button
            secondary
            size="sm"
            onClick={closePopup}
            className={styles.secondary}
          >
            Close
          </Button>

          <Button
            primary
            size="sm"
            onClick={handleConfirmDeleteClick}
            className={styles.primary}
          >
            Confirm
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmDeletePopup;
