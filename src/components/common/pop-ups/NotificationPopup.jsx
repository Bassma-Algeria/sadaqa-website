import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';
import { ReactSVG } from 'react-svg';
import { useSwipeable } from 'react-swipeable';
import { isMobile } from 'react-device-detect';

// styles
import styles from '../../../styles/pop-ups.module.scss';

// images and icons
import closeIcon from '../../../public/svg/close_icon.svg';

// sounds
import sound from '../../../public/media/notification_sound.mp3';

// redux
import { removeNewNotification } from '../../../redux/reducers/authUserSlice';

// helpers
import {
  getDefaultNotifPic,
  getPostTextNotification,
  getNotifLink,
} from '../../../utils/notificationsHelpers';
import { makeNotificationRead } from '../../../redux/actions/userActions';
import Image from 'next/image';

// constants
const TEN_SECONDS = 10000;

const NotificationPopup = () => {
  const {
    notifications: { newNotification },
  } = useSelector(state => state.authUser);
  const dispatch = useDispatch();

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [timeoutRef, setTimeoutRef] = useState(null);

  const swipeHandlers = useSwipeable({
    trackMouse: true,
    onSwipedUp: () => closePopupImmediately(),
  });

  let notificationSound;

  const closePopupImmediately = () => {
    setIsPopupOpen(false);
    dispatch(removeNewNotification());
  };

  const closePopupAfter10seconds = () => {
    return setTimeout(closePopupImmediately, TEN_SECONDS);
  };

  useEffect(() => {
    notificationSound = new Audio(sound);

    if (newNotification) {
      setIsPopupOpen(true);
      notificationSound.play();
      timeoutRef && clearTimeout(timeoutRef);
      setTimeoutRef(closePopupAfter10seconds());
    } else {
      setIsPopupOpen(false);
    }
  }, [newNotification]);

  return (
    <div
      className={`${styles.notificationPopup} ${isPopupOpen && styles.open}`}
      onClick={() => dispatch(makeNotificationRead(newNotification.notification_id))}
      onMouseOver={() => clearInterval(timeoutRef)}
      onMouseLeave={() => setTimeoutRef(closePopupAfter10seconds())}
      {...swipeHandlers}
    >
      <button className={styles.closeButton} onClick={closePopupImmediately}>
        <ReactSVG src={closeIcon.src} />
      </button>

      {newNotification && (
        <Notification notification={newNotification} onClick={closePopupImmediately} />
      )}
    </div>
  );
};

const Notification = ({ notification, onClick }) => {
  const notificationLink = getNotifLink(notification);
  const defaultNotifPic = getDefaultNotifPic(notification);

  return (
    <Link href={notificationLink}>
      <div className={styles.notification} onClick={onClick}>
        <div className={styles.notificationPic}>
          <Image src={notification.notification_pic || defaultNotifPic} alt="" />
        </div>

        <div className={styles.notificationText}>
          <NotificationText {...notification} />
        </div>
      </div>
    </Link>
  );
};

const NotificationText = ({
  liker_id,
  notification_type,
  first_name,
  association_name,
  message_content,
  post_type,
}) => {
  const {
    profileInfo: {
      generalInfo: { role },
    },
  } = useSelector(state => state.authUser);

  const nameToShow = getNameToShow(association_name, first_name);

  if (notification_type === 'like') {
    return (
      <p>
        <span>
          <Link href={`/users/${liker_id}`}>{nameToShow}</Link>
        </span>{' '}
        Like one of your Ads
      </p>
    );
  } else if (notification_type === 'message') {
    return (
      <p>
        <span>{nameToShow}</span> send you a message : <br />
        <span className={styles.messageContent}>{messageText(message_content)}</span>
      </p>
    );
  }

  return <p>{getPostTextNotification(post_type, role)}</p>;
};

const getNameToShow = (associationName, firstName) => {
  return associationName ? associationName : firstName;
};

const messageText = messageContent => {
  return `" ${messageContent.length > 35 ? messageContent.slice(0, 35) : messageContent} "`;
};

export default NotificationPopup;
