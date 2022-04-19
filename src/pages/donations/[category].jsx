import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

// redux
import { clearPosts } from "../../redux/reducers/postsSlice";

// helpers
import { donationsCategories } from "../../data/navbarData";
import { linkFormatToTextFormat } from "../../utils/postsHelpers";

// components
import { Container } from "../../components/common/containers/Container";
import { Header } from "../../components/common/others/Headers";
import Layout from "../../components/common/layout/Layout";
import { SecondaryBackground } from "../../components/common/others/SecondaryBackground";
import Tags from "../../components/common/others/Tags";
import PageMetaData from "../../components/common/others/PageMetaData";
import Ads from "../../components/donations/Ads";
import Hr from "../../components/posts/Hr";
import Margin from "../../components/posts/Margin";

export default function PeopleNeedHelp({ params: { category } }) {
  const dispatch = useDispatch();

  useEffect(() => {
    return () => dispatch(clearPosts());
  }, []);

  return (
    <Layout navbarWithBoxShadow withSidebar>
      <PageMetaData title={"Sadaqa صدقة | Donations"} />

      <SecondaryBackground>
        <Margin>
          <Container style={{ minHeight: "85vh" }}>
            <Tags type={category} />
            <Header>{linkFormatToTextFormat(category)}</Header>

            <Hr />
            <Ads category={category} />
          </Container>
        </Margin>
      </SecondaryBackground>
    </Layout>
  );
}

export function getStaticPaths() {
  const paths = donationsCategories.map((element) => {
    const category =
      element.pageLink.split("/")[element.pageLink.split("/").length - 1];
    return {
      params: { category },
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
