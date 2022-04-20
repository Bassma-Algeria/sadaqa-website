import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

// styles
import styles from '../../../../styles/dashboard.module.scss';

// helpers
import { getLatestMessageToShow, hasUnreadMessges } from '../../../../utils/messagesHelpers';
import { getNameToShow, getProfilePic } from '../../../../utils/usersHelpers';

// components
import OnlineStatus from '../../../common/others/OnlineStatus';

const Contact = ({
  contactProfilePic,
  latestMessage,
  user_id: contactId,
  first_name,
  association_name,
  gender,
}) => {
  const {
    authUser: {
      profileInfo: {
        generalInfo: { user_id: currentUserId },
      },
    },
    messages: {
      contacts: { data: contactsList },
    },
  } = useSelector(state => state);

  const router = useRouter();
  const [isContactConversationOpen, setIsContactConversationOpen] = useState(false);

  useEffect(() => {
    if (Number(router.query.chatParticipantId) === contactId) {
      setIsContactConversationOpen(true);
    } else {
      setIsContactConversationOpen(false);
    }
  }, [router.query.chatParticipantId, contactsList]);

  return (
    <div
      className={`${styles.contactContainer} ${
        hasUnreadMessges(latestMessage, currentUserId) && styles.hasUnreadMessages
      } ${isContactConversationOpen && styles.contactConversationOpen}`}
      onClick={() => router.push(`?chatParticipantId=${contactId}`)}
    >
      <div className={styles.profilePicContainer}>
        <img src={getProfilePic(contactProfilePic?.link, gender)} alt="profile pic" />
        <OnlineStatus className={styles.onlineStatus} userId={contactId} />
      </div>

      <div>
        <h3 className={styles.contactName}>
          {getNameToShow(association_name, first_name)?.split(' ')[0]}
        </h3>
        <p>{getLatestMessageToShow(latestMessage, currentUserId)}</p>
      </div>
    </div>
  );
};

export default Contact;
