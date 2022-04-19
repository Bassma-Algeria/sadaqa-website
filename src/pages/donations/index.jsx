import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

// redux
import { clearPosts } from "../../redux/reducers/postsSlice";

// helpers
import { donationsCategories } from "../../data/navbarData";

// componenets
import { Container } from "../../components/common/containers/Container";
import { Header } from "../../components/common/others/Headers";
import Layout from "../../components/common/layout/Layout";
import { SecondaryBackground } from "../../components/common/others/SecondaryBackground";
import Tags from "../../components/common/others/Tags";
import DonationsSubType from "../../components/donations/DonationsSubType";
import PageMetaData from "../../components/common/others/PageMetaData";
import Hr from "../../components/posts/Hr";
import Margin from "../../components/posts/Margin";

export default function Donations() {
  const dispatch = useDispatch();

  useEffect(() => {
    return () => dispatch(clearPosts());
  }, []);

  return (
    <Layout navbarWithBoxShadow withSidebar>
      <PageMetaData title={"Sadaqa صدقة | Donations"} />

      <SecondaryBackground>
        <Margin>
          <Container>
            <Tags />
            <Header>Donations</Header>

            <Hr />

            {donationsCategories.map((category, index) => {
              return (
                <DonationsSubType
                  subType={category.title}
                  key={index}
                  numOfPostsToShow={6}
                />
              );
            })}
          </Container>
        </Margin>
      </SecondaryBackground>
    </Layout>
  );
}
