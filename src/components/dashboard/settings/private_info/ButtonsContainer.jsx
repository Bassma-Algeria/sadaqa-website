import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

// styles
import styles from "../../../../styles/dashboard.module.scss";

// components
import Button from "../../../common/buttons/Button";
import EditInfoLoadingPopup from "../../../common/pop-ups/EditInfoLoadingPopup";

const ButtonsContainer = ({ handleDiscard, handleSubmit, inputValues }) => {
  const { loading, errors } = useSelector((state) => state.UI);
  const [isLoadingPopupOpen, setIsLoadingPopupOpen] = useState(false);

  useEffect(() => {
    if (Object.keys(errors).length > 0) setIsLoadingPopupOpen(false);
    else if (loading) setIsLoadingPopupOpen(true);
  }, [loading, errors]);

  return (
    <>
      <div className={styles.actionButtons}>
        <Button
          type="button"
          className={styles.discardButton}
          size="md"
          primary
          onClick={handleDiscard}
          disabled={!inputValues.oldPassword}
        >
          Discard
        </Button>

        <Button
          type="submit"
          size="md"
          primary
          onClick={handleSubmit}
          style={{ width: 214, height: 52 }}
        >
          Save Changes
        </Button>
      </div>
      {isLoadingPopupOpen && (
        <EditInfoLoadingPopup
          loading={loading}
          setIsPopupOpen={setIsLoadingPopupOpen}
        />
      )}
    </>
  );
};

export default ButtonsContainer;
