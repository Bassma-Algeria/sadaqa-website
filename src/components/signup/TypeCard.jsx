import React from "react";

// styles
import styles from "../../styles/signup.module.scss";

const TypeCard = (props) => {
  const handleClick = () => {
    if (!props.isSelected) {
      props.setInputValues({ ...props.inputValues, roleId: props.roleId });
    } else {
      props.setInputValues({ ...props.inputValues, roleId: null });
    }

    props.setSelectedType(props.id);
  };

  return (
    <div
      className={`${styles.typeCard} ${props.isSelected && styles.selected}`}
      onClick={handleClick}
    >
      <div className={styles.radioButton}>
        <div className={styles.circleInside}></div>
      </div>

      <h4>{props.text}</h4>
    </div>
  );
};

export default TypeCard;
