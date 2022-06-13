import { addContact, makeMessagesRead } from '../../redux/actions/messagesActions';
import { setNewNumOfUnreadMessages } from '../../redux/actions/userActions';
import { setNewNotification } from '../../redux/reducers/authUserSlice';
import {
  addNewMessage,
  makeMessagesOfChatParticipantRead,
  removeChatParticipantIsTyping,
  setChatParticipantIsTyping,
  setLatestMessage,
} from '../../redux/reducers/messagesSlice';
import { deleteNewMessageNotificationSocketEmitter } from '../eventsEmitters/messagesEmitters';

const newMessage =
  ([{ message, newMessageNotification }]) =>
  (dispatch, getState) => {
    const {
      messages: {
        contacts: { data: contactsList },
        conversation: { chatParticipant },
      },
    } = getState();

    if (userCurrentlyInMessagesPage(contactsList)) {
      if (!messageSenderExistInContactsList(contactsList, message.sender_id)) {
        dispatch(addContact(message.sender_id));
      } else if (messageSenderConversationOpen(message.sender_id, chatParticipant)) {
        dispatch(addNewMessage(message));
        dispatch(makeMessagesRead(chatParticipant.user_id));
        deleteNewMessageNotificationSocketEmitter(message.message_id);
        console.log('in conversation');
      } else {
        dispatch(setLatestMessage({ targetContactId: message.sender_id, newMessage: message }));
      }
    }

    if (!messageSenderConversationOpen(message.sender_id, chatParticipant)) {
      dispatch(setNewNumOfUnreadMessages());
      console.log('not in conversation');
      dispatch(setNewNotification(newMessageNotification));
    }
  };

const makeMessagesReadSocketHandler =
  ([chatParticipantId]) =>
  dispatch => {
    dispatch(makeMessagesOfChatParticipantRead(Number(chatParticipantId)));
  };

const userCurrentlyInMessagesPage = contactsList => contactsList.length > 0;

const messageSenderConversationOpen = (messageSenderId, currentChatParticipant) => {
  return currentChatParticipant && messageSenderId === currentChatParticipant.user_id;
};

const messageSenderExistInContactsList = (contactsList, messageSenderId) => {
  return contactsList.find(contact => contact.user_id === messageSenderId);
};

const userStartTyping =
  ([userId]) =>
  (dispatch, getState) => {
    const {
      messages: {
        conversation: { chatParticipant },
      },
    } = getState();

    if (messageSenderConversationOpen(userId, chatParticipant)) {
      dispatch(setChatParticipantIsTyping());
    }
  };

const userStopTyping =
  ([userId]) =>
  (dispatch, getState) => {
    const {
      messages: {
        conversation: { chatParticipant },
      },
    } = getState();

    if (messageSenderConversationOpen(userId, chatParticipant)) {
      dispatch(removeChatParticipantIsTyping());
    }
  };

export { newMessage, makeMessagesReadSocketHandler, userStartTyping, userStopTyping };
