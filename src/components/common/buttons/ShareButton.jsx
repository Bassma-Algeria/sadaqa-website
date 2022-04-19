import React, { useState } from "react";
import { ReactSVG } from "react-svg";
import { isMobile } from "react-device-detect";

// styles
import styles from "../../../styles/cards.module.scss";

// icons
import shareIcon from "../../../public/svg/share_icon.svg";

// components
import SharePopup from "../pop-ups/SharePopup";

const ShareButton = ({ isDashboardPage, sharesCount, postLink }) => {
  const [isSharePopupOpen, setIsSharePopupOpen] = useState(false);

  const handleClick = () => {
    if (isMobile && navigator.share) {
      navigator.share({
        title: "Check this ad",
        text: "Check this",
        url: postLink,
      });
    } else {
      setIsSharePopupOpen(true);
    }
  };

  return (
    <>
      {isSharePopupOpen && (
        <SharePopup
          postLink={postLink}
          setIsSharePopupOpen={setIsSharePopupOpen}
        />
      )}
      <div className={styles.Button} onClick={handleClick}>
        <ReactSVG src={shareIcon.src} />
        {isDashboardPage && <p>{sharesCount}</p>}
      </div>
    </>
  );
};

export default ShareButton;
