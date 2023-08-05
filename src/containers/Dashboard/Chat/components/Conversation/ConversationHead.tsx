import React from 'react';
import { useRouter } from 'next/router';
import classNames from 'classnames/bind';

import styles from '../../Chat.module.scss';

import { LocalIcons } from '../../../../../utils/constants/LocalIcons';

import { useRTLDetector } from '../../../../../utils/hooks/useRTLDetector';

import { ProfilePictureAvatar } from '../ProfilePictureAvatar';

const cx = classNames.bind(styles);

interface Props {}

const ConversationHead: React.FC<Props> = () => {
    const router = useRouter();

    const isRTL = useRTLDetector();

    return (
        <div className={cx('conversationHead', { isRTL })}>
            <div className={styles.returnIcon} onClick={() => router.back()}>
                <LocalIcons.LEFT_ARROW />
            </div>

            <ProfilePictureAvatar size={45} />

            <div>
                <h3>Sarra Bendahou</h3>
                <p>active now</p>
            </div>
        </div>
    );
};

export { ConversationHead };
