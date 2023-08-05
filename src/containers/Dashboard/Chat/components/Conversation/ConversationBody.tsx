import React from 'react';

import classNames from 'classnames/bind';
import styles from '../../Chat.module.scss';

import { ProfilePictureAvatar } from '../ProfilePictureAvatar';
import { useTranslation } from '../../../../../utils/hooks/useTranslation';

const cx = classNames.bind(styles);

interface Props {}

const ConversationBody: React.FC<Props> = () => {
    const { t } = useTranslation('chat');

    return (
        <div className={styles.conversationBody}>
            <p className={styles.seen}>{t('seen')}</p>

            <Message received last />
            <Message received />
            <Message />
            <Message received last />
            <Message />

            <Message received last />
            <Message received />
            <Message />
            <Message received last />
            <Message />
            <Message received last />
            <Message received />
            <Message />
            <Message received last />
            <Message />
        </div>
    );
};

interface MessageProps {
    received?: boolean;
    last?: boolean;
}

const Message: React.FC<MessageProps> = props => {
    return (
        <div className={cx('message', { sent: !props.received, received: !!props.received })}>
            <div className={styles.profilePic}>
                {props.last && <ProfilePictureAvatar size={40} />}
            </div>

            <p className={styles.content}>The white jacket I posted 1 hour ago ?</p>

            <p className={styles.time}>18-28 18.40am</p>
        </div>
    );
};

export { ConversationBody };
