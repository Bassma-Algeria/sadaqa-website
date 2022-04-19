const chatParticipantExistInContactsList = (participantId, contactsList) => {
  return contactsList.find((contact) => contact.user_id === participantId);
};

const getContactsContainerHeight = (contactsSection, contactsContainer) => {
  const contactsSectionHeight =
    contactsSection.current.getBoundingClientRect().height;
  const contactsContainerTop =
    contactsContainer.current.getBoundingClientRect().top;
  const navbarHeight = 70;

  return contactsSectionHeight - contactsContainerTop + navbarHeight;
};

const getContactNameToShow = (firstName, lastName, associationName) => {
  if (associationName === "") {
    return firstName + " " + lastName;
  }
  return associationName;
};

const getLatestMessageToShow = (message, currentUserId) => {
  let messageToShow = message?.content;
  if (messageToShow) {
    if (isMessageFromCurrentUser(message.sender_id, currentUserId)) {
      messageToShow = "You : " + messageToShow;
    }

    if (messageToShow.length > 17) {
      return messageToShow.slice(0, 17) + "...";
    }
    return messageToShow;
  }

  return "";
};

const hasUnreadMessges = (latestMessage, currentUserId) => {
  return (
    latestMessage &&
    !isMessageRead(latestMessage) &&
    !isMessageFromCurrentUser(latestMessage.sender_id, currentUserId)
  );
};

const getConversationContainerHeight = (section, header, footer) => {
  const sectionHeight = section.current.getBoundingClientRect().height;
  const headerHight = header.current.getBoundingClientRect().height;
  const footerHight = footer.current.getBoundingClientRect().height;

  if (window.innerWidth < 900) {
    // in mobile version
    const MOBILE_NAV_HEIGHT = 50;
    return sectionHeight - headerHight - footerHight - MOBILE_NAV_HEIGHT;
  }

  return sectionHeight - headerHight - footerHight;
};

const showProfilePicWithTheMessage = (
  sender_id,
  receiver_id,
  chatParticipantId,
  message_position
) => {
  return (
    sender_id !== receiver_id &&
    sender_id === chatParticipantId &&
    message_position.includes("first")
  );
};

const getTimeStyle = (senderId, currentUserId, timeText) => {
  const timeTextWidth = getHiddenElementWidth(timeText);

  if (isMessageFromCurrentUser(senderId, currentUserId)) {
    return {
      left: -(timeTextWidth + 10),
    };
  }
  return {
    right: -(timeTextWidth + 10),
  };
};

const getHiddenElementWidth = (element) => {
  element.current.style.opacity = 0;
  element.current.style.display = "block";

  const width = element.current.getBoundingClientRect().width;

  element.current.style.opacity = 1;
  element.current.style.display = "none";

  return width;
};

const getFormatingString = (created_at) => {
  const dayOfMonthNow = new Date().getDate();
  const creationDayOfMonth = new Date(created_at).getDate();
  const difference = dayOfMonthNow - creationDayOfMonth;

  if (difference === 0) {
    return "LT";
  }
  return "ddd DD MMM, LT";
};

const isMessageFromCurrentUser = (messageSenderId, currentUserId) => {
  return messageSenderId === currentUserId;
};
const isMessageRead = (message) => message?.read;

const showRead = (lastMessage, currentUserId) => {
  return (
    isMessageRead(lastMessage) &&
    isMessageFromCurrentUser(lastMessage.sender_id, currentUserId)
  );
};

export {
  chatParticipantExistInContactsList,
  getContactNameToShow,
  getContactsContainerHeight,
  getConversationContainerHeight,
  getFormatingString,
  getHiddenElementWidth,
  getLatestMessageToShow,
  getTimeStyle,
  hasUnreadMessges,
  isMessageRead,
  isMessageFromCurrentUser,
  showProfilePicWithTheMessage,
  showRead,
};
