import type { GetStaticProps, NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { Home as HomePage } from '../containers/Home/Home';

const Home: NextPage = () => {
  return <HomePage />;
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  if (!locale) return { props: {} };

  const translation = await serverSideTranslations(locale, ['common', 'home']);

  return { props: { ...translation } };
};

export default Home;
