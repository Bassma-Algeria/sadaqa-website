import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

// styles
import styles from "../../styles/login.module.scss";

// helpers
import { getLoginInputsData } from "../../data/signupLoginInputsData";

// components
import Input from "../common/inputs/Input";

const Inputs = ({ inputValues, setInputValues }) => {
  const { errors } = useSelector((state) => state.UI);

  const [isSeePasswordIcon, setIsSeePasswordIcon] = useState(false);
  const [inputsData, setInputsData] = useState([]);

  useEffect(() => {
    setInputsData(
      getLoginInputsData(isSeePasswordIcon, setIsSeePasswordIcon, errors)
    );
  }, [errors, isSeePasswordIcon]);

  return (
    <>
      {inputsData.map((inputData, index) => {
        return (
          <Input
            key={index}
            {...inputData}
            inputValues={inputValues}
            setInputValues={setInputValues}
          />
        );
      })}

      {errors && errors.credentials && (
        <p className={styles.credentialsError}>{errors.credentials}</p>
      )}
    </>
  );
};

export default Inputs;
