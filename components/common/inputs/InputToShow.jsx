import React from "react";

// components
import Dropdown from "../inputs/DropdownInput";
import Input from "../inputs/Input";
import TextAreaInput from "../inputs/TextAreaInput";

const InputToShow = ({ inputData, inputValues, setInputValues }) => {
  if (inputData.type === "dropdown") {
    return (
      <Dropdown
        {...inputData}
        inputValues={inputValues}
        setInputValues={setInputValues}
      />
    );
  } else if (inputData.type === "textAria") {
    return (
      <TextAreaInput
        {...inputData}
        inputValues={inputValues}
        setInputValues={setInputValues}
      />
    );
  }
  return (
    <Input
      {...inputData}
      inputValues={inputValues}
      setInputValues={setInputValues}
    />
  );
};

export default InputToShow;
