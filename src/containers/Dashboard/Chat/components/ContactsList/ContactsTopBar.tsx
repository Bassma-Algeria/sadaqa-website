import React from 'react';

import styles from '../../Chat.module.scss';
import { LocalIcons } from '../../../../../utils/constants/LocalIcons';
import { useTranslation } from '../../../../../utils/hooks/useTranslation';

interface Props {}

const ContactsTopBar: React.FC<Props> = () => {
    const { t } = useTranslation('chat');

    return (
        <div className={styles.topBar}>
            <div className={styles.chatIconAndText}>
                <div className={styles.chatIcon}>
                    <LocalIcons.CHAT />
                </div>

                <h1>{t('chat')}</h1>
            </div>

            <div className={styles.searchIcon}>
                <LocalIcons.SEARCH />
            </div>
        </div>
    );
};

export { ContactsTopBar };
