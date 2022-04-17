import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// styles
import styles from "../../../styles/dashboard.module.scss";

// redux
import {
  getNotifications,
  getOldNotifications,
} from "../../../redux/actions/userActions";

// compoenents
import Spinner from "../../common/loaders/Spinner";
import Notification from "./Notification";
import NoNotifications from "./NoNotifications";

const NOTIFS_PER_GROUPE = 20;

const NotificationsContainer = () => {
  const {
    notifications: { data: notifications, isDataLoaded },
  } = useSelector((state) => state.authUser);
  const dispatch = useDispatch();

  const [numOfGroupe, setNumOfGroupe] = useState(2);

  useEffect(() => {
    dispatch(getNotifications());

    const handleScroll = () => {
      const bodyHeight = document.body.offsetHeight;
      const windowHeight = window.innerHeight;
      const scrollY = window.scrollY;

      const isScrollRichBottom = windowHeight + scrollY >= bodyHeight;

      if (isScrollRichBottom) {
        setNumOfGroupe(numOfGroupe + 1);
        dispatch(getOldNotifications(numOfGroupe, NOTIFS_PER_GROUPE));
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {!isDataLoaded ? (
        <div style={{ height: "70vh", width: "100%" }}>
          <Spinner style={{ fontSize: 8, top: "30vh", color: "#000000" }} />
        </div>
      ) : (
        <NotificationsList notifications={notifications} />
      )}
    </>
  );
};

const NotificationsList = ({ notifications }) => {
  return notifications.length === 0 ? (
    <NoNotifications styles={styles} />
  ) : (
    notifications.map((notification, index) => {
      return (
        <Notification key={index} notification={notification} styles={styles} />
      );
    })
  );
};

export default NotificationsContainer;
