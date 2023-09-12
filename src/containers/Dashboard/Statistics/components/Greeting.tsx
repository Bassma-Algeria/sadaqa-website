import React from 'react';

import styles from '../Statistics.module.scss';
import { Text } from '../../../../components/Text/Text';

interface Props {}

const Greeting: React.FC<Props> = () => {
    return (
        <div className="px-4 pb-3 lg:mb-2 lg:px-0">
            <Text variant="h4" breackPoints={{ md: 'h3' }} weight="semi-bold">
                Hi Yasser !!
            </Text>
        </div>
    );
};

export { Greeting };
