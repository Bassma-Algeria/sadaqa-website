import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

// redux
import { clearPosts } from "../../redux/reducers/postsSlice";

// helpers
import { peopleNeedHelpCategories } from "../../data/navbarData";

// components
import { Container } from "../../components/common/containers/Container";
import { Header } from "../../components/common/others/Headers";
import Layout from "../../components/common/layout/Layout";
import { SecondaryBackground } from "../../components/common/others/SecondaryBackground";
import Tags from "../../components/common/others/Tags";
import PageMetaData from "../../components/common/others/PageMetaData";
import { linkFormatToTextFormat } from "../../utils/postsHelpers";
import Ads from "../../components/people_need_help/Ads";
import Margin from "../../components/posts/Margin";
import Hr from "../../components/posts/Hr";

export default function PeopleNeedHelp({ params: { type } }) {
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
            <Tags type={type} />
            <Header>{linkFormatToTextFormat(type)}</Header>

            <Hr />

            <Ads type={type} />
          </Container>
        </Margin>
      </SecondaryBackground>
    </Layout>
  );
}

export function getStaticPaths() {
  const paths = peopleNeedHelpCategories.map((category) => {
    const type =
      category.pageLink.split("/")[category.pageLink.split("/").length - 1];
    return {
      params: { type },
    };
  });
  return {
    paths,
    fallback: false,
  };
}

export function getStaticProps({ params }) {
  return { props: { params } };
}
