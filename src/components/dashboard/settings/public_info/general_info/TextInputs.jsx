import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

// helpers
import { getEditPersonalInformationInputData } from "../../../../../data/settingsInputsData";
import {
  isAssociationSpecificInputs,
  isNormalUserSpecificInputs,
} from "../../../../../utils/dashboardHelpers";
import { getWilayaId } from "../../../../../utils/usersHelpers";

// components
import InputToShow from "../../../../common/inputs/InputToShow";

const TextInputs = ({ inputValues, setInputValues }) => {
  const {
    authUser: {
      profileInfo: {
        generalInfo: { association_name },
      },
    },
    UI: { errors },
  } = useSelector((state) => state);

  const [inputsData, setInputsData] = useState([]);

  useEffect(() => {
    setInputsData(
      getEditPersonalInformationInputData(
        errors,
        getWilayaId(inputValues.wilaya)
      )
    );
  }, [errors, inputValues.wilaya]);

  return inputsData.map((inputData, index) => {
    return (
      <Input
        inputData={inputData}
        associationName={association_name}
        inputValues={inputValues}
        setInputValues={setInputValues}
        key={index}
      />
    );
  });
};

const Input = ({ associationName, inputData, inputValues, setInputValues }) => {
  if (!associationName) {
    if (isAssociationSpecificInputs(inputData.name)) {
      return null;
    }
  } else {
    if (isNormalUserSpecificInputs(inputData.name)) {
      return null;
    }
  }

  return (
    <InputToShow
      inputData={inputData}
      inputValues={inputValues}
      setInputValues={setInputValues}
    />
  );
};

export default TextInputs;
