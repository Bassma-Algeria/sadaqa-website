import { useState, useEffect, Fragment } from "react";
import Link from "next/link";
import { ReactSVG } from "react-svg";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";

// styles
import styles from "../../../../../styles/navbar.module.scss";

// images and icons
import rightArrow from "../../../../../public/svg/right_arrow_nav_links.svg";

// redux
import { logoutUser } from "../../../../../redux/actions/userActions";

// helpers
import {
  getDashbaordLinkTitleToShow,
  isClickedElementInsideTarget,
  isDarkModeToggle,
} from "../../../../../utils/navbarHelpers";
import { dashboardLinks } from "../../../../../data/navbarData";
import {
  getProfilePic,
  getNameToShow,
} from "../../../../../utils/usersHelpers";

// components
import DisplayModeToggleButton from "../../../buttons/DisplayModeToggleButton";

const ProfileImg = () => {
  const [isDashboardLinksOpen, setIsDashboardLinksOpen] = useState(false);

  return (
    <div
      className={styles.profileImgWithDashboardLinks}
      id="dashboadLinksContainer"
    >
      <div className={styles.profileImgContainer}>
        <ProfileImageContainer
          isOpen={isDashboardLinksOpen}
          setIsOpen={setIsDashboardLinksOpen}
        />
      </div>

      {isDashboardLinksOpen && (
        <DashboardLinks
          isOpen={isDashboardLinksOpen}
          setIsOpen={setIsDashboardLinksOpen}
        />
      )}
    </div>
  );
};

const DashboardLinks = ({ isOpen, setIsOpen }) => {
  const {
    profileInfo: {
      generalInfo: { first_name, association_name },
    },
  } = useSelector((state) => state.authUser);

  useEffect(() => {
    const handleClick = (e) => {
      if (!isClickedElementInsideTarget("dashboadLinksContainer", e.target))
        setIsOpen(false);
    };
    window.addEventListener("click", handleClick);

    return () => window.removeEventListener("click", handleClick);
  }, []);

  return (
    <div className={styles.dashboardLinks}>
      <div className={styles.header}>
        <ProfileImageContainer
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          withoutNumOfMessages
        />
        <Link href="/dashboard/profile">
          <div className={styles.profileLink} onClick={() => setIsOpen(false)}>
            <h3>{getNameToShow(association_name, first_name)}</h3>
            <ReactSVG src={rightArrow.src} />
          </div>
        </Link>
      </div>

      {dashboardLinks.map((link, index) => {
        return (
          <LinkToShow
            link={link}
            key={index}
            index={index}
            closeLinks={() => setIsOpen(false)}
          />
        );
      })}
    </div>
  );
};

const LinkToShow = ({ link, closeLinks, index }) => {
  if (!link.pageLink) {
    return (
      <>
        {index !== 1 && <hr />}
        <DashboardLink {...link} closeLinks={closeLinks} />
      </>
    );
  }

  return (
    <>
      {index !== 1 && <hr />}
      <Link href={link.pageLink}>
        <div>
          <DashboardLink {...link} closeLinks={closeLinks} />
        </div>
      </Link>
    </>
  );
};

const DashboardLink = ({ title, icon, closeLinks }) => {
  const { numOfUnreadMessages } = useSelector((state) => state.authUser);

  const dispatch = useDispatch();
  const router = useRouter();

  const titleToShow = getDashbaordLinkTitleToShow(title, numOfUnreadMessages);

  const handleClick = () => {
    if (title === "Logout") {
      router.prefetch("/");
      if (router.asPath.includes("dashboard")) router.push("/");
      dispatch(logoutUser());
    }

    if (isDarkModeToggle(title)) return;
    closeLinks();
  };

  return (
    <div
      className={styles.dashboardLink}
      onClick={handleClick}
      style={{ cursor: isDarkModeToggle(title) ? "default" : "pointer" }}
    >
      <div className={styles.text}>
        <div className={styles.iconContainer}>
          <ReactSVG src={icon} />
        </div>
        <p>{titleToShow}</p>
      </div>
      {isDarkModeToggle(title) && <DisplayModeToggleButton small />}
    </div>
  );
};

const ProfileImageContainer = ({ withoutNumOfMessages, isOpen, setIsOpen }) => {
  const {
    profileInfo: {
      generalInfo: { gender },
      profilePic: { link: profilePicLink },
    },
    numOfUnreadMessages,
  } = useSelector((state) => state.authUser);

  return (
    <div className={styles.profileImg} onClick={() => setIsOpen(!isOpen)}>
      <img src={getProfilePic(profilePicLink, gender)} alt="profile image" />

      {!withoutNumOfMessages && numOfUnreadMessages > 0 && (
        <div className={styles.numOfMessages}>
          <p>{numOfUnreadMessages}</p>
        </div>
      )}
    </div>
  );
};

export { ProfileImg };
