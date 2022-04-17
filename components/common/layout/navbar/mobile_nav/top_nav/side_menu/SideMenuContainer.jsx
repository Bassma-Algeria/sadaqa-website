import React from "react";

// styles
import styles from "../../../../../../../styles/navbar.module.scss";

// compoents
import Header from "./Header";
import LinksLists from "./LinksLists";

const SideMenu = ({ closeMenu, isOpen, sideMenu }) => {
  return (
    <>
      {isOpen && <div className={styles.overlay} onClick={closeMenu} />}

      <div
        className={`${styles.sideMenu} ${isOpen ? styles.open : styles.close}`}
        ref={sideMenu}
      >
        <Header closeMenu={closeMenu} />
        <div className={styles.divider} />
        <LinksLists closeMenu={closeMenu} />
      </div>
    </>
  );
};

export default SideMenu;
