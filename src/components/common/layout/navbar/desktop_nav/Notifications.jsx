import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { ReactSVG } from 'react-svg';
import Link from 'next/link';

// styles
import styles from '../../../../../styles/navbar.module.scss';

// redux
import { getNotifications, makeNotificationsRead } from '../../../../../redux/actions/userActions';
import { clearNotifications } from '../../../../../redux/reducers/authUserSlice';

// icons and images
import notificationsIcon from '../../../../../../public/svg/nav_notification_icon.svg';

// helpers
import { isClickedElementInsideTarget } from '../../../../../utils/navbarHelpers';

// components
import Spinner from '../../../loaders/Spinner';
import Notification from '../../../../dashboard/notifications/Notification';
import NoNotifications from '../../../../dashboard/notifications/NoNotifications';

const Notifications = () => {
  const {
    notifications: { numOfUnreadNotifications },
  } = useSelector(state => state.authUser);
  const dispatch = useDispatch();

  const router = useRouter();

  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);

  const handleNotificationsIconClick = () => {
    if (!router.asPath.includes('notifications')) {
      setIsNotificationsOpen(!isNotificationsOpen);
    }
  };

  return (
    <div className={styles.notificationsContainer} id="notifications_container">
      <div className={styles.notificationsIconContainer} onClick={handleNotificationsIconClick}>
        <div className={styles.notificationsIcon}>
          <ReactSVG src={notificationsIcon.src} />
        </div>
        {numOfUnreadNotifications > 0 && (
          <div className={styles.numOfNotifications}>
            <p>{numOfUnreadNotifications}</p>
          </div>
        )}
      </div>

      {isNotificationsOpen && (
        <NotificationsContainer closeNotifications={() => setIsNotificationsOpen(false)} />
      )}
    </div>
  );
};

const NotificationsContainer = ({ closeNotifications }) => {
  const {
    notifications: { data: notifications, isDataLoaded },
  } = useSelector(state => state.authUser);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNotifications(5));
    dispatch(makeNotificationsRead());

    const handleClick = e => {
      if (!isClickedElementInsideTarget('notifications_container', e.target)) closeNotifications();
    };
    window.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('click', handleClick);
      dispatch(clearNotifications());
    };
  }, []);

  return (
    <div className={styles.notifications}>
      <h3>Notifications</h3>

      {!isDataLoaded ? (
        <Spinner style={{ fontSize: 6, top: '42px', color: '#000000' }} />
      ) : notifications.length === 0 ? (
        <NoNotifications styles={styles} />
      ) : (
        <NotificationsList closeNotifications={closeNotifications} />
      )}
    </div>
  );
};

const NotificationsList = ({ closeNotifications }) => {
  const {
    notifications: { data: notifications },
  } = useSelector(state => state.authUser);

  return (
    <>
      {notifications.map((notification, index) => {
        if (index >= 5) return;
        return (
          <div onClick={() => closeNotifications()} key={index}>
            <Notification
              notification={notification}
              key={index}
              closeNotifications={closeNotifications}
              styles={styles}
            />
          </div>
        );
      })}

      <div className={styles.seeMore}>
        <Link href="/dashboard/notifications">See All</Link>
      </div>
    </>
  );
};

export { Notifications };
