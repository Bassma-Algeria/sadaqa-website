import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { Home } from '../containers/Home/Home';

export default function HomePage() {
    return <Home />;
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
    const locales = await serverSideTranslations(locale!, ['common', 'home']);

    return {
        props: {
            ...locales,
        },
    };
};
