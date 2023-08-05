import React from 'react';
import { useRouter } from 'next/router';
import classNames from 'classnames/bind';

import styles from '../../Chat.module.scss';

import { Avatar } from '../../../../../components/Images/Avatar/Avatar';
import { useRTLDetector } from '../../../../../utils/hooks/useRTLDetector';
import { ProfilePictureAvatar } from '../ProfilePictureAvatar';

const cx = classNames.bind(styles);

interface Props {
    selected?: boolean;
    online?: boolean;
    haveUnreadMessage?: boolean;
}

const ContactItem: React.FC<Props> = props => {
    const router = useRouter();
    const isRTL = useRTLDetector();

    return (
        <div
            className={cx('contactItem', {
                selected: props.selected,
                online: props.online,
                haveUnreadMessage: props.haveUnreadMessage,
                isRTL,
            })}
            onClick={() => router.push({ query: { with: 'test' } })}
        >
            <ProfilePictureAvatar online={props.online} />

            <div className={styles.contactItemContent}>
                <p>Contact Name</p>

                <div className={styles.latestMessage}>
                    <p>See you</p>

                    <p className={styles.pointSeparator}>.</p>

                    <p>2d ago</p>
                </div>
            </div>
        </div>
    );
};

export { ContactItem };
