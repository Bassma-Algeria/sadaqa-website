import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useCookies } from "react-cookie";
import { ReactSVG } from "react-svg";
import Link from "next/link";

// styles
import styles from "../../../../../../../styles/navbar.module.scss";

// images and icons
import rightArrow from "../../../../../../../public/svg/right_arrow_nav_links.svg";

// helpers
import {
  getNameToShow,
  getProfilePic,
} from "../../../../../../../utils/usersHelpers";
import { LANGUAGES } from "../../../../../../../utils/constants";

// components
import Button from "../../../../../buttons/Button";

const Header = ({ closeMenu }) => {
  const { isAuthenticated } = useSelector((state) => state.authUser);

  return isAuthenticated ? (
    <Profile closeMenu={closeMenu} />
  ) : (
    <LoginButtons closeMenu={closeMenu} />
  );
};

const Profile = ({ closeMenu }) => {
  const {
    generalInfo: { first_name, last_name, association_name, gender },
    profilePic: { link: profilePicLink },
  } = useSelector((state) => state.authUser.profileInfo);

  return (
    <div className={styles.profile}>
      <LanguagesContainer />

      <div className={styles.profilePicContainer}>
        <img src={getProfilePic(profilePicLink, gender)} alt="" />
      </div>

      <Link href="/dashboard/profile">
        <div className={styles.name} onClick={closeMenu}>
          <h1>{getNameToShow(association_name, first_name, last_name)}</h1>
          <ReactSVG src={rightArrow.src} />
        </div>
      </Link>
    </div>
  );
};

const LanguagesContainer = () => {
  const [cookies, setCookies] = useCookies(["preferLanguage"]);

  const [languageSelected, setLanguageSelected] = useState(
    cookies.preferLanguage || "ع"
  );

  useEffect(() => {
    if (cookies.preferLanguage) {
      setLanguageSelected(cookies.preferLanguage);
    }
  }, [cookies.preferLanguage]);

  const handleChange = (e) => {
    setCookies("preferLanguage", e.target.value, { path: "/" });
  };

  return (
    <div className={styles.languageContainer}>
      <select value={languageSelected} onChange={handleChange} name="language">
        {LANGUAGES.map((lang, index) => {
          return (
            <option value={lang.shortcut} key={index}>
              {lang.shortcut}
            </option>
          );
        })}
      </select>
    </div>
  );
};

const LoginButtons = ({ closeMenu }) => {
  return (
    <div className={styles.loginButtons} onClick={closeMenu}>
      <Link href="/signup">
        <Button secondary size="sm" className={styles.secondary}>
          Sign up
        </Button>
      </Link>
      <Link href="/login">
        <Button primary size="sm" className={styles.primary}>
          Login
        </Button>
      </Link>
    </div>
  );
};

export default Header;
