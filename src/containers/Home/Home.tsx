import React from 'react';

import { useTranslation } from '../../utils/hooks/useTranslation';

import { Head } from '../../components/Head/Head';

const Home: React.FC = () => {
    const { t } = useTranslation('common');

    return (
        <>
            <Head title={'Sadaqa'} description={'test'} />

            <div>
                <h1>{t('welcome')}</h1>
            </div>
        </>
    );
};

export { Home };
