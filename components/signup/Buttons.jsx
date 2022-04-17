import React from "react";
import { useSelector } from "react-redux";
import { ReactSVG } from "react-svg";

// style
import styles from "../../styles/signup.module.scss";

// icons and images
import backArrow from "../../public/svg/back_arrow.svg";

// components
import Button from "../common/buttons/Button";
import Spinner from "../common/loaders/Spinner";

const Buttons = ({ initializeState, roleId, handleSubmit }) => {
  const { loading } = useSelector((state) => state.UI);

  return (
    <div className={styles.submitBtnContainer}>
      {roleId && (
        <>
          <div className={styles.backArrow} onClick={initializeState}>
            <ReactSVG src={backArrow.src} />
          </div>
          <Button
            type="button"
            secondary
            size="md"
            onClick={initializeState}
            style={{ height: 52, width: 150, marginBottom: 80 }}
          >
            Back
          </Button>
          <Button
            type="submit"
            primary
            size="md"
            onClick={handleSubmit}
            style={{ height: 52, width: 150, marginBottom: 80 }}
          >
            {loading ? <Spinner /> : "Submit"}
          </Button>
        </>
      )}
    </div>
  );
};

export default Buttons;
