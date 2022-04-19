import React, { useState } from "react";

// style
import styles from "../../styles/signup.module.scss";

// helpers
import { userTypesInputsData } from "../../data/signupLoginInputsData";

// components
import TypeCard from "./TypeCard";

const ChooseTypeSlide = ({ inputValues, setInputValues }) => {
  const [selectedType, setSelectedType] = useState(null);

  return (
    <>
      <h1 className={styles.chooseType}>
        Before Start, We just curious, Why are you joining our website :
      </h1>

      {userTypesInputsData.map((type, index) => {
        const { text, roleId } = type;
        return (
          <TypeCard
            key={index}
            text={text}
            inputValues={inputValues}
            setInputValues={setInputValues}
            roleId={roleId}
            isSelected={selectedType === index && inputValues.roleId}
            setSelectedType={setSelectedType}
            id={index}
          />
        );
      })}
    </>
  );
};

export default ChooseTypeSlide;
