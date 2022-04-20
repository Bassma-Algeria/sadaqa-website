import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { ReactSVG } from 'react-svg';

// styles
import styles from '../../../../styles/profile.module.scss';

// images and icons
import phoneIcon from '../../../../public/svg/phone_icon.svg';
import locationIcon from '../../../../public/svg/location_icon.svg';

// helpers
import {
  getAppropriateSocialIcon,
  getProfilePic,
  getNameToShow,
} from '../../../../utils/usersHelpers';

// components
import OnlineStatus from '../../others/OnlineStatus';
import Image from 'next/image';

const BaseUserCard = ({ userInfo, userProfilePic, userSocialLinks, style, children }) => {
  return (
    <div className={styles.profileCardContainer} id="user_card" style={{ ...style }}>
      <div className={styles.cardHeader}>
        <ProfilePic profilePic={userProfilePic.link} {...userInfo} />
        <UserInfo {...userInfo} />
      </div>
      <div className={styles.divider} />
      <div className={styles.cardBottom}>
        <ContactsInfoList {...userInfo} />
        <SocialIcons links={userSocialLinks} />
        {children}
      </div>
    </div>
  );
};

const ProfilePic = ({ profilePic, gender, user_id }) => {
  return (
    <div className={styles.profilePic}>
      <div className={styles.imgContainer}>
        <img src={getProfilePic(profilePic, gender)} alt="profile pic" />
      </div>
      <OnlineStatus className={styles.onlineStatus} userId={user_id} size="lg" />
    </div>
  );
};

const UserInfo = props => {
  const router = useRouter();

  return (
    <>
      <h1>{getNameToShow(props.association_name, props.first_name, props.last_name)}</h1>

      <p>
        {router.asPath.includes('post') ? (
          <Link href={`/users/${props.user_id}`}>See Profile</Link>
        ) : (
          `@${props.username}`
        )}
      </p>
    </>
  );
};

const ContactsInfoList = props => {
  return (
    <>
      <ContactInfo iconLink={locationIcon.src} data={`${props.commun}, ${props.wilaya}`} />
      <ContactInfo iconLink={phoneIcon.src} data={props.phone_num} />
    </>
  );
};

const ContactInfo = ({ iconLink, data }) => {
  return (
    <div className={styles.contactInfo}>
      <ReactSVG src={iconLink} />
      <p>{data}</p>
    </div>
  );
};

const SocialIcons = ({ links }) => {
  return (
    <div className={styles.socialIcons}>
      {links.map(
        (socialLink, index) =>
          socialLink?.link && (
            <SocialIcon key={index} platform={socialLink.platform} link={socialLink.link} />
          ),
      )}
    </div>
  );
};

const SocialIcon = ({ platform, link }) => {
  const icon = getAppropriateSocialIcon(platform);
  return (
    <a href={link} target="_blank" rel="noreferrer">
      <ReactSVG src={icon} />
    </a>
  );
};

export default BaseUserCard;
