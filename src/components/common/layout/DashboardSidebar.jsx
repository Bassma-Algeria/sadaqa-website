import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ReactSVG } from "react-svg";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";

// redux
import { logoutUser } from "../../../redux/actions/userActions";

// styles
import styles from "../../../styles/dashboard.module.scss";

// helpers
import { linksData } from "../../../data/dashboardSidebarData";

const DashboardSidebar = ({ dashboardSidebarCollapse }) => {
  const router = useRouter();
  const dispatch = useDispatch();

  const [activeLink, setActiveLink] = useState("");

  const handleLogoutClick = () => {
    dispatch(logoutUser());
  };

  useEffect(() => {
    setActiveLink(router.pathname);
  }, [router.pathname]);

  return (
    <div
      className={`${styles.sidebar} ${
        dashboardSidebarCollapse && styles.collapse
      }`}
    >
      <div className={styles.linksContainer}>
        {linksData.map((link, index) => {
          if (index < linksData.length - 1) {
            return (
              <SidebarLink key={index} activeLink={activeLink} {...link} />
            );
          }
        })}
      </div>
      <SidebarLink
        className={styles.logout}
        activeLink={""}
        {...linksData[linksData.length - 1]}
        onClick={handleLogoutClick}
      />
    </div>
  );
};

const SidebarLink = ({
  name,
  link,
  iconLinkEmpty,
  iconLinkFilled,
  subLinks,
  activeLink,
  onClick,
  className,
}) => {
  const {
    numOfUnreadMessages,
    notifications: { numOfUnreadNotifications },
  } = useSelector((state) => state.authUser);

  const [numToShow, setNumToShow] = useState(null);

  const isActive =
    activeLink.includes(link) || activeLink.includes(name.toLowerCase());

  useEffect(() => {
    if (name === "Notifications") {
      setNumToShow(numOfUnreadNotifications);
    } else if (name === "Messages") {
      setNumToShow(numOfUnreadMessages);
    }
  }, [numOfUnreadMessages, numOfUnreadNotifications]);

  return (
    <>
      <Link href={link}>
        <div
          className={`${styles.link} ${isActive && styles.active} ${className}`}
          onClick={onClick}
        >
          <div className={styles.iconContainer}>
            <ReactSVG src={isActive ? iconLinkFilled : iconLinkEmpty} />
            {numToShow > 0 && (
              <div className={styles.numberContainer}>
                <p>{numToShow}</p>
              </div>
            )}
          </div>
          <p>{name}</p>
        </div>
      </Link>

      {settingsPageAndHasSublinks(activeLink, subLinks) && (
        <SidebarSublinks subLinks={subLinks} activeLink={activeLink} />
      )}
    </>
  );
};

const SidebarSublinks = ({ subLinks, activeLink }) => {
  return (
    <ul>
      {subLinks.map((subLink, index) => {
        return (
          <SidebarSublink {...subLink} key={index} activeLink={activeLink} />
        );
      })}
    </ul>
  );
};

const SidebarSublink = ({ link, name, activeLink }) => {
  const isSubLinkActive = activeLink.includes(link);

  return (
    <li className={isSubLinkActive && styles.active}>
      <Link href={link}>{name}</Link>
    </li>
  );
};

const settingsPageAndHasSublinks = (pageLink, subLinks) => {
  return subLinks && pageLink.includes("settings");
};

export default DashboardSidebar;
