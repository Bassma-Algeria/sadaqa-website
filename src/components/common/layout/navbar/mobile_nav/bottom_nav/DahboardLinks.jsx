import React from "react";

// helpers
import { phoneBottomNavData } from "../../../../../../data/navbarData";

// components
import NavItem from "./NavItem";

const DashboardLinks = () => {
  return phoneBottomNavData.dashbaord.map((item, index) => {
    return <NavItem {...item} key={index} />;
  });
};

export default DashboardLinks;
