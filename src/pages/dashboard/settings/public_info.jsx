import React, { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import moment from "moment";

// styles
import styles from "../../../styles/dashboard.module.scss";

// redux
import { editGeneralInfo } from "../../../redux/actions/userActions";
import { clearErrors } from "../../../redux/reducers/UISlice";

// components
import Layout from "../../../components/common/layout/Layout";
import { SecondaryBackground } from "../../../components/common/others/SecondaryBackground";
import { Container } from "../../../components/common/containers/Container";
import PageMetaData from "../../../components/common/others/PageMetaData";
import GeneralInfoSection from "../../../components/dashboard/settings/public_info/general_info";
import ButtonsContainer from "../../../components/dashboard/settings/public_info/ButtonsContainer";
import SocialLinksSection from "../../../components/dashboard/settings/public_info/social_links";

export default function Public_info() {
  const {
    authUser: {
      profileInfo: {
        generalInfo: {
          username,
          association_name: associationName,
          first_name: firstName,
          last_name: lastName,
          gender,
          birthday,
          phone_num: phoneNum,
          wilaya,
          commun,
        },
        profilePic: { link: profilePic },
        socialAccounts,
      },
      isAuthenticated,
    },
    UI: { errors },
  } = useSelector((state) => state);
  const dispatch = useDispatch();

  const router = useRouter();

  const initialeState = {
    username,
    associationName,
    firstName,
    lastName,
    gender,
    birthday: moment(birthday).format("YYYY-MM-DD"),
    phoneNum,
    wilaya,
    commun,
    profilePic,
    socialAccounts,
  };
  const [inputValues, setInputValues] = useState(initialeState);

  const handleDiscard = () => {
    setInputValues({ ...initialeState });
    dispatch(clearErrors());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();

    for (const [key, value] of Object.entries(inputValues)) {
      if (key !== "socialAccounts") formData.append(key, value);
      else formData.append(key, JSON.stringify(value));
    }

    dispatch(editGeneralInfo(formData));
  };

  useEffect(() => {
    if (!isAuthenticated) router.back();

    return () => dispatch(clearErrors());
  }, []);

  return (
    <Layout withoutFooter navbarWithBoxShadow withDashboardSidebar>
      <PageMetaData title={"Sadaqa صدقة | Public Informations"} />

      <SecondaryBackground style={{ minHeight: "100vh" }}>
        <div className={styles.publicInfo}>
          <Container style={{ maxWidth: 800, paddingBottom: 40 }}>
            <form onSubmit={handleSubmit}>
              <GeneralInfoSection
                inputValues={inputValues}
                setInputValues={setInputValues}
              />
              <SocialLinksSection
                inputValues={inputValues}
                setInputValues={setInputValues}
              />
              {Object.keys(errors).length > 0 && (
                <p className={styles.errorMessage}>
                  Invalid Inputs, please try again
                </p>
              )}
              <ButtonsContainer
                handleDiscard={handleDiscard}
                handleSubmit={handleSubmit}
              />
            </form>
          </Container>
        </div>
      </SecondaryBackground>
    </Layout>
  );
}
