import { socket } from '..';
import {
  CREATE_MESSAGE_NOTIFICATION,
  DELETE_MESSAGE_NOTIFICATION,
  IS_TYPING,
  MAKE_MESSAGES_READ,
  SEND_MESSAGE,
  STOP_TYPING,
} from '../eventsNames';

const sendMessageSocketEmitter = message => {
  socket.emit(SEND_MESSAGE, message);
};

const makeMessagesReadSocketEmitter = chatParticiantId => {
  socket.emit(MAKE_MESSAGES_READ, chatParticiantId);
};

const userIsTypingSocketEmitter = ({ senderId, receiverId }) => {
  socket.emit(IS_TYPING, { senderId, receiverId });
};

const userStopTypingSocketEmitter = ({ senderId, receiverId }) => {
  socket.emit(STOP_TYPING, { senderId, receiverId });
};

const deleteNewMessageNotificationSocketEmitter = messageId => {
  socket.emit(DELETE_MESSAGE_NOTIFICATION, messageId);
};

export {
  sendMessageSocketEmitter,
  makeMessagesReadSocketEmitter,
  userIsTypingSocketEmitter,
  userStopTypingSocketEmitter,
  deleteNewMessageNotificationSocketEmitter,
};
