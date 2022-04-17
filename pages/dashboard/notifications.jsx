import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import moment from "moment";
import { useRouter } from "next/router";

// styles
import styles from "../../styles/dashboard.module.scss";

// redux
import { makeNotificationsRead } from "../../redux/actions/userActions";
import { clearNotifications } from "../../redux/reducers/authUserSlice";

// components
import Layout from "../../components/common/layout/Layout";
import { SecondaryBackground } from "../../components/common/others/SecondaryBackground";
import { Container } from "../../components/common/containers/Container";
import PageMetaData from "../../components/common/others/PageMetaData";
import NotificationsContainer from "../../components/dashboard/notifications/NotificationsContainer";

export default function Notifications() {
  const { isAuthenticated } = useSelector((state) => state.authUser);
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated) {
      router.back();
      return;
    }
    dispatch(makeNotificationsRead());

    return () => dispatch(clearNotifications());
  }, []);

  return (
    <Layout withoutFooter navbarWithBoxShadow withDashboardSidebar>
      <PageMetaData title={"Sadaqa صدقة | Notifications"} />

      <SecondaryBackground style={{ minHeight: "100vh" }}>
        <div className={styles.notifications}>
          <Container className={styles.container}>
            <div className={styles.header}>
              <h1>Notifications</h1>
            </div>

            <NotificationsContainer />
          </Container>
        </div>
      </SecondaryBackground>
    </Layout>
  );
}
