import React from 'react';
import { useSelector } from 'react-redux';
import { ReactSVG } from 'react-svg';
import { useRouter } from 'next/router';
import Link from 'next/link';

// styles
import styles from '../../../../../../styles/navbar.module.scss';

// images
import settingsIcon from '../../../../../../../public/svg/dashboard_settings_icon_empty.svg';

// images and icons
import searchIcon from '../../../../../../../public/svg/search_icon.svg';
import { isDashboardLinks } from '../../../../../../utils/navbarHelpers';
import { getProfilePic } from '../../../../../../utils/usersHelpers';
import Image from 'next/image';

const RightIcon = ({ openSearchBar }) => {
  const {
    profileInfo: {
      generalInfo: { gender },
      profilePic: { link: profilePicLink },
    },
  } = useSelector(state => state.authUser);

  const router = useRouter();

  return (
    <div className={styles.rightIcon}>
      {!isDashboardLinks(router.asPath) ? (
        <ReactSVG src={searchIcon.src} onClick={openSearchBar} />
      ) : (
        <>
          <Link href="/dashboard/settings">
            <div>
              <ReactSVG src={settingsIcon.src} />
            </div>
          </Link>
          <Link href="/dashboard/profile">
            <div className={styles.profilePic}>
              <img src={getProfilePic(profilePicLink, gender)} alt="profile pic" />
            </div>
          </Link>
        </>
      )}
    </div>
  );
};

export default RightIcon;
