import React from 'react';

import { LocalIcons } from '../../../../utils/constants/LocalIcons';
import { Text } from '../../../../components/Text/Text';
import { useTranslation } from '../../../../utils/hooks/useTranslation';
import { Button } from '../../../../components/Buttons/Button/Button';

interface Props {}

const EmptyState: React.FC<Props> = () => {
    const { t } = useTranslation('statistics');

    return (
        <div className="items-cemter flex min-h-[80%] flex-col items-center justify-center rounded-md bg-white py-20 lg:rounded-lg">
            <LocalIcons.HAND_GIVING_HEART />

            <Text variant="p-regular" className="my-4 text-center text-gray6">
                {t('wanna-see-metrics-on-your-posts')} ?
                <br />
                {t('create-new-post-to-get-started')}
            </Text>

            <Button
                variant="primary"
                onClick={() => {}}
                Icon={() => <LocalIcons.WHITE_PEN className="relative bottom-0.5" />}
            >
                {t('create-new-post')}
            </Button>
        </div>
    );
};

export { EmptyState };
