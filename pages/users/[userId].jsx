import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

// styles
import styles from "../../styles/profile.module.scss";

// redux
import { getUser } from "../../redux/actions/userActions";

// components
import Layout from "../../components/common/layout/Layout";
import { Container } from "../../components/common/containers/Container";
import { SecondaryBackground } from "../../components/common/others/SecondaryBackground";
import UserCard from "../../components/common/cards/user_card/UserCard";
import Spinner from "../../components/common/loaders/Spinner";
import UserPostsContainer from "../../components/users/UserPostsContainer";
import PageMetaData from "../../components/common/others/PageMetaData";
import { clearSingleUser } from "../../redux/reducers/singleUserSlice";

export default function UserPage({ userId }) {
  const { isUserLoaded, user } = useSelector((state) => state.singleUser);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser(userId));

    return () => dispatch(clearSingleUser());
  }, []);

  return (
    <Layout navbarWithBoxShadow>
      <PageMetaData title={"Sadaqa صدقة"} />

      <SecondaryBackground>
        <Container style={{ paddingTop: 80, maxWidth: 1100 }}>
          {!isUserLoaded ? (
            <div style={{ height: "70vh", width: "100%" }}>
              <Spinner style={{ fontSize: 12, top: "20vh", color: "#000" }} />
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
      </SecondaryBackground>
    </Layout>
  );
}

export async function getStaticPaths() {
  const {
    data: { data: usersIds },
  } = await axios.get("/users/getUsersIds");
  const paths = usersIds.map((userId) => {
    return {
      params: { userId: userId.user_id.toString() },
    };
  });

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params: { userId } }) {
  return { props: { userId } };
}
