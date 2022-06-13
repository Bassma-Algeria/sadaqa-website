import { socket } from '..';
import {
  CONNECT_ERROR,
  IS_TYPING,
  MAKE_MESSAGES_READ,
  NEW_CONNECTION,
  NEW_LIKE_NOTIFICATION,
  NEW_MESSAGE,
  NEW_POST_NOTIFICATION,
  SET_ONLINE_USERS,
  STOP_TYPING,
  USER_DECONNECT,
} from '../eventsNames';
import { deconnectUser, newConnectionHandler, setOnlineUsersHandler } from './usersEventsHandlers';
import { connectionErrorHandler } from './errorsHandlers';
import {
  makeMessagesReadSocketHandler,
  newMessage,
  userStartTyping,
  userStopTyping,
} from './messagesEventsHandlers';
import { newLikeNotification, newPostNotification } from './notificationsEventsHandlers';

const registerSocketEventsListeners = dispatch => {
  // for dev purposes
  if (process.env.NODE_ENV === 'development')
    socket.onAny((event, ...args) => console.log(event, args));

  socket.on(CONNECT_ERROR, connectionErrorHandler);

  socket.on(SET_ONLINE_USERS, (...args) => dispatch(setOnlineUsersHandler(args)));

  socket.on(NEW_CONNECTION, (...args) => dispatch(newConnectionHandler(args)));

  socket.on(USER_DECONNECT, (...args) => dispatch(deconnectUser(args)));

  socket.on(NEW_MESSAGE, (...args) => dispatch(newMessage(args)));

  socket.on(MAKE_MESSAGES_READ, (...args) => dispatch(makeMessagesReadSocketHandler(args)));

  socket.on(IS_TYPING, (...args) => dispatch(userStartTyping(args)));

  socket.on(STOP_TYPING, (...args) => dispatch(userStopTyping(args)));

  socket.on(NEW_LIKE_NOTIFICATION, (...args) => dispatch(newLikeNotification(args)));

  socket.on(NEW_POST_NOTIFICATION, (...args) => dispatch(newPostNotification(args)));
};

export { registerSocketEventsListeners };
