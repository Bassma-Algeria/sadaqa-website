import React from "react";
import { useSelector } from "react-redux";

// styles
import styles from "../../../styles/dashboard.module.scss";

// helpers
import { getNameToShow } from "../../../utils/usersHelpers";

// components
import { Container } from "../../common/containers/Container";

const Salutation = () => {
  const {
    profileInfo: {
      generalInfo: { first_name, association_name },
    },
  } = useSelector((state) => state.authUser);

  return (
    <Container style={{ paddingBottom: 20 }}>
      <h1 className={styles.salutation}>
        <span>Hi,</span> {getNameToShow(association_name, first_name)} 👋
      </h1>
    </Container>
  );
};
export default Salutation;
