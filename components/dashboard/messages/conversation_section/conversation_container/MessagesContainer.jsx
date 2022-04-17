import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { getOldMessages } from "../../../../../redux/actions/messagesActions";
import { ReactSVG } from "react-svg";

// styles
import styles from "../../../../../styles/dashboard.module.scss";

// images and icons
import smileFace from "../../../../../public/svg/smile.svg";

// helpers
import { showRead } from "../../../../../utils/messagesHelpers";
import { getNameToShow } from "../../../../../utils/usersHelpers";

// components
import Spinner from "../../../../common/loaders/Spinner";
import Message from "./Message";
import Typing from "./Typing";

const NUM_OF_MESSAGES_PER_CHUNK = 30;

const MessagesContainer = ({ height }) => {
  const {
    conversation: { isDataLoaded, chatParticipant },
  } = useSelector((state) => state.messages);

  const dispatch = useDispatch();
  const router = useRouter();

  const [numOfChunk, setNumOfChunk] = useState(2);
  const messagesContainer = useRef(null);

  const handleScroll = () => {
    const scrollTopPos = -messagesContainer.current.scrollTop; // negative sign because the container is resersed using flex-reverse
    const containerHight = messagesContainer.current.offsetHeight;
    const scrollHeight = messagesContainer.current.scrollHeight;

    const isScrollRichTop = scrollTopPos + containerHight >= scrollHeight;

    if (isScrollRichTop) {
      dispatch(
        getOldMessages(
          router.query.chatParticipantId,
          numOfChunk,
          NUM_OF_MESSAGES_PER_CHUNK
        )
      );
      setNumOfChunk(numOfChunk + 1);
    }
  };

  useEffect(() => {
    setNumOfChunk(2);
  }, [chatParticipant]);

  return (
    <div
      className={styles.conversationContainer}
      style={{ height }}
      ref={messagesContainer}
      onScroll={handleScroll}
    >
      {!isDataLoaded ? (
        <div style={{ height: "100%", width: "100%" }}>
          <Spinner style={{ fontSize: 8, top: "48%", color: "#FF7937" }} />
        </div>
      ) : (
        <MessagesList />
      )}
    </div>
  );
};

const MessagesList = () => {
  const {
    messages: {
      conversation: {
        data: conversation,
        chatParticipantIsTyping,
        chatParticipant: { association_name, first_name },
      },
    },
    authUser: {
      profileInfo: {
        generalInfo: { user_id: currentUserId },
      },
    },
  } = useSelector((state) => state);

  return conversation.length === 0 ? (
    <div className={styles.noMessages}>
      <h1>
        Send your first message to {getNameToShow(association_name, first_name)}
        !
      </h1>
      {/* <ReactSVG src={smileFace.src} /> */}
    </div>
  ) : (
    <>
      {showRead(conversation[0], currentUserId) && (
        <p className={styles.readText}>Seen</p>
      )}

      {chatParticipantIsTyping && <Typing />}

      {conversation.map((message, index) => {
        return <Message key={index} {...message} />;
      })}
    </>
  );
};

export default MessagesContainer;
