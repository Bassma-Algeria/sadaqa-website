import React from 'react';

import styles from '../../Chat.module.scss';
import { LocalIcons } from '../../../../../utils/constants/LocalIcons';
import { useTranslation } from '../../../../../utils/hooks/useTranslation';

interface Props {}

const ConversationInput: React.FC<Props> = () => {
    const { t } = useTranslation('chat');

    return (
        <div className={styles.conversationInputContainer}>
            <div className={styles.conversationInput}>
                <input placeholder={t('type-something')!} />

                <div className={styles.sendIconContainer}>
                    <LocalIcons.SEND />
                </div>
            </div>
        </div>
    );
};

export { ConversationInput };
