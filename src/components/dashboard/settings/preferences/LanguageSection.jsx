import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";

// styles
import styles from "../../../../styles/dashboard.module.scss";

// helpers
import { LANGUAGES_DROP_DOWN } from "../../../../data/dashboard";
import {
  getLanguageShortcut,
  getLanguageValue,
} from "../../../../utils/dashboardHelpers";

// components
import Dropdown from "../../../common/inputs/DropdownInput";
import { SettingsHeader } from "../../../common/others/Headers";

const LanguageSection = () => {
  const [cookies, setCookies] = useCookies(["preferLanguage"]);

  const [preferedLanguage, setPreferedLanguage] = useState({
    language: getLanguageValue(cookies.preferLanguage) || "العربية",
  });

  useEffect(() => {
    setCookies(
      "preferLanguage",
      getLanguageShortcut(preferedLanguage.language),
      { path: "/" }
    );
  }, [preferedLanguage]);

  return (
    <section className={styles.languageSection}>
      <SettingsHeader style={{ marginBottom: "1rem" }}>Language</SettingsHeader>
      <p>Choose your preferred language</p>

      <div className={styles.inputContainer}>
        <Dropdown
          {...LANGUAGES_DROP_DOWN}
          inputValues={preferedLanguage}
          setInputValues={setPreferedLanguage}
        />
      </div>
    </section>
  );
};

export default LanguageSection;
