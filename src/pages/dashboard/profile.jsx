import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";

// styles
import styles from "../../styles/dashboard.module.scss";

// redux
import { getUser } from "../../redux/actions/userActions";
import { clearSingleUser } from "../../redux/reducers/singleUserSlice";

// components
import Layout from "../../components/common/layout/Layout";
import { Container } from "../../components/common/containers/Container";
import { SecondaryBackground } from "../../components/common/others/SecondaryBackground";
import UserCard from "../../components/common/cards/user_card/UserCard";
import Spinner from "../../components/common/loaders/Spinner";
import UserPostsContainer from "../../components/users/UserPostsContainer";
import PageMetaData from "../../components/common/others/PageMetaData";

export default function Profile() {
  const {
    singleUser: { isUserLoaded, user },
    authUser: {
      isAuthenticated,
      profileInfo: {
        generalInfo: { user_id },
      },
    },
  } = useSelector((state) => state);

  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated) {
      router.back();
      return;
    }

    dispatch(getUser(user_id));

    return () => dispatch(clearSingleUser());
  }, []);

  return (
    <Layout withoutFooter navbarWithBoxShadow withDashboardSidebar>
      <PageMetaData title={"Sadaqa صدقة | Profile"} />

      <SecondaryBackground style={{ minHeight: "100vh" }}>
        <div className={styles.profile}>
          <Container style={{ maxWidth: 1100 }}>
            {!isUserLoaded ? (
              <div style={{ height: "70vh", width: "100%" }}>
                <Spinner style={{ fontSize: 12, top: "30vh", color: "#000" }} />
              </div>
            ) : (
              <div className={styles.container}>
                <UserCard
                  userInfo={user.userInfo}
                  userProfilePic={user.profilePic}
                  userSocialLinks={user.socialLinks}
                />

                <UserPostsContainer posts={user.posts} {...user.userInfo} />
              </div>
            )}
          </Container>
        </div>
      </SecondaryBackground>
    </Layout>
  );
}
