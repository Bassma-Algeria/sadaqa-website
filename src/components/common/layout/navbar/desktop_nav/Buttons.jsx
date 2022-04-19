import React from "react";
import Link from "next/link";
import { useSelector } from "react-redux";

// style
import styles from "../../../../../styles/navbar.module.scss";

// components
import Button from "../../../buttons/Button";
import { Notifications } from "./Notifications";
import { ProfileImg } from "./ProfileImg";

const Buttons = () => {
  const { isAuthenticated } = useSelector((state) => state.authUser);

  return (
    <div className={styles.btnsContainer}>
      {isAuthenticated ? (
        <>
          <Notifications />
          <ProfileImg />
          <Link href="/create_new_ad">
            <Button primary size="sm">
              Donate
            </Button>
          </Link>
        </>
      ) : (
        <>
          <Link href="/login">
            <Button secondary size="sm">
              Log In
            </Button>
          </Link>
          <Link href="/signup">
            <Button primary size="sm">
              Sign up
            </Button>
          </Link>
        </>
      )}
    </div>
  );
};

export default Buttons;
