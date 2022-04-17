import axios from "axios";
import {
  makeMessagesReadSocketEmitter,
  sendMessageSocketEmitter,
} from "../../socket/eventsEmitters/messagesEmitters";
import {
  addMessagePositionToTheMessages,
  adjustOldMessagesPositionsWithStateMessages,
} from "../../utils/dashboardHelpers";
import {
  addNewContact,
  addNewMessage,
  clearContactsData,
  clearConversationData,
  makeMessagesOfChatParticipantRead,
  setContactsData,
  setContactsDataLoaded,
  setConversationChatParticipant,
  setConversationData,
  setConversationDataLoaded,
  setLatestMessageRead,
} from "../reducers/messagesSlice";
import { setNewNumOfUnreadMessages } from "./userActions";

const getContacts = () => (dispatch) => {
  dispatch(clearContactsData());

  axios
    .get("/messages/getContacts")
    .then((res) => {
      dispatch(setContactsData(res.data.data));
      dispatch(setContactsDataLoaded());
    })
    .catch((error) => {
      if (error.response.data.success) {
        dispatch(setContactsDataLoaded());
      }
      console.log(error);
    });
};

const getSearchedContacts = (searchTerm) => (dispatch) => {
  dispatch(clearContactsData());

  axios
    .get(`/messages/searchForContacts/${searchTerm}`)
    .then((res) => {
      dispatch(setContactsData(res.data.data));
      dispatch(setContactsDataLoaded());
    })
    .catch((error) => {
      console.log(error);
    });
};

const getConversation = (chatParticipantId) => (dispatch) => {
  dispatch(clearConversationData());

  axios
    .get(
      `/messages/getConversation/${chatParticipantId}?numOfChunk=1&numOfMessagesPerChunk=30`
    )
    .then((res) => {
      dispatch(
        setConversationChatParticipant(res.data.data.chatParticiantInfo)
      );

      const messages = res.data.data.messages;
      addMessagePositionToTheMessages(messages);
      dispatch(setConversationData(messages));
      dispatch(setConversationDataLoaded());
    })
    .catch((error) => {
      dispatch(setConversationDataLoaded());
      console.log(error);
    });
};

const sendMessage = (messageInfo) => (dispatch) => {
  axios
    .post("/messages/sendMessage", messageInfo)
    .then((res) => {
      dispatch(addNewMessage(res.data.data));
      sendMessageSocketEmitter(res.data.data);
    })
    .catch((error) => {
      console.log(error);
    });
};

const getOldMessages =
  (chatParticipantId, numOfChunk, numOfMessagesPerChunk) =>
  (dispatch, getState) => {
    axios
      .get(
        `/messages/getOldMessages/${chatParticipantId}?numOfChunk=${numOfChunk}&numOfMessagesPerChunk=${numOfMessagesPerChunk}`
      )
      .then((res) => {
        let oldMessages = res.data.data.messages;
        if (oldMessages.length === 0) return;

        const { data: stateMessages } = getState().messages.conversation;
        addMessagePositionToTheMessages(oldMessages);
        adjustOldMessagesPositionsWithStateMessages(oldMessages, stateMessages);
        dispatch(setConversationData(oldMessages));
      })
      .catch((error) => {
        console.log(error);
      });
  };

const makeMessagesRead = (chatParticipantId) => (dispatch) => {
  axios
    .put(`/messages/makeMessagesRead/${chatParticipantId}`)
    .then((res) => {
      dispatch(setNewNumOfUnreadMessages());
      makeMessagesReadSocketEmitter(Number(chatParticipantId));
      dispatch(makeMessagesOfChatParticipantRead(Number(chatParticipantId)));
      dispatch(
        setLatestMessageRead({ targetUserId: Number(chatParticipantId) })
      );
    })
    .catch((error) => {
      console.log(error);
    });
};

const addContact = (contactId) => (dispatch) => {
  axios
    .get(`/messages/getContactToAddInContactsList/${contactId}`)
    .then((res) => {
      dispatch(addNewContact(res.data.data));
    })
    .catch((error) => {
      console.log(error);
    });
};

export {
  getContacts,
  getSearchedContacts,
  getConversation,
  sendMessage,
  makeMessagesRead,
  addContact,
  getOldMessages,
};
