import React from "react";
import { ReactSVG } from "react-svg";
import Link from "next/link";

// styles
import styles from "../../../../../../../styles/navbar.module.scss";

// helpers
import {
  donationsCategories,
  peopleNeedHelpCategories,
} from "../../../../../../../data/navbarData";

const LinksLists = ({ closeMenu }) => {
  return (
    <>
      <h1>People Need help</h1>
      {peopleNeedHelpCategories.map((category, index) => {
        return <Category key={index} {...category} closeMenu={closeMenu} />;
      })}

      <div className={styles.divider} />

      <h1>Donations</h1>
      {donationsCategories.map((category, index) => {
        return <Category key={index} {...category} closeMenu={closeMenu} />;
      })}
    </>
  );
};

const Category = ({ title, icon, pageLink, closeMenu }) => {
  return (
    <Link href={pageLink}>
      <div className={styles.category} onClick={closeMenu}>
        <div className={styles.iconContainer}>
          <ReactSVG src={icon} />
        </div>
        <p>{title}</p>
      </div>
    </Link>
  );
};

export default LinksLists;
