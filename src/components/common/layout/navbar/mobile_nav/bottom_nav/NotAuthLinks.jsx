import React from "react";

// helpers
import { phoneBottomNavData } from "../../../../../../data/navbarData";

// components
import NavItem from "./NavItem";

const NotAuthLinks = () => {
  return phoneBottomNavData.notLoggedIn.map((item, index) => {
    return <NavItem {...item} key={index} alwaysShowText />;
  });
};

export default NotAuthLinks;
