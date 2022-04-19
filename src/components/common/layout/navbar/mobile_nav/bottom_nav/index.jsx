import React from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

// styles
import styles from "../../../../../../styles/navbar.module.scss";

// helpers
import { isDashboardLinks } from "../../../../../../utils/navbarHelpers";

// components
import NotAuthLinks from "./NotAuthLinks";
import DashboardLinks from "./DahboardLinks";
import NormalPagesLinks from "./NormalPagesLinks";

const BottomNav = () => {
  const { isAuthenticated } = useSelector((state) => state.authUser);
  const router = useRouter();

  return (
    <div
      className={styles.bottomNav}
      style={{ display: router.query.chatParticipantId ? "none" : "flex" }}
    >
      {!isAuthenticated ? (
        <NotAuthLinks />
      ) : isDashboardLinks(router.asPath) ? (
        <DashboardLinks />
      ) : (
        <NormalPagesLinks />
      )}
    </div>
  );
};

export default BottomNav;
