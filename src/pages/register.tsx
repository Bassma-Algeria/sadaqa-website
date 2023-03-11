import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { Register } from '../containers/Register/Register';

export default function RegisterPage() {
    return <Register />;
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
    const locales = await serverSideTranslations(locale!, ['common', 'register']);

    return {
        props: {
            ...locales,
        },
    };
};
