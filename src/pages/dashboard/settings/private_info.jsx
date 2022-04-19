import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";

// styles
import styles from "../../../styles/dashboard.module.scss";

// redux
import { editCredentials } from "../../../redux/actions/userActions";

// components
import { SettingsHeader } from "../../../components/common/others/Headers";
import Layout from "../../../components/common/layout/Layout";
import { SecondaryBackground } from "../../../components/common/others/SecondaryBackground";
import { Container } from "../../../components/common/containers/Container";
import PageMetaData from "../../../components/common/others/PageMetaData";
import Inputs from "../../../components/dashboard/settings/private_info/Inputs";
import ButtonsContainer from "../../../components/dashboard/settings/private_info/ButtonsContainer";

export default function Private_info() {
  const {
    profileInfo: {
      generalInfo: { email },
    },
    isAuthenticated,
  } = useSelector((state) => state.authUser);
  const dispatch = useDispatch();
  const router = useRouter();

  const initialState = {
    email,
    oldPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  };
  const [inputValues, setInputValues] = useState(initialState);

  const handleDiscard = () => {
    setInputValues({ ...initialState });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(editCredentials(inputValues));
  };

  useEffect(() => {
    if (!isAuthenticated) router.back();
  }, []);

  return (
    <Layout withoutFooter navbarWithBoxShadow withDashboardSidebar>
      <PageMetaData title={"Sadaqa صدقة | Private Informations"} />

      <SecondaryBackground style={{ minHeight: "100vh" }}>
        <div className={styles.privateInfo}>
          <Container style={{ maxWidth: 800, paddingBottom: 40 }}>
            <SettingsHeader>Private Information</SettingsHeader>
            <form onSubmit={handleSubmit}>
              <Inputs
                inputValues={inputValues}
                setInputValues={setInputValues}
              />
              <ButtonsContainer
                handleDiscard={handleDiscard}
                handleSubmit={handleSubmit}
                inputValues={inputValues}
              />
            </form>
          </Container>
        </div>
      </SecondaryBackground>
    </Layout>
  );
}
