import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Link from "next/link";

// style
import styles from "../../styles/signup.module.scss";

// components
import { signupInputData } from "../../data/signupLoginInputsData";
import { getWilayaId } from "../../utils/usersHelpers";

// components
import DragAndDropBox from "../common/inputs/DragAndDropBox";
import InputToShow from "../common/inputs/InputToShow";

const CreateAssociation = ({ inputValues, setInputValues }) => {
  const { errors } = useSelector((state) => state.UI);

  const [inputsData, setInputsData] = useState([]);
  const [isSeePasswordIcon, setIsSeePasswordIcon] = useState(false);
  const [isSeeConfirmPasswordIcon, setIsSeeConfirmPasswordIcon] =
    useState(false);

  useEffect(() => {
    setInputsData(
      signupInputData(
        errors,
        getWilayaId(inputValues.wilaya),
        isSeePasswordIcon,
        setIsSeePasswordIcon,
        isSeeConfirmPasswordIcon,
        setIsSeeConfirmPasswordIcon
      ).createAssociationInputData
    );
  }, [errors, inputValues.wilaya, isSeeConfirmPasswordIcon, isSeePasswordIcon]);

  return (
    <>
      <h1>
        Create an Association <br /> Account
        <p style={{ fontWeight: 500 }}>
          Already have an account? <Link href="/login">Log in</Link>
        </p>
      </h1>

      <div>
        {inputsData.map((inputData, index) => (
          <InputToShow
            key={index}
            inputData={inputData}
            inputValues={inputValues}
            setInputValues={setInputValues}
          />
        ))}
        <DragAndDropBox
          label="Provide some legal document of your association"
          inputValues={inputValues}
          setInputValues={setInputValues}
          filesPropertyName={"associationDocs"}
          filesPropertyValues={inputValues.associationDocs}
          errorMessage={errors?.associationDocs}
        />
      </div>
      {Object.keys(errors).length > 0 && (
        <p className={styles.errorMessage}>Invalid Inputs, please try again</p>
      )}
    </>
  );
};

export default CreateAssociation;
