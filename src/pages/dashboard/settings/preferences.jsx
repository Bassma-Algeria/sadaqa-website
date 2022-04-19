import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

// styles
import styles from "../../../styles/dashboard.module.scss";

// components
import Layout from "../../../components/common/layout/Layout";
import { SecondaryBackground } from "../../../components/common/others/SecondaryBackground";
import { Container } from "../../../components/common/containers/Container";
import PageMetaData from "../../../components/common/others/PageMetaData";
import DisplayModeSection from "../../../components/dashboard/settings/preferences/DisplayModeSection";
import LanguageSection from "../../../components/dashboard/settings/preferences/LanguageSection";

export default function Preferences() {
  const { isAuthenticated } = useSelector((state) => state.authUser);
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated) router.back();
  }, []);

  return (
    <Layout withoutFooter navbarWithBoxShadow withDashboardSidebar>
      <PageMetaData title={"Sadaqa صدقة | Preferences"} />

      <SecondaryBackground style={{ minHeight: "100vh" }}>
        <div className={styles.preferences}>
          <Container style={{ maxWidth: 800, paddingBottom: 40 }}>
            <DisplayModeSection />
            <LanguageSection />
          </Container>
        </div>
      </SecondaryBackground>
    </Layout>
  );
}
