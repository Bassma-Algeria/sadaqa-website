import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { Chat } from '../../containers/Dashboard/Chat/Chat';

export default function ChatPage() {
    return <Chat />;
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
    const locales = await serverSideTranslations(locale!, ['common', 'chat']);

    return {
        props: {
            ...locales,
        },
    };
};
