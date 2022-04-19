import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { ReactSVG } from "react-svg";

// styles
import styles from "../../../../styles/dashboard.module.scss";

// images and icons
import plusIcon from "../../../../public/svg/plus.svg";

// redux
import {
  getConversation,
  makeMessagesRead,
} from "../../../../redux/actions/messagesActions";
import { clearConversation } from "../../../../redux/reducers/messagesSlice";

// components
import ConversationContainer from "./conversation_container";

const ConversationSection = () => {
  const {
    conversation: { chatParticipant },
  } = useSelector((state) => state.messages);

  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    if (router.query.chatParticipantId) {
      dispatch(getConversation(router.query.chatParticipantId));
      dispatch(makeMessagesRead(router.query.chatParticipantId));
    } else {
      dispatch(clearConversation());
    }
  }, [router.query.chatParticipantId]);

  return (
    <>
      {!chatParticipant ? (
        <div className={styles.noConversation}>
          <ReactSVG src={plusIcon.src} />
          <p>Select or search for contacts and ask them what you want.</p>
        </div>
      ) : (
        <ConversationContainer />
      )}
    </>
  );
};

export default ConversationSection;
