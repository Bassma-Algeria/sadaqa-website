import React from 'react';
import classNames from 'classnames/bind';

import styles from '../Chat.module.scss';

import { Avatar } from '../../../../components/Images/Avatar/Avatar';

const cx = classNames.bind(styles);

interface Props {
    online?: boolean;
    size?: number;
}

const ProfilePictureAvatar: React.FC<Props> = props => {
    return (
        <Avatar
            alt="profile pic"
            containerClassName={cx('profilePicAvatar', { online: props.online })}
            src={
                'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
            }
            size={props.size}
        />
    );
};

export { ProfilePictureAvatar };
