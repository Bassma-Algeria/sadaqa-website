import React from "react";
import { useSelector } from "react-redux";

// styles
import styles from "../../../../../styles/dashboard.module.scss";

// helpers
import { getNameToShow } from "../../../../../utils/usersHelpers";

// components
import OnlineStatus from "../../../../common/others/OnlineStatus";

const Header = ({ conversationSectionHeader }) => {
  const {
    conversation: {
      chatParticipant: { association_name, first_name, last_name, user_id },
    },
  } = useSelector((state) => state.messages);

  return (
    <div className={styles.conversationHeader} ref={conversationSectionHeader}>
      <h1>{getNameToShow(association_name, first_name, last_name)}</h1>
      <OnlineStatus userId={user_id} className={styles.onlineStatus} withText />
    </div>
  );
};

export default Header;
