import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

// styles
import styles from "../../styles/createNewAdd.module.scss";

// helpers
import { createNewAdInputData } from "../../data/createNewAdInputData";
import { getWilayaId } from "../../utils/usersHelpers";
import {
  isAdTypeChoosen,
  isCallForHelpSpecificInputs,
  isDonationOrDonationRequest,
  isDonationsSpecificInputs,
  isSpecificInputs,
} from "../../utils/createNewAdHelpers";

// components
import DragAndDropBox from "../common/inputs/DragAndDropBox";
import InputToShow from "../common/inputs/InputToShow";

const Inputs = ({ inputValues, setInputValues }) => {
  const {
    authUser: {
      profileInfo: {
        generalInfo: { role },
      },
    },
    UI: { errors },
  } = useSelector((state) => state);
  const [inputsData, setInputsData] = useState([]);

  useEffect(() => {
    setInputsData(
      createNewAdInputData({
        errors,
        choosenWilayaId: getWilayaId(inputValues.wilaya),
        role,
      })
    );
  }, [errors, inputValues.wilaya]);

  return (
    <>
      {inputsData.map((inputData, index) => {
        return (
          <NewAdInputToShow
            key={index}
            inputData={inputData}
            inputValues={inputValues}
            setInputValues={setInputValues}
          />
        );
      })}

      <DragAndDropBox
        label="Pictures"
        inputValues={inputValues}
        setInputValues={setInputValues}
        filesPropertyName={"postPhotos"}
        filesPropertyValues={inputValues.postPhotos}
        errorMessage={errors.postPhotos}
      />

      {Object.keys(errors).length > 0 && (
        <p className={styles.errorMessage}>Invalid Inputs, please try again</p>
      )}
    </>
  );
};

const NewAdInputToShow = ({ inputData, inputValues, setInputValues }) => {
  if (!isAdTypeChoosen(inputValues.typeId) && isSpecificInputs(inputData.name))
    return null;
  else if (
    isDonationOrDonationRequest(inputValues.typeId) &&
    isCallForHelpSpecificInputs(inputData.name)
  )
    return null;
  else if (
    !isDonationOrDonationRequest(inputValues.typeId) &&
    isDonationsSpecificInputs(inputData.name)
  )
    return null;

  return (
    <InputToShow
      inputData={inputData}
      inputValues={inputValues}
      setInputValues={setInputValues}
    />
  );
};

export default Inputs;
