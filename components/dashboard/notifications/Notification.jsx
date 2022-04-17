import React from "react";
import moment from "moment";
import Link from "next/link";
import { useSelector } from "react-redux";

// helpers
import {
  getDefaultNotifPic,
  getNotifLink,
  getPostTextNotification,
  messageText,
  numOfMessages,
} from "../../../utils/notificationsHelpers";
import { getNameToShow } from "../../../utils/usersHelpers";

const Notification = ({ notification, styles }) => {
  const defaultNotifPic = getDefaultNotifPic(notification);

  return (
    <Link href={getNotifLink(notification)}>
      <div className={styles.notification}>
        <div className={styles.notificationPic}>
          <img src={notification.notification_pic || defaultNotifPic} alt="" />
        </div>

        <div className={styles.notificationText}>
          <NotificationText {...notification} styles={styles} />
          <div className={styles.createdAt}>
            <p>{moment(notification.created_at).fromNow()}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

const NotificationText = (props) => {
  const {
    profileInfo: {
      generalInfo: { role },
    },
  } = useSelector((state) => state.authUser);

  const nameToShow = getNameToShow(props.association_name, props.first_name);

  if (props.notification_type === "like") {
    return (
      <p>
        <span>
          <Link href={`/users/${props.liker_id}`}>{nameToShow}</Link>
        </span>{" "}
        Like one of your Ads
      </p>
    );
  } else if (props.notification_type === "message") {
    return (
      <p>
        <span>{nameToShow}</span>
        {numOfMessages(props.num_of_messages)} <br />{" "}
        <span className={props.styles.messageContent}>
          {messageText(props.num_of_messages, props.message_content)}
        </span>
      </p>
    );
  }

  return <p>{getPostTextNotification(props.post_type, role)}</p>;
};

export default Notification;
