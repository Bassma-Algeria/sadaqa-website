import React from "react";
import { ReactSVG } from "react-svg";
import { useRouter } from "next/router";

// styles
import styles from "../../../styles/pop-ups.module.scss";

// images and icons
import errorIcon from "../../../public/svg/error_icon.svg";

// components
import Button from "../buttons/Button";

const AccountNotActivePopup = () => {
  const router = useRouter();

  return (
    <div className={styles.accountNotActivePopup}>
      <div className={styles.overlay} />

      <div className={styles.popupContainer}>
        <div className={styles.iconContainer}>
          <ReactSVG src={errorIcon.src} />
        </div>

        <p>
          Sorry, your account is not verified yet you can&apos;t publish any
          ads.
        </p>

        <div className={styles.buttonsContainer}>
          <Button
            primary
            size="sm"
            onClick={() => router.back()}
            className={styles.primary}
          >
            Return
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AccountNotActivePopup;
