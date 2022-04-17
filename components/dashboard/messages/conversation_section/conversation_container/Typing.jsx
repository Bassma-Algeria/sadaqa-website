import React from "react";
import { useSelector } from "react-redux";

// styles
import styles from "../../../../../styles/dashboard.module.scss";

// helpers
import { getProfilePic } from "../../../../../utils/usersHelpers";

// components
import Spinner from "../../../../common/loaders/Spinner";

const Typing = () => {
  const {
    conversation: {
      chatParticipant: {
        chatParticipantProfilePic: { link },
        gender,
      },
    },
  } = useSelector((state) => state.messages);

  return (
    <div className={`${styles.messageContainer} ${styles.otherUserMessage}`}>
      <div className={styles.profilePic}>
        <img alt="profile Pic" src={getProfilePic(link, gender)} />
      </div>

      <div
        className={`${styles.messageContent} ${styles.typing} ${styles.firstAndLast}`}
      >
        <Spinner style={{ color: "black", fontSize: 4, bottom: 8 }} />
      </div>
    </div>
  );
};

export default Typing;
