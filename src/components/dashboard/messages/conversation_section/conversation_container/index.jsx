import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";

// styles
import styles from "../../../../../styles/dashboard.module.scss";

// helpers
import { getConversationContainerHeight } from "../../../../../utils/messagesHelpers";

// components
import Header from "./Header";
import MessagesContainer from "./MessagesContainer";
import InputContainer from "./InputContainer";

const ConversationContainer = () => {
  const conversationSection = useRef(null);
  const conversationSectionHeader = useRef(null);
  const conversationSectionFooter = useRef(null);

  const [conversationContainerHeight, setConversationContainerHeight] =
    useState(0);

  useEffect(() => {
    setConversationContainerHeight(
      getConversationContainerHeight(
        conversationSection,
        conversationSectionHeader,
        conversationSectionFooter
      )
    );

    const resizeHandler = () => {
      setConversationContainerHeight(
        getConversationContainerHeight(
          conversationSection,
          conversationSectionHeader,
          conversationSectionFooter
        )
      );
    };
    window.addEventListener("resize", resizeHandler);

    return () => window.removeEventListener("resize", resizeHandler);
  }, []);

  return (
    <div className={styles.conversationSection} ref={conversationSection}>
      <Header conversationSectionHeader={conversationSectionHeader} />
      <MessagesContainer height={conversationContainerHeight} />
      <InputContainer conversationSectionFooter={conversationSectionFooter} />
    </div>
  );
};
export default ConversationContainer;
