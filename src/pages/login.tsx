import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { Login } from '../framework/nextjs/containers/Login/Login';

export default function LoginPage() {
    return <Login />;
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
    const locales = await serverSideTranslations(locale!, ['common', 'login']);

    return {
        props: {
            ...locales,
        },
    };
};
