import React from "react";

// components
import { SettingsHeader } from "../../../../common/others/Headers";
import SettingItem from "./SettingItem";

const SettingSection = ({ sectionTitle, sectionItems }) => {
  return (
    <div style={{ marginTop: 30 }}>
      <SettingsHeader>{sectionTitle}</SettingsHeader>
      {sectionItems.map((item, index) => {
        return <SettingItem {...item} key={index} />;
      })}
    </div>
  );
};

export default SettingSection;
