import React, { useEffect, useState } from "react";
import Link from "next/link";
import { ReactSVG } from "react-svg";
import { useTranslation } from "next-i18next";

// styles
import styles from "../../../../../styles/navbar.module.scss";

// helpers
import {
  donationsCategories,
  peopleNeedHelpCategories,
} from "../../../../../data/navbarData";

const NavLinks = ({ isSearchBarOpen }) => {
  return (
    <ul className={isSearchBarOpen ? styles.hideNavLinks : ""}>
      <li>
        <PeopleNeedHelpNavLink />
      </li>
      <li>
        <DonationsNavLink />
      </li>
      <li>
        <Link href="/create_new_ad">Request a Donation</Link>
      </li>
    </ul>
  );
};

const PeopleNeedHelpNavLink = () => {
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const { t, i18n } = useTranslation();

  return (
    <div
      className={styles.categoriesContainer}
      onMouseOver={() => setIsCategoriesOpen(true)}
    >
      <Link href="/people_need_help">{t("People Need Help")}</Link>

      {isCategoriesOpen && (
        <CategoriesList
          categories={peopleNeedHelpCategories}
          title={"Give Help To Others"}
          containerId={"peopleNeedHelpCategories"}
          closeCategories={() => setIsCategoriesOpen(false)}
          style={{ width: "auto", padding: "20px", left: "-50px" }}
        />
      )}
    </div>
  );
};

const DonationsNavLink = () => {
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);

  return (
    <div
      className={styles.categoriesContainer}
      onMouseOver={() => setIsCategoriesOpen(true)}
    >
      <Link href="/donations">Donations</Link>

      {isCategoriesOpen && (
        <CategoriesList
          categories={donationsCategories}
          title={"Donations"}
          containerId={"donationsCategories"}
          closeCategories={() => setIsCategoriesOpen(false)}
        />
      )}
    </div>
  );
};

const CategoriesList = ({
  title,
  categories,
  closeCategories,
  containerId,
  style,
}) => {
  useEffect(() => {
    const handleWindowClick = (e) => {
      if (!document.getElementById(containerId).contains(e.target)) {
        closeCategories();
      }
    };
    window.addEventListener("click", handleWindowClick);

    return () => window.removeEventListener("click", handleWindowClick);
  }, []);

  return (
    <div
      className={`${styles.categories}`}
      style={{ ...style }}
      onMouseLeave={() => closeCategories()}
      id={containerId}
    >
      <h3>{title}</h3>
      {categories.map((category, index) => {
        return (
          <Category
            key={index}
            {...category}
            onClick={() => closeCategories()}
          />
        );
      })}
    </div>
  );
};

const Category = ({ pageLink, icon, title, onClick }) => (
  <Link href={pageLink}>
    <div className={styles.category} onClick={onClick}>
      <div className={styles.categoryIcon}>
        <ReactSVG src={icon} />
      </div>
      <p>{title}</p>
    </div>
  </Link>
);

export { NavLinks };
