import React from "react";
import Link from "next/link";

// styles
import styles from "../../../../../../styles/navbar.module.scss";

// images and icons
import logo from "../../../../../../public/images/sadaqa-logo.png";

const Logo = () => {
  return (
    <Link href="/">
      <div className={styles.logoContainer}>
        <img src={logo.src} alt="" />
      </div>
    </Link>
  );
};

export default Logo;
