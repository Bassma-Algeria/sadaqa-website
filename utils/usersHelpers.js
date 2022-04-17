import { wilayas } from "../data/wilayas";
import defaultProfilePicFemale from "../public/svg/profile_pic_default_female.svg";
import defaultProfilePicMale from "../public/svg/profile_pic_default_male.svg";
import facebookIcon from "../public/svg/facebook_profile_icon.svg";
import instagramIcon from "../public/svg/instagram_profile_icon.svg";
import linkedInIcon from "../public/svg/linkedIn_profile_icon.svg";
import viberIcon from "../public/svg/viber_profile_icon.svg";
import whatsappIcon from "../public/svg/whatsapp_profile_icon.svg";

const isUserOnline = (userId, onlineUsersIds) => {
  return onlineUsersIds.find((id) => userId === id);
};

const getDefaultProfilePic = (gender) => {
  if (gender === "male" || gender === "") {
    return defaultProfilePicMale.src;
  } else {
    return defaultProfilePicFemale.src;
  }
};

const getProfilePic = (profilePic, gender) => {
  return profilePic || getDefaultProfilePic(gender);
};

const getNameToShow = (associationName, firstName, lastName) => {
  if (associationName) return associationName;
  if (lastName) return `${firstName} ${lastName}`;
  return firstName;
};

const getAppropriateSocialIcon = (platform) => {
  if (platform === "facebook") {
    return facebookIcon.src;
  } else if (platform === "instagram") {
    return instagramIcon.src;
  } else if (platform === "linkedIn") {
    return linkedInIcon.src;
  } else if (platform === "viber") {
    return viberIcon.src;
  } else if (platform === "whatsapp") {
    return whatsappIcon.src;
  }
};

const getWilayaId = (wilayaName) => {
  let wilayaToFound = wilayaName?.replace(/\d|-/g, "").trim();

  const targetWilaya = wilayas.find((wilaya) =>
    wilaya.name.toLowerCase().includes(wilayaToFound)
  );

  return targetWilaya?.id;
};

const getHeaderToShow = (firstName, associationName) => {
  if (associationName === "") {
    return firstName + "'s Ads :";
  }
  return associationName + " Association's Ads";
};

const isTypesNotAllowed = (role, type) => {
  return (
    role !== "association" &&
    (type === "call_for_help" || type === "family_in_need")
  );
};

export {
  isUserOnline,
  getDefaultProfilePic,
  getWilayaId,
  getAppropriateSocialIcon,
  getProfilePic,
  getNameToShow,
  getHeaderToShow,
  isTypesNotAllowed,
};
