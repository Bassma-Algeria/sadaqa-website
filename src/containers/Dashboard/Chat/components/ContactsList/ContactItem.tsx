import React from 'react';
import { useRouter } from 'next/router';
import classNames from 'classnames/bind';

import styles from '../../Chat.module.scss';

import { Avatar } from '../../../../../components/Images/Avatar/Avatar';
import { useRTLDetector } from '../../../../../utils/hooks/useRTLDetector';

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
            <Avatar
                alt="profile pic"
                containerClassName={styles.avatar}
                src={
                    'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
                }
            />

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
