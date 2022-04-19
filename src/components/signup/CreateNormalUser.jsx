import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Link from "next/link";

// style
import styles from "../../styles/signup.module.scss";

// helpers
import { signupInputData } from "../../data/signupLoginInputsData";
import { getWilayaId } from "../../utils/usersHelpers";

// components
import InputToShow from "../common/inputs/InputToShow";

const CreateNormalUser = ({ inputValues, setInputValues }) => {
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
      ).createNormalUserInputData
    );
  }, [errors, inputValues.wilaya, isSeePasswordIcon, isSeeConfirmPasswordIcon]);

  return (
    <div>
      <h1>
        Create an Account
        <p>
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
      </div>
      {Object.keys(errors).length > 0 && (
        <p className={styles.errorMessage}>Invalid Inputs, please try again</p>
      )}
    </div>
  );
};

export default CreateNormalUser;
