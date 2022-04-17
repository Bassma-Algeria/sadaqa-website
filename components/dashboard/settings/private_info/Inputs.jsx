import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

// helpers
import { getEditCredentialsInputData } from "../../../../data/settingsInputsData";

// components
import Input from "../../../common/inputs/Input";

const Inputs = ({ inputValues, setInputValues }) => {
  const { errors } = useSelector((state) => state.UI);

  const [inputsData, setInputsData] = useState([]);
  const [isSeeOldPasswordIcon, setIsSeeOldPasswordIcon] = useState(false);
  const [isSeeNewPasswordIcon, setIsSeeNewPasswordIcon] = useState(false);
  const [isSeeConfirmNewPasswordIcon, setIsSeeConfirmNewPasswordIcon] =
    useState(false);

  useEffect(() => {
    setInputsData(
      getEditCredentialsInputData(
        errors,
        isSeeOldPasswordIcon,
        setIsSeeOldPasswordIcon,
        isSeeNewPasswordIcon,
        setIsSeeNewPasswordIcon,
        isSeeConfirmNewPasswordIcon,
        setIsSeeConfirmNewPasswordIcon
      )
    );
  }, [
    errors,
    isSeeConfirmNewPasswordIcon,
    isSeeOldPasswordIcon,
    isSeeNewPasswordIcon,
  ]);

  return inputsData.map((inputData, index) => {
    return (
      <Input
        key={index}
        {...inputData}
        inputValues={inputValues}
        setInputValues={setInputValues}
      />
    );
  });
};

export default Inputs;
