import React from "react";
import { ReactSVG } from "react-svg";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";

// styles
import styles from "../../../../styles/dashboard.module.scss";

// images and icons
import logoutIcon from "../../../../public/svg/logout_nav_icon.svg";

// helpers
import { logoutUser } from "../../../../redux/actions/userActions";

const LogoutButton = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const handleClick = () => {
    dispatch(logoutUser());
    router.push("/");
  };

  return (
    <div style={{ marginTop: 30 }}>
      <hr style={{ color: "#c8c8c8" }} />
      <div className={styles.settingItem} onClick={handleClick}>
        <div className={styles.title}>
          <ReactSVG className={styles.iconContainer} src={logoutIcon.src} />
          <p>Logout</p>
        </div>
      </div>
    </div>
  );
};

export default LogoutButton;
