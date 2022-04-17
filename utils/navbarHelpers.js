const isClickedElementInsideTarget = (targetId, clickedElement) => {
  return document.getElementById(targetId)?.contains(clickedElement);
};

const isDarkModeToggle = (title) => title === "Dark mode";

const getDashbaordLinkTitleToShow = (title, numOfUnreadMessages) => {
  switch (title) {
    case "Messages":
      return `${title} ${
        numOfUnreadMessages > 0 ? `(${numOfUnreadMessages})` : ""
      }`;
      break;

    default:
      return title;
      break;
  }
};

const isDashboardLinks = (currentPath) => {
  return (
    currentPath.includes("dashboard") &&
    !currentPath.includes("messages") &&
    !currentPath.includes("notifications")
  );
};

export {
  isClickedElementInsideTarget,
  isDarkModeToggle,
  getDashbaordLinkTitleToShow,
  isDashboardLinks,
};
