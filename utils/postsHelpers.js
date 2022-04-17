import donationDefault from "../public/images/donation_default.png";
import callForHelpDefault from "../public/images/call_for_help_default.png";
import familyInNeedDefault from "../public/images/family_in_need_default.png";
import donationRequestDefault from "../public/images/donation_request_default.png";

const checkIfPostLiked = (likes, postId) => {
  if (likes.length > 0) {
    for (const like of likes) {
      if (like.post_id === postId) {
        return true;
      }
    }
  }
  return false;
};

const getAvailabiltyText = (postType, isActive) => {
  if (postType === "donation") {
    return isActive ? "Still Available" : "Not Available (Given)";
  } else if (postType === "donation_request") {
    return isActive ? "Not Obtained Yet" : "Already Obtained";
  } else {
    return isActive ? "Still Need Help" : "Already Got Help";
  }
};

const getDefaultPostThumbnail = (postType) => {
  if (postType === "call_for_help") {
    return callForHelpDefault.src;
  } else if (postType === "family_in_need") {
    return familyInNeedDefault.src;
  } else if (postType === "donation_request") {
    return donationRequestDefault.src;
  } else {
    return donationDefault.src;
  }
};

const getPostThumbnail = (thumbnail, postType) => {
  return thumbnail || getDefaultPostThumbnail(postType);
};

const numOfPostsOfType = (posts, type) => {
  const total =
    type === "all"
      ? posts.length
      : posts.filter((post) => post.type === type).length;

  return total;
};

const filterPosts = (posts, type) => {
  const postFilted =
    type === "all" ? posts : posts.filter((post) => post.type === type);
  return postFilted;
};

const linkFormatToTextFormat = (s) => {
  return s.replace(/___/g, " / ").replace(/_/g, " ");
};

const textFormatToLinkFormat = (s) => {
  return s.replace(/ /g, "_").replace(/\//g, "_");
};

const getPostStatusText = (type) => {
  switch (type) {
    case "donation":
      return "Given";
      break;

    case "donation_request":
      return "Goten";
      break;

    default:
      return "Got Help";
      break;
  }
};

export {
  checkIfPostLiked,
  getAvailabiltyText,
  getDefaultPostThumbnail,
  filterPosts,
  numOfPostsOfType,
  getPostThumbnail,
  linkFormatToTextFormat,
  getPostStatusText,
  textFormatToLinkFormat,
};
