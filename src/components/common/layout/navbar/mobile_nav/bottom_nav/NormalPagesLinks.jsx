import React from "react";

// helpers
import { phoneBottomNavData } from "../../../../../../data/navbarData";

// components
import NavItem, { MessagesNavItem, NotificationsNavItem } from "./NavItem";

const NormalPagesLinks = () => {
  return phoneBottomNavData.normalPage.map((item, index) => {
    if (item.title === "messages") {
      return <MessagesNavItem {...item} key={index} />;
    } else if (item.title === "notifications") {
      return <NotificationsNavItem {...item} key={index} />;
    }

    return <NavItem {...item} key={index} />;
  });
};

export default NormalPagesLinks;
