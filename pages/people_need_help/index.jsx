import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

// redux
import { clearPosts } from "../../redux/reducers/postsSlice";

// helpers
import { POST_TYPES } from "../../utils/constants";

// componenets
import { Container } from "../../components/common/containers/Container";
import { Header } from "../../components/common/others/Headers";
import Layout from "../../components/common/layout/Layout";
import PeopleNeedHelpSubType from "../../components/people_need_help/PeopleNeedHelpSubType";
import { SecondaryBackground } from "../../components/common/others/SecondaryBackground";
import Tags from "../../components/common/others/Tags";
import PageMetaData from "../../components/common/others/PageMetaData";
import Hr from "../../components/posts/Hr";
import Margin from "../../components/posts/Margin";

export default function PeopleNeedHelp() {
  const dispatch = useDispatch();

  useEffect(() => {
    return () => dispatch(clearPosts());
  }, []);

  return (
    <Layout navbarWithBoxShadow withSidebar>
      <PageMetaData title={"Sadaqa صدقة | People Need Help"} />

      <SecondaryBackground>
        <Margin>
          <Container>
            <Tags />
            <Header>Give Help To Others</Header>

            <Hr />

            {POST_TYPES.map(
              (type, index) =>
                index > 0 &&
                type !== "donation" && (
                  <PeopleNeedHelpSubType numOfPostsToShow={4} subType={type} />
                )
            )}
          </Container>
        </Margin>
      </SecondaryBackground>
    </Layout>
  );
}
