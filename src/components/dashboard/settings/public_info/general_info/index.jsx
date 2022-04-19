import React from "react";

// components
import { SettingsHeader } from "../../../../common/others/Headers";
import ProfileImageInput from "./ProfileImageInput";
import TextInputs from "./TextInputs";

const GeneralInfoSection = ({ inputValues, setInputValues }) => {
  return (
    <>
      <SettingsHeader>general Information</SettingsHeader>
      <ProfileImageInput
        inputValues={inputValues}
        setInputValues={setInputValues}
      />
      <TextInputs inputValues={inputValues} setInputValues={setInputValues} />
    </>
  );
};

export default GeneralInfoSection;
