import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { ReactSVG } from "react-svg";
import { useSelector } from "react-redux";

// styles
import styles from "../../../../../../styles/navbar.module.scss";

const NavItem = ({ title, icon, link, children }) => {
  const router = useRouter();
  const isActive = router.asPath === link;

  return (
    <Link href={link}>
      <div className={`${styles.navItem} ${isActive ? styles.active : ""}`}>
        <ReactSVG src={icon} />
        <h1>{title}</h1>
        {children}
      </div>
    </Link>
  );
};

const MessagesNavItem = (props) => {
  const { numOfUnreadMessages } = useSelector((state) => state.authUser);
  return (
    <NavItem {...props}>
      {numOfUnreadMessages > 0 && (
        <div className={styles.num}>
          <p>{numOfUnreadMessages}</p>
        </div>
      )}
    </NavItem>
  );
};

const NotificationsNavItem = (props) => {
  const { numOfUnreadNotifications } = useSelector(
    (state) => state.authUser.notifications
  );

  return (
    <NavItem {...props}>
      {numOfUnreadNotifications > 0 && (
        <div className={styles.num}>
          <p>{numOfUnreadNotifications}</p>
        </div>
      )}
    </NavItem>
  );
};

export default NavItem;
export { NotificationsNavItem, MessagesNavItem };
