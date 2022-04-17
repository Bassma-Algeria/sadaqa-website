import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";

// styles
import styles from "../../styles/dashboard.module.scss";

// components
import Layout from "../../components/common/layout/Layout";
import { SecondaryBackground } from "../../components/common/others/SecondaryBackground";
import PageMetaData from "../../components/common/others/PageMetaData";
import Salutation from "../../components/dashboard/activities/Salutation";
import StatsContainer from "../../components/dashboard/activities/statsContainer";

export default function Activities() {
  const { isAuthenticated } = useSelector((state) => state.authUser);
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated) router.back();
  }, []);

  return (
    <Layout withoutFooter navbarWithBoxShadow withDashboardSidebar>
      <PageMetaData title={"Sadaqa صدقة | Dashboard"} />

      <SecondaryBackground style={{ minHeight: "100vh" }}>
        <div className={styles.activities}>
          <Salutation />
          <StatsContainer />
        </div>
      </SecondaryBackground>
    </Layout>
  );
}
