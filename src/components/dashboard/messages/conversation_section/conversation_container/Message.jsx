import React, { useEffect, useRef, useState } from 'react';
import moment from 'moment';
import Link from 'next/link';
import { useSelector } from 'react-redux';

// styles
import styles from '../../../../../styles/dashboard.module.scss';

// helpers
import {
  getFormatingString,
  getTimeStyle,
  isMessageFromCurrentUser,
  showProfilePicWithTheMessage,
} from '../../../../../utils/messagesHelpers';
import { getProfilePic } from '../../../../../utils/usersHelpers';
import Image from 'next/image';

const Message = ({ sender_id, receiver_id, message_position, content, created_at }) => {
  const {
    messages: {
      conversation: {
        chatParticipant: { chatParticipantProfilePic, user_id: chatParticipantId, gender },
        data: conversation,
      },
    },
    authUser: {
      profileInfo: {
        generalInfo: { user_id: currentUserId },
      },
    },
  } = useSelector(state => state);

  const [timeTextStyle, setTimeTextStyle] = useState({});
  const timeText = useRef(null);

  useEffect(() => {
    setTimeTextStyle(getTimeStyle(sender_id, currentUserId, timeText));
  }, [conversation]);

  return (
    <div
      className={`${styles.messageContainer} ${
        isMessageFromCurrentUser(sender_id, currentUserId)
          ? styles.authUserMessage
          : styles.otherUserMessage
      }`}
    >
      {showProfilePicWithTheMessage(
        sender_id,
        receiver_id,
        chatParticipantId,
        message_position,
      ) && (
        <div className={styles.profilePic}>
          <Link href={`/users/${chatParticipantId}`}>
            <img alt="profile Pic" src={getProfilePic(chatParticipantProfilePic.link, gender)} />
          </Link>
        </div>
      )}
      <div className={`${styles.messageContent} ${styles[message_position]}`}>
        <p>{content}</p>
        <p ref={timeText} className={styles.time} style={timeTextStyle}>
          {moment(created_at).format(getFormatingString(created_at))}
        </p>
      </div>
    </div>
  );
};

export default Message;
