import { LANGUAGES } from "./constants";

const getTotalsForTargetType = (totals, type) => {
  switch (type) {
    case "Call For Helps":
      return totals.numOfCallForHelps;
      break;

    case "Families In Need":
      return totals.numOfFamiliesInNeed;
      break;

    case "Donations":
      return totals.numOfDonations;
      break;

    default:
      return totals.numOfDonationRequests;
      break;
  }
};

const isAssociationSpecificInputs = (inputName) => {
  return inputName === "associationName";
};

const isNormalUserSpecificInputs = (inputName) => {
  return (
    inputName === "gender" ||
    inputName === "firstName" ||
    inputName === "lastName" ||
    inputName === "birthday"
  );
};

const getSocialLink = (platformName, socialAccounts) => {
  const { link } = socialAccounts.find((account) => {
    return account.platform === platformName;
  });

  return link ?? "";
};

const getLanguageShortcut = (language) => {
  const { shortcut } = LANGUAGES.find((lang) => lang.value === language);
  return shortcut;
};

const getLanguageValue = (shortcut) => {
  const res = LANGUAGES.find((lang) => lang.shortcut === shortcut);
  return res?.value;
};

const addMessagePositionToTheMessages = (messages) => {
  const messagesLength = messages.length;
  let i = 0;

  if (messagesLength === 1) {
    messages[i++].message_position = "firstAndLast";
  } else {
    while (stillHaveMessages(messagesLength, i)) {
      if (nextSenderEqualPrev(messages, i)) {
        messages[i++].message_position = "first";

        while (
          stillHaveMessages(messagesLength, i) &&
          nextSenderEqualPrev(messages, i)
        ) {
          messages[i++].message_position = "middle";
        }

        messages[i++].message_position = "last";
      } else {
        messages[i++].message_position = "firstAndLast";
      }
    }

    if (isLastMessage(messagesLength, i)) {
      messages[i++].message_position = "firstAndLast";
    }
  }
};

const stillHaveMessages = (messagesLength, i) => {
  return i < messagesLength - 1;
};
const nextSenderEqualPrev = (messages, i) => {
  return messages[i].sender_id === messages[i + 1].sender_id;
};
const isLastMessage = (messagesLength, i) => {
  return i === messagesLength - 1;
};

const adjustOldMessagesPositionsWithStateMessages = (old, state) => {
  if (state[state.length - 1].sender_id === old[0].sender_id) {
    if (old[0].sender_id === old[1].sender_id) {
      old[0].message_position = "middle";
    } else {
      old[0].message_position = "last";
    }
  }
};

export {
  getTotalsForTargetType,
  isAssociationSpecificInputs,
  isNormalUserSpecificInputs,
  getSocialLink,
  getLanguageShortcut,
  getLanguageValue,
  addMessagePositionToTheMessages,
  adjustOldMessagesPositionsWithStateMessages,
};
