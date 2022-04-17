import React from "react";

// styles
import styles from "../../../styles/dashboard.module.scss";

// helpers
import { SETTINGS_SECTION_DATA } from "../../../data/dashboard";

// components
import Layout from "../../../components/common/layout/Layout";
import PageMetaData from "../../../components/common/others/PageMetaData";
import { SecondaryBackground } from "../../../components/common/others/SecondaryBackground";
import { Container } from "../../../components/common/containers/Container";
import LogoutButton from "../../../components/dashboard/settings/index/LogoutButton";
import SettingSection from "../../../components/dashboard/settings/index/section";

const index = () => {
  return (
    <Layout withoutFooter navbarWithBoxShadow withDashboardSidebar>
      <PageMetaData title={"Sadaqa صدقة | Settings"} />

      <SecondaryBackground style={{ minHeight: "100vh" }}>
        <div className={styles.settings}>
          <Container style={{ maxWidth: 800, paddingBottom: 40 }}>
            {SETTINGS_SECTION_DATA.map((sectionData, index) => {
              return <SettingSection {...sectionData} key={index} />;
            })}

            <LogoutButton />
          </Container>
        </div>
      </SecondaryBackground>
    </Layout>
  );
};

export default index;
