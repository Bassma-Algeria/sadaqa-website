import React from "react";
import { ReactSVG } from "react-svg";

// styles
import styles from "../../../../styles/dashboard.module.scss";

// images and icons
import darkModeIcon from "../../../../public/svg/dark_mode_dashboard_icon.svg";

// components
import DisplayModeToggleButton from "../../../common/buttons/DisplayModeToggleButton";
import { SettingsHeader } from "../../../common/others/Headers";

const DisplayModeSection = () => {
  return (
    <section className={styles.displayModeSection}>
      <SettingsHeader style={{ marginBottom: "1rem" }}>
        Display Mode
      </SettingsHeader>
      <p>
        Adjust the apparance of Sadaqa to reduce glare <br /> and give your eyes
        a break.
      </p>

      <div className={styles.changeModeButtonContainer}>
        <div className={styles.iconAndText}>
          <ReactSVG src={darkModeIcon.src} />
          <p>Dark Mode</p>
        </div>
        <DisplayModeToggleButton />
      </div>
    </section>
  );
};

export default DisplayModeSection;
