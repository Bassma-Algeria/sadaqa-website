import { getDefaultPostThumbnail } from "./postsHelpers";
import { getDefaultProfilePic } from "./usersHelpers";

const getNotifLink = ({ notification_type, sender_id, post_id }) => {
  if (notification_type === "message") {
    return `/dashboard/messages?chatParticipantId=${sender_id}`;
  } else {
    return `/posts/${post_id}`;
  }
};

const getPostTextNotification = (postType, role) => {
  if (role === "association") {
    return getPostTextNotificationForAssociations(postType);
  } else {
    return getPostTextNotificationForNormalUsers(postType);
  }
};

const getPostTextNotificationForAssociations = (postType) => {
  if (postType === "donation") {
    return "There is a new Donation in your area, maybe you can give it to someone in need.";
  } else if (postType === "donation_request") {
    return "There is someone in your area need a Donation, maybe you can help him.";
  } else if (postType === "family_in_need") {
    return "A new Family near you Need Help, take a look maybe you can relieve their pain.";
  } else {
    return "A new Call For Help in your wilaya, take a look maybe you can provide some help.";
  }
};

const getPostTextNotificationForNormalUsers = (postType) => {
  if (postType === "donation") {
    return "There is a new Donation Similar to your donation request, maybe that's what you are looking for.";
  } else if (postType === "donation_request") {
    return "There is someone in your area need a Donation, maybe you can help him.";
  } else if (postType === "family_in_need") {
    return "A new Family near you Need Help, take a look maybe you can relieve their pain.";
  } else {
    return "A new Call For Help in you wilaya, take a look maybe you can provide some help.";
  }
};

const getDefaultNotifPic = (notification) => {
  let defaultNotifPic;
  if (notification.notification_type === "message") {
    defaultNotifPic = getDefaultProfilePic(notification.gender);
  } else {
    defaultNotifPic = getDefaultPostThumbnail(notification.post_type);
  }

  return defaultNotifPic;
};

const messageText = (numOfMessages, messageContent) => {
  return `" ${
    numOfMessages.length > 35 ? messageContent.slice(0, 35) : messageContent
  } "`;
};

const numOfMessages = (numOfMessages) => {
  return `
    send you ${numOfMessages > 1 ? numOfMessages : "a"} message${
    numOfMessages > 1 ? "s" : ""
  }:
  `;
};

export {
  getNotifLink,
  getPostTextNotification,
  getDefaultNotifPic,
  messageText,
  numOfMessages,
};
