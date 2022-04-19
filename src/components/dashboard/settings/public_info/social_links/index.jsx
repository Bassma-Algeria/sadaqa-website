import React from "react";

// components
import { SettingsHeader } from "../../../../common/others/Headers";
import InputsList from "./Inputs";

const SocialLinksSection = ({ inputValues, setInputValues }) => {
  return (
    <>
      <SettingsHeader style={{ marginTop: 40 }}>
        social media accounts
      </SettingsHeader>
      <p style={{ marginTop: -20, marginBottom: 24 }}>
        Copy and paste your social media links.
      </p>
      <InputsList inputValues={inputValues} setInputValues={setInputValues} />
    </>
  );
};

export default SocialLinksSection;
