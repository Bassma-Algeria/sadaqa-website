import React from "react";
import Head from "next/head";

// images
import logo from "../../../public/images/sadaqa-logo-favicon.png";

const PageMetaData = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <link rel="icon" href={logo.src} />
    </Head>
  );
};

export default PageMetaData;
