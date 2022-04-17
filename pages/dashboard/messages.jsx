import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";

// styles
import styles from "../../styles/dashboard.module.scss";

// redux
import { clearMessagesSlice } from "../../redux/reducers/messagesSlice";

// components
import Layout from "../../components/common/layout/Layout";
import { SecondaryBackground } from "../../components/common/others/SecondaryBackground";
import PageMetaData from "../../components/common/others/PageMetaData";
import ContactsSection from "../../components/dashboard/messages/contacts_section";
import ConversationSection from "../../components/dashboard/messages/conversation_section/ConversationSection";

export default function Messages() {
  const { isAuthenticated } = useSelector((state) => state.authUser);
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated) {
      router.back();
      return;
    }

    return () => dispatch(clearMessagesSlice());
  }, []);

  return (
    <Layout
      withoutFooter
      navbarWithBoxShadow
      withDashboardSidebar
      dashboardSidebarCollapse
    >
      <PageMetaData title={"Sadaqa صدقة | Messages"} />

      <SecondaryBackground>
        <div className={styles.messages}>
          <ContactsSection />
          <ConversationSection />
        </div>
      </SecondaryBackground>
    </Layout>
  );
}
