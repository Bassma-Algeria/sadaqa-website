import React from 'react';

import styles from '../Statistics.module.scss';
import { Text } from '../../../../components/Text/Text';

interface Props {}

const Greeting: React.FC<Props> = () => {
    return (
        <div className="p-3">
            <Text variant="h4" breackPoints={{ md: 'h3' }} weight="semi-bold">
                Hi Yasser !!
            </Text>
        </div>
    );
};

export { Greeting };
