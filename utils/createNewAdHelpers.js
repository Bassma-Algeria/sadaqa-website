const DONATION_TYPE_ID = 1;
const DONATION_REQUEST_TYPE_ID = 2;
const FAMILY_IN_NEED_TYPE_ID = 3;

const convertTypeIdToText = (typeId) => {
  if (typeId === DONATION_TYPE_ID) {
    return "donation";
  } else if (typeId === DONATION_REQUEST_TYPE_ID) {
    return "donation_request";
  } else if (typeId === FAMILY_IN_NEED_TYPE_ID) {
    return "family_in_need";
  } else {
    return "call_for_help";
  }
};

const isAdTypeChoosen = (type) => type !== "";

const isDonationOrDonationRequest = (type) =>
  type === DONATION_TYPE_ID || type === DONATION_REQUEST_TYPE_ID;

const isCallForHelpSpecificInputs = (inputName) =>
  inputName === "ccp" || inputName === "ccpKey" || inputName === "rib";

const isDonationsSpecificInputs = (inputName) => inputName === "category";

const isSpecificInputs = (inputName) =>
  isDonationsSpecificInputs(inputName) ||
  isCallForHelpSpecificInputs(inputName);

export {
  convertTypeIdToText,
  isAdTypeChoosen,
  isDonationOrDonationRequest,
  isCallForHelpSpecificInputs,
  isDonationsSpecificInputs,
  isSpecificInputs,
};
