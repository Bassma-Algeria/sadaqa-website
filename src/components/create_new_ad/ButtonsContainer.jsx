import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

// styles
import styles from "../../styles/createNewAdd.module.scss";

// containers
import Button from "../common/buttons/Button";
import AdLoadingPopup from "../common/pop-ups/PostLoadingPopup";

const ButtonsContainer = ({
  setShowPreviewPost,
  handleSubmit,
  uploadedAdId,
}) => {
  const { loading, errors } = useSelector((state) => state.UI);
  const [isLoadingPopupOpen, setIsLoadingPopupOpen] = useState(false);
  const router = useRouter();

  const handlePreviewBtnClick = () => setShowPreviewPost(true);

  const handleDiscardBtnClick = () => router.back();

  useEffect(() => {
    if (Object.keys(errors).length > 0) setIsLoadingPopupOpen(false);
    else if (loading) setIsLoadingPopupOpen(true);
  }, [loading, errors]);

  return (
    <div className={styles.btnsContainer}>
      <div className={styles.discardBtn}>
        <Button type="button" size="sm" primary onClick={handleDiscardBtnClick}>
          Discard
        </Button>
      </div>
      <div className={styles.submitPreviewBtns}>
        <Button
          type="button"
          secondary
          size="md"
          onClick={handlePreviewBtnClick}
        >
          Peview
        </Button>
        <Button type="submit" primary size="md" onClick={handleSubmit}>
          Publish
        </Button>
      </div>

      {isLoadingPopupOpen && (
        <AdLoadingPopup
          loading={loading}
          uploadedAdId={uploadedAdId}
          setIsPopupOpen={setIsLoadingPopupOpen}
        />
      )}
    </div>
  );
};

export default ButtonsContainer;
