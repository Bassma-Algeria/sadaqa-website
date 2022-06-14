import React from 'react';
import Head from 'next/head';

const PageMetaData = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
    </Head>
  );
};

export default PageMetaData;
