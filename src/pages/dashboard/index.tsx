import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { Statistics } from '../../containers/Dashboard/Statistics/Statistics';

export default function StatisticsPage() {
    return <Statistics />;
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
    const locales = await serverSideTranslations(locale!, ['common', 'statistics']);

    return {
        props: {
            ...locales,
        },
    };
};
