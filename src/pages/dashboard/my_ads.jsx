import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";

// styles
import styles from "../../styles/dashboard.module.scss";

// redux
import { clearPosts } from "../../redux/reducers/postsSlice";

// components
import Layout from "../../components/common/layout/Layout";
import { SecondaryBackground } from "../../components/common/others/SecondaryBackground";
import { Container } from "../../components/common/containers/Container";
import PageMetaData from "../../components/common/others/PageMetaData";
import AdsContainer from "../../components/dashboard/my_ads/AdsContainer";
import { Header } from "../../components/common/others/Headers";

export default function My_ads() {
  const { isAuthenticated } = useSelector((state) => state.authUser);
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated) router.back();

    return () => dispatch(clearPosts());
  }, []);

  return (
    <Layout withoutFooter navbarWithBoxShadow withDashboardSidebar>
      <PageMetaData title={"Sadaqa صدقة | My Ads"} />

      <SecondaryBackground style={{ minHeight: "100vh" }}>
        <div className={styles.myAds}>
          <Container style={{ paddingBottom: 40 }}>
            <Header>Latest Ads</Header>
            <AdsContainer />
          </Container>
        </div>
      </SecondaryBackground>
    </Layout>
  );
}
