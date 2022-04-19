// Action creators are generated for each case reducer function
import {createSlice} from '@reduxjs/toolkit';
import {HYDRATE} from 'next-redux-wrapper';

const initialState = {
  contacts: {
    isDataLoaded: false,
    data: [],
  },
  conversation: {
    chatParticipant: null,
    isDataLoaded: false,
    chatParticipantIsTyping: false,
    data: [],
  },
};

const messagesSlice = createSlice({
  name: 'messages',
  initialState,
  reducers: {
    setContactsDataLoaded: state => {
      state.contacts.isDataLoaded = true;
    },

    setContactsData: (state, {payload}) => {
      state.contacts.data = payload;
    },

    setLatestMessageRead: (state, {payload: {targetUserId}}) => {
      state.contacts.data.find(
        contact => contact.user_id === targetUserId,
      ).latestMessage.read = true;
    },

    setConversationChatParticipant: (state, {payload}) => {
      state.conversation.chatParticipant = payload;
    },

    setConversationDataLoaded: state => {
      state.conversation.isDataLoaded = true;
    },

    setConversationData: (state, {payload}) => {
      state.conversation.data = [...state.conversation.data, ...payload];
    },

    clearConversationData: state => {
      state.conversation.isDataLoaded = false;
      state.conversation.data = [];
    },

    clearConversation: state => {
      console.log('hello');
      state.conversation.chatParticipant = null;
      state.conversation.chatParticipantIsTyping = false;
      state.conversation.isDataLoaded = false;
      state.conversation.data = [];
    },

    addNewMessage: (state, {payload: newMessage}) => {
      if (!isSameSender(state, 0, newMessage)) {
        newMessage.message_position = 'firstAndLast';
      } else {
        newMessage.message_position = 'first';

        if (!isSameSender(state, 1, newMessage)) {
          state.conversation.data[0].message_position = 'last';
        } else {
          state.conversation.data[0].message_position = 'middle';
        }
      }
      state.conversation.data = [newMessage, ...state.conversation.data];
    },

    addNewContact: (state, {payload: newContact}) => {
      state.contacts.data = [newContact, ...state.contacts.data];
    },

    makeMessagesOfChatParticipantRead: (state, {payload: chatParticipantId}) => {
      state.conversation.data.map(message => {
        if (message.sender_id === chatParticipantId) {
          message.read = true;
        }
      });
    },

    setLatestMessage: (state, {payload: {targetContactId, newMessage}}) => {
      state.contacts.data.find(contact => contact.user_id === targetContactId).latestMessage =
        newMessage;
    },

    setChatParticipantIsTyping: state => {
      state.conversation.chatParticipantIsTyping = true;
    },

    removeChatParticipantIsTyping: state => {
      state.conversation.chatParticipantIsTyping = false;
    },

    clearContactsData: state => {
      state.contacts.isDataLoaded = false;
      state.contacts.data = [];
    },

    clearMessagesSlice: state => initialState,
  },

  extraReducers: {
    [HYDRATE]: (state, action) => {
      console.log('HYDRATE', state, action.payload);
      return {
        ...state,
        ...action.payload,
      };
    },
  },
});

const isSameSender = (state, index, messageToCompare) => {
  return (
    state.conversation.data[index] &&
    state.conversation.data[index].sender_id === messageToCompare.sender_id
  );
};

export const {
  clearMessagesSlice,
  setContactsData,
  setContactsDataLoaded,
  setConversationData,
  setConversationDataLoaded,
  clearConversationData,
  clearConversation,
  setConversationChatParticipant,
  addNewMessage,
  setLatestMessageRead,
  makeMessagesOfChatParticipantRead,
  addNewContact,
  setLatestMessage,
  setChatParticipantIsTyping,
  removeChatParticipantIsTyping,
  clearContactsData,
} = messagesSlice.actions;

export default messagesSlice.reducer;
