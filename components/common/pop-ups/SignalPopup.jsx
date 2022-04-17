import React, { useState } from "react";
import { ReactSVG } from "react-svg";
import axios from "axios";

// styles
import styles from "../../../styles/pop-ups.module.scss";

// images and icons
import closeIcon from "../../../public/svg/close_icon.svg";
import signalIcon from "../../../public/svg/signal_icon.svg";
import checkMarkIcon from "../../../public/svg/check_mark_icon.svg";

// components
import Button from "../buttons/Button";
import TextAreaInput from "../inputs/TextAreaInput";
import Spinner from "../loaders/Spinner";

const SignalPopup = ({ signalItem, setIsPopupOpen, signalItemLink }) => {
  const [isSignalSent, setIsSignalSent] = useState(false);
  const closePopup = () => setIsPopupOpen(false);

  return (
    <div className={styles.signalPopup}>
      <div className={styles.overlay} onClick={closePopup} />

      <div className={styles.popupContainer}>
        <button className={styles.closeButton} onClick={closePopup}>
          <ReactSVG src={closeIcon.src} />
        </button>

        {!isSignalSent ? (
          <SignalNotSentContainer
            signalItemLink={signalItemLink}
            setIsSignalSent={setIsSignalSent}
            signalItem={signalItem}
          />
        ) : (
          <SignalSentContainer signalItem={signalItem} />
        )}
      </div>
    </div>
  );
};

const SignalNotSentContainer = ({
  signalItemLink,
  signalItem,
  setIsSignalSent,
}) => {
  const [inputValue, setInputValue] = useState({ signalText: "" });
  const [loading, setLoading] = useState(false);

  const handleSendClick = () => {
    setLoading(true);

    sendSignal({
      signalText: inputValue.signalText,
      signalItemLink,
    })
      .then((res) => {
        setIsSignalSent(true);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className={styles.iconContainer}>
        <ReactSVG src={signalIcon.src} />
      </div>

      <p>Please tell us what&apos;s wrong with this {signalItem} ?</p>

      <TextAreaInput
        label=""
        name="signalText"
        type="text"
        placeholder={`Why you wanna signal this ${signalItem} ?`}
        inputValues={inputValue}
        setInputValues={setInputValue}
      />

      <div className={styles.buttonsContainer}>
        <Button
          primary
          size="sm"
          className={styles.primary}
          onClick={handleSendClick}
          disabled={inputValue.signalText === ""}
        >
          {loading ? <Spinner style={{ fontSize: 4, bottom: 9 }} /> : "Send"}
        </Button>
      </div>
    </>
  );
};

const SignalSentContainer = ({ signalItem }) => (
  <div className={styles.signalSentContainer}>
    <div className={styles.iconContainer}>
      <ReactSVG src={checkMarkIcon.src} />
    </div>

    <h1>
      Thanks for telling us about this {signalItem}, our team will remove it if
      necessary
    </h1>
  </div>
);

const sendSignal = async (data) => {
  return axios
    .post("/signal", data)
    .then((res) => true)
    .catch((error) => {
      console.log(error);
      return false;
    });
};

export default SignalPopup;
